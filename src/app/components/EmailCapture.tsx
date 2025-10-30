'use client';

import { useState } from 'react';

interface EmailCaptureProps {
  onClose?: () => void;
}

export default function EmailCapture({ onClose }: EmailCaptureProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, 
          company,
          email,
          dateAdded: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
      setTimeout(() => {
        setName('');
        setCompany('');
        setEmail('');
        setSubmitted(false);
        onClose?.();
      }, 2000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg border-2 border-black/10">
      <h3 className="text-2xl font-bold text-center mb-6 text-black">Get Updates</h3>
      
      {submitted ? (
        <p className="text-center text-green-600 font-semibold py-8">
          Thanks! We&apos;ll be in touch soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-150 text-black placeholder-gray-500"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-semibold mb-2 text-black">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-150 text-black placeholder-gray-500"
              placeholder="Your company"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-150 text-black placeholder-gray-500"
              placeholder="your@email.com"
            />
          </div>
          
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}
          
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
