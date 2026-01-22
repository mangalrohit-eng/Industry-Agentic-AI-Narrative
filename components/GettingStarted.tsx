import { Process } from '@/lib/types';

interface GettingStartedProps {
  process: Process;
}

export default function GettingStarted({ process }: GettingStartedProps) {
  return (
    <div className="rounded-lg border-2 border-accent bg-gradient-to-br from-accent-50/30 to-white p-8 shadow-lg">
      <div className="mb-6">
        <div className="mb-2 h-1 w-12 bg-accent"></div>
        <h2 className="text-2xl font-semibold tracking-tight text-primary-900">
          Getting Started: Your Transformation Roadmap
        </h2>
        <p className="mt-2 text-base text-primary-600">
          A tactical approach to implementing agentic AI for {process.name}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Phase 1 */}
        <div className="rounded-lg border border-primary-200 bg-white p-6">
          <div className="mb-4 flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              1
            </div>
            <h3 className="text-lg font-semibold text-primary-900">Assess & Prioritize</h3>
          </div>
          <ul className="space-y-2 text-sm text-primary-700">
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>Map current process flows and pain points</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>Identify high-impact, low-complexity starting points</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>Assess system readiness and integration requirements</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>Define success metrics and ROI targets</span>
            </li>
          </ul>
        </div>

        {/* Phase 2 */}
        <div className="rounded-lg border border-primary-200 bg-white p-6">
          <div className="mb-4 flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              2
            </div>
            <h3 className="text-lg font-semibold text-primary-900">Design & Build</h3>
          </div>
          <ul className="space-y-2 text-sm text-primary-700">
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>Design agent architecture and orchestration patterns</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>Establish human approval checkpoints and guardrails</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>Integrate with existing systems and data sources</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>Build monitoring, logging, and audit capabilities</span>
            </li>
          </ul>
        </div>

        {/* Phase 3 */}
        <div className="rounded-lg border border-primary-200 bg-white p-6">
          <div className="mb-4 flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              3
            </div>
            <h3 className="text-lg font-semibold text-primary-900">Deploy & Scale</h3>
          </div>
          <ul className="space-y-2 text-sm text-primary-700">
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>Pilot with limited scope and measure results</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>Iterate based on feedback and performance data</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>Scale to full process coverage</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>Expand to adjacent processes and use cases</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-accent-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold text-primary-900">Implementation Considerations</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600">Technical</h4>
            <ul className="space-y-1 text-sm text-primary-700">
              <li>• System integration complexity: {process.fourW.digitalCore.length} systems</li>
              <li>• Agent orchestration platform requirements</li>
              <li>• Data quality and availability</li>
              <li>• Security and compliance frameworks</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600">Organizational</h4>
            <ul className="space-y-1 text-sm text-primary-700">
              <li>• Change management and workforce training</li>
              <li>• Process ownership and governance</li>
              <li>• Performance monitoring and optimization</li>
              <li>• Continuous improvement and iteration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
