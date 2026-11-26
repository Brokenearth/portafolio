import { LazyMotion, MotionConfig, domAnimation, m } from 'motion/react';

interface MailtoButtonProps {
  emailUser: string;
  emailDomain: string;
  label: string;
  onNavigate?: (href: string) => void;
}

export function MailtoButton({
  emailUser,
  emailDomain,
  label,
  onNavigate,
}: MailtoButtonProps) {
  const handleClick = () => {
    const targetHref = `mailto:${emailUser}@${emailDomain}`;
    if (onNavigate) {
      onNavigate(targetHref);
      return;
    }
    window.location.href = targetHref;
  };

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <m.button
          type="button"
          onClick={handleClick}
          whileTap={{ scale: 0.96 }}
          className="inline-flex cursor-pointer items-center rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-hover)]"
        >
          {label}
        </m.button>
      </LazyMotion>
    </MotionConfig>
  );
}
