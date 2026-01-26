import { Process } from '@/lib/types';

interface IndustryMediaProps {
  process: Process;
}

// Generate industry media content based on process
function getIndustryMedia(process: Process) {
  const mediaContent: Record<string, {
    title: string;
    stats: Array<{ label: string; value: string; change: string }>;
    insights: string[];
    trends: string[];
  }> = {
    'Lead to Order (B2B)': {
      title: 'Telecom B2B Sales Transformation',
      stats: [
        { label: 'Average Sales Cycle', value: '45-60 days', change: '-40%' },
        { label: 'Quote Accuracy', value: '92%', change: '+18%' },
        { label: 'Win Rate', value: '34%', change: '+12%' },
      ],
      insights: [
        'B2B telecom sales cycles average 45-60 days, with 30% of time spent on configuration and pricing',
        'Order errors cost telecom providers $2.3B annually in rework and customer dissatisfaction',
        'AI-powered CPQ systems reduce quote generation time from 4 hours to 15 minutes',
      ],
      trends: [
        'Growing demand for personalized enterprise solutions',
        'Increasing complexity in multi-product bundles',
        'Rising customer expectations for faster response times',
      ],
    },
    'Order to Service Activation': {
      title: 'Service Activation Excellence',
      stats: [
        { label: 'Activation Time', value: '2-5 days', change: '-70%' },
        { label: 'First-Time-Right', value: '96%', change: '+24%' },
        { label: 'Customer Satisfaction', value: '4.6/5', change: '+0.8' },
      ],
      insights: [
        'Service activation delays cost telecom providers $1.8B annually in lost revenue',
        'Multi-domain service provisioning requires coordination across 5-8 systems',
        'Automated validation reduces provisioning errors by 85%',
      ],
      trends: [
        'Demand for same-day service activation',
        'Complexity of 5G and fiber deployments',
        'Need for real-time order visibility',
      ],
    },
    'Trouble to Resolve': {
      title: 'Customer Service Excellence',
      stats: [
        { label: 'Resolution Time', value: '4-8 hours', change: '-65%' },
        { label: 'First Contact Resolution', value: '78%', change: '+28%' },
        { label: 'Customer Satisfaction', value: '4.5/5', change: '+0.7' },
      ],
      insights: [
        'Average telecom customer service ticket takes 4-6 interactions to resolve',
        'Network issues account for 45% of all service tickets',
        'AI-powered diagnostics reduce troubleshooting time by 60%',
      ],
      trends: [
        'Rising customer expectations for instant resolution',
        'Complexity of multi-service troubleshooting',
        'Need for proactive issue detection',
      ],
    },
    'Service Assurance': {
      title: 'Network Performance Excellence',
      stats: [
        { label: 'Network Uptime', value: '99.95%', change: '+0.3%' },
        { label: 'MTTR', value: '15 min', change: '-75%' },
        { label: 'Proactive Detection', value: '82%', change: '+45%' },
      ],
      insights: [
        'Network downtime costs telecom providers $5,600 per minute',
        'Proactive monitoring prevents 70% of customer-impacting incidents',
        'AI-driven root cause analysis reduces MTTR by 75%',
      ],
      trends: [
        '5G network complexity requires advanced monitoring',
        'Edge computing demands distributed assurance',
        'Real-time performance optimization',
      ],
    },
    'Network Planning & Design': {
      title: 'Network Infrastructure Excellence',
      stats: [
        { label: 'Design Time', value: '2-4 weeks', change: '-60%' },
        { label: 'Design Accuracy', value: '94%', change: '+18%' },
        { label: 'Cost Optimization', value: '22%', change: '-22%' },
      ],
      insights: [
        'Network design cycles average 3-4 weeks with multiple iterations',
        '5G network planning requires 3x more data points than 4G',
        'AI-optimized designs reduce CAPEX by 20-25%',
      ],
      trends: [
        '5G and edge network expansion',
        'Network densification requirements',
        'Sustainability-driven optimization',
      ],
    },
    'Network Provisioning': {
      title: 'Network Operations Excellence',
      stats: [
        { label: 'Provisioning Time', value: '1-3 days', change: '-80%' },
        { label: 'Zero-Touch Rate', value: '85%', change: '+65%' },
        { label: 'Configuration Accuracy', value: '98%', change: '+15%' },
      ],
      insights: [
        'Manual network provisioning takes 2-4 days per service',
        'Multi-vendor network environments require complex orchestration',
        'Zero-touch provisioning reduces operational costs by 40%',
      ],
      trends: [
        'SDN/NFV adoption acceleration',
        'Multi-domain network orchestration',
        'Intent-based networking',
      ],
    },
    'Customer Onboarding': {
      title: 'Customer Experience Excellence',
      stats: [
        { label: 'Onboarding Time', value: '15-30 min', change: '-70%' },
        { label: 'Completion Rate', value: '92%', change: '+28%' },
        { label: 'NPS Score', value: '68', change: '+18' },
      ],
      insights: [
        'Customer onboarding abandonment rates average 35%',
        'Complex verification processes delay activation',
        'AI-powered identity verification reduces fraud by 60%',
      ],
      trends: [
        'Digital-first customer expectations',
        'Regulatory compliance requirements',
        'Personalized onboarding experiences',
      ],
    },
    'Customer Retention': {
      title: 'Customer Loyalty Excellence',
      stats: [
        { label: 'Churn Rate', value: '1.2%', change: '-40%' },
        { label: 'Retention Rate', value: '94%', change: '+12%' },
        { label: 'LTV Increase', value: '28%', change: '+28%' },
      ],
      insights: [
        'Customer churn costs telecom providers $1.6B annually',
        'Proactive retention reduces churn by 45%',
        'Personalized offers increase retention by 30%',
      ],
      trends: [
        'Competitive market dynamics',
        'Price sensitivity and value perception',
        'Service quality expectations',
      ],
    },
    'Billing & Revenue Management': {
      title: 'Revenue Operations Excellence',
      stats: [
        { label: 'Billing Accuracy', value: '99.2%', change: '+2.5%' },
        { label: 'Dispute Resolution', value: '2-4 days', change: '-75%' },
        { label: 'Revenue Leakage', value: '0.8%', change: '-60%' },
      ],
      insights: [
        'Billing disputes account for 15% of customer service contacts',
        'Revenue leakage costs telecom providers $3.2B annually',
        'AI-powered billing validation reduces errors by 90%',
      ],
      trends: [
        'Complex pricing models (usage-based, tiered)',
        'Real-time billing expectations',
        'Regulatory compliance requirements',
      ],
    },
    'Partner & Supplier Management': {
      title: 'Ecosystem Excellence',
      stats: [
        { label: 'Transaction Time', value: '1-2 days', change: '-80%' },
        { label: 'Settlement Accuracy', value: '97%', change: '+12%' },
        { label: 'Partner Satisfaction', value: '4.3/5', change: '+0.6' },
      ],
      insights: [
        'Partner transactions require coordination across multiple systems',
        'Settlement disputes delay revenue recognition',
        'Automated reconciliation reduces disputes by 70%',
      ],
      trends: [
        'Growing partner ecosystem complexity',
        'Real-time settlement expectations',
        'API-driven partner integration',
      ],
    },
    'Compliance & Regulatory': {
      title: 'Regulatory Excellence',
      stats: [
        { label: 'Compliance Rate', value: '99.8%', change: '+1.2%' },
        { label: 'Audit Time', value: '2-3 weeks', change: '-65%' },
        { label: 'Violation Rate', value: '0.02%', change: '-85%' },
      ],
      insights: [
        'Regulatory violations cost telecom providers $850M annually',
        'Compliance monitoring requires continuous oversight',
        'AI-powered compliance reduces audit time by 65%',
      ],
      trends: [
        'Evolving regulatory requirements',
        'Data privacy regulations (GDPR, CCPA)',
        'Network security mandates',
      ],
    },
    // Media Industry Processes
    'Content Acquisition & Rights Management': {
      title: 'Content Rights Excellence',
      stats: [
        { label: 'Acquisition Cycle', value: '30-45 days', change: '-50%' },
        { label: 'Rights Compliance', value: '98%', change: '+22%' },
        { label: 'Cost Optimization', value: '28%', change: '-28%' },
      ],
      insights: [
        'Content acquisition cycles average 30-45 days with complex rights negotiations',
        'Rights violations cost media companies $1.2B annually in legal fees and penalties',
        'AI-powered rights research reduces discovery time from weeks to hours',
      ],
      trends: [
        'Growing demand for global content rights',
        'Increasing complexity in multi-territory licensing',
        'Rising importance of rights compliance',
      ],
    },
    'Content Production Workflow': {
      title: 'Production Excellence',
      stats: [
        { label: 'Production Time', value: '4-8 weeks', change: '-35%' },
        { label: 'Resource Utilization', value: '85%', change: '+28%' },
        { label: 'On-Time Delivery', value: '94%', change: '+18%' },
      ],
      insights: [
        'Production delays cost media companies $2.1B annually in lost revenue',
        'Multi-location productions require coordination across 10+ systems',
        'AI-optimized scheduling reduces production costs by 25%',
      ],
      trends: [
        'Demand for faster content production',
        'Complexity of multi-format content delivery',
        'Need for real-time production visibility',
      ],
    },
    'Content Distribution & Delivery': {
      title: 'Distribution Excellence',
      stats: [
        { label: 'Time-to-Market', value: '2-4 hours', change: '-75%' },
        { label: 'Delivery Success', value: '97%', change: '+15%' },
        { label: 'Quality Consistency', value: '99%', change: '+12%' },
      ],
      insights: [
        'Multi-platform distribution requires encoding for 15+ formats',
        'Delivery failures cost media companies $800M annually',
        'AI-powered encoding reduces processing time by 80%',
      ],
      trends: [
        'Growing number of distribution platforms',
        'Demand for same-day content releases',
        'Need for consistent quality across platforms',
      ],
    },
    'Advertising Sales & Operations': {
      title: 'Ad Revenue Excellence',
      stats: [
        { label: 'Revenue Yield', value: '+32%', change: '+32%' },
        { label: 'Fill Rate', value: '88%', change: '+18%' },
        { label: 'Sales Cycle', value: '5-7 days', change: '-45%' },
      ],
      insights: [
        'Ad inventory optimization increases revenue by 25-35%',
        'Manual campaign setup takes 2-4 hours per campaign',
        'AI-powered targeting improves campaign performance by 40%',
      ],
      trends: [
        'Programmatic advertising growth',
        'Demand for real-time optimization',
        'Increasing complexity in audience targeting',
      ],
    },
    'Audience Analytics & Insights': {
      title: 'Data-Driven Excellence',
      stats: [
        { label: 'Insight Generation', value: '< 1 hour', change: '-70%' },
        { label: 'Data Accuracy', value: '96%', change: '+18%' },
        { label: 'Engagement Rate', value: '+42%', change: '+42%' },
      ],
      insights: [
        'Manual data analysis takes 2-3 days per report',
        'Real-time insights enable data-driven content decisions',
        'AI-powered segmentation improves targeting by 50%',
      ],
      trends: [
        'Growing importance of audience data',
        'Demand for real-time analytics',
        'Need for predictive insights',
      ],
    },
    'Content Recommendation & Personalization': {
      title: 'Personalization Excellence',
      stats: [
        { label: 'Engagement Rate', value: '+38%', change: '+38%' },
        { label: 'Session Duration', value: '+28%', change: '+28%' },
        { label: 'Retention Rate', value: '+22%', change: '+22%' },
      ],
      insights: [
        'Personalized recommendations increase engagement by 30-40%',
        'Manual curation takes 4-6 hours per playlist',
        'AI-powered recommendations improve discovery by 50%',
      ],
      trends: [
        'Rising viewer expectations for personalization',
        'Growing content library complexity',
        'Need for real-time recommendation updates',
      ],
    },
    'Subscriber Acquisition & Retention': {
      title: 'Subscriber Excellence',
      stats: [
        { label: 'Acquisition Rate', value: '+42%', change: '+42%' },
        { label: 'Churn Rate', value: '1.1%', change: '-38%' },
        { label: 'Lifetime Value', value: '+31%', change: '+31%' },
      ],
      insights: [
        'Customer churn costs media companies $1.4B annually',
        'Proactive retention reduces churn by 45%',
        'AI-powered onboarding improves completion rates by 60%',
      ],
      trends: [
        'Competitive streaming market',
        'Price sensitivity and value perception',
        'Demand for personalized experiences',
      ],
    },
    'Content Moderation & Compliance': {
      title: 'Content Safety Excellence',
      stats: [
        { label: 'Moderation Accuracy', value: '96%', change: '+18%' },
        { label: 'False Positive Rate', value: '2%', change: '-65%' },
        { label: 'Review Time', value: '< 2 hours', change: '-70%' },
      ],
      insights: [
        'Content moderation costs media companies $600M annually',
        'Manual moderation reviews 50-100 hours of content per day',
        'AI-powered moderation reduces review time by 80%',
      ],
      trends: [
        'Rising content volume and complexity',
        'Evolving content policies and regulations',
        'Demand for real-time moderation',
      ],
    },
    'Royalty Distribution & Payments': {
      title: 'Rights Management Excellence',
      stats: [
        { label: 'Payment Accuracy', value: '99.2%', change: '+15%' },
        { label: 'Processing Time', value: '1-2 days', change: '-75%' },
        { label: 'Dispute Rate', value: '0.8%', change: '-55%' },
      ],
      insights: [
        'Royalty calculation errors cost media companies $450M annually',
        'Manual royalty processing takes 2-3 weeks',
        'AI-powered calculation reduces errors by 90%',
      ],
      trends: [
        'Complex multi-territory royalty structures',
        'Demand for faster payment processing',
        'Increasing transparency requirements',
      ],
    },
    'Intellectual Property Protection': {
      title: 'IP Protection Excellence',
      stats: [
        { label: 'Detection Rate', value: '94%', change: '+48%' },
        { label: 'Enforcement Success', value: '78%', change: '+35%' },
        { label: 'Response Time', value: '< 4 hours', change: '-80%' },
      ],
      insights: [
        'Piracy costs media companies $6.1B annually in lost revenue',
        'Manual piracy monitoring covers only 20% of platforms',
        'AI-powered detection identifies 90% of unauthorized usage',
      ],
      trends: [
        'Growing digital piracy threats',
        'Increasing number of distribution platforms',
        'Demand for real-time enforcement',
      ],
    },
    'Content Licensing & Negotiations': {
      title: 'Licensing Excellence',
      stats: [
        { label: 'Deal Cycle', value: '20-30 days', change: '-55%' },
        { label: 'Deal Value', value: '+28%', change: '+28%' },
        { label: 'Contract Processing', value: '2-3 days', change: '-70%' },
      ],
      insights: [
        'Licensing deal cycles average 30-45 days with complex negotiations',
        'Manual contract processing takes 1-2 weeks',
        'AI-powered analysis improves deal terms by 25%',
      ],
      trends: [
        'Growing demand for content licensing',
        'Increasing complexity in multi-territory deals',
        'Need for faster deal execution',
      ],
    },
    'Platform Operations & Monitoring': {
      title: 'Platform Excellence',
      stats: [
        { label: 'Platform Uptime', value: '99.98%', change: '+0.2%' },
        { label: 'MTTR', value: '8 min', change: '-82%' },
        { label: 'Performance', value: '+35%', change: '+35%' },
      ],
      insights: [
        'Platform downtime costs media companies $8,000 per minute',
        'Proactive monitoring prevents 75% of viewer-impacting incidents',
        'AI-driven optimization improves performance by 35%',
      ],
      trends: [
        'Growing streaming platform complexity',
        'Demand for 99.99% uptime',
        'Need for real-time performance optimization',
      ],
    },
    'Advertising Campaign Optimization': {
      title: 'Campaign Excellence',
      stats: [
        { label: 'Campaign ROI', value: '+36%', change: '+36%' },
        { label: 'CTR', value: '+45%', change: '+45%' },
        { label: 'Conversion Rate', value: '+28%', change: '+28%' },
      ],
      insights: [
        'Manual campaign optimization takes 2-3 hours per campaign',
        'Real-time optimization improves ROI by 30-40%',
        'AI-powered targeting increases CTR by 45%',
      ],
      trends: [
        'Demand for real-time optimization',
        'Growing complexity in audience targeting',
        'Need for automated budget allocation',
      ],
    },
  };

  // Detect industry from process category or name
  const isMediaIndustry = process.category === 'Content & Production' || 
                          process.category === 'Revenue & Monetization' ||
                          process.category === 'Customer Experience' ||
                          process.category === 'Operations & Governance' ||
                          process.name.includes('Content') ||
                          process.name.includes('Advertising') ||
                          process.name.includes('Subscriber') ||
                          process.name.includes('Royalty') ||
                          process.name.includes('Intellectual Property') ||
                          process.name.includes('Platform Operations');

  // Default content if process not found
  const defaultContent = isMediaIndustry ? {
    title: 'Media Industry Transformation',
    stats: [
      { label: 'Efficiency Gain', value: '45-65%', change: '+45%' },
      { label: 'Cost Reduction', value: '30-40%', change: '-35%' },
      { label: 'Revenue Growth', value: '+35%', change: '+35%' },
    ],
    insights: [
      'Media industry faces increasing complexity with streaming, multi-platform distribution, and content personalization',
      'Agentic AI enables autonomous operations across content, distribution, and monetization domains',
      'Transformation requires orchestration of content workflows, rights management, and audience engagement',
    ],
    trends: [
      'Streaming platform proliferation',
      'AI-powered content personalization',
      'Data-driven audience engagement',
    ],
  } : {
    title: 'Telecom Industry Transformation',
    stats: [
      { label: 'Efficiency Gain', value: '40-60%', change: '+40%' },
      { label: 'Cost Reduction', value: '25-35%', change: '-30%' },
      { label: 'Customer Satisfaction', value: '4.4/5', change: '+0.6' },
    ],
    insights: [
      'Telecom industry faces increasing complexity with 5G, edge computing, and multi-cloud deployments',
      'Agentic AI enables autonomous operations across network, service, and customer domains',
      'Transformation requires orchestration of multiple systems and workflows',
    ],
    trends: [
      'Digital transformation acceleration',
      'AI-powered automation adoption',
      'Customer experience focus',
    ],
  };

  return mediaContent[process.name as keyof typeof mediaContent] || defaultContent;
}

export default function IndustryMedia({ process }: IndustryMediaProps) {
  // Use process.industryContext if available, otherwise fall back to hardcoded content
  const content = process.industryContext ? {
    title: `${process.name} Industry Context`,
    stats: process.industryContext.statistics,
    insights: process.industryContext.insights,
    trends: process.industryContext.trends,
  } : getIndustryMedia(process);

  return (
    <div className="mb-12 rounded-lg border border-primary-200 bg-gradient-to-br from-primary-50/50 to-white p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <div className="mb-2 h-1 w-12 bg-accent"></div>
        <h2 className="text-2xl font-semibold tracking-tight text-primary-900">Industry Context</h2>
        <p className="mt-2 text-sm text-primary-600">Market insights and transformation drivers</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Key Statistics */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-lg font-semibold tracking-tight text-primary-900">Key Industry Metrics</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {content.stats.map((stat, index) => (
              <div key={index} className="rounded-lg border border-primary-200 bg-white p-4">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-600">
                  {stat.label}
                </div>
                <div className="mb-1 flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-primary-900">{stat.value}</span>
                  <span className="text-sm font-semibold text-accent">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Trends */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold tracking-tight text-primary-900">Market Trends</h3>
          <ul className="space-y-3">
            {content.trends.map((trend, index) => (
              <li key={index} className="flex items-start text-sm leading-relaxed text-primary-700">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>{trend}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Industry Insights */}
      <div className="mt-6 rounded-lg border border-accent-200 bg-accent-50/20 p-6">
        <h3 className="mb-4 text-lg font-semibold tracking-tight text-primary-900">Industry Insights</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {content.insights.map((insight, index) => (
            <div key={index} className="text-sm leading-relaxed text-primary-700">
              {insight}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
