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
                  {agent.capabilities && agent.capabilities.length > 0 && (
                    <div className="mt-3">
                      <div className="text-xs font-semibold text-gray-700 mb-1">Capabilities:</div>
                      <div className="flex flex-wrap gap-1">
                        {agent.capabilities.map((cap, i) => (
                          <span key={i} className="inline-flex items-center rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {agent.systemsAccessed && agent.systemsAccessed.length > 0 && (
                    <div className="mt-2">
                      <div className="text-xs font-semibold text-gray-700 mb-1">Systems:</div>
                      <div className="flex flex-wrap gap-1">
                        {agent.systemsAccessed.map((sys, i) => (
                          <span key={i} className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                            {sys}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {agent.performanceMetrics && (
                    <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                      {agent.performanceMetrics.accuracy && (
                        <div>
                          <span className="text-gray-600">Accuracy:</span>
                          <span className="ml-1 font-semibold text-gray-900">{agent.performanceMetrics.accuracy}</span>
                        </div>
                      )}
                      {agent.performanceMetrics.speed && (
                        <div>
                          <span className="text-gray-600">Speed:</span>
                          <span className="ml-1 font-semibold text-gray-900">{agent.performanceMetrics.speed}</span>
                        </div>
                      )}
                      {agent.performanceMetrics.successRate && (
                        <div>
                          <span className="text-gray-600">Success:</span>
                          <span className="ml-1 font-semibold text-gray-900">{agent.performanceMetrics.successRate}</span>
                        </div>
                      )}
                    </div>
                  )}
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
        {process.systems && process.systems.length > 0 ? (
          <div className="space-y-3">
            {process.systems.map((system, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{system.name}</div>
                    <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-600">
                      <span className="rounded bg-gray-100 px-2 py-0.5">{system.type}</span>
                      <span className="rounded bg-gray-100 px-2 py-0.5">{system.integrationMethod}</span>
                      <span className="rounded bg-gray-100 px-2 py-0.5">{system.complexity}</span>
                      <span className={`rounded px-2 py-0.5 ${
                        system.criticality === 'critical' ? 'bg-red-100 text-red-700' :
                        system.criticality === 'important' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {system.criticality}
                      </span>
                    </div>
                    {system.vendor && (
                      <div className="mt-1 text-xs text-gray-500">Vendor: {system.vendor}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
