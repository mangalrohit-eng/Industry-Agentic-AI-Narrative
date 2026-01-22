'use client';

import { useState } from 'react';
import { Process } from '@/lib/types';
import { getAllAgenticPatterns } from '@/lib/data';

interface ProcessSchematicsProps {
  process: Process;
}

// Generate detailed current process steps
function getCurrentProcessSteps(process: Process, patternSteps: string[]) {
  // Expand steps to be more detailed
  const expandedSteps: string[] = [];
  
  patternSteps.forEach((step, idx) => {
    expandedSteps.push(step);
    // Add sub-steps for more detail
    const stepLower = step.toLowerCase();
    if (stepLower.includes('intake') || stepLower.includes('collect')) {
      expandedSteps.push('Validate Input Data');
      expandedSteps.push('Check Completeness');
    } else if (stepLower.includes('analyze') || stepLower.includes('assess')) {
      expandedSteps.push('Review Historical Data');
      expandedSteps.push('Identify Patterns');
    } else if (stepLower.includes('configure') || stepLower.includes('design')) {
      expandedSteps.push('Select Template');
      expandedSteps.push('Customize Parameters');
    } else if (stepLower.includes('validate') || stepLower.includes('verify')) {
      expandedSteps.push('Cross-Reference Systems');
      expandedSteps.push('Manual Review');
    } else if (stepLower.includes('approve') || stepLower.includes('authorize')) {
      expandedSteps.push('Route to Approver');
      expandedSteps.push('Await Response');
    } else if (stepLower.includes('execute') || stepLower.includes('implement')) {
      expandedSteps.push('Prepare Execution');
      expandedSteps.push('Monitor Progress');
    }
  });

  return expandedSteps.map((step, index) => {
    const stepLower = step.toLowerCase();
    
    let detail = '';
    let time = '';
    
    if (stepLower.includes('intake') || stepLower.includes('collect') || stepLower.includes('ingest')) {
      detail = 'Manual data entry from multiple sources';
      time = '2-4 hours';
    } else if (stepLower.includes('validate input') || stepLower.includes('check completeness')) {
      detail = 'Manual validation of input data';
      time = '1-2 hours';
    } else if (stepLower.includes('analyze') || stepLower.includes('assess') || stepLower.includes('diagnose')) {
      detail = 'Human analyst reviews data manually';
      time = '4-8 hours';
    } else if (stepLower.includes('review historical') || stepLower.includes('identify patterns')) {
      detail = 'Manual pattern analysis';
      time = '2-4 hours';
    } else if (stepLower.includes('configure') || stepLower.includes('design') || stepLower.includes('optimize')) {
      detail = 'Manual configuration using templates';
      time = '1-2 days';
    } else if (stepLower.includes('select template') || stepLower.includes('customize parameters')) {
      detail = 'Manual template selection and customization';
      time = '4-8 hours';
    } else if (stepLower.includes('validate') || stepLower.includes('verify') || stepLower.includes('reconcile')) {
      detail = 'Manual cross-checking and validation';
      time = '2-6 hours';
    } else if (stepLower.includes('cross-reference') || stepLower.includes('manual review')) {
      detail = 'Manual system cross-reference';
      time = '1-3 hours';
    } else if (stepLower.includes('approve') || stepLower.includes('authorize')) {
      detail = 'Manual approval workflow with routing';
      time = '1-3 days';
    } else if (stepLower.includes('route to approver') || stepLower.includes('await response')) {
      detail = 'Manual routing and waiting';
      time = '1-2 days';
    } else if (stepLower.includes('monitor') || stepLower.includes('detect')) {
      detail = 'Periodic manual monitoring and checks';
      time = 'Ongoing';
    } else if (stepLower.includes('resolve') || stepLower.includes('remediate') || stepLower.includes('execute')) {
      detail = 'Manual troubleshooting and resolution';
      time = '4-24 hours';
    } else if (stepLower.includes('prepare execution') || stepLower.includes('monitor progress')) {
      detail = 'Manual execution preparation';
      time = '2-4 hours';
    } else {
      detail = 'Manual processing and review';
      time = '2-6 hours';
    }
    
    return {
      step,
      detail,
      time,
      index: index + 1,
    };
  });
}

// Generate detailed agentic process steps
function getAgenticProcessSteps(process: Process, patternSteps: string[]) {
  const expandedSteps: string[] = [];
  
  // Map agents to steps and expand
  process.agents.forEach((agent, idx) => {
    const patternStep = patternSteps[idx] || `Step ${idx + 1}`;
    expandedSteps.push(patternStep);
    
    // Add agent-specific sub-steps
    const agentLower = agent.name.toLowerCase();
    if (agentLower.includes('intake') || agentLower.includes('collect')) {
      expandedSteps.push('Auto-Validate Input');
      expandedSteps.push('Data Enrichment');
    } else if (agentLower.includes('analyze') || agentLower.includes('assess')) {
      expandedSteps.push('AI Pattern Detection');
      expandedSteps.push('Generate Insights');
    } else if (agentLower.includes('configure') || agentLower.includes('design')) {
      expandedSteps.push('Smart Template Selection');
      expandedSteps.push('Auto-Optimize Parameters');
    } else if (agentLower.includes('validate') || agentLower.includes('verify')) {
      expandedSteps.push('Cross-System Validation');
      expandedSteps.push('Automated Checks');
    } else if (agentLower.includes('approve') || agentLower.includes('authorize')) {
      expandedSteps.push('Smart Routing');
      expandedSteps.push('Approval Workflow');
    } else if (agentLower.includes('execute') || agentLower.includes('implement')) {
      expandedSteps.push('Pre-Execution Validation');
      expandedSteps.push('Real-time Monitoring');
    }
  });

  let agentIndex = 0;
  return expandedSteps.map((step, index) => {
    // Find which agent handles this step
    const stepLower = step.toLowerCase();
    let currentAgent = process.agents[agentIndex];
    
    // Check if this is a sub-step that should use the same agent
    if (stepLower.includes('auto-validate') || stepLower.includes('data enrichment') || 
        stepLower.includes('ai pattern') || stepLower.includes('generate insights') ||
        stepLower.includes('smart template') || stepLower.includes('auto-optimize') ||
        stepLower.includes('cross-system') || stepLower.includes('automated checks') ||
        stepLower.includes('smart routing') || stepLower.includes('approval workflow') ||
        stepLower.includes('pre-execution') || stepLower.includes('real-time monitoring')) {
      // Use current agent
    } else {
      // Move to next agent
      if (agentIndex < process.agents.length - 1) {
        agentIndex++;
        currentAgent = process.agents[agentIndex];
      }
    }

    const stepName = step;
    const detail = currentAgent?.responsibility || 'Automated processing';
    let time = '';
    
    if (stepLower.includes('intake') || stepLower.includes('collect') || stepLower.includes('ingest')) {
      time = '< 5 min';
    } else if (stepLower.includes('auto-validate') || stepLower.includes('data enrichment')) {
      time = '< 1 min';
    } else if (stepLower.includes('analyze') || stepLower.includes('assess') || stepLower.includes('diagnose')) {
      time = '< 2 min';
    } else if (stepLower.includes('ai pattern') || stepLower.includes('generate insights')) {
      time = '< 1 min';
    } else if (stepLower.includes('configure') || stepLower.includes('design') || stepLower.includes('optimize')) {
      time = '< 10 min';
    } else if (stepLower.includes('smart template') || stepLower.includes('auto-optimize')) {
      time = '< 2 min';
    } else if (stepLower.includes('validate') || stepLower.includes('verify') || stepLower.includes('reconcile')) {
      time = '< 1 min';
    } else if (stepLower.includes('cross-system') || stepLower.includes('automated checks')) {
      time = '< 30 sec';
    } else if (stepLower.includes('approve') || stepLower.includes('authorize')) {
      time = '< 4 hours';
    } else if (stepLower.includes('smart routing') || stepLower.includes('approval workflow')) {
      time = '< 5 min';
    } else if (stepLower.includes('monitor') || stepLower.includes('detect')) {
      time = 'Real-time';
    } else if (stepLower.includes('resolve') || stepLower.includes('remediate') || stepLower.includes('execute')) {
      time = '< 15 min';
    } else if (stepLower.includes('pre-execution') || stepLower.includes('real-time monitoring')) {
      time = '< 2 min';
    } else {
      time = '< 5 min';
    }
    
    return {
      step: stepName,
      agent: currentAgent?.name,
      detail,
      time,
      requiresApproval: currentAgent?.humanApproval || false,
      index: index + 1,
    };
  });
}

// Layout steps in a grid with multiple rows
function layoutStepsInRows(steps: any[], stepsPerRow: number = 4) {
  const rows: any[][] = [];
  for (let i = 0; i < steps.length; i += stepsPerRow) {
    rows.push(steps.slice(i, i + stepsPerRow));
  }
  return rows;
}

export default function ProcessSchematics({ process }: ProcessSchematicsProps) {
  const allPatterns = getAllAgenticPatterns();
  const pattern = allPatterns.find((p) => p.id === process.agenticPattern);
  
  const patternSteps = pattern?.name.split(' → ') || [];
  const currentSteps = getCurrentProcessSteps(process, patternSteps);
  const agenticSteps = getAgenticProcessSteps(process, patternSteps);
  
  // Layout steps in rows (4 steps per row, adjust for mobile)
  const currentRows = layoutStepsInRows(currentSteps, 4);
  const agenticRows = layoutStepsInRows(agenticSteps, 4);
  
  // Calculate total time for current process
  let currentTotalTime = 0;
  for (const step of currentSteps) {
    const timeStr = step.time;
    if (timeStr.includes('days')) {
      const days = parseInt(timeStr) || 1;
      currentTotalTime += days * 24;
    } else if (timeStr.includes('hours')) {
      const hours = parseInt(timeStr) || 4;
      currentTotalTime += hours;
    } else {
      currentTotalTime += 0.5;
    }
  }
  
  // Calculate total time for agentic process
  let agenticTotalTime = 0;
  for (const step of agenticSteps) {
    const timeStr = step.time;
    if (timeStr.includes('hour')) {
      const hours = parseFloat(timeStr) || 0.1;
      agenticTotalTime += hours;
    } else if (timeStr.includes('min')) {
      const mins = parseFloat(timeStr) || 5;
      agenticTotalTime += mins / 60;
    } else {
      agenticTotalTime += 0.01;
    }
  }
  
  const [activeTab, setActiveTab] = useState<'current' | 'agentic'>('current');

  return (
    <div className="space-y-0 overflow-hidden">
      {/* Tabs */}
      <div className="rounded-lg border-2 border-primary-200 bg-white shadow-sm">
        <div className="border-b border-primary-200 bg-primary-50/30">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('current')}
              className={`flex-shrink-0 px-6 py-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                activeTab === 'current'
                  ? 'border-b-2 border-primary-400 text-primary-900 bg-white'
                  : 'text-primary-600 hover:text-primary-900 hover:bg-primary-50'
              }`}
            >
              Current Process (As-Is)
            </button>
            <button
              onClick={() => setActiveTab('agentic')}
              className={`flex-shrink-0 px-6 py-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                activeTab === 'agentic'
                  ? 'border-b-2 border-accent text-accent bg-white'
                  : 'text-primary-600 hover:text-accent hover:bg-primary-50'
              }`}
            >
              Agentic Process (To-Be)
            </button>
          </div>
        </div>

        {/* Tab Content Container */}
        <div className="relative overflow-hidden">
          {/* Current Process Tab */}
          {activeTab === 'current' && (
            <div className="rounded-lg border-2 border-primary-300 bg-primary-50/20 overflow-hidden max-h-[800px] overflow-y-auto">
              <div className="sticky top-0 z-10 border-b-2 border-primary-300 bg-primary-100/95 backdrop-blur-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-2 h-1 w-16 bg-primary-400"></div>
                    <h3 className="text-2xl font-semibold tracking-tight text-primary-900">Current Process (As-Is)</h3>
                    <p className="mt-1 text-sm text-primary-600">Manual, sequential, error-prone workflow</p>
                  </div>
                  <div className="rounded-lg border-2 border-primary-400 bg-white px-6 py-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary-600">Total Time</div>
                    <div className="mt-1 text-2xl font-bold text-primary-900">
                      {currentTotalTime > 24 ? `${Math.round(currentTotalTime / 24)} days` : `${Math.round(currentTotalTime)} hours`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-row Flow */}
              <div className="p-6 sm:p-8">
                <div className="overflow-x-auto">
                  {currentRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="relative mb-16 last:mb-0">
                      {/* Horizontal Flow Line for the row */}
                      <div className="absolute left-0 right-0 top-full h-0.5 bg-primary-300" style={{ top: 'calc(100% - 1rem)' }}></div>
                      
                      {/* Steps in Row */}
                      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {row.map((stepData, stepIndex) => {
                          const isLastInRow = stepIndex === row.length - 1;
                          
                          return (
                            <div key={stepIndex} className="relative z-10">
                              {/* Step Card */}
                              <div className="rounded-lg border-2 border-primary-400 bg-white p-4 shadow-md mb-4">
                                <div className="mb-2 flex items-center justify-center">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-400 bg-white text-sm font-bold text-primary-900">
                                    {stepData.index}
                                  </div>
                                </div>
                                <h4 className="mb-2 text-center text-sm font-semibold text-primary-900">{stepData.step}</h4>
                                <p className="mb-2 text-center text-xs text-primary-700 leading-relaxed">{stepData.detail}</p>
                                <div className="flex items-center justify-center space-x-2 text-xs">
                                  <svg className="h-3 w-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="font-medium text-primary-600">{stepData.time}</span>
                                </div>
                                <div className="mt-2 rounded border border-primary-200 bg-primary-50/50 p-2 text-center">
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-600">Manual</span>
                                </div>
                              </div>

                              {/* Arrow to Next Step (horizontal) */}
                              {!isLastInRow && (
                                <div className="absolute -right-3 top-full z-20 flex h-6 w-6 -translate-y-1/2 items-center justify-center mt-2">
                                  <svg className="h-5 w-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

              {/* Summary */}
              <div className="border-t-2 border-primary-300 bg-white p-6">
                <div className="text-sm font-semibold uppercase tracking-wider text-primary-900">Key Characteristics</div>
                <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-primary-700 md:grid-cols-4">
                  <li className="flex items-start">
                    <span className="mr-1.5 mt-0.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary-400"></span>
                    <span>Sequential execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1.5 mt-0.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary-400"></span>
                    <span>Manual intervention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1.5 mt-0.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary-400"></span>
                    <span>Error-prone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1.5 mt-0.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary-400"></span>
                    <span>Limited visibility</span>
                  </li>
                </ul>
              </div>
              </div>
            </div>
          )}

          {/* Agentic Process Tab */}
          {activeTab === 'agentic' && (
            <div className="rounded-lg border-2 border-accent bg-accent-50/20 overflow-hidden max-h-[800px] overflow-y-auto">
              <div className="sticky top-0 z-10 border-b-2 border-accent bg-accent-100/95 backdrop-blur-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-2 h-1 w-16 bg-accent"></div>
                    <h3 className="text-2xl font-semibold tracking-tight text-primary-900">Agentic Process (To-Be)</h3>
                    <p className="mt-1 text-sm text-primary-600">Intelligent, automated, orchestrated workflow</p>
                  </div>
                  <div className="rounded-lg border-2 border-accent bg-white px-6 py-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent-600">Total Time</div>
                    <div className="mt-1 text-2xl font-bold text-accent">
                      {agenticTotalTime < 1 ? `${Math.round(agenticTotalTime * 60)} minutes` : `${agenticTotalTime.toFixed(1)} hours`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-row Flow */}
              <div className="p-6 sm:p-8">
                <div className="overflow-x-auto">
                  {agenticRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="relative mb-16 last:mb-0">
                      {/* Horizontal Flow Line for the row */}
                      <div className="absolute left-0 right-0 top-full h-0.5 bg-accent" style={{ top: 'calc(100% - 1rem)' }}></div>
                      
                      {/* Steps in Row */}
                      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {row.map((stepData, stepIndex) => {
                          const isLastInRow = stepIndex === row.length - 1;
                          
                          return (
                            <div key={stepIndex} className="relative z-10">
                              {/* Step Card */}
                              <div className={`rounded-lg border-2 p-4 shadow-md mb-4 ${
                                stepData.requiresApproval 
                                  ? 'border-accent-400 bg-white' 
                                  : 'border-accent bg-white'
                              }`}>
                                <div className="mb-2 flex items-center justify-center">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-accent text-sm font-bold text-white">
                                    {stepData.index}
                                  </div>
                                </div>
                                <h4 className="mb-2 text-center text-sm font-semibold text-primary-900">{stepData.step}</h4>
                                <div className="mb-2 flex flex-wrap items-center justify-center gap-1">
                                  {stepData.agent && (
                                    <span className="rounded-full border border-accent bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                                      {stepData.agent.replace(' Agent', '')}
                                    </span>
                                  )}
                                  {stepData.requiresApproval && (
                                    <span className="rounded-full border border-primary-300 bg-primary-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-700">
                                      Approval
                                    </span>
                                  )}
                                </div>
                                <p className="mb-2 text-center text-xs text-primary-700 leading-relaxed">{stepData.detail}</p>
                                <div className="flex items-center justify-center space-x-2 text-xs">
                                  <svg className="h-3 w-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                  <span className="font-medium text-accent">{stepData.time}</span>
                                </div>
                                <div className="mt-2 rounded border border-accent-200 bg-accent-50/30 p-2 text-center">
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">Automated</span>
                                </div>
                              </div>

                              {/* Arrow to Next Step (horizontal) */}
                              {!isLastInRow && (
                                <div className="absolute -right-3 top-full z-20 flex h-6 w-6 -translate-y-1/2 items-center justify-center mt-2">
                                  <svg className="h-5 w-5 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

              {/* Summary */}
              <div className="border-t-2 border-accent bg-white p-6">
                <div className="text-sm font-semibold uppercase tracking-wider text-primary-900">Key Characteristics</div>
                <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-primary-700 md:grid-cols-4">
                  <li className="flex items-start">
                    <span className="mr-1.5 mt-0.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent"></span>
                    <span>Parallel execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1.5 mt-0.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent"></span>
                    <span>AI automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1.5 mt-0.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent"></span>
                    <span>Error prevention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1.5 mt-0.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent"></span>
                    <span>Real-time visibility</span>
                  </li>
                </ul>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Transformation Impact Summary */}
      <div className="mt-12 rounded-lg border border-primary-200 bg-white p-8">
        <div className="mb-6">
          <div className="mb-2 h-1 w-12 bg-accent"></div>
          <h3 className="text-2xl font-semibold tracking-tight text-primary-900">Transformation Impact</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-primary-200 bg-primary-50/30 p-6">
            <div className="mb-2 h-1 w-12 bg-primary-400"></div>
            <h4 className="mb-4 text-lg font-semibold tracking-tight text-primary-900">Current State</h4>
            <ul className="space-y-2 text-sm text-primary-700">
              <li className="flex justify-between">
                <span className="font-medium">Duration:</span>
                <span>{currentTotalTime > 24 ? `${Math.round(currentTotalTime / 24)} days` : `${Math.round(currentTotalTime)} hours`}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Steps:</span>
                <span>{currentSteps.length} manual steps</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Error Rate:</span>
                <span>High</span>
              </li>
            </ul>
          </div>
          
          <div className="rounded-lg border-2 border-accent bg-accent-50/20 p-6">
            <div className="mb-2 h-1 w-12 bg-accent"></div>
            <h4 className="mb-4 text-lg font-semibold tracking-tight text-primary-900">Agentic State</h4>
            <ul className="space-y-2 text-sm text-primary-700">
              <li className="flex justify-between">
                <span className="font-medium">Duration:</span>
                <span>{agenticTotalTime < 1 ? `${Math.round(agenticTotalTime * 60)} minutes` : `${agenticTotalTime.toFixed(1)} hours`}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Steps:</span>
                <span>{agenticSteps.length} automated steps</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Error Rate:</span>
                <span>Low</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 rounded-lg border-2 border-accent bg-gradient-to-r from-accent-50/50 to-white p-6">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-900">Overall Improvement</div>
          <p className="text-base leading-relaxed text-primary-700">
            Process time reduction: <span className="font-bold text-accent">{Math.round(((currentTotalTime - agenticTotalTime) / currentTotalTime) * 100)}%</span>
            {' • '}
            Automation: <span className="font-bold text-accent">{Math.round((agenticSteps.length / (currentSteps.length + agenticSteps.length)) * 100)}%</span>
            {' • '}
            Accuracy improvement: <span className="font-bold text-accent">Significant</span>
          </p>
        </div>
      </div>
    </div>
  );
}
