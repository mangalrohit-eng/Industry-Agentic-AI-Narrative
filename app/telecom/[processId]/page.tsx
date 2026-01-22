import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProcessById, getNextProcessId, getPreviousProcessId, getAllProcesses } from '@/lib/data';
import ValueThemeBadges from '@/components/ValueThemeBadges';
import ValueThemeLegend from '@/components/ValueThemeLegend';
import FourWSection from '@/components/FourWSection';
import ProcessSummaryCard from '@/components/ProcessSummaryCard';
import KPICards from '@/components/KPICards';
import StickyBottomNav from '@/components/StickyBottomNav';
import IndustryMedia from '@/components/IndustryMedia';
import GettingStarted from '@/components/GettingStarted';

interface ProcessPageProps {
  params: Promise<{ processId: string }>;
}

export default async function ProcessPage({ params }: ProcessPageProps) {
  const { processId } = await params;
  const process = getProcessById(processId, 'telecom');

  if (!process) {
    notFound();
  }

  const nextId = getNextProcessId(processId, 'telecom');
  const prevId = getPreviousProcessId(processId, 'telecom');
  
  // Calculate process number
  const allProcesses = getAllProcesses('telecom');
  const processNumber = allProcesses.findIndex(p => p.id === processId) + 1;
  const totalProcesses = allProcesses.length;

  // Define sections for table of contents
  const tocSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'impact', label: '4W Impact' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'risks', label: 'Risks & Controls' },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/telecom"
            className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-accent transition-colors mb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-md px-2 py-1"
          >
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Telecom map
          </Link>
          <div className="mt-4">
            <div className="mb-4 flex items-center space-x-3">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary-600 px-3 py-1 rounded-full bg-primary-50">
                {process.category}
              </span>
            </div>
            <div className="mb-4 h-1 w-16 bg-accent"></div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary-900">
              {process.name}
            </h1>
            <div className="mt-6">
              <ValueThemeBadges themeIds={process.valueThemes} />
              <ValueThemeLegend />
            </div>
          </div>
        </div>

        {/* Industry Media */}
        <IndustryMedia process={process} />

        {/* Quick Summary Card */}
        <ProcessSummaryCard 
          process={process} 
          processNumber={processNumber}
          totalProcesses={totalProcesses}
        />

        {/* Process Overview */}
        <div id="overview" className="mb-12 scroll-mt-24 rounded-lg border border-primary-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <div className="mb-2 h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-semibold tracking-tight text-primary-900">Process Overview</h2>
          </div>
          <p className="mb-6 text-base leading-relaxed text-primary-700">{process.description}</p>
          <div className="mb-6 rounded-lg bg-primary-50/50 p-4 sm:p-6">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600">Business Goal</h3>
            <p className="text-base leading-relaxed text-primary-700">{process.businessGoal}</p>
          </div>
          <KPICards kpis={process.kpis} />
        </div>

        {/* 4W Impact - Now includes Process Schematics, Workforce Personas, and Agentic Blueprint */}
        <div id="impact" className="mb-12 scroll-mt-24">
          <FourWSection fourW={process.fourW} process={process} />
        </div>

        {/* Why This Matters */}
        <div className="mb-12 rounded-lg border border-primary-200 bg-primary-50/30 p-8">
          <div className="mb-6">
            <div className="mb-2 h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-semibold tracking-tight text-primary-900">Why This Matters</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-primary-900">Business Impact</h3>
              <p className="text-base leading-relaxed text-primary-700">
                {process.name} is a critical process that directly impacts {process.valueThemes.includes('revenue-growth') ? 'revenue, ' : ''}
                {process.valueThemes.includes('customer-experience') ? 'customer satisfaction, ' : ''}
                {process.valueThemes.includes('operational-excellence') ? 'operational efficiency, ' : ''}
                and competitive positioning. Traditional automation reaches its limits here—agentic AI enables true transformation.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-primary-900">The Transformation</h3>
              <p className="text-base leading-relaxed text-primary-700">
                With {process.agents.length} intelligent agents orchestrating this process, you're not just automating tasks—you're creating an autonomous, self-optimizing system that learns, adapts, and improves over time. This is the difference between incremental efficiency and transformational change.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits & Risks Side-by-Side */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          {/* Benefits */}
          <div id="benefits" className="scroll-mt-20 rounded-lg border border-accent-200 bg-white p-8">
            <div className="mb-6">
              <div className="mb-2 h-1 w-12 bg-accent"></div>
              <h2 className="text-2xl font-semibold tracking-tight text-primary-900">Quantified Benefits</h2>
              <p className="mt-2 text-sm text-primary-600">Proven results from agentic AI implementation</p>
            </div>
            <ul className="space-y-4">
              {process.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-base leading-relaxed text-primary-700">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Risks & Controls */}
          <div id="risks" className="scroll-mt-20 rounded-lg border border-primary-300 bg-white p-8">
            <div className="mb-6">
              <div className="mb-2 h-1 w-12 bg-primary-400"></div>
              <h2 className="text-2xl font-semibold tracking-tight text-primary-900">Risks & Controls</h2>
              <p className="mt-2 text-sm text-primary-600">Built-in guardrails and governance</p>
            </div>
            <ul className="space-y-4">
              {process.risksAndControls.map((risk, index) => (
                <li key={index} className="flex items-start text-base leading-relaxed text-primary-700">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-12">
          <GettingStarted process={process} />
        </div>

        {/* Call to Action */}
        <div className="mb-12 rounded-lg border-2 border-accent bg-gradient-to-br from-accent-50 to-white p-8 text-center shadow-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-primary-900">
            Ready to Transform {process.name}?
          </h2>
          <p className="mt-4 text-base text-primary-700 max-w-2xl mx-auto">
            Our proven framework has helped leading enterprises achieve similar results. Let's discuss how we can tailor this transformation to your specific context and priorities.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border-2 border-accent bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-400 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Schedule a Deep Dive
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary-300 bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-sm transition-all hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Request Case Study
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Navigation */}
      <StickyBottomNav
        process={process}
        prevId={prevId}
        nextId={nextId}
        processNumber={processNumber}
        totalProcesses={totalProcesses}
        industry="telecom"
      />
    </>
  );
}
