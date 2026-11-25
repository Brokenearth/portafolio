import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyEmailButtonProps {
  email: string;
  label: string;
  copiedLabel: string;
}

export function CopyEmailButton({ email, label, copiedLabel }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        {copied ? (
          <Check className="h-4 w-4 text-[var(--verified)]" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4 text-[var(--muted)]" aria-hidden="true" />
        )}
        <span>{label}</span>
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? copiedLabel : ''}
      </span>
      {copied && (
        <span className="font-mono text-xs font-medium text-[var(--verified)]" aria-hidden="true">
          {copiedLabel}
        </span>
      )}
    </div>
  );
}
