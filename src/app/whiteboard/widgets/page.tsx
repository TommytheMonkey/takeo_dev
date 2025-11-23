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
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-[#E9E44C]/20 rounded-2xl p-8 md:p-12 mb-12 overflow-hidden">
          {/* Decorative gradient blob */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#E9E44C]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#E9E44C]/15 text-[#E9E44C] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#E9E44C]/30">
              🚀 Takeo OS
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
              One Platform. Every Tool. Unified Intelligence.
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              These aren't just standalone applications—they're integrated components of Takeo OS, the complete operating system for specialty contractors. From opportunity to invoice, every tool shares data, learns from your company, and works together seamlessly.
            </p>
            
            {/* Action Button */}
            <div className="flex gap-4 flex-wrap">
              <a 
                href="/platform-overview.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E9E44C] text-slate-900 px-7 py-3.5 rounded-lg font-semibold hover:bg-[#f4ea45] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,237,96,0.3)] transition-all duration-200"
              >
                Platform Overview
                <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            Explore Individual Components
          </h2>
          <p className="text-lg text-slate-400">
            Try each tool live and see how they work together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Scope Extractor Widget */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#E9E44C] hover:bg-gray-800 transition-all duration-200 group">
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
              
              {/* Links */}
              <div className="mt-4 text-xs text-gray-300 flex items-center gap-2">
                <a 
                  href="https://scope-extractor-tommy199.replit.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9E44C] transition-colors flex items-center gap-1"
                >
                  <span>Open tool</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span className="text-gray-600">|</span>
                <a 
                  href="/whitepapers/scope-extractor.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9E44C] transition-colors"
                >
                  Whitepaper
                </a>
              </div>
            </div>
          </div>

          {/* Change Order Generator Widget */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#E9E44C] hover:bg-gray-800 transition-all duration-200 group">
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
                Change Order Generator
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm">
                AI-powered change order documentation
              </p>
              
              {/* Links */}
              <div className="mt-4 text-xs text-gray-300 flex items-center gap-2">
                <a 
                  href="https://worksheet-comparison-tommy199.replit.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9E44C] transition-colors flex items-center gap-1"
                >
                  <span>Open tool</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span className="text-gray-600">|</span>
                <a 
                  href="/whitepapers/change-order-generator.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9E44C] transition-colors"
                >
                  Whitepaper
                </a>
              </div>
            </div>
          </div>

          {/* Master Job Registry Widget */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#E9E44C] hover:bg-gray-800 transition-all duration-200 group">
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
              
              {/* Links */}
              <div className="mt-4 text-xs text-gray-300 flex items-center gap-2">
                <a 
                  href="https://takeo-job-registry-tommy199.replit.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9E44C] transition-colors flex items-center gap-1"
                >
                  <span>Open tool</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span className="text-gray-600">|</span>
                <a 
                  href="/whitepapers/master-job-registry.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9E44C] transition-colors"
                >
                  Whitepaper
                </a>
              </div>
            </div>
          </div>

          {/* Contractor Bid Manager Widget */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#E9E44C] hover:bg-gray-800 transition-all duration-200 group">
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
                Contractor Bid Manager
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm">
                AI-powered preconstruction & bid management
              </p>
              
              {/* Links */}
              <div className="mt-4 text-xs text-gray-300 flex items-center gap-2">
                <a 
                  href="https://bid-manager-2-logan14.replit.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9E44C] transition-colors flex items-center gap-1"
                >
                  <span>Open tool</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span className="text-gray-600">|</span>
                <a 
                  href="/whitepapers/contractor-bid-manager.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9E44C] transition-colors"
                >
                  Whitepaper
                </a>
              </div>
            </div>
          </div>

          {/* Catalog Sync Widget */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#E9E44C] hover:bg-gray-800 transition-all duration-200 group">
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                  />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#E9E44C] transition-colors">
                Catalog Sync
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm">
                Synchronize and match catalog items across systems
              </p>
              
              {/* Links */}
              <div className="mt-4 text-xs text-gray-300 flex items-center gap-2">
                <a 
                  href="https://catalog-matcher-tommy199.replit.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9E44C] transition-colors flex items-center gap-1"
                >
                  <span>Open tool</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span className="text-gray-600">|</span>
                <a 
                  href="/whitepapers/catalog-sync.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9E44C] transition-colors"
                >
                  Whitepaper
                </a>
              </div>
            </div>
          </div>

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
