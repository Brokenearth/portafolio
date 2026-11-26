import { useEffect, useState } from 'react';
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  toDarkLabel: string;
  toLightLabel: string;
}

type Theme = 'light' | 'dark';

export function ThemeToggle({ toDarkLabel, toLightLabel }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const syncTheme = () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'dark' : 'light');
    };

    syncTheme();
    document.addEventListener('astro:after-swap', syncTheme);
    return () => document.removeEventListener('astro:after-swap', syncTheme);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('jh-theme', next);
    } catch {
      // Ignore storage failures in restricted contexts.
    }
  };

  const label = theme === 'dark' ? toLightLabel : toDarkLabel;

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <m.button
          type="button"
          onClick={toggleTheme}
          whileTap={{ scale: 0.92 }}
          aria-label={label}
          title={label}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <m.span
              key={theme}
              initial={{ opacity: 0, rotate: -35, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 35, scale: 0.8 }}
              transition={{ duration: 0.16, ease: 'easeOut' }}
              className="inline-flex items-center justify-center"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </m.span>
          </AnimatePresence>
        </m.button>
      </LazyMotion>
    </MotionConfig>
  );
}
