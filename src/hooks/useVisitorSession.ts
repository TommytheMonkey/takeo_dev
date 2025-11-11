import { useState, useEffect } from 'react';

export interface VisitorSession {
  visitorId: string;
  name: string;
  email: string;
  firstVisited: string;
}

export function useVisitorSession() {
  const [session, setSession] = useState<VisitorSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('takeo_visitor');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setSession(parsed);
      } catch (e) {
        console.error('Failed to parse visitor session:', e);
        localStorage.removeItem('takeo_visitor');
      }
    }
    setIsLoading(false);
  }, []);

  const saveSession = (name: string, email: string) => {
    const visitorId = crypto.randomUUID();
    const newSession: VisitorSession = {
      visitorId,
      name,
      email,
      firstVisited: new Date().toISOString(),
    };
    localStorage.setItem('takeo_visitor', JSON.stringify(newSession));
    setSession(newSession);
    return newSession;
  };

  const clearSession = () => {
    localStorage.removeItem('takeo_visitor');
    setSession(null);
  };

  return {
    session,
    isLoading,
    isNewVisitor: !session,
    saveSession,
    clearSession,
  };
}
