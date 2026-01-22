'use client';

import { useState } from 'react';
import { Process } from '@/lib/types';
import ProcessSchematics from './ProcessSchematics';
import WorkforcePersonas from './WorkforcePersonas';
import AgentBlueprint from './AgentBlueprint';
import WorkbenchFlow from './WorkbenchFlow';

interface FourWSectionProps {
  fourW: Process['fourW'];
  process: Process;
}

const sectionLabels = {
  work: 'Work',
  workforce: 'Workforce',
  workbench: 'Workbench',
  digitalCore: 'Digital Core',
};

export default function FourWSection({ fourW, process }: FourWSectionProps) {
  const [activeTab, setActiveTab] = useState<'work' | 'workforce' | 'workbench' | 'digitalCore'>('work');

  const sections = [
    { title: 'Work', items: fourW.work, key: 'work' as const },
    { title: 'Workforce', items: fourW.workforce, key: 'workforce' as const },
    { title: 'Workbench', items: fourW.workbench, key: 'workbench' as const },
    { title: 'Digital Core', items: fourW.digitalCore, key: 'digitalCore' as const },
  ];

  const activeSection = sections.find(s => s.key === activeTab) || sections[0];

  return (
    <div className="rounded-lg border border-primary-200 bg-white shadow-sm">
      <div className="border-b border-primary-200 p-6">
        <div className="mb-2 h-1 w-12 bg-accent"></div>
        <h2 className="text-3xl font-semibold tracking-tight text-primary-900">4W Impact</h2>
        <p className="mt-2 text-base text-primary-600">Transformation across four dimensions</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-primary-200 bg-primary-50/30">
        <div className="flex overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveTab(section.key)}
              className={`flex-shrink-0 px-6 py-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                activeTab === section.key
                  ? 'border-b-2 border-accent text-accent bg-white'
                  : 'text-primary-600 hover:text-accent hover:bg-primary-50'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="p-6 sm:p-8">
        {/* Work Tab - Process Schematics */}
        {activeTab === 'work' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-primary-900 mb-2">
                Process Transformation
              </h3>
              <p className="text-sm text-primary-600 mb-6">
                How the work itself transforms with agentic AI
              </p>
            </div>
            <ProcessSchematics process={process} />
            <div className="mt-8 pt-8 border-t border-primary-200">
              <h4 className="text-lg font-semibold tracking-tight text-primary-900 mb-4">Key Work Changes</h4>
              <ul className="space-y-3">
                {activeSection.items.map((item, index) => (
                  <li key={index} className="flex items-start text-base leading-relaxed text-primary-700">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Workforce Tab - Persona Cards */}
        {activeTab === 'workforce' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-primary-900 mb-2">
                Workforce Transformation
              </h3>
              <p className="text-sm text-primary-600 mb-6">
                How workforce roles and responsibilities evolve
              </p>
            </div>
            <WorkforcePersonas process={process} />
            <div className="mt-8 pt-8 border-t border-primary-200">
              <h4 className="text-lg font-semibold tracking-tight text-primary-900 mb-4">Key Workforce Changes</h4>
              <ul className="space-y-3">
                {activeSection.items.map((item, index) => (
                  <li key={index} className="flex items-start text-base leading-relaxed text-primary-700">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Workbench Tab - Visual Flow */}
        {activeTab === 'workbench' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-primary-900 mb-2">
                Workbench Transformation
              </h3>
              <p className="text-sm text-primary-600 mb-6">
                Tools and capabilities that enable transformation
              </p>
            </div>
            <WorkbenchFlow process={process} />
            <div className="mt-8 pt-8 border-t border-primary-200">
              <h4 className="text-lg font-semibold tracking-tight text-primary-900 mb-4">Key Workbench Changes</h4>
              <ul className="space-y-3">
                {activeSection.items.map((item, index) => (
                  <li key={index} className="flex items-start text-base leading-relaxed text-primary-700">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Digital Core Tab - Agentic AI Blueprint */}
        {activeTab === 'digitalCore' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-primary-900 mb-2">
                Agentic AI Blueprint
              </h3>
              <p className="text-sm text-primary-600 mb-6">
                Foundation systems and infrastructure changes
              </p>
            </div>
            <AgentBlueprint process={process} />
            <div className="mt-8 pt-8 border-t border-primary-200">
              <h4 className="text-lg font-semibold tracking-tight text-primary-900 mb-4">Key Digital Core Changes</h4>
              <ul className="space-y-3">
                {activeSection.items.map((item, index) => (
                  <li key={index} className="flex items-start text-base leading-relaxed text-primary-700">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
