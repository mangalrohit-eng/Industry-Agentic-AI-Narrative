'use client';

import { useState, useEffect } from 'react';

export default function FloatingValueThemeLegend() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 flex items-center gap-2 rounded-lg bg-primary-800 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-900 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        aria-label="Open Value Theme Legend"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Value Theme Legend</span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-primary-200 bg-primary-50/50 px-6 py-4">
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-lg font-semibold text-primary-900">Value Theme Legend</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 text-primary-600 transition-colors hover:bg-primary-100 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Close legend"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-accent-200 bg-accent-50"></span>
                <div>
                  <p className="text-sm font-semibold text-primary-900">Purple Badges</p>
                  <p className="mt-1 text-sm text-primary-600">Revenue Growth, Customer Experience, Time to Market, Data-Driven Insights</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-primary-200 bg-primary-50"></span>
                <div>
                  <p className="text-sm font-semibold text-primary-900">Grey Badges</p>
                  <p className="mt-1 text-sm text-primary-600">Cost Optimization, Operational Excellence, Workforce Productivity</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-primary-300 bg-primary-100"></span>
                <div>
                  <p className="text-sm font-semibold text-primary-900">Dark Grey Badges</p>
                  <p className="mt-1 text-sm text-primary-600">Risk Mitigation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
