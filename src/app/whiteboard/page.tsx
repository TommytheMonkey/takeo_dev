'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Slideshow from '../components/Slideshow';
import EmailCapture from '../components/EmailCapture';

export default function WhiteboardPage() {
  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    document.body.classList.add('whiteboard-page-black');
    
    // Load N8N chat widget
    const loadChatWidget = () => {
      // Load stylesheet
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
      document.head.appendChild(link);

      // Load chat script
      const script = document.createElement('script');
      script.type = 'module';
      script.textContent = `
        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
        
        createChat({
          webhookUrl: 'https://takeoffmonkey.app.n8n.cloud/webhook/chatbotv',
          mode: 'window',
          showWelcomeScreen: true,
          initialMessages: ["Hi! I'm here to help you learn about Takeo. Ask me anything!"],
          loadPreviousSession: true,
          streaming: true,
          i18n: {
            en: {
              title: 'Takeo Assistant',
              subtitle: 'Ask me anything about Takeo',
              footer: '',
              getStarted: 'Start Conversation',
              inputPlaceholder: 'Type your message...',
            }
          }
        });
      `;
      document.body.appendChild(script);
      
      // Add custom styling
      const style = document.createElement('style');
      style.textContent = `
        :root {
          --chat--color-primary: #E9E44C !important;
          --chat--color-primary-shade-50: #F5F1D0 !important;
          --chat--color-primary-shade-100: #F0EBBB !important;
          --chat--color-secondary: #FFFFFF !important;
          --chat--color-secondary-shade-50: #F8F8F8 !important;
          --chat--color-white: #FFFFFF !important;
          --chat--color-light: #F5F5F5 !important;
          --chat--color-light-shade-50: #E0E0E0 !important;
          --chat--color-light-shade-100: #D0D0D0 !important;
          --chat--color-medium: #666666 !important;
          --chat--color-dark: #000000 !important;
          --chat--color-disabled: #999999 !important;
          --chat--color-typing: #E9E44C !important;
          
          --chat--spacing: 1rem !important;
          --chat--border-radius: 0.5rem !important;
          --chat--transition-time: 0.15s !important;
          
          --chat--window--width: 400px !important;
          --chat--window--height: 600px !important;
          
          --chat--header--height: 60px !important;
          --chat--header--padding: 1rem !important;
          --chat--header--background: #000000 !important;
          --chat--header--color: #FFFFFF !important;
          
          --chat--message--font-size: 0.875rem !important;
          --chat--message--padding: 0.75rem !important;
          --chat--message--bot--background: #FFFFFF !important;
          --chat--message--bot--color: #000000 !important;
          --chat--message--bot--border: none !important;
          --chat--message--user--background: #E9E44C !important;
          --chat--message--user--color: #000000 !important;
          --chat--message--user--border: none !important;
          
          --chat--input--background: #FFFFFF !important;
          --chat--input--color: #000000 !important;
          --chat--textarea--height: 50px !important;
        }
        
        .chat-window-header {
          font-weight: 800 !important;
        }
      `;
      document.head.appendChild(style);
    };

    loadChatWidget();
    
    return () => {
      document.body.classList.remove('whiteboard-page-black');
    };
  }, []);

  const handleGetUpdates = () => {
    setShowEmailModal(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Logo */}
      <div className="w-full bg-black pt-12 pb-8 md:pt-16 md:pb-12">
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/tkm-logo-white.png" 
            alt="Takeoff Monkey" 
            className="h-32 md:h-40 lg:h-48 w-auto"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="px-6 py-8 md:px-12 md:py-12">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
              Takeo: pre-construction, unjammed
            </h1>
            
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-sm md:text-base">
              <a 
                href="/TOM_Deck_2025_10_30.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                See the deck
              </a>
              <Link 
                href="/whiteboard/story" 
                className="font-bold text-white hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                Our Story
              </Link>
              <a 
                href="/Takeo_Whitepaper_2025_v2.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                Whitepaper
              </a>
              <a 
                href="https://bid-manager-2-logan14.replit.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                Demo
              </a>
              <Link 
                href="/whiteboard/widgets" 
                className="font-bold text-white hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                Widgets
              </Link>
            </nav>
          </header>

          <section className="mb-12">
            <div className="border-2 border-white/20 rounded-lg p-4 md:p-6">
              <Slideshow images={[
                '/demo/demo-1.png',
                '/demo/demo-2.png',
                '/demo/demo-3.png',
                '/demo/demo-4.png'
              ]} />
            </div>
          </section>

          <div className="text-center mb-16">
            <button
              onClick={handleGetUpdates}
              className="text-xl md:text-2xl font-bold text-white hover:text-[#E9E44C] transition-colors duration-150 cursor-pointer"
            >
              Get Updates
            </button>
          </div>

          <footer className="mt-auto pt-12 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs md:text-sm text-white/70">
                © 2025 Takeoff Monkey
              </p>
              <a
                href="https://www.takeoffmonkey.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-[#E9E44C] transition-colors duration-150"
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
