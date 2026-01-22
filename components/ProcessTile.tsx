import Link from 'next/link';
import { Process } from '@/lib/types';
import ValueThemeBadges from './ValueThemeBadges';

interface ProcessTileProps {
  process: Process;
  industry?: 'telecom' | 'media';
}

export default function ProcessTile({ process, industry = 'telecom' }: ProcessTileProps) {
  return (
    <Link
      href={`/${industry}/${process.id}`}
      className="group block rounded-lg border-2 border-primary-200 bg-white p-6 shadow-sm transition-all hover:border-accent hover:shadow-lg hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-primary-900 group-hover:text-accent transition-colors">
          {process.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-primary-500 uppercase tracking-wider">
          {process.category}
        </p>
      </div>
      <p className="mb-4 line-clamp-2 text-sm text-primary-600 leading-relaxed">
        {process.description}
      </p>
      <div className="flex items-center justify-between">
        <ValueThemeBadges themeIds={process.valueThemes} />
        <svg className="h-5 w-5 text-primary-400 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
