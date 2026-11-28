import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let activeContext: gsap.Context | null = null;
let spotlightController: AbortController | null = null;

function formatCountValue(value: number, decimals: number): string {
  if (decimals > 0) {
    return value.toFixed(decimals);
  }
  return Math.round(value).toLocaleString('en-US');
}

export function cleanupPortfolioMotion(): void {
  if (spotlightController) {
    spotlightController.abort();
    spotlightController = null;
  }
  if (activeContext) {
    activeContext.revert();
    activeContext = null;
  }
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

function setupSpotlightCards(signal: AbortSignal): void {
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!finePointer || reducedMotion) return;

  const cards = document.querySelectorAll<HTMLElement>('.spotlight-card');
  cards.forEach((card) => {
    let rafId = 0;

    card.addEventListener(
      'pointermove',
      (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          card.style.setProperty('--spot-x', `${x}px`);
          card.style.setProperty('--spot-y', `${y}px`);
        });
      },
      { signal, passive: true }
    );
  });
}

function hydrateEmailText(): void {
  const nodes = document.querySelectorAll<HTMLElement>('[data-email-text]');
  nodes.forEach((node) => {
    const user = node.dataset.u;
    const domain = node.dataset.d;
    if (user && domain) {
      node.textContent = `${user}@${domain}`;
    }
  });
}

export function initPortfolioMotion(): void {
  cleanupPortfolioMotion();
  hydrateEmailText();

  spotlightController = new AbortController();
  setupSpotlightCards(spotlightController.signal);

  const mm = gsap.matchMedia();
  activeContext = gsap.context(() => {
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const progressBar = document.querySelector<HTMLElement>('[data-reading-progress]');
      if (progressBar) {
        gsap.fromTo(
          progressBar,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: document.documentElement,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.15,
            },
          }
        );
      }

      const heroItems = gsap.utils.toArray<HTMLElement>('[data-hero-stagger]');
      if (heroItems.length > 0) {
        gsap.from(heroItems, {
          y: 14,
          opacity: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }

      const counters = document.querySelectorAll<HTMLElement>('[data-count-value]');
      counters.forEach((el) => {
        const target = Number.parseFloat(el.dataset.countTarget ?? '0');
        const decimals = Number.parseInt(el.dataset.countDecimals ?? '0', 10);
        const suffix = el.dataset.countSuffix ?? '';
        if (!Number.isFinite(target) || target <= 0) return;

        const state = { val: 0 };
        gsap.to(state, {
          val: target,
          duration: 0.85,
          delay: 0.15,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = `${formatCountValue(state.val, decimals)}${suffix}`;
          },
          onComplete: () => {
            el.textContent = `${formatCountValue(target, decimals)}${suffix}`;
          },
        });
      });

      const meters = document.querySelectorAll<HTMLElement>('[data-meter-fill]');
      meters.forEach((meter) => {
        gsap.from(meter, {
          scaleX: 0,
          duration: 0.75,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: meter,
            start: 'top 92%',
            once: true,
          },
        });
      });
    });
  });
}
