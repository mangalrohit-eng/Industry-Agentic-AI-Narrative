import { Process } from '@/lib/types';
import ProcessTile from './ProcessTile';

interface ProcessMapProps {
  processes: Process[];
  industry?: 'telecom' | 'media';
}

export default function ProcessMap({ processes, industry = 'telecom' }: ProcessMapProps) {
  const telecomCategories: Process['category'][] = [
    'Customer & Revenue',
    'Service & Operations',
    'Network & Technology',
    'Enterprise & Support',
  ];
  
  const mediaCategories: Process['category'][] = [
    'Content & Production',
    'Revenue & Monetization',
    'Customer Experience',
    'Operations & Governance',
  ];
  
  const categories = industry === 'media' ? mediaCategories : telecomCategories;

  return (
    <div className="space-y-12 sm:space-y-16">
      {categories.map((category) => {
        const categoryProcesses = processes.filter((p) => p.category === category);
        if (categoryProcesses.length === 0) return null;

        return (
          <div key={category} className="scroll-mt-24">
            <div className="mb-2 h-1 w-12 bg-accent"></div>
            <h2 className="mb-6 text-xl sm:text-2xl font-semibold tracking-tight text-primary-900">{category}</h2>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProcesses.map((process) => (
                <ProcessTile key={process.id} process={process} industry={industry} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
