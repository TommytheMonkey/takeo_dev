'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Slideshow from '../components/Slideshow';
import EmailCapture from '../components/EmailCapture';

export default function WhiteboardPage() {
  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    document.body.classList.add('whiteboard-page');
    return () => {
      document.body.classList.remove('whiteboard-page');
    };
  }, []);

  const handleGetUpdates = () => {
    setShowEmailModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-12 md:py-16">
        <div className="bg-white rounded border-4 border-black/5 p-6 md:p-8 lg:p-12 min-h-[calc(100vh-6rem)]">
          
          <header className="text-center mb-12">
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-3">
              Takeoff Monkey Presents
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Takeo: pre-construction, unjammed
            </h1>
            
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-sm md:text-base">
              <Link 
                href="/whiteboard/slidedeck" 
                className="font-bold text-black hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                See the deck
              </Link>
              <Link 
                href="/whiteboard/story" 
                className="font-bold text-black hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                Our Story
              </Link>
              <Link 
                href="/whiteboard/prospectus" 
                className="font-bold text-black hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                Prospectus
              </Link>
              <Link 
                href="/whiteboard/demo" 
                className="font-bold text-black hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                Demo
              </Link>
              <Link 
                href="/whiteboard/widgets" 
                className="font-bold text-black hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                Widgets
              </Link>
            </nav>
          </header>

          <section className="mb-12">
            <div className="border-2 border-black/10 rounded-lg p-4 md:p-6">
              <Slideshow images={[]} />
            </div>
          </section>

          <div className="text-center mb-16">
            <button
              onClick={handleGetUpdates}
              className="text-xl md:text-2xl font-bold text-black hover:text-[#E9E44C] transition-colors duration-150 cursor-pointer"
            >
              Get Updates
            </button>
          </div>

          <footer className="mt-auto pt-12 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs md:text-sm text-gray-600">
                Footer: © 2025 Takeoff Monkey
              </p>
              <a
                href="https://www.takeoffmonkey.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-black hover:text-[#E9E44C] transition-colors duration-150"
              >
                www.takeoffmonkey.com
              </a>
            </div>
          </footer>
        </div>
      </div>

      {showEmailModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fadeIn"
          onClick={() => setShowEmailModal(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <EmailCapture onClose={() => setShowEmailModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
