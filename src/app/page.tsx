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
    <main className="min-h-screen bg-black flex items-center justify-center">
      <button
        onClick={() => setShowPasswordModal(true)}
        className="cursor-pointer transition-opacity hover:opacity-80"
      >
        <Image
          src="/tkm-logo-white.png"
          alt="Takeoff Monkey"
          width={600}
          height={600}
          className="w-64 md:w-96 lg:w-[500px] h-auto"
          priority
        />
      </button>

      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="bg-gray-900 border-2 border-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-extrabold text-white mb-6">Enter Password</h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 bg-black text-white font-extrabold border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                autoFocus
              />
              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-white text-black font-extrabold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPassword('');
                  }}
                  className="flex-1 bg-gray-700 text-white font-extrabold py-3 rounded-lg hover:bg-gray-600 transition-colors"
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
