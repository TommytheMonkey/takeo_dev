'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useVisitorSession } from '@/hooks/useVisitorSession';

const CORRECT_PASSWORD = '100M';

export default function AccessModal() {
  const router = useRouter();
  const { session, isLoading, isNewVisitor, saveSession } = useVisitorSession();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isLoading) {
    return null; // Don't show modal while checking session
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate password first
    if (password !== CORRECT_PASSWORD) {
      setError('Incorrect password');
      return;
    }

    setIsSubmitting(true);

    try {
      // If new visitor, save to Google Sheets and localStorage
      if (isNewVisitor) {
        if (!name || !email) {
          setError('Name and email are required');
          setIsSubmitting(false);
          return;
        }

        const sessionData = saveSession(name, email);

        // Log visitor access to Google Sheets
        await fetch('/api/log-visit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            visitorId: sessionData.visitorId,
            name,
            email,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
          }),
        });
      }

      // Redirect to whiteboard
      router.push('/whiteboard');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Access error:', err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          {isNewVisitor ? 'Welcome to Takeo' : `Welcome back, ${session?.name}!`}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {isNewVisitor && (
            <>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors text-black"
                  placeholder="Your name"
                  disabled={isSubmitting}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors text-black"
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>
            </>
          )}
          
          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-2 text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors text-black"
              placeholder="Enter password"
              disabled={isSubmitting}
            />
          </div>
          
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Processing...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}
