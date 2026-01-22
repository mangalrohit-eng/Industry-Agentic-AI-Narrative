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
  kpis: string[];
  valueThemes: string[];
  fourW: {
    work: string[];
    workforce: string[];
    workbench: string[];
    digitalCore: string[];
  };
  agenticPattern: string;
  agents: {
    name: string;
    responsibility: string;
    humanApproval?: boolean;
  }[];
  benefits: string[];
  risksAndControls: string[];
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
