'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    eyebrow: '⚡ Drawing Indexer',
    headline: 'Index 100+ Sheets in Minutes, Not Days',
    subheadline: 'Stop wasting hours on manual takeoffs. Let AI do the heavy lifting.',
    description: 'Upload construction drawings and automatically generate detailed indexes with scope summaries, density analysis, and estimated takeoff times. What used to take a full day now takes 3 minutes.',
    cta: 'Try It Now',
    image: '/demo/demo-1.png'
  },
  {
    eyebrow: '🎯 Catalog Sync',
    headline: 'Match 10,000 Items Instantly with AI',
    subheadline: 'Never manually match materials again. Intelligence that learns your products.',
    description: 'Upload your product catalog and material lists. Our AI instantly matches items with unprecedented accuracy, learning your preferences and catching discrepancies you\'d miss manually.',
    cta: 'See It In Action',
    image: '/demo/demo-2.png'
  },
  {
    eyebrow: '🚀 Jobs Master',
    headline: '30,000+ Jobs. One Intelligent System.',
    subheadline: 'Your entire job history at your fingertips. AI that actually understands your business.',
    description: 'Track every project from bid to completion. Search through years of work history instantly. Get AI-powered insights that help you bid smarter and win more profitable work.',
    cta: 'Explore Features',
    image: '/demo/demo-3.png'
  }
];

export default function TakeoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div 
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl min-h-[600px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        {currentSlide.image && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url(${currentSlide.image})`,
              animation: 'kenBurns 8s ease-in-out forwards'
            }}
          />
        )}
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/40" />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 max-w-3xl h-full min-h-[600px] flex flex-col justify-center">
        {/* Eyebrow */}
        <div 
          className="inline-flex items-center gap-2 bg-[#E9E44C]/15 text-[#E9E44C] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#E9E44C]/40 w-fit uppercase tracking-wide"
          style={{ animation: 'slideInLeft 0.6s ease-out 0.2s backwards' }}
        >
          {currentSlide.eyebrow}
        </div>

        {/* Headline */}
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 bg-gradient-to-br from-white to-[#E9E44C] bg-clip-text text-transparent"
          style={{ animation: 'slideInLeft 0.6s ease-out 0.4s backwards' }}
        >
          {currentSlide.headline}
        </h2>

        {/* Subheadline */}
        <p 
          className="text-xl md:text-2xl font-semibold text-slate-300 mb-6 leading-snug"
          style={{ animation: 'slideInLeft 0.6s ease-out 0.6s backwards' }}
        >
          {currentSlide.subheadline}
        </p>

        {/* Description */}
        <p 
          className="text-lg text-slate-400 mb-10 leading-relaxed"
          style={{ animation: 'slideInLeft 0.6s ease-out 0.8s backwards' }}
        >
          {currentSlide.description}
        </p>

        {/* CTA Button */}
        <a
          href="/whiteboard/widgets"
          className="inline-flex items-center gap-3 bg-[#E9E44C] text-black px-8 py-4 rounded-xl font-bold text-lg w-fit hover:bg-white hover:translate-y-[-3px] hover:translate-x-[5px] hover:shadow-[0_8px_30px_rgba(245,237,96,0.5)] transition-all duration-300"
          style={{ animation: 'slideInLeft 0.6s ease-out 1s backwards' }}
        >
          {currentSlide.cta}
          <span className="text-xl transition-transform duration-300 hover:translate-x-1">→</span>
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#E9E44C]/20 hover:border-[#E9E44C] hover:scale-110 transition-all duration-300"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#E9E44C]/20 hover:border-[#E9E44C] hover:scale-110 transition-all duration-300"
        aria-label="Next slide"
      >
        →
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 border-2 ${
              index === currentIndex
                ? 'w-10 bg-[#E9E44C] border-[#E9E44C]/30'
                : 'w-3 bg-white/30 border-transparent hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {!isPaused && (
        <div className="absolute bottom-0 left-0 h-1 bg-[#E9E44C] z-30 animate-progress" />
      )}

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes kenBurns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .animate-progress {
          animation: progress 6s linear forwards;
        }
      `}</style>
    </div>
  );
}
