'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Controls from './Controls';
import { SLIDES } from './slides';

export default function SlidedeckPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get initial slide from URL param (1-based), default to 1
  const parseSlideParam = () => {
    const param = searchParams.get('s');
    const parsed = parseInt(param || '1', 10);
    // If NaN or out of bounds, default to 1
    if (isNaN(parsed) || parsed < 1 || parsed > SLIDES.length) {
      return 1;
    }
    return parsed;
  };
  
  const initialSlide = parseSlideParam();
  const [index, setIndex] = useState(initialSlide - 1); // Convert to 0-based for internal use
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const hasMoved = useRef(false);

  // Navigation functions
  const next = () => {
    setIndex(i => Math.min(i + 1, SLIDES.length - 1));
  };

  const prev = () => {
    setIndex(i => Math.max(i - 1, 0));
  };

  const close = () => {
    router.push('/whiteboard');
  };

  // Update URL when index changes
  useEffect(() => {
    const slideNum = index + 1; // Convert back to 1-based for URL
    router.replace(`/whiteboard/slidedeck?s=${slideNum}`, { scroll: false });
  }, [index, router]);

  // Preload adjacent slides
  useEffect(() => {
    const preload = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Preload current, next, and previous
    if (SLIDES[index]) preload(SLIDES[index]);
    if (SLIDES[index + 1]) preload(SLIDES[index + 1]);
    if (SLIDES[index - 1]) preload(SLIDES[index - 1]);
  }, [index]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        close();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch/swipe navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchEndX.current = e.touches[0].clientX; // Initialize to prevent false swipes
      hasMoved.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX.current = e.touches[0].clientX;
      hasMoved.current = true;
    };

    const handleTouchEnd = () => {
      // Only process if there was actual movement (not just a tap)
      if (!hasMoved.current) return;
      
      const swipeThreshold = 50;
      const diff = touchStartX.current - touchEndX.current;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swiped left - go to next
          next();
        } else {
          // Swiped right - go to previous
          prev();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Prevent body scroll while viewer is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-40 flex items-center justify-center">
      {/* Main slide image */}
      <img
        src={SLIDES[index]}
        alt={`Slide ${index + 1} of ${SLIDES.length}`}
        className="max-w-full max-h-full object-contain"
      />

      {/* Navigation controls */}
      <Controls
        onPrev={prev}
        onNext={next}
        onClose={close}
        canGoPrev={index > 0}
        canGoNext={index < SLIDES.length - 1}
      />

      {/* Slide counter */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white text-sm opacity-70">
        {index + 1} / {SLIDES.length}
      </div>
    </div>
  );
}
