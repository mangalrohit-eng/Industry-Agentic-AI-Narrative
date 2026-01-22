import { getAllValueThemes } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ValueThemeBadgesProps {
  themeIds: string[];
  className?: string;
}

export default function ValueThemeBadges({ themeIds, className }: ValueThemeBadgesProps) {
  const allThemes = getAllValueThemes();
  const themes = themeIds
    .map(id => allThemes.find(t => t.id === id))
    .filter(Boolean);

  if (themes.length === 0) return null;

  const colorMap: Record<string, string> = {
    'revenue-growth': 'bg-accent-50 text-accent-900 border-accent-200',
    'cost-optimization': 'bg-primary-50 text-primary-700 border-primary-200',
    'customer-experience': 'bg-accent-50 text-accent-900 border-accent-200',
    'operational-excellence': 'bg-primary-50 text-primary-700 border-primary-200',
    'risk-mitigation': 'bg-primary-100 text-primary-800 border-primary-300',
    'time-to-market': 'bg-accent-50 text-accent-900 border-accent-200',
    'workforce-productivity': 'bg-primary-50 text-primary-700 border-primary-200',
    'data-driven-insights': 'bg-accent-50 text-accent-900 border-accent-200',
  };

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {themes.map((theme) => (
        <span
          key={theme!.id}
          className={cn(
            'inline-flex items-center rounded-md border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider',
            colorMap[theme!.id] || 'bg-primary-50 text-primary-700 border-primary-200'
          )}
        >
          {theme!.name}
        </span>
      ))}
    </div>
  );
}
