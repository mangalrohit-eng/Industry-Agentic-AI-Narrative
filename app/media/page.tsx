import Link from 'next/link';
import { getAllProcesses } from '@/lib/data';
import ProcessMap from '@/components/ProcessMap';

export default function MediaPage() {
  const processes = getAllProcesses('media');

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
      <div className="mb-12 sm:mb-16">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-accent transition-colors mb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-md px-2 py-1"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        <div className="mb-4 h-1 w-16 bg-accent"></div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary-900">
          Media Industry Transformation
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-primary-700 max-w-3xl font-medium">
          Media companies face intense competition, fragmented distribution, and rising content costs. Agentic AI transforms content operations, distribution, and monetization—accelerating time-to-market by 60-80% while optimizing revenue and audience engagement.
        </p>
      </div>

      {/* Executive Summary */}
      <div className="mb-12 rounded-lg border-2 border-accent bg-gradient-to-br from-accent-50/50 to-white p-8 sm:p-10 shadow-lg">
        <div className="mb-6">
          <div className="mb-4 h-1 w-16 bg-accent"></div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-900">
            Executive Summary
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary-900">The Opportunity</h3>
            <ul className="space-y-3 text-sm text-primary-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span><strong>60-80%</strong> reduction in time-to-market for content releases through automated distribution</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span><strong>30-50%</strong> revenue growth through optimized ad inventory and audience targeting</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span><strong>40-60%</strong> cost reduction in content production and rights management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span><strong>25-40%</strong> improvement in audience engagement through personalized experiences</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary-900">Key Transformation Themes</h3>
            <ul className="space-y-3 text-sm text-primary-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span><strong>Autonomous content operations:</strong> End-to-end production workflows orchestrated by intelligent agents</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span><strong>Intelligent monetization:</strong> Real-time ad optimization and revenue maximization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span><strong>Predictive audience insights:</strong> Data-driven content decisions and personalization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span><strong>Rights and compliance automation:</strong> Automated content moderation and IP protection</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Process Landscape Header */}
      <div className="mb-8">
        <div className="mb-4 h-1 w-16 bg-accent"></div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-900">
          Process Transformation Landscape
        </h2>
        <p className="mt-4 text-base text-primary-600 max-w-3xl">
          Explore 12 critical processes across four categories. Each process includes detailed transformation blueprints, agent architectures, and proven business cases.
        </p>
      </div>
      <ProcessMap processes={processes} industry="media" />
    </div>
  );
}
