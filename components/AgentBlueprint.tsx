import { Process } from '@/lib/types';
import { getAllAgenticPatterns } from '@/lib/data';

interface AgentBlueprintProps {
  process: Process;
}

export default function AgentBlueprint({ process }: AgentBlueprintProps) {
  const allPatterns = getAllAgenticPatterns();
  const pattern = allPatterns.find((p) => p.id === process.agenticPattern);

  // Extract systems from Digital Core
  const systems = process.fourW.digitalCore;

  return (
    <div className="space-y-6">
      {pattern && (
        <div className="rounded-lg border-2 border-accent bg-accent-50/30 p-6">
          <p className="text-base font-semibold text-primary-900">
            Pattern: {pattern.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-primary-700">{pattern.description}</p>
        </div>
      )}

      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Agents</h3>
        <div className="space-y-4">
          {process.agents.map((agent, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-900">
                      {agent.name}
                    </h4>
                    {agent.humanApproval && (
                      <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                        Human Approval Required
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {agent.responsibility}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Systems Touched
        </h3>
        <div className="flex flex-wrap gap-2">
          {systems.map((system, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
            >
              {system}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
