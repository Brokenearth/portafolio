import { useState } from 'react';
import { CheckCircle2, Database, Layers, Server, ShieldCheck } from 'lucide-react';
import type { UniSportCaseStudy } from '../../data/types';

interface UniSportArchitectureInspectorProps {
  caseStudy: UniSportCaseStudy;
}

export function UniSportArchitectureInspector({ caseStudy }: UniSportArchitectureInspectorProps) {
  const [selectedId, setSelectedId] = useState<string>(caseStudy.nodes[0]?.id ?? 'frontend');
  const activeNode =
    caseStudy.nodes.find((node) => node.id === selectedId) ?? caseStudy.nodes[0];

  if (!activeNode) return null;

  return (
    <div
      id="unisport-inspector"
      className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
    >
      <div className="mb-5 border-b border-[var(--border)] pb-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-[var(--text)]">
            {caseStudy.inspectorTitle}
          </h3>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface-muted)] px-2.5 py-1 font-mono text-xs text-[var(--muted)]">
            <Layers className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
            {caseStudy.nodes.length} · Clean Architecture
          </span>
        </div>
        <p className="mt-1.5 text-sm text-[var(--muted)]">{caseStudy.inspectorHint}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="grid gap-2.5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {caseStudy.nodes.map((node) => {
            const isSelected = node.id === activeNode.id;
            return (
              <button
                key={node.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(node.id)}
                className={`flex w-full cursor-pointer flex-col items-start rounded-md border px-3.5 py-3 text-left transition-colors ${
                  isSelected
                    ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text)]'
                    : 'border-[var(--border)] bg-[var(--bg)] text-[var(--text)] hover:border-[var(--accent)]'
                }`}
              >
                <span className="font-mono text-[11px] font-medium text-[var(--accent)]">
                  {node.layer}
                </span>
                <span className="mt-0.5 font-display text-sm font-semibold text-[var(--text)]">
                  {node.name}
                </span>
                <span className="mt-0.5 font-mono text-xs text-[var(--muted)]">
                  {node.schemaOrTarget}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col justify-between rounded-md border border-[var(--border)] bg-[var(--bg)] p-5 lg:col-span-7">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[var(--border)] pb-4">
              <div>
                <p className="font-mono text-xs font-medium text-[var(--accent)]">
                  {caseStudy.inspectorLabels.layer}: {activeNode.layer}
                </p>
                <h4 className="mt-1 font-display text-xl font-semibold text-[var(--text)]">
                  {activeNode.name}
                </h4>
                <p className="mt-1 font-mono text-xs text-[var(--muted)]">{activeNode.tech}</p>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 font-mono text-xs text-[var(--text)]">
                {activeNode.schemaOrTarget.toLowerCase().includes('postgres') ? (
                  <Database className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
                ) : (
                  <Server className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
                )}
                <span>{activeNode.schemaOrTarget}</span>
              </div>
            </div>

            <p className="mt-4 max-w-[68ch] text-sm leading-relaxed text-[var(--text)]">
              {activeNode.summary}
            </p>

            <div className="mt-5">
              <p className="font-mono text-xs font-semibold text-[var(--muted)]">
                {caseStudy.inspectorLabels.responsibilities}
              </p>
              <ul className="mt-2.5 space-y-2">
                {activeNode.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-3">
            <div className="flex items-start gap-2.5">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-[var(--verified)]"
                aria-hidden="true"
              />
              <div>
                <p className="font-mono text-xs font-semibold text-[var(--verified)]">
                  {caseStudy.inspectorLabels.verification}
                </p>
                <p className="mt-0.5 text-sm text-[var(--text)]">{activeNode.verification}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
