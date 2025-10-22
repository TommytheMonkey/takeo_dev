'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
    <main className="relative min-h-screen bg-[#231F20] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-96 h-auto opacity-40" viewBox="0 0 200 300" fill="none">
          <path d="M100,50 Q110,60 115,80 Q120,100 118,120 Q115,140 110,160 Q105,180 95,200 Q85,220 70,240 Q60,250 50,255 L45,250 Q55,245 65,235 Q75,220 82,200 Q88,180 92,160 Q95,140 95,120 Q95,100 92,85 Q88,70 82,60 L100,50 Z" fill="#00391F" />
          <path d="M100,50 Q90,60 85,80 Q80,100 82,120 Q85,140 90,160 Q95,180 105,200 Q115,220 130,240 Q140,250 150,255 L155,250 Q145,245 135,235 Q125,220 118,200 Q112,180 108,160 Q105,140 105,120 Q105,100 108,85 Q112,70 118,60 L100,50 Z" fill="#00391F" />
        </svg>

        <svg className="absolute top-10 right-10 w-80 h-auto opacity-30" viewBox="0 0 200 250" fill="none">
          <ellipse cx="100" cy="125" rx="80" ry="100" fill="#003D1F" transform="rotate(-25 100 125)" />
          <ellipse cx="100" cy="125" rx="60" ry="80" fill="#00391F" transform="rotate(-25 100 125)" />
          <path d="M100,40 L105,120 M100,40 L95,120" stroke="#002D15" strokeWidth="3" />
        </svg>

        <svg className="absolute bottom-0 left-0 w-full h-80 opacity-50" viewBox="0 0 1200 400" fill="none">
          <g>
            <path d="M50,350 Q60,300 80,260 Q100,220 110,180 Q115,150 112,120 Q108,90 100,70 L95,72 Q100,90 103,115 Q105,145 100,175 Q92,215 70,255 Q50,295 40,345 Z" fill="#00391F" />
            <path d="M50,350 Q40,300 30,260 Q20,220 18,180 Q17,150 20,120 Q25,90 35,70 L40,73 Q32,92 28,117 Q25,147 27,177 Q30,217 42,257 Q52,297 58,347 Z" fill="#00391F" />
          </g>
          
          <g transform="translate(150,0)">
            <ellipse cx="80" cy="280" rx="70" ry="110" fill="#003D1F" transform="rotate(-35 80 280)" />
            <ellipse cx="80" cy="280" rx="50" ry="90" fill="#00391F" transform="rotate(-35 80 280)" />
            <path d="M80,180 L85,320" stroke="#002D15" strokeWidth="4" />
          </g>

          <g transform="translate(350,0)">
            <path d="M100,300 Q110,250 120,210 Q130,170 135,130 Q137,100 134,75 Q130,50 120,35 L115,38 Q122,52 125,72 Q127,97 125,127 Q120,167 108,207 Q98,247 88,297 Z" fill="#00391F" />
            <path d="M100,300 Q90,250 80,210 Q70,170 65,130 Q63,100 66,75 Q70,50 80,35 L85,38 Q78,52 75,72 Q73,97 75,127 Q80,167 92,207 Q102,247 112,297 Z" fill="#00391F" />
          </g>

          <g transform="translate(600,0)">
            <ellipse cx="90" cy="260" rx="85" ry="120" fill="#003D1F" transform="rotate(20 90 260)" />
            <ellipse cx="90" cy="260" rx="65" ry="95" fill="#00391F" transform="rotate(20 90 260)" />
            <path d="M90,160 L95,330" stroke="#002D15" strokeWidth="4" />
          </g>

          <g transform="translate(850,0)">
            <path d="M80,320 Q90,270 100,230 Q110,190 115,150 Q117,120 114,95 Q110,70 100,55 L95,58 Q102,72 105,92 Q107,117 105,147 Q100,187 88,227 Q78,267 68,317 Z" fill="#00391F" />
            <path d="M80,320 Q70,270 60,230 Q50,190 45,150 Q43,120 46,95 Q50,70 60,55 L65,58 Q58,72 55,92 Q53,117 55,147 Q60,187 72,227 Q82,267 92,317 Z" fill="#00391F" />
          </g>

          <g transform="translate(1050,0)">
            <ellipse cx="70" cy="285" rx="75" ry="105" fill="#003D1F" transform="rotate(-40 70 285)" />
            <ellipse cx="70" cy="285" rx="55" ry="85" fill="#00391F" transform="rotate(-40 70 285)" />
            <path d="M70,190 L75,335" stroke="#002D15" strokeWidth="4" />
          </g>
        </svg>

        <svg className="absolute top-1/4 right-1/4 w-72 h-auto opacity-35" viewBox="0 0 150 200" fill="none">
          <ellipse cx="75" cy="100" rx="55" ry="85" fill="#003D1F" transform="rotate(15 75 100)" />
          <ellipse cx="75" cy="100" rx="40" ry="65" fill="#00391F" transform="rotate(15 75 100)" />
          <path d="M75,25 L78,160" stroke="#002D15" strokeWidth="3" />
        </svg>

        <svg className="absolute bottom-32 right-20 w-64 h-auto opacity-40" viewBox="0 0 180 220" fill="none">
          <path d="M90,60 Q100,80 105,110 Q110,140 108,170 Q105,190 95,205 L88,200 Q95,188 98,168 Q100,138 96,108 Q92,85 85,70 Z" fill="#00391F" />
          <path d="M90,60 Q80,80 75,110 Q70,140 72,170 Q75,190 85,205 L92,200 Q85,188 82,168 Q80,138 84,108 Q88,85 95,70 Z" fill="#00391F" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 animate-fadeIn">
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <Image
            src="/tkm-logo.png"
            alt="Takeoff Monkey"
            width={300}
            height={300}
            className="w-64 md:w-80 lg:w-96 h-auto"
            priority
          />
        </div>

        <div className="hidden md:block w-px h-48 bg-gray-600"></div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none">
            Takeo
          </h1>
          <button
            onClick={() => setShowPasswordModal(true)}
            className="text-2xl md:text-3xl text-white hover:underline transition-all duration-200 cursor-pointer font-extrabold tracking-wide"
          >
            Enter the Monkey Cage
          </button>
        </div>
      </div>

      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#00391F] border-4 border-[#FSED60] rounded-2xl p-10 max-w-md w-full mx-4 shadow-2xl">
            <h2 className="text-3xl font-extrabold text-white mb-6 tracking-wide">Enter Password</h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-5 py-4 bg-[#231F20] text-white font-extrabold border-2 border-[#FSED60] rounded-lg focus:outline-none focus:border-[#FSED60] focus:ring-2 focus:ring-[#FSED60] transition-all text-lg"
                autoFocus
              />
              <div className="flex gap-4 mt-8">
                <button
                  type="submit"
                  className="flex-1 bg-[#FSED60] text-[#231F20] font-extrabold py-4 rounded-lg hover:bg-[#e6dc55] transition-colors text-lg tracking-wide"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPassword('');
                  }}
                  className="flex-1 bg-gray-700 text-white font-extrabold py-4 rounded-lg hover:bg-gray-600 transition-colors text-lg tracking-wide"
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
