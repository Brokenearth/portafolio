# Especificación de Diseño: Portafolio de Ingeniería de Software

**Autor:** Johan Deivy Hernández Basallo (`Brokenearth`)
**Fecha:** 2026-11-25
**Objetivo:** Portafolio técnico bilingüe (ES/EN) dirigido a reclutadores y líderes técnicos de Ingeniería de Software Full-Stack y Arquitectura de Sistemas.

## 1. Arquitectura y Stack
- **Framework:** Astro 5 + Islas React 19 (TypeScript estricto) + Tailwind CSS v4.
- **Iconografía:** `lucide-react` (SVG consistentes, cero emojis).
- **Testing:** Vitest + `@testing-library/react` (`jsdom`) + validación de build estático.
- **Rutas:** `/` (ES), `/en/` (EN), `/cv` (CV imprimible ES), `/en/cv` (CV imprimible EN).

## 2. Sistema Visual (Anti-AI-Slop)
- **Tema por defecto:** Editorial Técnico Claro (`#F6F8FA` fondo, `#FFFFFF` superficie, `#0F172A` texto, `#CBD5E1` bordes `1px`, `#1D4ED8` Azul Cobalto Señal, `#047857` verde verificación).
- **Tema alternativo:** Pizarra de Sistemas Oscura (`#0B111E` fondo, `#111928` superficie, `#F1F5F9` texto, `#243247` bordes, `#3B82F6` acento).
- **Tipografía:** `Plus Jakarta Sans` (títulos en *sentence case*), `IBM Plex Sans` (cuerpo `< 72ch`), `JetBrains Mono` (métricas CI, esquemas, rutas).

## 3. Proyectos Incluidos y Jerarquía
1. **UniSport (Insignia):** .NET 10 Monolito Modular + Clean Architecture (`Auth`, `Facilities`, `Reservations`), PostgreSQL por esquemas, Cloudflare R2, Angular 22, 1,255 tests (828 Testcontainers + k6 / 427 Vitest) en Azure Pipelines, Azure App Service + Azure Static Web Apps (`https://victorious-desert-02f78d31e.6.azurestaticapps.net`). Aportes de Johan: `HU-05`, `HU-07`, CI artifact gating. Incluye **Inspector Interactivo de Arquitectura**.
2. **Contratos Rurales por Voz (EasyContractField):** TypeScript, AFD propios, Autómata a Pila, Máquina de Turing, exportación PDF/MD (`https://easycontractfield.netlify.app/#redactar`). Incluye simulador interactivo `AutomataPipelinePreview`.
3. **HAR Classifier — UCI HAR:** PyTorch `Conv1D+LSTM` vs `LSTM`, `StratifiedGroupKFold` por sujeto (`97.8%` val, `92.6%` test), W&B (`https://harclassifier-uci.netlify.app/`).
4. **Teje Ideas:** Entrega comercial real en producción (`https://tejeideas.netlify.app/`).

## 4. Exclusiones
- Excluidos proyectos de acuicultura/piscicultura (`TICaP*`, `AQuaEvalTiM`, `tilapia`) y `GestorCamras`.
