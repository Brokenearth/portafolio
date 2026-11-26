import { useState } from 'react';
import { LazyMotion, MotionConfig, domAnimation, m } from 'motion/react';
import { AlertTriangle, CheckCircle2, Cpu } from 'lucide-react';
import type { ContractsProject } from '../../data/types';

interface AutomataPipelinePreviewProps {
  project: ContractsProject;
}

export function AutomataPipelinePreview({ project }: AutomataPipelinePreviewProps) {
  const [selectedId, setSelectedId] = useState<string>(project.samples[0]?.id ?? 'valid-grazing');
  const activeSample =
    project.samples.find((sample) => sample.id === selectedId) ?? project.samples[0];

  if (!activeSample) return null;

  const isAmbiguous = activeSample.status === 'ambiguous';

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <div className="rounded-md border border-[var(--border)] bg-[var(--bg)] p-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] pb-3">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
              <h4 className="font-display text-sm font-semibold text-[var(--text)]">
                {project.simulatorTitle}
              </h4>
            </div>
            <m.span
              key={activeSample.status}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.16, ease: 'easeOut' }}
              className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-xs font-medium ${
                isAmbiguous
                  ? 'border-[var(--warning-border)] bg-[var(--warning-soft)] text-[var(--warning)]'
                  : 'border-[var(--verified-border)] bg-[var(--verified-soft)] text-[var(--verified)]'
              }`}
            >
              {isAmbiguous ? (
                <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {activeSample.statusLabel}
            </m.span>
          </div>

          <p className="mt-2 text-xs text-[var(--muted)]">{project.simulatorHint}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.samples.map((sample) => {
              const isSelected = sample.id === activeSample.id;
              return (
                <m.button
                  key={sample.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(sample.id)}
                  whileTap={{ scale: 0.97 }}
                  className={`relative cursor-pointer rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors ${
                    isSelected
                      ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]'
                      : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)]'
                  }`}
                >
                  {isSelected && (
                    <m.span
                      layoutId="automata-active-tab"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-[var(--accent)]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{sample.label}</span>
                </m.button>
              );
            })}
          </div>

          <m.div
            key={activeSample.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="mt-3.5 space-y-3"
          >
              <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-3">
                <p className="font-mono text-[11px] font-medium text-[var(--muted)]">
                  {project.simulatorLabels.inputLabel}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--text)]">
                  "{activeSample.input}"
                </p>
              </div>

              <div>
                <p className="font-mono text-[11px] font-medium text-[var(--muted)]">
                  {project.simulatorLabels.afdLabel}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {activeSample.tokens.map((tok, index) => (
                    <m.span
                      key={`${tok.token}-${tok.lexeme}`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18, delay: index * 0.035 }}
                      className="inline-flex items-center gap-1 rounded border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--text)]"
                    >
                      <span className="font-semibold text-[var(--accent)]">{tok.token}:</span>
                      <span>{tok.lexeme}</span>
                    </m.span>
                  ))}
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-2.5">
                  <p className="font-mono text-[11px] font-medium text-[var(--muted)]">
                    {project.simulatorLabels.pdaLabel}
                  </p>
                  <p className="mt-1 text-xs text-[var(--text)]">{activeSample.pdaStackResult}</p>
                </div>
                <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-2.5">
                  <p className="font-mono text-[11px] font-medium text-[var(--muted)]">
                    {project.simulatorLabels.turingLabel}
                  </p>
                  <p className="mt-1 text-xs text-[var(--text)]">{activeSample.turingVerdict}</p>
                </div>
              </div>

              {activeSample.warnings.length > 0 ? (
                <div className="rounded-md border border-[var(--warning-border)] bg-[var(--warning-soft)] p-3">
                  <p className="font-mono text-[11px] font-semibold text-[var(--warning)]">
                    {project.simulatorLabels.warningsLabel}
                  </p>
                  <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs text-[var(--text)]">
                    {activeSample.warnings.map((warn) => (
                      <li key={warn}>{warn}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-3">
                  <p className="font-mono text-[11px] font-medium text-[var(--muted)]">
                    {project.simulatorLabels.fieldsLabel}
                  </p>
                  <dl className="mt-1.5 grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                    {activeSample.extractedFields.map((field) => (
                      <div key={field.key}>
                        <dt className="text-[var(--muted)]">{field.key}</dt>
                        <dd className="font-medium text-[var(--text)]">{field.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
          </m.div>
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}
