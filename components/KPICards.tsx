import { Process } from '@/lib/types';

interface KPICardsProps {
  kpis: string[];
}

// Categorize KPIs by keywords
function categorizeKPI(kpi: string): { category: string; color: string } {
  const lower = kpi.toLowerCase();
  
  if (lower.includes('time') || lower.includes('cycle') || lower.includes('duration')) {
    return { category: 'Efficiency', color: 'blue' };
  }
  if (lower.includes('rate') || lower.includes('percentage') || lower.includes('%')) {
    return { category: 'Quality', color: 'green' };
  }
  if (lower.includes('cost') || lower.includes('revenue') || lower.includes('savings')) {
    return { category: 'Financial', color: 'purple' };
  }
  if (lower.includes('satisfaction') || lower.includes('experience') || lower.includes('csat')) {
    return { category: 'Customer', color: 'orange' };
  }
  if (lower.includes('accuracy') || lower.includes('error') || lower.includes('quality')) {
    return { category: 'Quality', color: 'green' };
  }
  
  return { category: 'Performance', color: 'gray' };
}

export default function KPICards({ kpis }: KPICardsProps) {
  const categorizedKPIs = kpis.map(kpi => ({
    kpi,
    ...categorizeKPI(kpi),
  }));

  const colorClasses = {
    blue: 'border-blue-200 bg-blue-50/50 text-blue-900',
    green: 'border-green-200 bg-green-50/50 text-green-900',
    purple: 'border-accent-200 bg-accent-50/30 text-accent-900',
    orange: 'border-orange-200 bg-orange-50/50 text-orange-900',
    gray: 'border-primary-200 bg-primary-50/30 text-primary-900',
  };

  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold tracking-tight text-primary-900">KPIs Impacted</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categorizedKPIs.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg border p-5 transition-shadow hover:shadow-sm ${colorClasses[item.color as keyof typeof colorClasses]}`}
          >
            <div className="mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                {item.category}
              </span>
            </div>
            <p className="text-sm font-medium leading-relaxed text-primary-900">{item.kpi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
