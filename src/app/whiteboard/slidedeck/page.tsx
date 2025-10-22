'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function SlidedeckPage() {
  useEffect(() => {
    document.body.classList.add('whiteboard-page');
    return () => {
      document.body.classList.remove('whiteboard-page');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Slide Deck – Coming Soon
        </h1>
        <Link 
          href="/whiteboard" 
          className="text-lg font-semibold hover:text-[#E9E44C] hover:underline transition-all duration-150"
        >
          ← Back to Whiteboard
        </Link>
      </div>
    </div>
  );
}
