import { Process, KPI } from '@/lib/types';

interface KPICardsProps {
  kpis: string[] | KPI[];
}

// Categorize KPIs by keywords or category
function categorizeKPI(kpi: string | KPI): { category: string; color: string; name: string; baseline?: number; target?: number; improvement?: string } {
  // Handle enhanced KPI object
  if (typeof kpi === 'object' && 'name' in kpi) {
    const categoryMap: Record<string, string> = {
      'efficiency': 'blue',
      'quality': 'green',
      'revenue': 'purple',
      'customer-satisfaction': 'orange',
      'financial': 'purple',
    };
    const color = categoryMap[kpi.category] || 'gray';
    return {
      category: kpi.category.charAt(0).toUpperCase() + kpi.category.slice(1).replace('-', ' '),
      color,
      name: kpi.name,
      baseline: kpi.baseline,
      target: kpi.target,
      improvement: kpi.improvement,
    };
  }
  
  // Handle string KPI (legacy)
  const lower = (kpi as string).toLowerCase();
  let category = 'Performance';
  let color = 'gray';
  
  if (lower.includes('time') || lower.includes('cycle') || lower.includes('duration')) {
    category = 'Efficiency';
    color = 'blue';
  } else if (lower.includes('rate') || lower.includes('percentage') || lower.includes('%')) {
    category = 'Quality';
    color = 'green';
  } else if (lower.includes('cost') || lower.includes('revenue') || lower.includes('savings')) {
    category = 'Financial';
    color = 'purple';
  } else if (lower.includes('satisfaction') || lower.includes('experience') || lower.includes('csat')) {
    category = 'Customer';
    color = 'orange';
  } else if (lower.includes('accuracy') || lower.includes('error') || lower.includes('quality')) {
    category = 'Quality';
    color = 'green';
  }
  
  return { category, color, name: kpi as string };
}

export default function KPICards({ kpis }: KPICardsProps) {
  const categorizedKPIs = kpis.map(kpi => ({
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
            <p className="mb-2 text-sm font-medium leading-relaxed text-primary-900">{item.name}</p>
            {item.baseline !== undefined && item.target !== undefined && (
              <div className="mt-3 space-y-1">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-primary-600">Baseline:</span>
                  <span className="font-semibold text-primary-900">{item.baseline} {typeof kpis[0] === 'object' && 'unit' in kpis[0] ? (kpis[0] as KPI).unit : ''}</span>
                </div>
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-primary-600">Target:</span>
                  <span className="font-semibold text-accent">{item.target} {typeof kpis[0] === 'object' && 'unit' in kpis[0] ? (kpis[0] as KPI).unit : ''}</span>
                </div>
                {item.improvement && (
                  <div className="mt-2 text-xs font-semibold text-accent">
                    {item.improvement}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
