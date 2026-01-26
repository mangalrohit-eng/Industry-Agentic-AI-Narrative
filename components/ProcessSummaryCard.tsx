import { Process } from '@/lib/types';
import ValueThemeBadges from './ValueThemeBadges';

interface ProcessSummaryCardProps {
  process: Process;
  processNumber?: number;
  totalProcesses?: number;
}

export default function ProcessSummaryCard({ 
  process, 
  processNumber, 
  totalProcesses 
}: ProcessSummaryCardProps) {
  // Extract key metrics from benefits (look for percentage ranges or enhanced data)
  const keyMetrics = process.benefits
    .map(b => {
      // Handle enhanced benefit object
      if (typeof b === 'object' && 'description' in b) {
        const match = b.description.match(/(\d+[-–]\d+)%/);
        if (match) {
          return {
            value: match[1] + '%',
            text: b.description.replace(/\d+[-–]\d+%/, '').trim(),
          };
        }
        return null;
      }
      // Handle string benefit
      const match = (b as string).match(/(\d+[-–]\d+)%/);
      if (match) {
        return {
          value: match[1] + '%',
          text: (b as string).replace(/\d+[-–]\d+%/, '').trim(),
        };
      }
      return null;
    })
    .filter((m): m is { value: string; text: string } => m !== null)
    .slice(0, 3);

  // Calculate automation estimate (agents vs total steps)
  const automationEstimate = Math.round((process.agents.length / (process.agents.length + 2)) * 100);

  return (
    <div className="mb-12 rounded-lg border border-primary-200 bg-white p-8 shadow-sm">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Key Metrics */}
        <div className="space-y-4">
          <div className="mb-2 h-1 w-12 bg-accent"></div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Key Impact
          </h3>
          <div className="space-y-4">
            {keyMetrics.length > 0 ? (
              keyMetrics.map((metric, index) => (
                <div key={index} className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold tracking-tight text-accent">
                    {metric.value}
                  </span>
                  <span className="text-sm leading-relaxed text-primary-600 line-clamp-2">
                    {metric.text}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-base text-primary-600">
                Significant operational improvements
              </div>
            )}
          </div>
        </div>

        {/* Process Stats */}
        <div className="space-y-4">
          <div className="mb-2 h-1 w-12 bg-accent"></div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Automation
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm font-medium text-primary-700">Agents</span>
                <span className="text-2xl font-bold tracking-tight text-accent">
                  {process.agents.length}
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-primary-100">
                <div
                  className="h-full bg-accent transition-all"
                  style={{ width: `${automationEstimate}%` }}
                />
              </div>
              <p className="mt-2 text-xs font-medium text-primary-600">
                {automationEstimate}% automation
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-primary-100 pt-3">
              <span className="text-sm font-medium text-primary-700">Human Approvals</span>
              <span className="text-lg font-bold text-primary-900">
                {process.agents.filter(a => a.humanApproval).length}
              </span>
            </div>
          </div>
        </div>

        {/* Value Themes & Process Info */}
        <div className="space-y-4">
          <div className="mb-2 h-1 w-12 bg-accent"></div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Value Drivers
          </h3>
          <ValueThemeBadges themeIds={process.valueThemes} />
          {processNumber && totalProcesses && (
            <div className="mt-6 pt-6 border-t border-primary-100">
              <p className="text-xs font-medium uppercase tracking-wider text-primary-500">
                Process {processNumber} of {totalProcesses}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
