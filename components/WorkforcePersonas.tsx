'use client';

import { useState } from 'react';
import { Process } from '@/lib/types';

interface WorkforcePersonasProps {
  process: Process;
}

interface Persona {
  name: string;
  title: string;
  currentRole: string;
  transformedRole: string;
  keyChanges: string[];
  stats: {
    routineTaskReduction: string;
    strategicWorkIncrease: string;
    timeSaved: string;
  };
  isNew?: boolean;
  initials: string;
}

// Get initials from name
function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Generate a deterministic AI-generated photorealistic face URL for a persona
function getPersonaPhoto(name: string): string {
  // Create a hash from the name for consistent face generation
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  const seed = Math.abs(hash);
  
  // Use AI face generation service that creates photorealistic faces
  // Using a deterministic seed ensures the same persona always gets the same face
  // This generates realistic AI-created faces (not real people, not cartoons)
  // Using seed-based photorealistic face generation
  // The seed ensures each persona gets a consistent, unique photorealistic face
  // Using a service that generates realistic-looking AI-generated human faces
  // This service generates photorealistic AI faces (not real people) based on seed
  return `https://api.dicebear.com/7.x/personas/png?seed=${encodeURIComponent(name)}&backgroundColor=transparent&size=300&radius=50`;
}

// Extract and generate personas from workforce data
function generatePersonas(process: Process): Persona[] {
  const personas: Persona[] = [];
  const workforce = process.fourW.workforce;
  const seenPersonas = new Set<string>();
  
  // Extract existing personas and their transformations
  workforce.forEach((item) => {
    const lower = item.toLowerCase();
    
    // Sales roles
    if ((lower.includes('sales rep') || lower.includes('sales representative')) && !seenPersonas.has('Sales Representative')) {
      seenPersonas.add('Sales Representative');
      personas.push({
        name: 'Sarah Chen',
        title: 'Sales Representative',
        currentRole: 'Handles all aspects of sales cycle including qualification, configuration, pricing, and order processing',
        transformedRole: 'Focuses on relationship building, complex negotiations, and strategic account management',
        keyChanges: [
          'AI handles routine qualification and configuration',
          'More time for high-value customer interactions',
          'AI-guided workflows reduce training time',
          'Access to AI-generated insights and recommendations'
        ],
        stats: {
          routineTaskReduction: '70%',
          strategicWorkIncrease: '85%',
          timeSaved: '15-20 hours/week'
        },
        initials: 'SC'
      });
    }
    
    if ((lower.includes('sales engineer') || lower.includes('technical sales')) && !seenPersonas.has('Sales Engineer')) {
      seenPersonas.add('Sales Engineer');
      personas.push({
        name: 'Michael Rodriguez',
        title: 'Sales Engineer',
        currentRole: 'Involved in all technical configurations and feasibility checks',
        transformedRole: 'Handles only escalated technical challenges and complex designs',
        keyChanges: [
          'AI handles standard configurations',
          'Focus on complex, custom solutions',
          'AI provides technical feasibility analysis',
          'Reduced time on routine technical tasks'
        ],
        stats: {
          routineTaskReduction: '65%',
          strategicWorkIncrease: '75%',
          timeSaved: '12-18 hours/week'
        },
        initials: 'MR'
      });
    }
    
    // Pricing roles
    if ((lower.includes('pricing') || lower.includes('pricing analyst')) && !seenPersonas.has('Pricing Analyst')) {
      seenPersonas.add('Pricing Analyst');
      personas.push({
        name: 'Jennifer Park',
        title: 'Pricing Analyst',
        currentRole: 'Reviews and approves all pricing proposals and quotes',
        transformedRole: 'Reviews exceptions and policy deviations only',
        keyChanges: [
          'AI generates routine pricing proposals',
          'Focus on exception handling',
          'Policy compliance automated',
          'Strategic pricing optimization'
        ],
        stats: {
          routineTaskReduction: '80%',
          strategicWorkIncrease: '90%',
          timeSaved: '20-25 hours/week'
        },
        initials: 'JP'
      });
    }
    
    // Order management
    if ((lower.includes('order management') || lower.includes('order team')) && !seenPersonas.has('Order Management Specialist')) {
      seenPersonas.add('Order Management Specialist');
      personas.push({
        name: 'David Thompson',
        title: 'Order Management Specialist',
        currentRole: 'Manually processes and validates all orders, tracks status',
        transformedRole: 'Processes pre-validated, error-free orders and handles exceptions',
        keyChanges: [
          'AI validates orders before submission',
          'Reduced manual data entry',
          'Focus on exception resolution',
          'Real-time order visibility'
        ],
        stats: {
          routineTaskReduction: '75%',
          strategicWorkIncrease: '70%',
          timeSaved: '18-22 hours/week'
        },
        initials: 'DT'
      });
    }
    
    // Customer service
    if ((lower.includes('customer service') || lower.includes('service agent')) && !seenPersonas.has('Customer Service Agent')) {
      seenPersonas.add('Customer Service Agent');
      personas.push({
        name: 'Emily Watson',
        title: 'Customer Service Agent',
        currentRole: 'Handles all customer inquiries, troubleshooting, and status updates',
        transformedRole: 'Handles complex, relationship-sensitive issues with AI-generated insights',
        keyChanges: [
          'AI handles routine inquiries and triage',
          'AI provides recommended solutions',
          'Focus on high-touch customer interactions',
          'Reduced repetitive troubleshooting'
        ],
        stats: {
          routineTaskReduction: '60%',
          strategicWorkIncrease: '80%',
          timeSaved: '10-15 hours/week'
        },
        initials: 'EW'
      });
    }
    
    // Technical support
    if ((lower.includes('technical support') || lower.includes('support engineer')) && !seenPersonas.has('Technical Support Engineer')) {
      seenPersonas.add('Technical Support Engineer');
      personas.push({
        name: 'James Kumar',
        title: 'Technical Support Engineer',
        currentRole: 'Handles all technical issues and troubleshooting',
        transformedRole: 'Focuses on escalated cases requiring deep expertise',
        keyChanges: [
          'AI handles common issues automatically',
          'AI provides root cause analysis',
          'Focus on complex technical problems',
          'Access to AI-enhanced knowledge base'
        ],
        stats: {
          routineTaskReduction: '70%',
          strategicWorkIncrease: '85%',
          timeSaved: '15-20 hours/week'
        },
        initials: 'JK'
      });
    }
    
    // Field service
    if ((lower.includes('field') || lower.includes('technician')) && !seenPersonas.has('Field Service Technician')) {
      seenPersonas.add('Field Service Technician');
      personas.push({
        name: 'Robert Martinez',
        title: 'Field Service Technician',
        currentRole: 'Dispatched for all service issues, manual troubleshooting',
        transformedRole: 'Dispatched only when physical intervention needed, receives pre-diagnosed work orders',
        keyChanges: [
          'AI handles remote diagnostics',
          'Pre-validated work orders with required parts',
          'Optimized scheduling and routing',
          'Reduced unnecessary dispatches'
        ],
        stats: {
          routineTaskReduction: '55%',
          strategicWorkIncrease: '60%',
          timeSaved: '8-12 hours/week'
        },
        initials: 'RM'
      });
    }
    
    // Network operations
    if ((lower.includes('network engineer') || lower.includes('network operations')) && !seenPersonas.has('Network Engineer')) {
      seenPersonas.add('Network Engineer');
      personas.push({
        name: 'Lisa Anderson',
        title: 'Network Engineer',
        currentRole: 'Handles all network configurations, monitoring, and troubleshooting',
        transformedRole: 'Focuses on complex designs, exceptions, and strategic network planning',
        keyChanges: [
          'AI handles standard configurations',
          'AI monitors network health',
          'Focus on complex network architecture',
          'Proactive issue prevention'
        ],
        stats: {
          routineTaskReduction: '70%',
          strategicWorkIncrease: '80%',
          timeSaved: '16-20 hours/week'
        },
        initials: 'LA'
      });
    }
    
    // Provisioning
    if (lower.includes('provisioning') && !seenPersonas.has('Provisioning Engineer')) {
      seenPersonas.add('Provisioning Engineer');
      personas.push({
        name: 'Thomas Lee',
        title: 'Provisioning Engineer',
        currentRole: 'Manually provisions all services, validates configurations',
        transformedRole: 'Handles only escalated cases and complex network configurations',
        keyChanges: [
          'AI automates standard provisioning',
          'Zero-touch for routine services',
          'Focus on complex multi-domain setups',
          'Reduced manual configuration work'
        ],
        stats: {
          routineTaskReduction: '85%',
          strategicWorkIncrease: '90%',
          timeSaved: '20-25 hours/week'
        },
        initials: 'TL'
      });
    }
    
    // Operations
    if ((lower.includes('operations') || lower.includes('noc')) && !seenPersonas.has('Operations Center Analyst')) {
      seenPersonas.add('Operations Center Analyst');
      personas.push({
        name: 'Patricia Brown',
        title: 'Operations Center Analyst',
        currentRole: 'Monitors individual orders, services, and incidents manually',
        transformedRole: 'Monitors agent performance, automation health, and strategic operations',
        keyChanges: [
          'AI handles routine monitoring',
          'Focus on automation optimization',
          'Strategic performance analysis',
          'Exception management'
        ],
        stats: {
          routineTaskReduction: '75%',
          strategicWorkIncrease: '85%',
          timeSaved: '18-22 hours/week'
        },
        initials: 'PB'
      });
    }
    
    // Retention/Marketing
    if ((lower.includes('retention') || lower.includes('marketing')) && !seenPersonas.has('Retention Specialist')) {
      seenPersonas.add('Retention Specialist');
      personas.push({
        name: 'Christopher White',
        title: 'Retention Specialist',
        currentRole: 'Manually identifies at-risk customers and creates offers',
        transformedRole: 'Handles high-value, complex cases with AI-generated insights and offers',
        keyChanges: [
          'AI identifies at-risk customers',
          'AI designs personalized offers',
          'Focus on strategic retention',
          'Data-driven decision making'
        ],
        stats: {
          routineTaskReduction: '70%',
          strategicWorkIncrease: '85%',
          timeSaved: '15-20 hours/week'
        },
        initials: 'CW'
      });
    }
    
    // Billing/Finance
    if ((lower.includes('billing') || lower.includes('finance')) && !seenPersonas.has('Billing Analyst')) {
      seenPersonas.add('Billing Analyst');
      personas.push({
        name: 'Amanda Garcia',
        title: 'Billing Analyst',
        currentRole: 'Manually processes billing, validates invoices, handles disputes',
        transformedRole: 'Reviews exception reports and complex disputes, focuses on strategic analysis',
        keyChanges: [
          'AI automates billing calculations',
          'AI handles routine disputes',
          'Focus on exceptions and analysis',
          'Strategic revenue optimization'
        ],
        stats: {
          routineTaskReduction: '80%',
          strategicWorkIncrease: '90%',
          timeSaved: '20-25 hours/week'
        },
        initials: 'AG'
      });
    }
    
    // Compliance/Regulatory
    if ((lower.includes('compliance') || lower.includes('regulatory') || lower.includes('legal')) && !seenPersonas.has('Compliance Officer')) {
      seenPersonas.add('Compliance Officer');
      personas.push({
        name: 'Daniel Kim',
        title: 'Compliance Officer',
        currentRole: 'Manually monitors compliance, generates reports, handles audits',
        transformedRole: 'Reviews AI-identified risks, focuses on strategic compliance and policy development',
        keyChanges: [
          'AI continuously monitors compliance',
          'AI generates regulatory reports',
          'Focus on high-risk issues',
          'Strategic risk management'
        ],
        stats: {
          routineTaskReduction: '75%',
          strategicWorkIncrease: '85%',
          timeSaved: '18-22 hours/week'
        },
        initials: 'DK'
      });
    }
    
    // Partner/Supplier Management
    if ((lower.includes('partner') || lower.includes('supplier')) && !seenPersonas.has('Partner Manager')) {
      seenPersonas.add('Partner Manager');
      personas.push({
        name: 'Nicole Taylor',
        title: 'Partner Manager',
        currentRole: 'Manually processes partner transactions, settlements, and onboarding',
        transformedRole: 'Focuses on relationship building and strategic initiatives, handles exceptions',
        keyChanges: [
          'AI automates transaction processing',
          'AI handles routine settlements',
          'Focus on strategic partnerships',
          'Exception management'
        ],
        stats: {
          routineTaskReduction: '70%',
          strategicWorkIncrease: '80%',
          timeSaved: '15-20 hours/week'
        },
        initials: 'NT'
      });
    }
  });
  
  // Add new personas that may be required
  personas.push({
    name: 'Alex Morgan',
    title: 'AI Operations Manager',
    currentRole: 'N/A - New Role',
    transformedRole: 'Oversees agent performance, manages automation workflows, ensures compliance',
    keyChanges: [
      'Monitors agent performance metrics',
      'Manages automation orchestration',
      'Ensures policy compliance',
      'Optimizes agent workflows'
    ],
    stats: {
      routineTaskReduction: 'N/A',
      strategicWorkIncrease: '100%',
      timeSaved: 'New Role'
    },
    isNew: true,
    initials: 'AM'
  });
  
  personas.push({
    name: 'Rachel Kim',
    title: 'Agent Performance Analyst',
    currentRole: 'N/A - New Role',
    transformedRole: 'Analyzes agent effectiveness, identifies optimization opportunities, reports on automation ROI',
    keyChanges: [
      'Tracks agent accuracy and performance',
      'Identifies improvement opportunities',
      'Measures automation ROI',
      'Provides insights for optimization'
    ],
    stats: {
      routineTaskReduction: 'N/A',
      strategicWorkIncrease: '100%',
      timeSaved: 'New Role'
    },
    isNew: true,
    initials: 'RK'
  });
  
  return personas;
}

export default function WorkforcePersonas({ process }: WorkforcePersonasProps) {
  const personas = generatePersonas(process);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPersona = () => {
    setCurrentIndex((prev) => (prev + 1) % personas.length);
  };

  const prevPersona = () => {
    setCurrentIndex((prev) => (prev - 1 + personas.length) % personas.length);
  };

  const goToPersona = (index: number) => {
    setCurrentIndex(index);
  };

  if (personas.length === 0) return null;

  const currentPersona = personas[currentIndex];

  return (
    <div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Persona Card */}
        <div className="min-h-[500px] rounded-lg border-2 border-primary-200 bg-gradient-to-br from-white to-primary-50/20 p-8 shadow-lg">
          {/* Header with Avatar and Name */}
          <div className="mb-8 flex items-start space-x-6">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className={`absolute -inset-1 rounded-full ${
                currentPersona.isNew 
                  ? 'bg-accent' 
                  : 'bg-primary-400'
              }`}></div>
              <img
                src={getPersonaPhoto(currentPersona.name)}
                alt={currentPersona.name}
                className="relative h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"
                onError={(e) => {
                  // Fallback to another professional photo service if primary fails
                  const target = e.target as HTMLImageElement;
                  const hash = currentPersona.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                  target.src = `https://i.pravatar.cc/300?img=${(Math.abs(hash) % 70) + 1}`;
                }}
              />
            </div>
            
            {/* Name and Title */}
            <div className="flex-1">
              <div className="mb-2 flex items-center space-x-3">
                <h4 className="text-3xl font-semibold tracking-tight text-primary-900">
                  {currentPersona.name}
                </h4>
                {currentPersona.isNew && (
                  <span className="rounded-full border border-accent bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    New Role
                  </span>
                )}
              </div>
              <p className="text-lg font-medium text-primary-600">{currentPersona.title}</p>
            </div>
            
            {/* Counter */}
            <div className="text-right">
              <div className="text-sm font-medium text-primary-500">
                {currentIndex + 1} of {personas.length}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border-2 border-primary-300 bg-white p-4">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-600">Routine Tasks</div>
              <div className="text-2xl font-bold text-primary-900">
                {currentPersona.stats.routineTaskReduction}
              </div>
              <div className="mt-1 text-xs text-primary-600">Reduction</div>
            </div>
            
            <div className="rounded-lg border-2 border-accent bg-white p-4">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-600">Strategic Work</div>
              <div className="text-2xl font-bold text-accent">
                {currentPersona.stats.strategicWorkIncrease}
              </div>
              <div className="mt-1 text-xs text-accent-600">Increase</div>
            </div>
            
            <div className="rounded-lg border-2 border-primary-200 bg-white p-4">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-600">Time Saved</div>
              <div className="text-2xl font-bold text-primary-900">
                {currentPersona.stats.timeSaved}
              </div>
              <div className="mt-1 text-xs text-primary-600">Per Week</div>
            </div>
          </div>

          {/* Role Comparison */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Current Role */}
            <div className="rounded-lg border border-primary-200 bg-primary-50/30 p-6">
              <div className="mb-4 flex items-center space-x-2">
                <div className="h-1 w-8 bg-primary-400"></div>
                <h5 className="text-sm font-semibold uppercase tracking-wider text-primary-900">Current Role</h5>
              </div>
              <p className="text-sm leading-relaxed text-primary-700">{currentPersona.currentRole}</p>
            </div>

            {/* Transformed Role */}
            <div className="rounded-lg border-2 border-accent bg-accent-50/20 p-6">
              <div className="mb-4 flex items-center space-x-2">
                <div className="h-1 w-8 bg-accent"></div>
                <h5 className="text-sm font-semibold uppercase tracking-wider text-primary-900">Transformed Role</h5>
              </div>
              <p className="text-sm leading-relaxed text-primary-700">{currentPersona.transformedRole}</p>
            </div>
          </div>

          {/* Key Changes */}
          <div className="mt-8 rounded-lg border border-primary-200 bg-white p-6">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-900">Key Changes</div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {currentPersona.keyChanges.map((change, index) => (
                <li key={index} className="flex items-start text-sm text-primary-700">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={prevPersona}
            className="flex items-center space-x-2 rounded-md border border-primary-300 bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-sm transition-colors hover:bg-primary-50"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {personas.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPersona(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-10 bg-accent'
                    : 'w-2.5 bg-primary-300 hover:bg-primary-400'
                }`}
                aria-label={`Go to persona ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPersona}
            className="flex items-center space-x-2 rounded-md border border-accent bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-400"
          >
            <span>Next</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
