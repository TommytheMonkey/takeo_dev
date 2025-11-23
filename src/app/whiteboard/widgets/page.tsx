'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function WidgetsPage() {
  useEffect(() => {
    document.body.classList.add('whiteboard-page');
    return () => {
      document.body.classList.remove('whiteboard-page');
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Demo
          </h1>
          <p className="text-lg text-gray-400">
            Live demos and tools for construction professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Scope Extractor Widget */}
          <a 
            href="https://scope-extractor-tommy199.replit.app" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#E9E44C] hover:bg-gray-800 transition-all duration-200 group"
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#E9E44C] rounded-lg group-hover:scale-110 transition-transform duration-200">
                <svg 
                  className="w-8 h-8 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#E9E44C] transition-colors">
                Scope Extractor
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm">
                Extract and analyze project scopes from documents
              </p>
              
              {/* External link indicator */}
              <div className="mt-4 text-xs text-gray-300 flex items-center gap-1">
                <span>Open tool</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </a>

          {/* Worksheet Comparison Tool Widget */}
          <a 
            href="https://worksheet-comparison-tommy199.replit.app" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#E9E44C] hover:bg-gray-800 transition-all duration-200 group"
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#E9E44C] rounded-lg group-hover:scale-110 transition-transform duration-200">
                <svg 
                  className="w-8 h-8 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" 
                  />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#E9E44C] transition-colors">
                Worksheet Comparison Tool
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm">
                Compare and analyze worksheets side by side
              </p>
              
              {/* External link indicator */}
              <div className="mt-4 text-xs text-gray-300 flex items-center gap-1">
                <span>Open tool</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </a>

          {/* Master Job Registry Widget */}
          <a 
            href="https://takeo-job-registry-tommy199.replit.app" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#E9E44C] hover:bg-gray-800 transition-all duration-200 group"
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#E9E44C] rounded-lg group-hover:scale-110 transition-transform duration-200">
                <svg 
                  className="w-8 h-8 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" 
                  />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#E9E44C] transition-colors">
                Master Job Registry
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm">
                Centralized registry for all construction jobs
              </p>
              
              {/* External link indicator */}
              <div className="mt-4 text-xs text-gray-300 flex items-center gap-1">
                <span>Open tool</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </a>

          {/* Contractor Bid Box Widget */}
          <a 
            href="https://bid-manager-2-logan14.replit.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#E9E44C] hover:bg-gray-800 transition-all duration-200 group"
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#E9E44C] rounded-lg group-hover:scale-110 transition-transform duration-200">
                <svg 
                  className="w-8 h-8 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z M20 7l-5-5v5h5z" 
                  />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#E9E44C] transition-colors">
                Contractor Bid Box
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm">
                Manage and track contractor bids efficiently
              </p>
              
              {/* External link indicator */}
              <div className="mt-4 text-xs text-gray-300 flex items-center gap-1">
                <span>Open tool</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </a>

          {/* Placeholder for future widgets */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-800 rounded-lg">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-400">
                More Coming Soon
              </h3>
              <p className="text-gray-400 text-sm">
                Additional demos in development
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/whiteboard" 
            className="text-lg font-semibold hover:text-[#E9E44C] transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Whiteboard
          </Link>
        </div>
      </div>
    </div>
  );
}
