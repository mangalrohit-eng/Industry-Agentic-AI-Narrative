import Link from 'next/link';
import { Process } from '@/lib/types';

interface StickyBottomNavProps {
  process: Process;
  prevId: string | null;
  nextId: string | null;
  processNumber?: number;
  totalProcesses?: number;
  industry?: 'telecom' | 'media';
}

export default function StickyBottomNav({
  process,
  prevId,
  nextId,
  processNumber,
  totalProcesses,
  industry = 'telecom',
}: StickyBottomNavProps) {
  return (
    <nav className="sticky bottom-0 z-30 border-t border-primary-200 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {prevId ? (
              <Link
                href={`/${industry}/${prevId}`}
                className="flex items-center space-x-2 rounded-md border border-primary-300 bg-white px-3 sm:px-4 py-2 text-sm font-medium text-primary-700 shadow-sm transition-all hover:bg-primary-50 hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Previous</span>
              </Link>
            ) : (
              <div className="flex items-center space-x-2 rounded-md border border-primary-200 bg-primary-50 px-3 sm:px-4 py-2 text-sm font-medium text-primary-400 cursor-not-allowed">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Previous</span>
              </div>
            )}
            
            <Link
              href={`/${industry}`}
              className="rounded-md border border-primary-300 bg-white px-3 sm:px-4 py-2 text-sm font-medium text-primary-700 shadow-sm transition-all hover:bg-primary-50 hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              All Processes
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {processNumber && totalProcesses && (
              <div className="hidden text-xs sm:text-sm text-primary-500 sm:block">
                <span className="font-semibold text-primary-900">{processNumber}</span>
                {' / '}
                <span>{totalProcesses}</span>
              </div>
            )}
            
            {nextId ? (
              <Link
                href={`/${industry}/${nextId}`}
                className="flex items-center space-x-2 rounded-md border border-accent bg-accent px-3 sm:px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-400 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span>Next</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ) : (
              <div className="flex items-center space-x-2 rounded-md border border-primary-200 bg-primary-50 px-3 sm:px-4 py-2 text-sm font-medium text-primary-400 cursor-not-allowed">
                <span>Next</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
