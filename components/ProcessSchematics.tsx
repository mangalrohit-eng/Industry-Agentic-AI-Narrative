'use client';

import { useState } from 'react';
import { Process } from '@/lib/types';
import { getAllAgenticPatterns } from '@/lib/data';

interface ProcessSchematicsProps {
  process: Process;
}

// Get step icon based on agent name or step
function getStepIcon(step: string, agentName?: string) {
  const stepLower = step.toLowerCase();
  const agentLower = agentName?.toLowerCase() || '';
  
  if (stepLower.includes('intake') || stepLower.includes('collect') || stepLower.includes('ingest') || agentLower.includes('intake') || agentLower.includes('collect')) {
    return (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  } else if (stepLower.includes('analyze') || stepLower.includes('assess') || stepLower.includes('diagnose') || agentLower.includes('analyze') || agentLower.includes('assess')) {
    return (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    );
  } else if (stepLower.includes('configure') || stepLower.includes('design') || stepLower.includes('optimize') || agentLower.includes('configure') || agentLower.includes('design') || agentLower.includes('optimize')) {
    return (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  } else if (stepLower.includes('validate') || stepLower.includes('verify') || stepLower.includes('reconcile') || agentLower.includes('validate') || agentLower.includes('verify')) {
    return (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  } else if (stepLower.includes('approve') || stepLower.includes('authorize') || agentLower.includes('approve') || agentLower.includes('authorize')) {
    return (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  } else if (stepLower.includes('execute') || stepLower.includes('implement') || stepLower.includes('deliver') || agentLower.includes('execute') || agentLower.includes('implement')) {
    return (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  } else if (stepLower.includes('monitor') || stepLower.includes('detect') || agentLower.includes('monitor') || agentLower.includes('detect')) {
    return (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    );
  } else {
    return (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    );
  }
}

// Extract 4-5 word description from work item string
function extractWorkDescription(workItem: string): string {
  // Remove common prefixes like "Automated", "Intelligent", "Real-time", etc.
  let cleaned = workItem
    .replace(/^(Automated|Intelligent|Real-time|Proactive|Dynamic|Self-service)\s+/i, '')
    .trim();
  
  // Split into words
  const words = cleaned.split(' ');
  
  // Find the main verb and key nouns (usually first 4-5 words contain the core action)
  // Look for patterns like "verb noun noun" or "verb noun preposition noun"
  let description = '';
  
  if (words.length <= 5) {
    // Already concise, use as is
    description = words.join(' ');
  } else {
    // Extract first 4-5 words, but try to end at a natural break
    // Prefer ending after a noun or before prepositions like "with", "for", "to", "across"
    let endIndex = 5;
    const breakWords = ['with', 'for', 'to', 'across', 'through', 'based', 'using', 'against', 'from'];
    
    for (let i = 4; i <= Math.min(6, words.length); i++) {
      if (i < words.length && breakWords.includes(words[i].toLowerCase())) {
        endIndex = i;
        break;
      }
    }
    
    description = words.slice(0, endIndex).join(' ');
  }
  
  // Capitalize first letter
  return description.charAt(0).toUpperCase() + description.slice(1);
}

// Map work items to step indices for agentic processes
function mapWorkToStepsAgentic(process: Process): Map<number, string> {
  const mapping = new Map<number, string>();
  const workItems = process.fourW.work;
  const agents = process.agents;
  
  // Try to match agents to work items based on semantic similarity
  agents.forEach((agent, agentIndex) => {
    const agentLower = agent.name.toLowerCase();
    const agentWords = agentLower.split(' ');
    
    // Find best matching work item
    let bestMatchIndex = agentIndex;
    let bestScore = 0;
    
    workItems.forEach((workItem, workIndex) => {
      const workLower = workItem.toLowerCase();
      let score = 0;
      
      // Score based on keyword matches
      agentWords.forEach(word => {
        if (word.length > 3 && workLower.includes(word)) {
          score += 2;
        }
      });
      
      // Check for specific patterns (exact matches get higher scores)
      if (agentLower.includes('qualification') && workLower.includes('qualification')) score += 5;
      if (agentLower.includes('qualification') && workLower.includes('scoring')) score += 4;
      if (agentLower.includes('configuration') && workLower.includes('configuration')) score += 5;
      if (agentLower.includes('configuration') && workLower.includes('matching')) score += 4;
      if (agentLower.includes('pricing') && workLower.includes('pricing')) score += 5;
      if (agentLower.includes('pricing') && workLower.includes('discount')) score += 4;
      if (agentLower.includes('validation') && workLower.includes('validation')) score += 5;
      if (agentLower.includes('validation') && workLower.includes('check')) score += 4;
      if (agentLower.includes('orchestration') && workLower.includes('orchestration')) score += 5;
      if (agentLower.includes('orchestration') && workLower.includes('coordination')) score += 4;
      if (agentLower.includes('triage') && workLower.includes('triage')) score += 5;
      if (agentLower.includes('triage') && workLower.includes('categorization')) score += 4;
      if (agentLower.includes('diagnostic') && workLower.includes('diagnostic')) score += 5;
      if (agentLower.includes('diagnostic') && workLower.includes('root cause')) score += 4;
      if (agentLower.includes('remediation') && workLower.includes('remediation')) score += 5;
      if (agentLower.includes('remediation') && workLower.includes('resolution')) score += 4;
      if (agentLower.includes('scheduling') && workLower.includes('scheduling')) score += 5;
      if (agentLower.includes('scheduling') && workLower.includes('allocation')) score += 4;
      if (agentLower.includes('billing') && workLower.includes('billing')) score += 5;
      if (agentLower.includes('billing') && workLower.includes('invoice')) score += 4;
      if (agentLower.includes('monitoring') && workLower.includes('monitoring')) score += 5;
      if (agentLower.includes('monitoring') && workLower.includes('monitor')) score += 4;
      if (agentLower.includes('detection') && workLower.includes('detection')) score += 5;
      if (agentLower.includes('detection') && workLower.includes('detect')) score += 4;
      if (agentLower.includes('correlation') && workLower.includes('correlation')) score += 5;
      if (agentLower.includes('correlation') && workLower.includes('correlate')) score += 4;
      if (agentLower.includes('generation') && workLower.includes('generation')) score += 5;
      if (agentLower.includes('generation') && workLower.includes('generate')) score += 4;
      if (agentLower.includes('tracking') && workLower.includes('tracking')) score += 5;
      if (agentLower.includes('tracking') && workLower.includes('track')) score += 4;
      if (agentLower.includes('communication') && workLower.includes('communication')) score += 5;
      if (agentLower.includes('communication') && workLower.includes('notification')) score += 4;
      if (agentLower.includes('research') && workLower.includes('research')) score += 5;
      if (agentLower.includes('research') && workLower.includes('availability')) score += 4;
      if (agentLower.includes('analysis') && workLower.includes('analysis')) score += 5;
      if (agentLower.includes('analysis') && workLower.includes('analyze')) score += 4;
      
      if (score > bestScore) {
        bestScore = score;
        bestMatchIndex = workIndex;
      }
    });
    
    // Use best match, or fall back to index-based mapping
    const workIndex = bestScore > 0 ? bestMatchIndex : Math.min(agentIndex, workItems.length - 1);
    mapping.set(agentIndex, workItems[workIndex]);
  });
  
  return mapping;
}

// Map work items to step indices for current processes (based on pattern steps)
function mapWorkToStepsCurrent(process: Process, patternSteps: string[]): Map<number, string> {
  const mapping = new Map<number, string>();
  const workItems = process.fourW.work;
  
  patternSteps.forEach((step, stepIndex) => {
    const stepLower = step.toLowerCase();
    let bestMatchIndex = stepIndex;
    let bestScore = 0;
    
    workItems.forEach((workItem, workIndex) => {
      const workLower = workItem.toLowerCase();
      let score = 0;
      
      // Score based on semantic matching with more patterns
      if (stepLower.includes('intake') || stepLower.includes('collect') || stepLower.includes('ingest')) {
        if (workLower.includes('collect') || workLower.includes('ingest') || workLower.includes('scoring') || 
            workLower.includes('qualification') || workLower.includes('research') || workLower.includes('data collection')) score += 5;
      }
      if (stepLower.includes('analyze') || stepLower.includes('assess') || stepLower.includes('correlate')) {
        if (workLower.includes('analyze') || workLower.includes('assess') || workLower.includes('analysis') || 
            workLower.includes('root cause') || workLower.includes('correlation') || workLower.includes('diagnose')) score += 5;
      }
      if (stepLower.includes('configure') || stepLower.includes('design') || stepLower.includes('optimize') || stepLower.includes('enrich')) {
        if (workLower.includes('configure') || workLower.includes('design') || workLower.includes('configuration') || 
            workLower.includes('matching') || workLower.includes('optimize') || workLower.includes('enrich')) score += 5;
      }
      if (stepLower.includes('validate') || stepLower.includes('verify') || stepLower.includes('normalize')) {
        if (workLower.includes('validate') || workLower.includes('verify') || workLower.includes('validation') || 
            workLower.includes('check') || workLower.includes('normalize') || workLower.includes('compliance')) score += 5;
      }
      if (stepLower.includes('approve') || stepLower.includes('authorize') || stepLower.includes('recommend')) {
        if (workLower.includes('approve') || workLower.includes('approval') || workLower.includes('authorize') || 
            workLower.includes('recommend') || workLower.includes('renewal')) score += 5;
      }
      if (stepLower.includes('execute') || stepLower.includes('implement') || stepLower.includes('provision') || stepLower.includes('remediate') || stepLower.includes('act')) {
        if (workLower.includes('execute') || workLower.includes('implement') || workLower.includes('provision') || 
            workLower.includes('orchestration') || workLower.includes('remediation') || workLower.includes('delivery')) score += 5;
      }
      if (stepLower.includes('monitor') || stepLower.includes('detect')) {
        if (workLower.includes('monitor') || workLower.includes('detect') || workLower.includes('monitoring') || 
            workLower.includes('detection') || workLower.includes('tracking')) score += 5;
      }
      if (stepLower.includes('resolve') || stepLower.includes('remediate')) {
        if (workLower.includes('resolve') || workLower.includes('remediation') || workLower.includes('fix') || 
            workLower.includes('remediate')) score += 5;
      }
      if (stepLower.includes('communicate') || stepLower.includes('report') || stepLower.includes('load')) {
        if (workLower.includes('communicate') || workLower.includes('notification') || workLower.includes('update') || 
            workLower.includes('report') || workLower.includes('load') || workLower.includes('generation')) score += 5;
      }
      if (stepLower.includes('reconcile') || stepLower.includes('transform')) {
        if (workLower.includes('reconcile') || workLower.includes('reconciliation') || workLower.includes('transform') || 
            workLower.includes('transformation')) score += 5;
      }
      if (stepLower.includes('quote')) {
        if (workLower.includes('quote') || workLower.includes('pricing') || workLower.includes('proposal')) score += 5;
      }
      
      if (score > bestScore) {
        bestScore = score;
        bestMatchIndex = workIndex;
      }
    });
    
    // Use best match, or fall back to index-based mapping
    const workIndex = bestScore > 0 ? bestMatchIndex : Math.min(stepIndex, workItems.length - 1);
    mapping.set(stepIndex, workItems[workIndex]);
  });
  
  return mapping;
}

// Transform agentic work description to current/manual process description
function transformToCurrentProcess(workItem: string): string {
  // Remove agentic/automated language and replace with manual equivalents
  let transformed = workItem
    // Prefix replacements (must come first)
    .replace(/^Automated\s+/i, 'Manual ')
    .replace(/^Intelligent\s+/i, 'Manual ')
    .replace(/^Continuous\s+/i, 'Periodic manual ')
    .replace(/^Proactive\s+/i, 'Reactive manual ')
    .replace(/^Real-time\s+/i, 'Scheduled manual ')
    .replace(/^Self-service\s+/i, 'Manual ')
    .replace(/^Dynamic\s+/i, 'Static manual ')
    .replace(/^Predictive\s+/i, 'Reactive manual ')
    // Word-level replacements
    .replace(/\bautomated\b/gi, 'manual')
    .replace(/\bintelligent\b/gi, 'manual')
    .replace(/\bautomatic\b/gi, 'manual')
    .replace(/\bai-powered\b/gi, 'manual')
    .replace(/\baiops\b/gi, 'manual')
    .replace(/\bai\b/gi, 'manual')
    // Specific phrase replacements
    .replace(/\busing\s+network\s+topology\s+and\s+dependencies\b/gi, 'by engineers reviewing network topology')
    .replace(/\busing\s+network\s+topology\b/gi, 'by engineers reviewing network topology')
    .replace(/\busing\s+(\w+)\s+and\s+(\w+)\b/gi, 'by engineers')
    .replace(/\busing\s+ai\b/gi, 'by engineers')
    .replace(/\busing\s+ml\b/gi, 'by engineers')
    .replace(/\busing\s+(\w+)\b/gi, 'by engineers')
    .replace(/\bwith\s+ai\b/gi, 'by engineers')
    .replace(/\bwith\s+ml\b/gi, 'by engineers')
    .replace(/\band\s+noise\s+reduction\b/gi, 'and manual noise filtering')
    .replace(/\bbefore\s+customer\s+impact\b/gi, 'after customer reports issues')
    .replace(/\bmulti-year\s+tco\s+analysis\b/gi, 'basic cost calculations')
    .replace(/\bwith\s+standard\s+terms\s+and\s+customizations\b/gi, 'using templates')
    .replace(/\bacross\s+all\s+domains\b/gi, 'across key domains')
    .replace(/\bacross\s+global\s+markets\b/gi, 'in target markets')
    .replace(/\bmulti-domain\s+provisioning\s+orchestration\b/gi, 'sequential provisioning coordination')
    .replace(/\borchestration\s+of\s+provisioning\s+workflows\b/gi, 'manual coordination of provisioning tasks')
    .replace(/\bworkflows\s+across\s+multiple\s+oss\/bss\s+systems\b/gi, 'tasks across systems')
    .replace(/\bexception\s+detection\s+and\s+automated\s+resolution\b/gi, 'exception identification and manual resolution')
    .replace(/\bstatus\s+updates\s+and\s+notifications\s+to\s+customers\b/gi, 'status updates to customers')
    .replace(/\bcompletion\s+verification\b/gi, 'manual completion check');
  
  // Ensure manual/engineer reference exists for action verbs
  const lower = transformed.toLowerCase();
  const hasManualRef = lower.includes('manual') || lower.includes('engineer') || lower.includes('human') || 
                       lower.includes('periodic') || lower.includes('reactive') || lower.includes('scheduled');
  
  if (!hasManualRef) {
    // Add manual indicator to the beginning if it's an action
    const actionPattern = /^([A-Z][a-z]+(?:\s+[a-z]+)?)/;
    if (actionPattern.test(transformed)) {
      transformed = 'Manual ' + transformed.toLowerCase();
      // Capitalize first letter
      transformed = transformed.charAt(0).toUpperCase() + transformed.slice(1);
    }
  }
  
  // Clean up any double "manual" or awkward phrasing
  transformed = transformed
    .replace(/\bmanual\s+manual\b/gi, 'manual')
    .replace(/\bby\s+engineers\s+by\s+engineers\b/gi, 'by engineers')
    .trim();
  
  return transformed;
}

// Get process-specific step description
function getProcessSpecificStepDescription(
  process: Process,
  stepIndex: number,
  isAgentic: boolean,
  stepData: any
): string {
  const workItems = process.fourW.work;
  
  if (workItems.length === 0) {
    // Fallback to generic description
    return stepData.agent?.responsibility 
      ? extractWorkDescription(stepData.agent.responsibility)
      : 'Process and complete step';
  }
  
  let workItem: string;
  
  if (isAgentic) {
    // For agentic: map agents to work items (use as-is, these describe automated work)
    const workMapping = mapWorkToStepsAgentic(process);
    workItem = workMapping.get(stepIndex) || workItems[Math.min(stepIndex, workItems.length - 1)];
  } else {
    // For current: map pattern steps to work items, then transform to manual process
    const allPatterns = getAllAgenticPatterns();
    const pattern = allPatterns.find((p) => p.id === process.agenticPattern);
    const patternSteps = pattern?.name.split(' → ') || [];
    const workMapping = mapWorkToStepsCurrent(process, patternSteps);
    const agenticWorkItem = workMapping.get(stepIndex) || workItems[Math.min(stepIndex, workItems.length - 1)];
    // Transform to current/manual process description
    workItem = transformToCurrentProcess(agenticWorkItem);
  }
  
  return extractWorkDescription(workItem);
}

// Generate steps from actual process agents (for agentic process)
function getAgenticProcessSteps(process: Process) {
  return process.agents.map((agent, index) => {
    const agentLower = agent.name.toLowerCase();
    let time = '';
    
    if (agentLower.includes('intake') || agentLower.includes('collect') || agentLower.includes('ingest')) {
      time = '< 5 min';
    } else if (agentLower.includes('analyze') || agentLower.includes('assess') || agentLower.includes('diagnose')) {
      time = '< 2 min';
    } else if (agentLower.includes('configure') || agentLower.includes('design') || agentLower.includes('optimize')) {
      time = '< 10 min';
    } else if (agentLower.includes('validate') || agentLower.includes('verify') || agentLower.includes('reconcile')) {
      time = '< 1 min';
    } else if (agentLower.includes('approve') || agentLower.includes('authorize')) {
      time = '< 4 hours';
    } else if (agentLower.includes('execute') || agentLower.includes('implement') || agentLower.includes('provision')) {
      time = '< 15 min';
    } else if (agentLower.includes('monitor') || agentLower.includes('detect')) {
      time = 'Real-time';
    } else if (agentLower.includes('resolve') || agentLower.includes('remediate')) {
      time = '< 5 min';
    } else if (agentLower.includes('communicate') || agentLower.includes('notification')) {
      time = '< 1 min';
    } else {
      time = '< 5 min';
    }
    
    // Extract step name from agent name (remove "Agent" suffix)
    const stepName = agent.name.replace(' Agent', '').replace(' agent', '');
    
    const stepData: {
      step: string;
      agent: typeof agent;
      time: string;
      requiresApproval: boolean;
      index: number;
      description?: string;
    } = {
      step: stepName,
      agent: agent,
      time,
      requiresApproval: agent.humanApproval || false,
      index: index + 1,
      description: getProcessSpecificStepDescription(process, index, true, {
        step: stepName,
        agent: agent,
        time,
        requiresApproval: agent.humanApproval || false,
        index: index + 1,
      }),
    };
    
    return stepData;
  });
}

// Generate current process steps from pattern
function getCurrentProcessSteps(process: Process) {
  const allPatterns = getAllAgenticPatterns();
  const pattern = allPatterns.find((p) => p.id === process.agenticPattern);
  const patternSteps = pattern?.name.split(' → ') || [];
  
  return patternSteps.map((step, index) => {
    const stepLower = step.toLowerCase();
    let time = '';
    
    if (stepLower.includes('intake') || stepLower.includes('collect')) {
      time = '2-4 hours';
    } else if (stepLower.includes('analyze') || stepLower.includes('assess')) {
      time = '4-8 hours';
    } else if (stepLower.includes('configure') || stepLower.includes('design')) {
      time = '1-2 days';
    } else if (stepLower.includes('validate') || stepLower.includes('verify')) {
      time = '2-6 hours';
    } else if (stepLower.includes('approve') || stepLower.includes('authorize')) {
      time = '1-3 days';
    } else if (stepLower.includes('execute') || stepLower.includes('implement')) {
      time = '4-24 hours';
    } else {
      time = '2-6 hours';
    }
    
    const stepData: {
      step: string;
      time: string;
      index: number;
      description?: string;
    } = {
      step,
      time,
      index: index + 1,
      description: getProcessSpecificStepDescription(process, index, false, {
        step,
        time,
        index: index + 1,
      }),
    };
    
    return stepData;
  });
}

export default function ProcessSchematics({ process }: ProcessSchematicsProps) {
  // Use enhanced step data if available, otherwise generate from pattern/agents
  const currentSteps = process.currentSteps 
    ? process.currentSteps.map(step => ({
        step: step.stepName,
        description: step.description,
        time: step.time,
        index: step.stepNumber,
        actions: step.actions,
        inputs: step.inputs,
        outputs: step.outputs,
        dependencies: step.dependencies,
        decisionPoints: step.decisionPoints,
        errorHandling: step.errorHandling,
      }))
    : getCurrentProcessSteps(process);
    
  const agenticSteps = process.agenticSteps
    ? process.agenticSteps.map(step => ({
        step: step.stepName,
        description: step.description,
        time: step.time,
        index: step.stepNumber,
        agent: process.agents.find(a => a.name.includes(step.stepName.replace(' Agent', ''))),
        requiresApproval: process.agents.find(a => a.name.includes(step.stepName.replace(' Agent', '')))?.humanApproval || false,
        actions: step.actions,
        inputs: step.inputs,
        outputs: step.outputs,
        dependencies: step.dependencies,
        decisionPoints: step.decisionPoints,
        errorHandling: step.errorHandling,
      }))
    : getAgenticProcessSteps(process);
  
  const [activeTab, setActiveTab] = useState<'current' | 'agentic'>('current');

  // Calculate total time for steps
  const calculateTotalTime = (steps: any[]): string => {
    let totalMinutes = 0;
    
    steps.forEach(step => {
      const timeStr = step.time.toLowerCase();
      if (timeStr.includes('real-time')) {
        totalMinutes += 0; // Real-time is continuous
      } else if (timeStr.includes('days')) {
        const days = parseFloat(timeStr) || 1;
        totalMinutes += days * 24 * 60;
      } else if (timeStr.includes('hours')) {
        const hours = parseFloat(timeStr) || 1;
        totalMinutes += hours * 60;
      } else if (timeStr.includes('min')) {
        const mins = parseFloat(timeStr) || 5;
        totalMinutes += mins;
      } else if (timeStr.includes('<')) {
        // Extract number from "< X min" or "< X hours"
        const match = timeStr.match(/<[\s]*(\d+\.?\d*)/);
        if (match) {
          const num = parseFloat(match[1]);
          if (timeStr.includes('hour')) {
            totalMinutes += num * 60;
          } else {
            totalMinutes += num;
          }
        }
      } else {
        // Default estimate
        totalMinutes += 30;
      }
    });
    
    if (totalMinutes < 60) {
      return `${Math.round(totalMinutes)} min`;
    } else if (totalMinutes < 1440) {
      return `${(totalMinutes / 60).toFixed(1)} hours`;
    } else {
      return `${(totalMinutes / 1440).toFixed(1)} days`;
    }
  };

  const currentTotalTime = calculateTotalTime(currentSteps);
  const agenticTotalTime = calculateTotalTime(agenticSteps);

  // Render step card
  const renderStepCard = (stepData: any, isAgentic: boolean = false) => {
    const borderColor = isAgentic 
      ? (stepData.requiresApproval ? 'border-accent-400' : 'border-accent')
      : 'border-primary-300';
    const badgeBg = isAgentic ? 'bg-accent' : 'bg-primary-600';
    const iconColor = isAgentic ? 'text-accent' : 'text-primary-600';
    const timeColor = isAgentic ? 'text-accent' : 'text-primary-600';
    
    // Use process-specific description if available, otherwise fallback
    const description = stepData.description || (isAgentic 
      ? extractWorkDescription(stepData.agent?.responsibility || 'Process step')
      : 'Process and complete step');
    
    return (
      <div className={`relative rounded-lg border-2 ${borderColor} bg-white p-6 shadow-sm w-64 h-64 flex flex-col`}>
        {/* Step Number Badge */}
        <div className={`absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full ${badgeBg} text-sm font-bold text-white z-10`}>
          {String(stepData.index).padStart(2, '0')}
        </div>
        
        {/* Icon */}
        <div className={`mb-3 flex items-center justify-center ${iconColor} flex-shrink-0`}>
          {getStepIcon(stepData.step, stepData.agent?.name)}
        </div>
        
        {/* Step Name */}
        <h4 className="mb-2 text-center text-base font-bold text-primary-900 flex-shrink-0 min-h-[3rem] flex items-center justify-center px-2">
          <span className="overflow-hidden" style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis'
          }}>{stepData.step}</span>
        </h4>
        
        {/* Description */}
        <p className="mb-3 text-center text-sm text-primary-700 leading-relaxed flex-grow min-h-[4.5rem] flex items-center justify-center px-2">
          <span className="overflow-hidden" style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis'
          }}>{description}</span>
        </p>
        
        {/* Time */}
        <div className={`flex items-center justify-center space-x-2 text-sm font-medium ${timeColor} flex-shrink-0`}>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{stepData.time}</span>
        </div>
      </div>
    );
  };

  // Render simple flow
  const renderFlow = (steps: any[], isAgentic: boolean = false) => {
    return (
      <div className="space-y-8">
        {/* Steps in a simple horizontal flow */}
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {steps.map((stepData, index) => (
            <div key={index} className="relative flex items-center">
              {renderStepCard(stepData, isAgentic)}
              
              {/* Arrow to next step */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 flex items-center">
                  <svg className={`h-10 w-10 ${isAgentic ? 'text-accent-400' : 'text-primary-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="rounded-lg border border-primary-200 bg-white shadow-sm">
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
              <div className="flex items-center space-x-2">
                <span>Current Process</span>
                <span className="text-xs font-normal text-primary-500">({currentTotalTime})</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('agentic')}
              className={`flex-shrink-0 px-6 py-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                activeTab === 'agentic'
                  ? 'border-b-2 border-accent text-accent bg-white'
                  : 'text-primary-600 hover:text-accent hover:bg-primary-50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span>Agentic Process</span>
                <span className="text-xs font-normal text-accent-500">({agenticTotalTime})</span>
              </div>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8">
          {activeTab === 'current' && renderFlow(currentSteps, false)}
          {activeTab === 'agentic' && renderFlow(agenticSteps, true)}
        </div>
      </div>
    </div>
  );
}
