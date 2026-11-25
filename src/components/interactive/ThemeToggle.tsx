import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  toDarkLabel: string;
  toLightLabel: string;
}

type Theme = 'light' | 'dark';

export function ThemeToggle({ toDarkLabel, toLightLabel }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
      setTheme('dark');
    }
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
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
