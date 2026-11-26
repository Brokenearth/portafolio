import { useState } from 'react';
import { LazyMotion, MotionConfig, domAnimation, m } from 'motion/react';
import { CheckCircle2, Database, Layers, Server, ShieldCheck } from 'lucide-react';
import type { ArchitectureNode, UniSportCaseStudy } from '../../data/types';

interface UniSportArchitectureInspectorProps {
  caseStudy: UniSportCaseStudy;
}

interface NodeCardButtonProps {
  node: ArchitectureNode;
  isSelected: boolean;
  onSelect: (id: string) => void;
  compact?: boolean;
}

function NodeCardButton({ node, isSelected, onSelect, compact = false }: NodeCardButtonProps) {
  return (
    <m.button
      type="button"
      aria-pressed={isSelected}
      onClick={() => onSelect(node.id)}
      whileTap={{ scale: 0.985 }}
      className={`relative flex w-full cursor-pointer flex-col items-start rounded-md border text-left transition-colors ${
        compact ? 'px-3 py-2.5' : 'px-3.5 py-3'
      } ${
        isSelected
          ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text)]'
          : 'border-[var(--border)] bg-[var(--bg)] text-[var(--text)] hover:border-[var(--accent)]'
      }`}
    >
      {isSelected && (
        <m.span
          layoutId="unisport-active-node"
          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
          className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-[var(--accent)]"
          aria-hidden="true"
        />
      )}
      <span className="relative z-10 font-mono text-[10px] font-medium text-[var(--accent)]">
        {node.layer}
      </span>
      <span className="relative z-10 mt-0.5 font-display text-xs font-semibold text-[var(--text)] sm:text-sm">
        {node.name}
      </span>
      <span className="relative z-10 mt-0.5 font-mono text-[11px] text-[var(--muted)] [overflow-wrap:anywhere]">
        {node.schemaOrTarget}
      </span>
    </m.button>
  );
}

export function UniSportArchitectureInspector({ caseStudy }: UniSportArchitectureInspectorProps) {
  const [selectedId, setSelectedId] = useState<string>(caseStudy.nodes[0]?.id ?? 'frontend');
  const activeNode =
    caseStudy.nodes.find((node) => node.id === selectedId) ?? caseStudy.nodes[0];

  if (!activeNode) return null;

  const findNode = (id: string) => caseStudy.nodes.find((n) => n.id === id);
  const frontendNode = findNode('frontend') ?? caseStudy.nodes[0];
  const apiNode = findNode('api-host') ?? caseStudy.nodes[1];
  const authNode = findNode('mod-auth') ?? caseStudy.nodes[2];
  const facilitiesNode = findNode('mod-facilities') ?? caseStudy.nodes[3];
  const reservationsNode = findNode('mod-reservations') ?? caseStudy.nodes[4];
  const cicdNode = findNode('cicd') ?? caseStudy.nodes[5];

  const isTopEdgeActive =
    selectedId === 'frontend' || selectedId === 'api-host' || selectedId === 'cicd';
  const isModuleBusActive = (moduleId: string) =>
    selectedId === 'api-host' || selectedId === moduleId || selectedId === 'cicd';

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
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
            {/* Live Interactive Architecture Topology */}
            <div className="flex flex-col lg:col-span-6">
              {frontendNode && (
                <NodeCardButton
                  node={frontendNode}
                  isSelected={frontendNode.id === activeNode.id}
                  onSelect={setSelectedId}
                />
              )}

              {/* Edge: Client -> HTTP Host */}
              <svg
                data-testid="unisport-topology-svg"
                viewBox="0 0 300 26"
                className="h-6 w-full shrink-0"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line
                  x1="150"
                  y1="0"
                  x2="150"
                  y2="26"
                  stroke={isTopEdgeActive ? 'var(--accent)' : 'var(--border)'}
                  strokeWidth="1.5"
                />
                {isTopEdgeActive && (
                  <line
                    x1="150"
                    y1="0"
                    x2="150"
                    y2="26"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                    className="signal-flow"
                  />
                )}
              </svg>

              {apiNode && (
                <NodeCardButton
                  node={apiNode}
                  isSelected={apiNode.id === activeNode.id}
                  onSelect={setSelectedId}
                />
              )}

              {/* Branching Bus: HTTP Host -> 3 Domain Modules */}
              <svg
                viewBox="0 0 300 30"
                className="hidden h-7 w-full shrink-0 sm:block"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 150 0 V 14 H 50 V 30"
                  fill="none"
                  stroke={isModuleBusActive('mod-auth') ? 'var(--accent)' : 'var(--border)'}
                  strokeWidth="1.5"
                  className={isModuleBusActive('mod-auth') ? 'signal-flow' : undefined}
                />
                <path
                  d="M 150 0 V 30"
                  fill="none"
                  stroke={isModuleBusActive('mod-facilities') ? 'var(--accent)' : 'var(--border)'}
                  strokeWidth="1.5"
                  className={isModuleBusActive('mod-facilities') ? 'signal-flow' : undefined}
                />
                <path
                  d="M 150 0 V 14 H 250 V 30"
                  fill="none"
                  stroke={isModuleBusActive('mod-reservations') ? 'var(--accent)' : 'var(--border)'}
                  strokeWidth="1.5"
                  className={isModuleBusActive('mod-reservations') ? 'signal-flow' : undefined}
                />
              </svg>

              <div className="mt-2.5 grid gap-2.5 sm:mt-0 sm:grid-cols-3">
                {[authNode, facilitiesNode, reservationsNode].map(
                  (modNode) =>
                    modNode && (
                      <NodeCardButton
                        key={modNode.id}
                        node={modNode}
                        isSelected={modNode.id === activeNode.id}
                        onSelect={setSelectedId}
                        compact={true}
                      />
                    )
                )}
              </div>

              {/* Collector Bus: 3 Domain Modules -> CI/CD & Testing */}
              <svg
                viewBox="0 0 300 30"
                className="hidden h-7 w-full shrink-0 sm:block"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 50 0 V 16 H 150 V 30"
                  fill="none"
                  stroke={
                    selectedId === 'mod-auth' || selectedId === 'cicd'
                      ? 'var(--verified)'
                      : 'var(--border)'
                  }
                  strokeWidth="1.5"
                  className={
                    selectedId === 'mod-auth' || selectedId === 'cicd' ? 'signal-flow' : undefined
                  }
                />
                <path
                  d="M 150 0 V 30"
                  fill="none"
                  stroke={
                    selectedId === 'mod-facilities' || selectedId === 'cicd'
                      ? 'var(--verified)'
                      : 'var(--border)'
                  }
                  strokeWidth="1.5"
                  className={
                    selectedId === 'mod-facilities' || selectedId === 'cicd'
                      ? 'signal-flow'
                      : undefined
                  }
                />
                <path
                  d="M 250 0 V 16 H 150 V 30"
                  fill="none"
                  stroke={
                    selectedId === 'mod-reservations' || selectedId === 'cicd'
                      ? 'var(--verified)'
                      : 'var(--border)'
                  }
                  strokeWidth="1.5"
                  className={
                    selectedId === 'mod-reservations' || selectedId === 'cicd'
                      ? 'signal-flow'
                      : undefined
                  }
                />
              </svg>

              <div className="mt-2.5 sm:mt-0">
                {cicdNode && (
                  <NodeCardButton
                    node={cicdNode}
                    isSelected={cicdNode.id === activeNode.id}
                    onSelect={setSelectedId}
                  />
                )}
              </div>
            </div>

            {/* Right Inspector Panel */}
            <div className="flex flex-col justify-between rounded-md border border-[var(--border)] bg-[var(--bg)] p-5 lg:col-span-6">
              <m.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="flex h-full flex-col justify-between"
              >
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[var(--border)] pb-4">
                      <div>
                        <p className="font-mono text-xs font-medium text-[var(--accent)]">
                          {caseStudy.inspectorLabels.layer}: {activeNode.layer}
                        </p>
                        <h4 className="mt-1 font-display text-xl font-semibold text-[var(--text)]">
                          {activeNode.name}
                        </h4>
                        <p className="mt-1 font-mono text-xs text-[var(--muted)]">
                          {activeNode.tech}
                        </p>
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
                        <p className="mt-0.5 text-sm text-[var(--text)]">
                          {activeNode.verification}
                        </p>
                      </div>
                    </div>
                  </div>
                </m.div>
            </div>
          </div>
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}
