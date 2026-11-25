# Plan de Implementación: Portafolio de Ingeniería de Software

1. Inicialización del repositorio, configuración Astro 5 + React 19 + Tailwind v4 + Vitest y preparación Netlify/Vercel.
2. Capa de datos bilingüe tipada (`src/data/types.ts`, `src/data/portfolio.ts`) validada por TDD (`tests/portfolio-data.test.ts`).
3. Islas interactivas en React (`UniSportArchitectureInspector`, `AutomataPipelinePreview`, `CopyEmailButton`, `ThemeToggle`) validadas por TDD (`tests/interactive-islands.test.tsx`).
4. Estilos (`src/styles/global.css`), `BaseLayout.astro`, secciones editoriales y vistas `/`, `/en/`, `/cv`, `/en/cv`.
5. Verificación integral (`typecheck`, `build`, `test` + auditoría visual en navegador a `1440px` y `375px`).
6. Commit limpio y publicación en GitHub (`Brokenearth/portafolio`).
