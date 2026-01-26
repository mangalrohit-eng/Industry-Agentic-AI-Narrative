export type Process = {
  id: string;
  name: string;
  category: 
    | "Customer & Revenue" 
    | "Service & Operations" 
    | "Network & Technology" 
    | "Enterprise & Support"
    | "Content & Production"
    | "Revenue & Monetization"
    | "Customer Experience"
    | "Operations & Governance";
  description: string;
  businessGoal: string;
  kpis: string[] | KPI[];
  valueThemes: string[];
  fourW: {
    work: string[];
    workforce: string[];
    workbench: string[];
    digitalCore: string[];
  };
  agenticPattern: string;
  agents: Agent[];
  benefits: string[] | Benefit[];
  risksAndControls: string[] | RiskControl[];
  // Optional enhanced fields
  industryContext?: IndustryContext;
  currentSteps?: ProcessStep[];
  agenticSteps?: ProcessStep[];
  workforcePersonas?: WorkforcePersona[];
  systems?: SystemIntegration[];
  implementationRoadmap?: ImplementationRoadmap;
  roi?: ROI;
  context?: ProcessContext;
  caseStudies?: CaseStudy[];
  architecture?: TechnicalArchitecture;
  timeEstimates?: TimeEstimates;
  dependencies?: Dependencies;
};

export type KPI = {
  name: string;
  baseline: number;
  target: number;
  improvement: string;
  unit: string;
  category: string;
  priority: string;
};

export type Agent = {
  name: string;
  responsibility: string;
  humanApproval?: boolean;
  capabilities?: string[];
  systemsAccessed?: string[];
  decisionLogic?: string;
  inputDataSources?: string[];
  outputDestinations?: string[];
  errorHandling?: string;
  performanceMetrics?: {
    accuracy?: string;
    speed?: string;
    successRate?: string;
  };
  learningEnabled?: boolean;
};

export type Benefit = {
  description: string;
  baseline?: string;
  target?: string;
  confidence?: string;
  timeToRealize?: string;
  prerequisites?: string[];
  measurementMethod?: string;
  examples?: string[];
};

export type RiskControl = {
  description: string;
  category?: string;
  severity?: string;
  likelihood?: string;
  mitigationStrategy?: string;
  monitoringApproach?: string;
  escalationPath?: string;
  complianceRequirements?: string[];
};

export type IndustryContext = {
  statistics: Array<{
    label: string;
    value: string;
    change: string;
  }>;
  insights: string[];
  trends: string[];
};

export type ProcessStep = {
  stepNumber: number;
  stepName: string;
  description: string;
  time: string;
  actions: string[];
  inputs: string[];
  outputs: string[];
  dependencies: string[];
  decisionPoints: string[];
  errorHandling: string;
};

export type WorkforcePersona = {
  name: string;
  title: string;
  currentRole: string;
  transformedRole: string;
  tasksRemoved: string[];
  tasksAdded: string[];
  trainingRequirements: string[];
  timeAllocation: {
    before: {
      routineTasks: string;
      strategicWork: string;
    };
    after: {
      routineTasks: string;
      strategicWork: string;
    };
  };
  careerPathImpact: string;
  stats: {
    routineTaskReduction: string;
    strategicWorkIncrease: string;
    timeSaved: string;
  };
};

export type SystemIntegration = {
  name: string;
  type: string;
  integrationMethod: string;
  dataExchanged: string[];
  complexity: string;
  criticality: string;
  vendor?: string;
  integrationTimeline: string;
  dependencies: string[];
};

export type ImplementationRoadmap = {
  phase1: Phase;
  phase2: Phase;
  phase3: Phase;
  phase4: Phase;
  totalTimeline: string;
  resourceRequirements: {
    teamSize: string;
    skills: string[];
  };
  budgetEstimate?: string;
  prerequisites: string[];
};

export type Phase = {
  name: string;
  duration: string;
  activities: string[];
  stakeholders: string[];
  deliverables: string[];
  successCriteria: string[];
};

export type ROI = {
  investment: {
    technology: string;
    implementation: string;
    training: string;
    maintenance: string;
    total: string;
  };
  returns: {
    costSavings: string;
    revenueImpact: string;
    efficiencyGains: string;
    timeSavings: string;
  };
  paybackPeriod: string;
  threeYearNPV?: string;
  riskAdjustedROI?: string;
};

export type ProcessContext = {
  businessImpact: string;
  currentPainPoints: string[];
  transformationVision: string;
  competitiveAdvantage: string;
  customerImpact: string;
  strategicAlignment: string;
};

export type CaseStudy = {
  title: string;
  industry: string;
  results: string;
  lessonsLearned: string;
  bestPractices: string[];
};

export type TechnicalArchitecture = {
  orchestrationPattern: string;
  dataFlow: string;
  decisionPoints: string[];
  errorHandling: string;
  scalability: string;
  security: string[];
};

export type TimeEstimates = {
  currentProcess: {
    totalTime: string;
    steps: Array<{
      stepName: string;
      time: string;
    }>;
    bottlenecks: string[];
  };
  agenticProcess: {
    totalTime: string;
    steps: Array<{
      stepName: string;
      time: string;
    }>;
    bottlenecks: string[];
  };
  savings: {
    absolute: string;
    percentage: string;
  };
};

export type Dependencies = {
  processDependencies: string[];
  systemDependencies: string[];
  dataDependencies: string[];
  organizationalDependencies: string[];
  technologyPrerequisites: string[];
};

export type ValueTheme = {
  id: string;
  name: string;
  description: string;
};

export type AgenticPattern = {
  id: string;
  name: string;
  description: string;
};
