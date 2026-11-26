import { describe, expect, it } from 'vitest';
import { getPortfolioData } from '../src/data/portfolio';

const FORBIDDEN_TERMS = /\b(ticap|aquaevaltim|acuicultura|piscicultura|tilapia|gestorcamras)\b/i;
const EMOJI_REGEX = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

describe('Portfolio bilingual data integrity & anti-slop contract', () => {
  it('returns symmetrical structured data for Spanish and English', () => {
    const es = getPortfolioData('es');
    const en = getPortfolioData('en');

    expect(es.locale).toBe('es');
    expect(en.locale).toBe('en');
    expect(es.profile.email).toBe('johanhernandez064@gmail.com');
    expect(en.profile.email).toBe('johanhernandez064@gmail.com');
    expect(es.profile.githubUrl).toBe('https://github.com/Brokenearth');
    expect(en.profile.githubUrl).toBe('https://github.com/Brokenearth');
    expect(es.profile.linkedinUrl).toBe('https://www.linkedin.com/in/johan-deivy-hernandez/');
    expect(en.profile.linkedinUrl).toBe('https://www.linkedin.com/in/johan-deivy-hernandez/');
    expect(es.profile.portfolioUrl).toBe('https://johanhernandez.dpdns.org/');
    expect(en.profile.portfolioUrl).toBe('https://johanhernandez.dpdns.org/');

    expect(es.uniSport.nodes).toHaveLength(6);
    expect(en.uniSport.nodes).toHaveLength(6);
    expect(es.contractsProject.samples).toHaveLength(3);
    expect(en.contractsProject.samples).toHaveLength(3);
    expect(es.approach.pillars).toHaveLength(3);
    expect(en.approach.pillars).toHaveLength(3);
  });

  it('includes all four verified live deployment URLs', () => {
    const es = getPortfolioData('es');

    expect(es.uniSport.liveUrl).toBe('https://victorious-desert-02f78d31e.6.azurestaticapps.net');
    expect(es.contractsProject.liveUrl).toBe('https://easycontractfield.netlify.app/#redactar');
    expect(es.harProject.liveUrl).toBe('https://harclassifier-uci.netlify.app/');
    expect(es.commercialProject.liveUrl).toBe('https://tejeideas.netlify.app/');
  });

  it('excludes aquaculture projects, GestorCamras, arrow slop, and emojis', () => {
    for (const locale of ['es', 'en'] as const) {
      const serialized = JSON.stringify(getPortfolioData(locale));
      expect(serialized).not.toMatch(FORBIDDEN_TERMS);
      expect(serialized).not.toContain('→');
      expect(serialized).not.toMatch(EMOJI_REGEX);
    }
  });
});
