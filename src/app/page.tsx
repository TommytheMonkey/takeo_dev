'use client';

import { useState } from 'react';
import Image from 'next/image';
import AccessModal from './components/AccessModal';

export default function LandingPage() {
  const [showAccessModal, setShowAccessModal] = useState(false);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <button
        onClick={() => setShowAccessModal(true)}
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

      {showAccessModal && <AccessModal />}
    </main>
  );
}
