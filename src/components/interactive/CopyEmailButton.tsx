import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m } from 'motion/react';
import { Check, Copy } from 'lucide-react';

interface CopyEmailButtonProps {
  email?: string;
  emailUser?: string;
  emailDomain?: string;
  label: string;
  copiedLabel: string;
}

export function CopyEmailButton({
  email,
  emailUser,
  emailDomain,
  label,
  copiedLabel,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const resolveAddress = () => {
    if (emailUser && emailDomain) {
      return `${emailUser}@${emailDomain}`;
    }
    return email ?? '';
  };

  const handleCopy = async () => {
    const address = resolveAddress();
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${address}`;
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <div className="inline-flex items-center gap-2">
          <m.button
            type="button"
            onClick={handleCopy}
            whileTap={{ scale: 0.96 }}
            className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.span
                key={copied ? 'check' : 'copy'}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.14 }}
                className="inline-flex items-center"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-[var(--verified)]" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4 text-[var(--muted)]" aria-hidden="true" />
                )}
              </m.span>
            </AnimatePresence>
            <span>{label}</span>
          </m.button>
          <span role="status" aria-live="polite" className="sr-only">
            {copied ? copiedLabel : ''}
          </span>
          <AnimatePresence>
            {copied && (
              <m.span
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -4 }}
                transition={{ duration: 0.16 }}
                className="font-mono text-xs font-medium text-[var(--verified)]"
                aria-hidden="true"
              >
                {copiedLabel}
              </m.span>
            )}
          </AnimatePresence>
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}
