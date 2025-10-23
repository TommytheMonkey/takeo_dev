'use client';

import { useState } from 'react';

interface EmailCaptureProps {
  onClose?: () => void;
}

export default function EmailCapture({ onClose }: EmailCaptureProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email });
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubmitted(false);
      onClose?.();
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg border-2 border-black/10">
      <h3 className="text-2xl font-bold text-center mb-6">Get Updates</h3>
      
      {submitted ? (
        <p className="text-center text-green-600 font-semibold py-8">
          Thanks! We&apos;ll be in touch soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-150"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-150"
              placeholder="your@email.com"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors duration-150"
          >
            Submit
          </button>
          
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="w-full text-gray-600 font-semibold py-2 hover:text-black transition-colors duration-150"
            >
              Cancel
            </button>
          )}
        </form>
      )}
    </div>
  );
}
