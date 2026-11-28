import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const distDir = resolve(process.cwd(), 'dist');

describe('Static build output verification', () => {
  it('generates all four localized routes and verifies links and exclusions', () => {
    const pages = [
      { file: 'index.html', lang: 'es', requireLiveUrls: true },
      { file: 'en/index.html', lang: 'en', requireLiveUrls: true },
      { file: 'cv/index.html', lang: 'es', requireLiveUrls: false },
      { file: 'en/cv/index.html', lang: 'en', requireLiveUrls: false },
    ];

    for (const page of pages) {
      const fullPath = resolve(distDir, page.file);
      expect(existsSync(fullPath), `${page.file} should exist in dist/`).toBe(true);
      const html = readFileSync(fullPath, 'utf8');

      expect(html).toContain(`<html lang="${page.lang}"`);
      expect(html).not.toMatch(/\b(ticap|aquaevaltim|acuicultura|piscicultura|tilapia|gestorcamras)\b/i);
      expect(html).not.toContain('href="mailto:');
      expect(html).not.toContain('email_off');
      expect(html).not.toContain('&#64;');
      expect(html).not.toContain('johanhernandez064@gmail.com');
      expect(html).toContain('data-email-text');
      expect(html).toContain('johanhernandez064');
      expect(html).toContain('gmail.com');
      expect(html).toContain('Spec-Driven Development');

      if (page.requireLiveUrls) {
        expect(html).toContain('astro-view-transitions-enabled');
        expect(html).toContain('data-reading-progress');
        expect(html).toContain('data-meter-fill');
        expect(html).toContain('https://victorious-desert-02f78d31e.6.azurestaticapps.net');
        expect(html).toContain('https://easycontractfield.netlify.app/#redactar');
        expect(html).toContain('https://harclassifier-uci.netlify.app/');
        expect(html).toContain('https://tejeideas.netlify.app/');
      }
    }
  });
});
