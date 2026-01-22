export default function ValueThemeLegend() {
  return (
    <div className="mb-6 rounded-lg border border-primary-200 bg-primary-50/30 p-4">
      <div className="mb-3 flex items-center space-x-2">
        <svg className="h-4 w-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-sm font-semibold text-primary-900">Value Theme Legend</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="flex items-start space-x-2">
          <span className="mt-1 h-3 w-3 flex-shrink-0 rounded border border-accent-200 bg-accent-50"></span>
          <div>
            <p className="text-xs font-semibold text-primary-900">Purple Badges</p>
            <p className="text-xs text-primary-600">Revenue Growth, Customer Experience, Time to Market, Data-Driven Insights</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <span className="mt-1 h-3 w-3 flex-shrink-0 rounded border border-primary-200 bg-primary-50"></span>
          <div>
            <p className="text-xs font-semibold text-primary-900">Grey Badges</p>
            <p className="text-xs text-primary-600">Cost Optimization, Operational Excellence, Workforce Productivity</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <span className="mt-1 h-3 w-3 flex-shrink-0 rounded border border-primary-300 bg-primary-100"></span>
          <div>
            <p className="text-xs font-semibold text-primary-900">Dark Grey Badges</p>
            <p className="text-xs text-primary-600">Risk Mitigation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
