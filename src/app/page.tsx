'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'bananas') {
      router.push('/whiteboard');
    } else {
      alert('Access Denied.');
      setPassword('');
    }
  };

  return (
    <main className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-96 h-96 opacity-60" viewBox="0 0 200 200">
          <path d="M100,20 Q120,40 140,30 Q160,25 170,40 L165,80 Q155,90 140,85 Q120,80 110,90 L90,85 Q75,80 70,70 L80,40 Q90,25 100,20 Z" fill="#1a4d2e" />
        </svg>

        <svg className="absolute top-10 right-10 w-80 h-80 opacity-50" viewBox="0 0 200 200">
          <path d="M100,30 Q130,50 150,45 Q170,42 180,55 L170,95 Q155,105 140,100 Q120,95 110,105 L95,100 Q80,95 75,85 L85,55 Q95,40 100,30 Z" fill="#2d5f3a" />
        </svg>

        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-70" viewBox="0 0 1000 300">
          <path d="M0,150 Q50,100 100,120 Q150,140 200,110 Q250,80 300,100 Q350,120 400,100 Q450,80 500,110 Q550,140 600,120 Q650,100 700,130 Q750,160 800,140 Q850,120 900,150 Q950,180 1000,160 L1000,300 L0,300 Z" fill="#1a4d2e" />
          <path d="M0,180 Q60,130 120,150 Q180,170 240,140 Q300,110 360,130 Q420,150 480,130 Q540,110 600,140 Q660,170 720,150 Q780,130 840,160 Q900,190 960,170 Q1000,160 1000,180 L1000,300 L0,300 Z" fill="#0f3820" />
        </svg>

        <svg className="absolute bottom-0 right-20 w-96 h-96 opacity-60" viewBox="0 0 200 200">
          <path d="M80,180 L85,150 Q88,130 95,115 Q105,95 120,90 Q135,95 145,115 Q152,130 155,150 L160,180 Q155,185 145,188 Q130,192 120,190 Q105,188 95,185 Q85,182 80,180 Z" fill="#2d5f3a" />
        </svg>

        <svg className="absolute top-1/4 right-1/3 w-72 h-72 opacity-50" viewBox="0 0 200 200">
          <ellipse cx="100" cy="100" rx="60" ry="90" fill="#1a4d2e" transform="rotate(-20 100 100)" />
          <ellipse cx="85" cy="95" rx="50" ry="75" fill="#0f3820" transform="rotate(-20 85 95)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 animate-fadeIn">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-4">
            <svg className="w-20 h-20 md:w-24 md:h-24" viewBox="0 0 100 100" fill="none">
              <path d="M65,25 Q70,20 75,25 Q78,28 76,32 L72,45 Q70,50 65,48 Q60,46 58,50 L55,65 Q53,70 50,72 Q45,75 42,70 L38,55 Q36,50 32,48 Q28,46 26,42 L22,30 Q20,25 23,22 Q28,18 32,22 Q35,25 38,23 L50,18 Q55,16 58,20 L65,25 Z" fill="#E9E44C" />
              <circle cx="70" cy="28" r="2" fill="#000" />
              <path d="M52,70 Q54,78 50,85 L45,88 Q42,86 44,82 L48,75 Q50,72 52,70 Z" fill="#E9E44C" stroke="#E9E44C" strokeWidth="2" />
            </svg>
          </div>
          <div className="font-bold text-[#E9E44C] leading-tight">
            <div className="text-4xl md:text-5xl lg:text-6xl tracking-wider">TAKEOFF</div>
            <div className="text-4xl md:text-5xl lg:text-6xl tracking-wider">MONKEY</div>
          </div>
        </div>

        <div className="hidden md:block w-px h-32 bg-gray-700"></div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Takeo
          </h1>
          <button
            onClick={() => setShowPasswordModal(true)}
            className="text-xl md:text-2xl text-white hover:underline transition-all duration-200 cursor-pointer"
          >
            Enter the Monkey Cage
          </button>
        </div>
      </div>

      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-gray-900 border-2 border-[#E9E44C] rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Enter Password</h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:border-[#E9E44C] transition-colors"
                autoFocus
              />
              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-[#E9E44C] text-black font-semibold py-3 rounded-lg hover:bg-[#d4cf45] transition-colors"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPassword('');
                  }}
                  className="flex-1 bg-gray-700 text-white font-semibold py-3 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
