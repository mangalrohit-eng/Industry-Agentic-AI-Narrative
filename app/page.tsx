import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
      {/* Hero Section with Strong POV */}
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="h-1 w-20 bg-accent"></div>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
          Agentic AI: The Next Wave of Enterprise Transformation
        </h1>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-primary-700 max-w-3xl mx-auto font-medium">
          Move beyond automation. Agentic AI orchestrates intelligent agents that work autonomously, make decisions, and collaborate—transforming how enterprises operate, compete, and create value.
        </p>
      </div>

      {/* Why Now Section */}
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="rounded-lg border-2 border-accent bg-gradient-to-br from-accent-50/50 to-white p-8 sm:p-10 shadow-lg">
          <div className="mb-6">
            <div className="mb-4 flex justify-center">
              <div className="h-1 w-16 bg-accent"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-900 text-center">
              Why Agentic AI Now?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-3 text-4xl font-bold text-accent">70%</div>
              <p className="text-sm font-medium text-primary-700">
                of enterprises report that traditional automation reaches its limits with complex, multi-step processes
              </p>
            </div>
            <div className="text-center">
              <div className="mb-3 text-4xl font-bold text-accent">$4.4T</div>
              <p className="text-sm font-medium text-primary-700">
                potential annual value from AI adoption across industries—with agentic AI unlocking the most complex use cases
              </p>
            </div>
            <div className="text-center">
              <div className="mb-3 text-4xl font-bold text-accent">3-5x</div>
              <p className="text-sm font-medium text-primary-700">
                productivity gains when agents orchestrate workflows vs. point solutions working in isolation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transformation Framework */}
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="h-1 w-16 bg-accent"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-900">
            The 4W Transformation Framework
          </h2>
          <p className="mt-4 text-base text-primary-600 max-w-2xl mx-auto">
            Agentic AI transforms enterprises across four dimensions—each critical for sustainable competitive advantage.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-primary-200 bg-white p-6 shadow-sm">
            <div className="mb-3 h-1 w-12 bg-accent"></div>
            <h3 className="mb-2 text-lg font-semibold text-primary-900">Work</h3>
            <p className="text-sm text-primary-600">
              Processes become autonomous, intelligent, and self-optimizing—reducing cycle times by 40-60%
            </p>
          </div>
          <div className="rounded-lg border border-primary-200 bg-white p-6 shadow-sm">
            <div className="mb-3 h-1 w-12 bg-accent"></div>
            <h3 className="mb-2 text-lg font-semibold text-primary-900">Workforce</h3>
            <p className="text-sm text-primary-600">
              Employees shift from routine tasks to strategic work—increasing productivity by 3-5x
            </p>
          </div>
          <div className="rounded-lg border border-primary-200 bg-white p-6 shadow-sm">
            <div className="mb-3 h-1 w-12 bg-accent"></div>
            <h3 className="mb-2 text-lg font-semibold text-primary-900">Workbench</h3>
            <p className="text-sm text-primary-600">
              Tools become intelligent partners that learn, adapt, and orchestrate complex workflows
            </p>
          </div>
          <div className="rounded-lg border border-primary-200 bg-white p-6 shadow-sm">
            <div className="mb-3 h-1 w-12 bg-accent"></div>
            <h3 className="mb-2 text-lg font-semibold text-primary-900">Digital Core</h3>
            <p className="text-sm text-primary-600">
              Systems integrate seamlessly, with agents orchestrating data and decisions across the enterprise
            </p>
          </div>
        </div>
      </div>

      {/* Industry Selection */}
      <div className="mx-auto mt-16 sm:mt-20 max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-900">
            Explore Industry-Specific Transformations
          </h2>
          <p className="mt-4 text-base text-primary-600 max-w-2xl mx-auto">
            Deep-dive into proven agentic AI patterns, architectures, and business cases tailored to your industry.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Telecom Industry */}
          <div className="group rounded-lg border-2 border-primary-200 bg-white p-8 sm:p-10 shadow-sm transition-all hover:border-accent hover:shadow-lg">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="h-12 sm:h-16 w-1 bg-accent transition-all group-hover:w-1.5"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-900">Telecom</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-primary-600">
                Transform 12 critical processes—from lead-to-order to network operations. See how agentic AI reduces cycle times by 40-60% while improving accuracy and customer experience.
              </p>
              <div className="mt-6 flex justify-center gap-4 text-xs font-medium text-primary-500">
                <span>12 Processes</span>
                <span>•</span>
                <span>4 Categories</span>
                <span>•</span>
                <span>Proven Patterns</span>
              </div>
              <Link
                href="/telecom"
                className="mt-8 inline-flex items-center rounded-md border-2 border-accent bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-400 hover:shadow-md hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Explore Telecom
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Media Industry */}
          <div className="group rounded-lg border-2 border-primary-200 bg-white p-8 sm:p-10 shadow-sm transition-all hover:border-accent hover:shadow-lg">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="h-12 sm:h-16 w-1 bg-accent transition-all group-hover:w-1.5"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-900">Media</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-primary-600">
                Revolutionize content operations, distribution, and monetization. Discover how agentic AI accelerates time-to-market by 60-80% while optimizing revenue and audience engagement.
              </p>
              <div className="mt-6 flex justify-center gap-4 text-xs font-medium text-primary-500">
                <span>12 Processes</span>
                <span>•</span>
                <span>4 Categories</span>
                <span>•</span>
                <span>Proven Patterns</span>
              </div>
              <Link
                href="/media"
                className="mt-8 inline-flex items-center rounded-md border-2 border-accent bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-400 hover:shadow-md hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Explore Media
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mx-auto mt-16 max-w-4xl">
        <div className="rounded-lg border-2 border-accent bg-gradient-to-br from-accent-50 to-white p-8 sm:p-10 text-center shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-900">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="mt-4 text-base text-primary-700 max-w-2xl mx-auto">
            Our agentic AI framework has helped leading enterprises achieve 40-60% efficiency gains, reduce costs by 25-35%, and unlock new revenue streams. Let's discuss your transformation journey.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border-2 border-accent bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-400 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Schedule a Discussion
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary-300 bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-sm transition-all hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Download Framework
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
