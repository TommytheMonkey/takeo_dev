'use client';

import { useState, useEffect } from 'react';

export default function TakeoSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      eyebrow: '🚀 Takeo OS',
      headline: '$2.3M ARR. Profitable. Trusted by Industry Leaders.',
      subheadline: 'The first complete operating system built for subcontractors—by people who have lived it.',
      description: "We are not just another software company. We are construction veterans with top-tier tech expertise, 91.98% customer retention, and access to 300k+ subcontractors through distribution partners. We have earned the trust of the industry—and we are just getting started.",
      ctaText: 'See The Platform',
      ctaLink: '/whiteboard/widgets',
      backgroundImage: '/slideshow/slide1.png'
    },
    {
      eyebrow: '💡 Complete System',
      headline: 'One Platform. Every Tool. Zero Switching.',
      subheadline: 'Estimating, sales, admin—streamlined into a single, intelligent system.',
      description: "While competitors offer scattered point solutions, we have built the operating system. AI-powered drawing indexing, catalog sync, job management with Claude AI assistant, seamless integrations—all working together. This is not software. It is infrastructure for an entire industry.",
      ctaText: 'Explore Features',
      ctaLink: '/whiteboard/widgets',
      backgroundImage: '/slideshow/slide2.png'
    },
    {
      eyebrow: '⚡ Unstoppable Advantage',
      headline: 'We Know Subcontractors. Because We Are Subcontractors.',
      subheadline: 'Deep industry expertise meets world-class engineering. That combination is unbeatable.',
      description: "80% of our leads come from referrals. ERW, BrightView, Ruppert, Nova, Oberson's—they trust us because we understand their pain. We talk to customers daily. We have built takeoffs for thousands of projects. Now we are scaling that knowledge into the platform that will define pre-construction for the next decade.",
      ctaText: 'Our Story',
      ctaLink: '/whiteboard/story',
      backgroundImage: '/slideshow/slide3.png'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const changeSlide = (direction: number) => {
    const newIndex = currentSlide + direction;
    if (newIndex >= slides.length) {
      setCurrentSlide(0);
    } else if (newIndex < 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(newIndex);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        changeSlide(-1);
      } else if (e.key === 'ArrowRight') {
        changeSlide(1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
      <div
        className="relative w-full bg-black rounded-[20px] overflow-hidden border border-[#F5ED60]/10"
        style={{ boxShadow: '0 20px 60px rgba(245, 237, 96, 0.2)' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative w-full min-h-[600px] ${
              index === currentSlide ? 'block' : 'hidden'
            }`}
            style={{ animation: index === currentSlide ? 'fadeIn 1s ease-in-out' : 'none' }}
          >
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full z-[1]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  animation: index === currentSlide ? 'kenBurns 8s ease-in-out forwards' : 'none'
                }}
              />
            </div>

            {/* Dark Overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full z-[2]"
              style={{
                background: 'linear-gradient(to right, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 40%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.3) 100%)'
              }}
            />

            {/* Content */}
            <div className="relative z-[3] px-6 md:px-12 py-16 md:py-20 max-w-[750px] flex flex-col justify-center min-h-[600px]">
              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-2 bg-[#F5ED60]/15 text-[#F5ED60] px-4 py-2 rounded-[20px] text-[0.85rem] font-bold mb-6 border border-[#F5ED60]/40 w-fit uppercase tracking-wider"
                style={{
                  animation: index === currentSlide ? 'slideInLeft 0.6s ease-out 0.2s backwards' : 'none'
                }}
              >
                {slide.eyebrow}
              </div>

              {/* Headline */}
              <h2
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] mb-6"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #F5ED60 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: index === currentSlide ? 'slideInLeft 0.6s ease-out 0.4s backwards' : 'none'
                }}
              >
                {slide.headline}
              </h2>

              {/* Subheadline */}
              <p
                className="text-xl md:text-2xl font-semibold text-[#cbd5e1] mb-6 leading-[1.4]"
                style={{
                  animation: index === currentSlide ? 'slideInLeft 0.6s ease-out 0.6s backwards' : 'none'
                }}
              >
                {slide.subheadline}
              </p>

              {/* Description */}
              <p
                className="text-base md:text-lg leading-[1.7] text-[#94a3b8] mb-10"
                style={{
                  animation: index === currentSlide ? 'slideInLeft 0.6s ease-out 0.8s backwards' : 'none'
                }}
              >
                {slide.description}
              </p>

              {/* CTA Button */}
              <a
                href={slide.ctaLink}
                className="inline-flex items-center gap-3 bg-[#F5ED60] text-black px-8 py-4 rounded-[10px] font-bold text-base w-fit transition-all hover:bg-white"
                style={{
                  boxShadow: '0 4px 20px rgba(245, 237, 96, 0.3)',
                  animation: index === currentSlide ? 'slideInLeft 0.6s ease-out 1s backwards' : 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) translateX(5px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(245, 237, 96, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(245, 237, 96, 0.3)';
                }}
              >
                {slide.ctaText}
                <span className="text-xl transition-transform hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Progress Bar */}
            {index === currentSlide && !isPaused && (
              <div
                className="absolute bottom-0 left-0 h-1 bg-[#F5ED60] z-[5]"
                style={{ animation: 'progress 7s linear forwards' }}
              />
            )}
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={() => changeSlide(-1)}
          className="absolute top-1/2 left-5 -translate-y-1/2 z-[4] bg-white/10 border-2 border-white/30 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-[#F5ED60]/20 hover:border-[#F5ED60] hover:scale-110 backdrop-blur-[10px]"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => changeSlide(1)}
          className="absolute top-1/2 right-5 -translate-y-1/2 z-[4] bg-white/10 border-2 border-white/30 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-[#F5ED60]/20 hover:border-[#F5ED60] hover:scale-110 backdrop-blur-[10px]"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[4] flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all cursor-pointer border-2 ${
                index === currentSlide
                  ? 'w-10 bg-[#F5ED60] border-[#F5ED60]/30'
                  : 'w-3 bg-white/30 border-transparent hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

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
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
