'use client';

import { Process } from '@/lib/types';

interface WorkbenchFlowProps {
  process: Process;
}

// Categorize workbench tools into logical groups
function categorizeTools(tools: string[]) {
  const categories: {
    [key: string]: {
      label: string;
      color: string;
      bgColor: string;
      borderColor: string;
      tools: string[];
    };
  } = {
    ai: {
      label: 'AI & ML Platforms',
      color: 'text-accent',
      bgColor: 'bg-accent-50',
      borderColor: 'border-accent-200',
      tools: [],
    },
    analytics: {
      label: 'Analytics & Insights',
      color: 'text-primary-700',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      tools: [],
    },
    collaboration: {
      label: 'Collaboration',
      color: 'text-primary-700',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      tools: [],
    },
    integration: {
      label: 'Integration & APIs',
      color: 'text-primary-700',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      tools: [],
    },
    workflow: {
      label: 'Workflow & Automation',
      color: 'text-primary-700',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      tools: [],
    },
    other: {
      label: 'Other Tools',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      tools: [],
    },
  };

  // Keywords for categorization
  const aiKeywords = ['AI', 'ML', 'machine learning', 'intelligence', 'predictive', 'recommendation', 'personalization'];
  const analyticsKeywords = ['analytics', 'insights', 'reporting', 'dashboard', 'BI', 'data', 'metrics'];
  const collaborationKeywords = ['collaboration', 'slack', 'teams', 'communication', 'chat'];
  const integrationKeywords = ['integration', 'API', 'platform', 'orchestration', 'workflow'];
  const workflowKeywords = ['automation', 'workflow', 'orchestration', 'management', 'platform'];

  tools.forEach((tool) => {
    const lowerTool = tool.toLowerCase();
    if (aiKeywords.some((keyword) => lowerTool.includes(keyword))) {
      categories.ai.tools.push(tool);
    } else if (analyticsKeywords.some((keyword) => lowerTool.includes(keyword))) {
      categories.analytics.tools.push(tool);
    } else if (collaborationKeywords.some((keyword) => lowerTool.includes(keyword))) {
      categories.collaboration.tools.push(tool);
    } else if (workflowKeywords.some((keyword) => lowerTool.includes(keyword))) {
      categories.workflow.tools.push(tool);
    } else if (integrationKeywords.some((keyword) => lowerTool.includes(keyword))) {
      categories.integration.tools.push(tool);
    } else {
      categories.other.tools.push(tool);
    }
  });

  // Remove empty categories
  return Object.entries(categories)
    .filter(([_, category]) => category.tools.length > 0)
    .map(([key, category]) => ({ key, ...category }));
}

export default function WorkbenchFlow({ process }: WorkbenchFlowProps) {
  const workbenchTools = process.fourW.workbench;
  const categories = categorizeTools(workbenchTools);

  if (categories.length === 0) {
    return (
      <div className="rounded-lg border border-primary-200 bg-primary-50/30 p-8 text-center">
        <p className="text-primary-600">No workbench tools defined for this process.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Visual Flow Diagram */}
      <div className="rounded-lg border-2 border-primary-200 bg-gradient-to-br from-primary-50/50 to-white p-6 sm:p-8">
        <div className="mb-8">
          <h3 className="text-lg font-semibold tracking-tight text-primary-900 mb-2">
            Workbench Architecture Flow
          </h3>
          <p className="text-sm text-primary-600">
            How tools and platforms integrate to enable agentic AI transformation
          </p>
        </div>

        {/* Structured Flow Layout */}
        <div className="space-y-8">
          {/* Central Hub */}
          <div className="flex justify-center">
            <div className="rounded-lg border-2 border-accent bg-accent-50 p-6 shadow-lg">
              <div className="text-center">
                <div className="mb-3 flex justify-center">
                  <div className="rounded-full bg-accent p-3">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-base font-semibold text-primary-900">Agentic AI</h4>
                <p className="mt-1 text-xs font-medium text-accent">Orchestration Hub</p>
                <p className="mt-2 text-xs text-primary-600">Coordinates all tools</p>
              </div>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="flex justify-center">
            <div className="flex space-x-2">
              {categories.map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="h-8 w-0.5 bg-gradient-to-b from-accent-200 to-accent-300"></div>
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Tool Categories in Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.key}
                className={`relative rounded-lg border-2 ${category.borderColor} ${category.bgColor} p-5 shadow-md`}
              >
                {/* Connection line from top */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="h-8 w-0.5 bg-gradient-to-b from-accent-200 to-transparent"></div>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-accent"></div>
                </div>

                <h5 className={`text-sm font-semibold ${category.color} mb-3`}>
                  {category.label}
                </h5>
                <div className="space-y-2">
                  {category.tools.slice(0, 4).map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="rounded border border-primary-200 bg-white px-3 py-2 text-xs font-medium text-primary-700"
                    >
                      {tool}
                    </div>
                  ))}
                  {category.tools.length > 4 && (
                    <div className="text-xs font-medium text-primary-500">
                      +{category.tools.length - 4} more tools
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Tool List */}
      <div className="rounded-lg border border-primary-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold tracking-tight text-primary-900">
          Workbench Components
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.key} className="space-y-2">
              <h4 className={`text-sm font-semibold ${category.color}`}>
                {category.label}
              </h4>
              <ul className="space-y-1">
                {category.tools.map((tool, index) => (
                  <li key={index} className="flex items-start text-sm text-primary-700">
                    <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Flow Description */}
      <div className="rounded-lg border border-accent-200 bg-accent-50/20 p-6">
        <h3 className="mb-4 text-lg font-semibold tracking-tight text-primary-900">
          How It Works
        </h3>
        <div className="space-y-3 text-sm text-primary-700">
          <p>
            <strong className="text-primary-900">Intelligent Orchestration:</strong> The Agentic AI hub coordinates workflows across all workbench tools, ensuring seamless data flow and process execution.
          </p>
          <p>
            <strong className="text-primary-900">Unified Integration:</strong> Tools from different categories work together through the orchestration layer, breaking down traditional silos and enabling end-to-end automation.
          </p>
          <p>
            <strong className="text-primary-900">Continuous Learning:</strong> The system learns from interactions across all tools, optimizing workflows and improving decision-making over time.
          </p>
        </div>
      </div>
    </div>
  );
}
