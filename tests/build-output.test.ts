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

      if (page.requireLiveUrls) {
        expect(html).toContain('https://victorious-desert-02f78d31e.6.azurestaticapps.net');
        expect(html).toContain('https://easycontractfield.netlify.app/#redactar');
        expect(html).toContain('https://harclassifier-uci.netlify.app/');
        expect(html).toContain('https://tejeideas.netlify.app/');
      }
    }
  });
});
