# Process Details Page - Data Requirements

This document specifies all data needed for each process and the required format.

---

## 1. Industry Context & Market Data

**Format:** JSON object with arrays

```json
{
  "industryContext": {
    "statistics": [
      {
        "label": "Average Sales Cycle",
        "value": "45-60 days",
        "change": "-40%"
      }
    ],
    "insights": [
      "B2B telecom sales cycles average 45-60 days, with 30% of time spent on configuration and pricing"
    ],
    "trends": [
      "Growing demand for personalized enterprise solutions"
    ]
  }
}
```

**Required:**
- 3-5 statistics (label, value, change percentage)
- 3-5 insights (market pain points, cost/impact data)
- 3-5 trends (industry-specific trends, technology shifts)

---

## 2. KPI Details

**Format:** Array of objects

```json
{
  "kpis": [
    {
      "name": "Sales cycle time (days)",
      "baseline": 45,
      "target": 25,
      "improvement": "30-45% reduction",
      "unit": "days",
      "category": "efficiency",
      "priority": "primary"
    }
  ]
}
```

**Required for each KPI:**
- `name`: KPI name (string)
- `baseline`: Current value (number)
- `target`: Target value after transformation (number)
- `improvement`: Improvement range (string, e.g., "30-45% reduction")
- `unit`: Measurement unit (string: "days", "percentage", "dollars", etc.)
- `category`: KPI category (string: "efficiency", "quality", "revenue", "customer-satisfaction")
- `priority`: Priority level (string: "primary", "secondary")

---

## 3. Process Flow Step Details

**Format:** Array of step objects (separate for current and agentic)

```json
{
  "currentSteps": [
    {
      "stepNumber": 1,
      "stepName": "Collect",
      "description": "Manual data collection",
      "time": "2-4 hours",
      "actions": ["Gather customer requirements", "Review existing documentation"],
      "inputs": ["Customer request", "Historical data"],
      "outputs": ["Collected data set"],
      "dependencies": [],
      "decisionPoints": [],
      "errorHandling": "Manual review and correction"
    }
  ],
  "agenticSteps": [
    {
      "stepNumber": 1,
      "stepName": "Lead Qualification Agent",
      "description": "Automated lead scoring",
      "time": "< 5 min",
      "actions": ["Analyze lead data", "Score prospects"],
      "inputs": ["Lead data", "Firmographic data"],
      "outputs": ["Qualified lead score"],
      "dependencies": [],
      "decisionPoints": ["Qualification threshold"],
      "errorHandling": "Escalate to human if confidence < 80%"
    }
  ]
}
```

**Required for each step:**
- `stepNumber`: Step number (number)
- `stepName`: Step name (string)
- `description`: Brief description (string, 4-5 words)
- `time`: Time estimate (string)
- `actions`: Array of specific actions (string[])
- `inputs`: Array of required inputs (string[])
- `outputs`: Array of generated outputs (string[])
- `dependencies`: Array of prerequisite steps (string[])
- `decisionPoints`: Array of decision points (string[])
- `errorHandling`: Error handling strategy (string)

---

## 4. Agent Details

**Format:** Array of agent objects (enhanced from current structure)

```json
{
  "agents": [
    {
      "name": "Lead Qualification Agent",
      "responsibility": "Analyzes lead data, firmographics, and engagement signals to score and qualify prospects",
      "humanApproval": false,
      "capabilities": ["Lead scoring", "Firmographic analysis", "Engagement tracking"],
      "systemsAccessed": ["CRM", "Marketing Automation Platform"],
      "decisionLogic": "Scores leads based on firmographic fit and engagement signals",
      "inputDataSources": ["CRM lead data", "Website analytics", "Email engagement"],
      "outputDestinations": ["Sales queue", "CRM record"],
      "errorHandling": "Escalates to human if data quality issues detected",
      "performanceMetrics": {
        "accuracy": "92%",
        "speed": "< 5 min",
        "successRate": "95%"
      },
      "learningEnabled": true
    }
  ]
}
```

**Required for each agent:**
- `name`: Agent name (string)
- `responsibility`: Agent responsibility (string)
- `humanApproval`: Requires human approval (boolean)
- `capabilities`: Array of specific capabilities (string[])
- `systemsAccessed`: Array of systems/APIs accessed (string[])
- `decisionLogic`: Description of decision logic (string)
- `inputDataSources`: Array of input data sources (string[])
- `outputDestinations`: Array of output destinations (string[])
- `errorHandling`: Error handling strategy (string)
- `performanceMetrics`: Object with accuracy, speed, successRate (object)
- `learningEnabled`: Whether agent learns over time (boolean)

---

## 5. Workforce Persona Details

**Format:** Array of persona objects

```json
{
  "workforcePersonas": [
    {
      "name": "Sarah Chen",
      "title": "Sales Representative",
      "currentRole": "Handles all aspects of sales cycle including qualification, configuration, pricing, and order processing",
      "transformedRole": "Focuses on relationship building, complex negotiations, and strategic account management",
      "tasksRemoved": ["Lead qualification", "Product configuration", "Quote generation"],
      "tasksAdded": ["Strategic account planning", "Complex negotiation", "Relationship management"],
      "trainingRequirements": ["AI tool usage", "Strategic selling", "Account management"],
      "timeAllocation": {
        "before": {
          "routineTasks": "70%",
          "strategicWork": "30%"
        },
        "after": {
          "routineTasks": "15%",
          "strategicWork": "85%"
        }
      },
      "careerPathImpact": "Evolves to Strategic Account Manager role",
      "stats": {
        "routineTaskReduction": "70%",
        "strategicWorkIncrease": "85%",
        "timeSaved": "15-20 hours/week"
      }
    }
  ]
}
```

**Required for each persona:**
- `name`: Persona name (string)
- `title`: Job title (string)
- `currentRole`: Current role description (string)
- `transformedRole`: Transformed role description (string)
- `tasksRemoved`: Array of automated tasks (string[])
- `tasksAdded`: Array of new responsibilities (string[])
- `trainingRequirements`: Array of training needs (string[])
- `timeAllocation`: Object with before/after percentages (object)
- `careerPathImpact`: Career evolution description (string)
- `stats`: Object with routineTaskReduction, strategicWorkIncrease, timeSaved (object)

---

## 6. System Integration Details

**Format:** Array of system objects

```json
{
  "systems": [
    {
      "name": "CRM (Salesforce, Microsoft Dynamics 365)",
      "type": "CRM",
      "integrationMethod": "API",
      "dataExchanged": ["Lead data", "Account information", "Opportunity records"],
      "complexity": "moderate",
      "criticality": "critical",
      "vendor": "Salesforce",
      "integrationTimeline": "4-6 weeks",
      "dependencies": ["Identity provider", "Data warehouse"]
    }
  ]
}
```

**Required for each system:**
- `name`: System name (string)
- `type`: System type (string: "CRM", "OSS", "BSS", "Analytics", etc.)
- `integrationMethod`: Integration method (string: "API", "ETL", "real-time", "batch")
- `dataExchanged`: Array of data types exchanged (string[])
- `complexity`: Integration complexity (string: "simple", "moderate", "complex")
- `criticality`: Criticality level (string: "critical", "important", "optional")
- `vendor`: Vendor/product name (string, optional)
- `integrationTimeline`: Integration timeline (string)
- `dependencies`: Array of prerequisite systems (string[])

---

## 7. Benefits Quantification

**Format:** Array of benefit objects (enhanced from current structure)

```json
{
  "benefits": [
    {
      "description": "30-45% reduction in sales cycle time through automated qualification and configuration",
      "baseline": "45 days",
      "target": "25 days",
      "confidence": "high",
      "timeToRealize": "6-9 months",
      "prerequisites": ["CRM integration", "Product catalog setup"],
      "measurementMethod": "Track average sales cycle time from lead to order",
      "examples": ["Company X achieved 40% reduction in 8 months"]
    }
  ]
}
```

**Required for each benefit:**
- `description`: Benefit description (string)
- `baseline`: Current baseline value (string)
- `target`: Target value (string)
- `confidence`: Confidence level (string: "high", "medium", "low")
- `timeToRealize`: Time to achieve benefit (string)
- `prerequisites`: Array of prerequisites (string[])
- `measurementMethod`: How benefit is measured (string)
- `examples`: Array of real-world examples (string[])

---

## 8. Risk & Control Details

**Format:** Array of risk/control objects (enhanced from current structure)

```json
{
  "risksAndControls": [
    {
      "description": "Human approval checkpoints for pricing exceptions and high-value orders (>$100K)",
      "category": "business",
      "severity": "high",
      "likelihood": "medium",
      "mitigationStrategy": "Implement automated approval workflows with human override",
      "monitoringApproach": "Track approval rates and exception patterns",
      "escalationPath": "Escalate to pricing manager if exception rate > 10%",
      "complianceRequirements": ["Financial controls", "Audit trail"]
    }
  ]
}
```

**Required for each risk/control:**
- `description`: Risk/control description (string)
- `category`: Risk category (string: "technical", "operational", "compliance", "business")
- `severity`: Risk severity (string: "high", "medium", "low")
- `likelihood`: Likelihood of occurrence (string: "high", "medium", "low")
- `mitigationStrategy`: Mitigation strategy (string)
- `monitoringApproach`: Monitoring approach (string)
- `escalationPath`: Escalation path (string)
- `complianceRequirements`: Array of compliance requirements (string[])

---

## 9. Implementation Roadmap

**Format:** Object with phases

```json
{
  "implementationRoadmap": {
    "phase1": {
      "name": "Assessment",
      "duration": "2-4 weeks",
      "activities": [
        "Map current process flows and pain points",
        "Identify high-impact, low-complexity starting points"
      ],
      "stakeholders": ["Process owners", "IT team", "Business analysts"],
      "deliverables": ["Process map", "Pain point analysis", "Prioritization matrix"],
      "successCriteria": ["Complete process documentation", "Identify 3-5 quick wins"]
    },
    "phase2": {
      "name": "Design & Build",
      "duration": "8-12 weeks",
      "activities": [
        "Design agent architecture and orchestration patterns",
        "Establish human approval checkpoints and guardrails"
      ],
      "stakeholders": ["Architects", "Developers", "Security team"],
      "deliverables": ["Agent design", "Integration plan", "Test plan"],
      "successCriteria": ["Agent prototypes working", "Integration tests passing"]
    },
    "phase3": {
      "name": "Pilot",
      "duration": "4-8 weeks",
      "activities": [
        "Pilot with limited scope and measure results",
        "Iterate based on feedback and performance data"
      ],
      "stakeholders": ["End users", "Process owners", "Support team"],
      "deliverables": ["Pilot report", "Performance metrics", "Lessons learned"],
      "successCriteria": ["80% accuracy rate", "Positive user feedback"]
    },
    "phase4": {
      "name": "Scale",
      "duration": "8-16 weeks",
      "activities": [
        "Scale to full process coverage",
        "Expand to adjacent processes and use cases"
      ],
      "stakeholders": ["All users", "Management", "IT operations"],
      "deliverables": ["Full deployment", "Training materials", "Operations guide"],
      "successCriteria": ["100% process coverage", "Target benefits achieved"]
    },
    "totalTimeline": "22-40 weeks",
    "resourceRequirements": {
      "teamSize": "8-12 people",
      "skills": ["AI/ML engineers", "Integration specialists", "Process analysts"]
    },
    "budgetEstimate": "$500K - $1M",
    "prerequisites": ["Data quality improvements", "System access", "Executive sponsorship"]
  }
}
```

**Required:**
- Four phases (Assessment, Design & Build, Pilot, Scale)
- For each phase: name, duration, activities, stakeholders, deliverables, successCriteria
- `totalTimeline`: Total estimated duration (string)
- `resourceRequirements`: Object with teamSize and skills (object)
- `budgetEstimate`: Budget estimate (string, optional)
- `prerequisites`: Array of prerequisites (string[])

---

## 10. ROI & Business Case

**Format:** Object with financial details

```json
{
  "roi": {
    "investment": {
      "technology": "$200K",
      "implementation": "$300K",
      "training": "$50K",
      "maintenance": "$100K/year",
      "total": "$550K first year"
    },
    "returns": {
      "costSavings": "$400K/year",
      "revenueImpact": "$200K/year",
      "efficiencyGains": "2.5 FTE equivalent",
      "timeSavings": "15,000 hours/year"
    },
    "paybackPeriod": "11 months",
    "threeYearNPV": "$850K",
    "riskAdjustedROI": "145%"
  }
}
```

**Required:**
- `investment`: Object with technology, implementation, training, maintenance, total (object)
- `returns`: Object with costSavings, revenueImpact, efficiencyGains, timeSavings (object)
- `paybackPeriod`: Payback period (string)
- `threeYearNPV`: 3-year NPV (string, optional)
- `riskAdjustedROI`: Risk-adjusted ROI (string, optional)

---

## 11. Process-Specific Context

**Format:** Object with context fields

```json
{
  "context": {
    "businessImpact": "This process directly impacts revenue, customer satisfaction, and competitive positioning",
    "currentPainPoints": [
      "Manual processes take 45-60 days",
      "High error rates in configuration",
      "Limited visibility into sales pipeline"
    ],
    "transformationVision": "Autonomous, self-optimizing system that learns, adapts, and improves over time",
    "competitiveAdvantage": "Faster time-to-market, higher accuracy, better customer experience",
    "customerImpact": "Faster response times, more accurate quotes, better service",
    "strategicAlignment": "Supports digital transformation and customer-first strategy"
  }
}
```

**Required:**
- `businessImpact`: Business impact statement (string)
- `currentPainPoints`: Array of current pain points (string[])
- `transformationVision`: Transformation vision (string)
- `competitiveAdvantage`: Competitive advantage (string)
- `customerImpact`: Customer impact (string)
- `strategicAlignment`: Strategic alignment (string)

---

## 12. Case Studies & Examples

**Format:** Array of case study objects

```json
{
  "caseStudies": [
    {
      "title": "Telecom Provider Achieves 40% Sales Cycle Reduction",
      "industry": "Telecom",
      "results": "Reduced sales cycle from 45 to 27 days",
      "lessonsLearned": "Start with high-volume, low-complexity processes",
      "bestPractices": ["Phased rollout", "Strong change management"]
    }
  ]
}
```

**Required for each case study:**
- `title`: Case study title (string)
- `industry`: Industry (string)
- `results`: Results achieved (string)
- `lessonsLearned`: Lessons learned (string)
- `bestPractices`: Array of best practices (string[])

---

## 13. Technical Architecture

**Format:** Object with architecture details

```json
{
  "architecture": {
    "orchestrationPattern": "Sequential with parallel validation",
    "dataFlow": "Lead data → Qualification Agent → Configuration Agent → Pricing Agent → Approval",
    "decisionPoints": [
      "Qualification threshold (score > 70)",
      "Pricing approval (>$100K)",
      "Order validation (completeness check)"
    ],
    "errorHandling": "Automatic retry for transient errors, escalate to human for business logic errors",
    "scalability": "Horizontal scaling with load balancing, handles 1000+ concurrent requests",
    "security": ["Encrypted data in transit", "Role-based access control", "Audit logging"]
  }
}
```

**Required:**
- `orchestrationPattern`: Orchestration pattern description (string)
- `dataFlow`: Data flow description (string)
- `decisionPoints`: Array of decision points (string[])
- `errorHandling`: Error handling approach (string)
- `scalability`: Scalability considerations (string)
- `security`: Array of security requirements (string[])

---

## 14. Time Estimates

**Format:** Object with time details

```json
{
  "timeEstimates": {
    "currentProcess": {
      "totalTime": "45-60 days",
      "steps": [
        {
          "stepName": "Collect",
          "time": "2-4 hours"
        }
      ],
      "bottlenecks": ["Manual configuration (1-2 days)", "Approval process (1-3 days)"]
    },
    "agenticProcess": {
      "totalTime": "25 days",
      "steps": [
        {
          "stepName": "Lead Qualification Agent",
          "time": "< 5 min"
        }
      ],
      "bottlenecks": ["Human approval (4 hours)"]
    },
    "savings": {
      "absolute": "20-35 days",
      "percentage": "44-58%"
    }
  }
}
```

**Required:**
- `currentProcess`: Object with totalTime, steps array, bottlenecks array (object)
- `agenticProcess`: Object with totalTime, steps array, bottlenecks array (object)
- `savings`: Object with absolute and percentage (object)

---

## 15. Dependencies & Prerequisites

**Format:** Object with dependency arrays

```json
{
  "dependencies": {
    "processDependencies": ["Lead Generation Process", "Customer Onboarding"],
    "systemDependencies": ["CRM system", "Product catalog"],
    "dataDependencies": ["Customer data", "Product data", "Pricing rules"],
    "organizationalDependencies": ["Sales team training", "Process owner assignment"],
    "technologyPrerequisites": ["API access", "Cloud infrastructure", "AI platform"]
  }
}
```

**Required:**
- `processDependencies`: Array of prerequisite processes (string[])
- `systemDependencies`: Array of prerequisite systems (string[])
- `dataDependencies`: Array of required data (string[])
- `organizationalDependencies`: Array of org requirements (string[])
- `technologyPrerequisites`: Array of tech requirements (string[])

---

## Complete Data Structure

All data should be provided in a single JSON file per process following this structure:

```json
{
  "id": "lead-to-order-b2b",
  "name": "Lead to Order (B2B)",
  "category": "Customer & Revenue",
  "description": "...",
  "businessGoal": "...",
  "kpis": [...],
  "valueThemes": [...],
  "fourW": {...},
  "agenticPattern": "...",
  "agents": [...],
  "benefits": [...],
  "risksAndControls": [...],
  "industryContext": {...},
  "currentSteps": [...],
  "agenticSteps": [...],
  "workforcePersonas": [...],
  "systems": [...],
  "implementationRoadmap": {...},
  "roi": {...},
  "context": {...},
  "caseStudies": [...],
  "architecture": {...},
  "timeEstimates": {...},
  "dependencies": {...}
}
```

---

## Priority Levels

### High Priority (Must Have)
1. Industry Context & Market Data
2. KPI Details (baseline, target, improvement)
3. Implementation Roadmap
4. Process-Specific Context
5. Time Estimates

### Medium Priority (Should Have)
6. Agent Details (capabilities, systems, decision logic)
7. Benefits Quantification (baseline, target, measurement)
8. Risk & Control Details (severity, mitigation)
9. System Integration Details
10. Workforce Persona Details

### Low Priority (Nice to Have)
11. ROI & Business Case
12. Case Studies & Examples
13. Technical Architecture Details
14. Dependencies & Prerequisites
