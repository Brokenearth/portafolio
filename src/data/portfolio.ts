import type { Locale, PortfolioContent } from './types';

const ES_DATA: PortfolioContent = {
  locale: 'es',
  meta: {
    title: 'Johan Hernández — Ingeniero de Software Full-Stack y Arquitectura',
    description:
      'Portafolio de Johan Deivy Hernández Basallo. Sistemas en producción con .NET 10, Angular, TypeScript, PyTorch, PostgreSQL y CI/CD en Azure.',
  },
  nav: {
    projects: 'Proyectos',
    architecture: 'Arquitectura',
    approach: 'Forma de trabajo',
    cv: 'CV',
    switchLangLabel: 'EN',
    switchLangHref: '/en/',
    themeToDark: 'Cambiar a modo oscuro',
    themeToLight: 'Cambiar a modo claro',
    skipToContent: 'Ir al contenido principal',
  },
  profile: {
    name: 'Johan Deivy Hernández Basallo',
    shortName: 'Johan Hernández',
    role: 'Ingeniero de Software Full-Stack y Arquitectura de Sistemas',
    location: 'Colombia (Remoto / Presencial)',
    university: 'Universidad de los Llanos — Ingeniería de Sistemas',
    status: 'Próximo a graduarse · Disponible para roles Junior / Full-Stack',
    email: 'johanhernandez064@gmail.com',
    githubUrl: 'https://github.com/Brokenearth',
    githubHandle: 'github.com/Brokenearth',
    linkedinUrl: 'https://www.linkedin.com/in/johan-deivy-hernandez/',
    linkedinHandle: 'linkedin.com/in/johan-deivy-hernandez',
    headline:
      'Construyo software modular, probado y desplegado en producción.',
    summary:
      'Estudiante de último semestre de Ingeniería de Sistemas en la Universidad de los Llanos. Diseño límites limpios entre dominio, datos e interfaz, respaldo cada entrega con pruebas automatizadas y utilizo herramientas de IA como multiplicador bajo verificación técnica rigurosa.',
    primaryCta: 'Explorar arquitectura UniSport',
    cvCta: 'Ver CV imprimible',
    copyEmailLabel: 'Copiar correo',
    copiedEmailLabel: 'Correo copiado al portapapeles',
    openMailLabel: 'Enviar correo',
    metricsTitle: 'Evidencia verificable en producción',
    metrics: [
      {
        value: '4 apps',
        label: 'Desplegadas en vivo',
        detail: 'Azure Static Web Apps, Azure App Service y Netlify',
      },
      {
        value: '1,255',
        label: 'Pruebas automatizadas',
        detail: '828 en .NET (Testcontainers) y 427 en Angular (Vitest)',
      },
      {
        value: '97.8%',
        label: 'Validación por sujeto',
        detail: 'Conv1D+LSTM sin fuga de datos en PyTorch (UCI HAR)',
      },
    ],
  },
  sectionTitles: {
    flagship: 'Caso de estudio principal',
    selectedSystems: 'Sistemas y motores técnicos desplegados',
    commercialDelivery: 'Entrega comercial en producción',
  },
  uniSport: {
    title: 'UniSport — Gestión de Espacios y Reservas Deportivas',
    subtitle:
      'Plataforma institucional para centralizar disponibilidad, horarios de entrenamiento, solicitudes y reservas en la Universidad de los Llanos.',
    contextTag: 'Proyecto de equipo (Profundización III) · Repositorio privado en Azure DevOps',
    liveUrl: 'https://victorious-desert-02f78d31e.6.azurestaticapps.net',
    liveLabel: 'Abrir aplicación en Azure',
    privateRepoNote:
      'El código fuente reside en Azure DevOps privado de la universidad. El inspector interactivo siguiente documenta la arquitectura real y los módulos implementados.',
    overview:
      'El sistema resuelve la coordinación entre estudiantes, docentes y administradores deportivos eliminando solicitudes manuales y choques de horario mediante validación transaccional y esquemas aislados.',
    myContributionsTitle: 'Mis aportes directos en el equipo',
    myContributions: [
      'HU-05: Modelado de la entidad Reservation, generación transaccional al aprobar solicitudes, cancelación por usuario o administrador, expiración automática y búsqueda administrativa.',
      'HU-07: Módulo completo de reportería y exportación de solicitudes en backend y frontend (PR #53 integrado a develop).',
      'Calidad y CI/CD: Implementación de gating de artefactos en Azure Pipelines y pruebas de integración reales contra PostgreSQL con Testcontainers.',
    ],
    metrics: [
      { label: 'Backend Tests', value: '828 / 828 (Testcontainers + k6)' },
      { label: 'Frontend Tests', value: '427 / 427 (Vitest / 36 archivos)' },
      { label: 'Historias MVP', value: '12 / 12 cerradas en Azure Boards' },
      { label: 'Despliegue', value: 'Azure App Service + Static Web Apps' },
    ],
    stack: [
      '.NET 10',
      'Clean Architecture',
      'PostgreSQL (esquemas)',
      'Angular 22 + Signals',
      'PrimeNG',
      'Cloudflare R2',
      'Docker + ACR',
      'Azure Pipelines',
    ],
    inspectorTitle: 'Inspector interactivo de arquitectura',
    inspectorHint: 'Selecciona cualquier nodo del sistema para revisar responsabilidades, esquema de datos y verificación.',
    inspectorLabels: {
      layer: 'Capa',
      target: 'Destino / Esquema',
      responsibilities: 'Responsabilidades clave',
      verification: 'Verificación automatizada',
    },
    nodes: [
      {
        id: 'frontend',
        layer: 'Cliente Web',
        name: 'Angular 22 SPA',
        tech: 'Angular 22.2 · Signals · PrimeNG · WCAG AA',
        schemaOrTarget: 'Azure Static Web Apps',
        summary:
          'Interfaz con componentes standalone, control de flujo nativo (@if/@for), Signal Forms y guardias por rol (authGuard y roleGuard) para comunidad universitaria y administradores.',
        responsibilities: [
          'Vistas públicas de ocupación (Libre, Ocupado, Cerrado) y horarios en /zonas y /ocupacion.',
          'Flujo de solicitudes, historial en /reservas y bandeja administrativa en /admin/solicitudes.',
          'Panel de reportes y exportación en /admin/reportes/solicitudes.',
        ],
        verification: '427 pruebas unitarias y de componentes con Vitest en 36 archivos (CI #20261120.8).',
      },
      {
        id: 'api-host',
        layer: 'Host HTTP',
        name: 'UniSport.API (.NET 10)',
        tech: '.NET 10 · EF Core · Swagger OpenAPI · Docker',
        schemaOrTarget: 'Azure App Service (unisport-server)',
        summary:
          'Monolito modular que enruta los tres contextos delimitados bajo Clean Architecture, manteniendo fronteras estrictas entre módulos.',
        responsibilities: [
          'Orquestación de inyección de dependencias, autenticación JWT y documentación OpenAPI.',
          'Empaquetado en imagen Docker (unisport-api) publicada en Azure Container Registry.',
          'Integración de almacenamiento de archivos con Cloudflare R2.',
        ],
        verification: 'Suite de integración End-to-End y pruebas de carga con k6 antes de promoción.',
      },
      {
        id: 'mod-auth',
        layer: 'Módulo de Dominio',
        name: 'Módulo Auth',
        tech: 'JWT · Recuperación por correo · RBAC',
        schemaOrTarget: 'PostgreSQL schema: auth',
        summary:
          'Gestiona el registro de la comunidad universitaria, emisión de tokens JWT, cierre de sesión y recuperación de contraseña por correo.',
        responsibilities: [
          'HU-01 y HU-02: Registro validado e inicio de sesión con control de acceso por roles.',
          'HU-03 y HU-04: Flujo /auth/forgot-password, /auth/reset-password y cierre de sesión.',
          'Aislamiento de credenciales y entidades de usuario en el esquema auth.',
        ],
        verification: 'Pruebas de dominio y endpoints protegidos contra PostgreSQL efímero en Testcontainers.',
      },
      {
        id: 'mod-facilities',
        layer: 'Módulo de Dominio',
        name: 'Módulo Facilities',
        tech: 'Clean Architecture · EF Core · PostgreSQL',
        schemaOrTarget: 'PostgreSQL schema: facilities',
        summary:
          'Administra el catálogo de deportes, zonas deportivas y calendarios oficiales de entrenamientos y clases.',
        responsibilities: [
          'HU-08 y HU-13: CRUD administrativo de zonas deportivas y catálogo de deportes.',
          'HU-06: Consulta pública de disponibilidad en tiempo real y gestión de horarios institucionales.',
          'Fuente única de verdad de ventanas de ocupación para validar nuevas solicitudes.',
        ],
        verification: 'Pruebas de consistencia de horarios y reglas de disponibilidad en CI.',
      },
      {
        id: 'mod-reservations',
        layer: 'Módulo de Dominio',
        name: 'Módulo Reservations',
        tech: 'Transacciones SQL · Ciclo de vida · Reportes',
        schemaOrTarget: 'PostgreSQL schema: reservations.reservations',
        summary:
          'Núcleo transaccional del sistema que controla solicitudes, códigos consecutivos, aprobaciones, reservas activas y reportería.',
        responsibilities: [
          'HU-10, HU-11 y HU-12: Registro con validación de cruce, historial, rechazo motivado y aprobación transaccional.',
          'HU-05 (Autoría directa): Modelo Reservation, cancelación usuario/admin, expiración automática y búsqueda admin.',
          'HU-07 (Autoría directa): Reportería de solicitudes y exportación auditable.',
        ],
        verification: 'Cobertura exhaustiva de transiciones de estado y concurrencia dentro de los 828 tests.',
      },
      {
        id: 'cicd',
        layer: 'Entrega y Calidad',
        name: 'CI/CD & Testing',
        tech: 'Azure Pipelines · Testcontainers · k6 · Vitest',
        schemaOrTarget: 'acrunisportdev.azurecr.io',
        summary:
          'Pipelines YAML separados para backend y frontend sobre ubuntu-latest con bloqueo estricto si falla cualquier prueba o artefacto.',
        responsibilities: [
          'CI artifact gating implementado para validar compilación y pruebas antes del despliegue.',
          'Contenerización reproducible y publicación automática hacia Azure Container Registry y Static Web Apps.',
          'Ejecución de 828 tests en backend (9m 13s) y 427 tests en frontend (1m 57s) con 100% de éxito.',
        ],
        verification: 'Runs verificados en Azure Pipelines (#20261120.3 Backend y #20261120.8 Frontend).',
      },
    ],
  },
  contractsProject: {
    title: 'Contratos Rurales por Voz — EasyContractField',
    subtitle:
      'Compilador de lenguaje natural y dictado a contratos legales de arrendamiento rural mediante teoría formal de autómatas.',
    liveUrl: 'https://easycontractfield.netlify.app/#redactar',
    repoUrl: 'https://github.com/Brokenearth/contratosPorVoz',
    liveLabel: 'Probar aplicación en vivo',
    repoLabel: 'Código en GitHub',
    description:
      'Transforma descripciones dictadas o escritas en contratos estructurados de pastoreo, cultivo o uso mixto. En lugar de depender de cajas negras opacas, implementa analizadores formales propios para garantizar trazabilidad jurídica y detectar ambigüedades antes de exportar a PDF o Markdown.',
    highlights: [
      'Análisis léxico determinista implementado con AFD propios en TypeScript.',
      'Validación sintáctica y balanceo de cláusulas mediante Autómata a Pila (PDA).',
      'Evaluación de consistencia y detección de campos faltantes o ambiguos con Máquina de Turing.',
    ],
    stack: ['TypeScript', 'AFD propios', 'Autómata a Pila', 'Máquina de Turing', 'PDF / Markdown', 'Netlify'],
    simulatorTitle: 'Simulador del pipeline formal',
    simulatorHint: 'Selecciona una entrada de ejemplo para inspeccionar cómo la procesan el AFD, el PDA y la Máquina de Turing.',
    simulatorLabels: {
      inputLabel: 'Entrada dictada / escrita',
      afdLabel: 'Tokens reconocidos (AFD)',
      pdaLabel: 'Validación estructural (PDA)',
      turingLabel: 'Veredicto (Máquina de Turing)',
      fieldsLabel: 'Campos extraídos',
      warningsLabel: 'Alertas detectadas',
    },
    samples: [
      {
        id: 'valid-grazing',
        label: 'Contrato válido (Pastoreo)',
        input:
          'Arrendamiento del Lote El Cedro para pastoreo de ganado desde el 01/12/2026 por 12 meses, valor total 4.800.000 pesos entre Carlos Ruiz y Marta Gómez.',
        contractType: 'Pastoreo',
        status: 'valid',
        statusLabel: 'Listo para exportar',
        tokens: [
          { token: 'PREDIO', lexeme: 'Lote El Cedro' },
          { token: 'USO', lexeme: 'pastoreo' },
          { token: 'FECHA_INI', lexeme: '01/12/2026' },
          { token: 'PLAZO', lexeme: '12 meses' },
          { token: 'MONTO_COP', lexeme: '4.800.000 pesos' },
          { token: 'PARTES', lexeme: 'Carlos Ruiz / Marta Gómez' },
        ],
        pdaStackResult: 'Pila vacía al finalizar: estructura cláusula-lote-canon-partes balanceada.',
        turingVerdict: 'Estado de aceptación q_accept: todos los campos obligatorios verificados.',
        extractedFields: [
          { key: 'Predio', value: 'Lote El Cedro' },
          { key: 'Modalidad', value: 'Pastoreo' },
          { key: 'Valor total', value: '$4.800.000 COP' },
          { key: 'Inicio / Duración', value: '01/12/2026 · 12 meses' },
        ],
        warnings: [],
      },
      {
        id: 'ambiguous-crop',
        label: 'Entrada con ambigüedad',
        input:
          'Alquiler de la parcela norte para cultivo de maíz empezando pronto, pagando dos millones más o menos con el señor Pedro.',
        contractType: 'Cultivo',
        status: 'ambiguous',
        statusLabel: 'Requiere revisión',
        tokens: [
          { token: 'PREDIO_VAGO', lexeme: 'parcela norte' },
          { token: 'USO', lexeme: 'cultivo' },
          { token: 'FECHA_AMB', lexeme: 'pronto' },
          { token: 'MONTO_AMB', lexeme: 'dos millones más o menos' },
          { token: 'PARTE_INCOMP', lexeme: 'señor Pedro' },
        ],
        pdaStackResult: 'Pila detenida en producción <FECHA_EXACTA>: falta fecha calendario y segunda parte.',
        turingVerdict: 'Estado q_review: contrato bloqueado para exportación hasta resolver 3 ambigüedades.',
        extractedFields: [
          { key: 'Predio', value: 'parcela norte (sin lindero/nombre)' },
          { key: 'Modalidad', value: 'Cultivo' },
          { key: 'Valor', value: 'Indeterminado ("más o menos")' },
        ],
        warnings: [
          'Fecha de inicio ambigua ("pronto"): se requiere formato DD/MM/AAAA.',
          'Canon impreciso ("más o menos"): el valor en pesos debe ser exacto.',
          'Falta identificar a la contraparte con nombre completo.',
        ],
      },
      {
        id: 'mixed-use',
        label: 'Contrato válido (Uso mixto)',
        input:
          'Contrato mixto de cultivo y pastoreo en Finca La Esperanza desde el 15/01/2027 por 6 meses, canon total 3.200.000 pesos entre Ana Torres y Luis Vega.',
        contractType: 'Uso mixto',
        status: 'valid',
        statusLabel: 'Listo para exportar',
        tokens: [
          { token: 'USO_MIXTO', lexeme: 'cultivo y pastoreo' },
          { token: 'PREDIO', lexeme: 'Finca La Esperanza' },
          { token: 'FECHA_INI', lexeme: '15/01/2027' },
          { token: 'PLAZO', lexeme: '6 meses' },
          { token: 'MONTO_COP', lexeme: '3.200.000 pesos' },
          { token: 'PARTES', lexeme: 'Ana Torres / Luis Vega' },
        ],
        pdaStackResult: 'Pila vacía al finalizar: cláusulas mixtas y obligaciones validadas correctamente.',
        turingVerdict: 'Estado de aceptación q_accept: habilitado para generar PDF y Markdown.',
        extractedFields: [
          { key: 'Predio', value: 'Finca La Esperanza' },
          { key: 'Modalidad', value: 'Uso mixto (cultivo + pastoreo)' },
          { key: 'Valor total', value: '$3.200.000 COP' },
          { key: 'Inicio / Duración', value: '15/01/2027 · 6 meses' },
        ],
        warnings: [],
      },
    ],
  },
  harProject: {
    title: 'HAR Classifier — Reconocimiento de Actividad Humana',
    subtitle:
      'Pipeline reproducible de Deep Learning en PyTorch sobre señales inerciales de smartphone (UCI HAR) con app web de inferencia.',
    liveUrl: 'https://harclassifier-uci.netlify.app/',
    repoUrl: 'https://github.com/Brokenearth/har-uci-classification',
    liveLabel: 'Explorar demo web',
    repoLabel: 'Código en GitHub',
    description:
      'Clasifica 6 actividades humanas a partir de 9 señales de acelerómetro y giroscopio en ventanas de 2.56 s (128 pasos). Para evitar métricas infladas, toda la selección de modelo se ejecutó con StratifiedGroupKFold agrupando estrictamente por sujeto, garantizando cero fuga de datos entre entrenamiento y validación.',
    metrics: [
      { label: 'Validación final', value: '97.8% exactitud' },
      { label: 'Test oficial UCI', value: '92.6% (2,947 muestras)' },
      { label: 'Muestras totales', value: '5,551 train · 1,801 val' },
      { label: 'Trazabilidad', value: 'Pipeline 01-06 + W&B' },
    ],
    comparisonTitle: 'Comparativa bajo validación cruzada por sujeto',
    comparisonRows: [
      {
        architecture: 'Conv1D (32-64) + LSTM (2x128)',
        cvAccuracy: '92.45%',
        note: 'Modelo ganador: extrae patrones locales antes de la secuencia temporal.',
        winner: true,
      },
      {
        architecture: 'LSTM puro (secuencia 128x9)',
        cvAccuracy: '90.61%',
        note: 'Línea base recurrente sin extracción convolucional previa.',
      },
    ],
    stack: ['PyTorch', 'StratifiedGroupKFold', 'Conv1D + LSTM', 'Weights & Biases', 'Flask / Streamlit', 'Netlify'],
  },
  commercialProject: {
    title: 'Teje Ideas — Sitio comercial en producción',
    subtitle:
      'Entrega directa para emprendimiento real de tejidos artesanales (@teje_ideas01), construida con foco en velocidad, galería real y conversión a WhatsApp.',
    liveUrl: 'https://tejeideas.netlify.app/',
    repoUrl: 'https://github.com/Brokenearth/Landing-Page-de-Tejidos',
    liveLabel: 'Visitar sitio en vivo',
    repoLabel: 'Código en GitHub',
    description:
      'No todo aporte de valor requiere sobreingeniería: este proyecto demuestra ejecución rápida de principio a fin para un negocio real, optimizando activos fotográficos, diseño responsive y canales directos de venta sin fricción.',
    deliverables: [
      'Identidad web alineada con el catálogo real de Instagram (@teje_ideas01).',
      'Despliegue continuo estático en Netlify con carga inmediata en dispositivos móviles.',
      'Flujo directo a WhatsApp para pedidos personalizados sin intermediarios.',
    ],
    stack: ['HTML5 semántico', 'CSS responsivo', 'JavaScript', 'Netlify'],
  },
  approach: {
    title: 'Cómo aporto desde el día uno en un equipo de ingeniería',
    subtitle:
      'El mercado actual no necesita desarrolladores que solo escriban sintaxis; necesita ingenieros capaces de diseñar fronteras claras, verificar código y orquestar herramientas modernas con criterio.',
    pillars: [
      {
        title: 'Arquitectura modular con límites claros',
        summary:
          'Separación explícita de dominio, aplicación e infraestructura (Clean Architecture y esquemas aislados en SQL) para que un cambio en un módulo no rompa todo el sistema.',
        evidence: 'Aplicado en UniSport (.NET 10 + 3 esquemas PostgreSQL independientes).',
      },
      {
        title: 'Verificación automatizada antes de declarar "listo"',
        summary:
          'Pruebas de integración con contenedores reales, validación cruzada sin fuga de datos en ML y puertas de calidad en CI/CD. El código generado manualmente o con IA se valida con hechos.',
        evidence: '1,255 tests automatizados en UniSport y StratifiedGroupKFold en HAR UCI.',
      },
      {
        title: 'Orquestación e ingeniería aumentada por IA',
        summary:
          'Uso flujos multiagente, especificaciones previas y revisión crítica para acelerar entregas sin sacrificar legibilidad, seguridad ni mantenibilidad.',
        evidence: 'Flujo reproducible desde el diseño arquitectónico hasta el despliegue en nube.',
      },
    ],
    contactTitle: 'Disponible para vacantes Junior / Full-Stack y proyectos de ingeniería',
    contactText:
      'Si tu equipo busca a alguien próximo a graduarse que ya ha llevado arquitectura, pruebas automatizadas y modelos a producción, conversemos.',
  },
  cv: {
    pageTitle: 'Hoja de Vida — Johan Deivy Hernández Basallo',
    backLabel: 'Volver al portafolio',
    printLabel: 'Imprimir o guardar PDF',
    educationTitle: 'Formación académica',
    education: {
      degree: 'Ingeniería de Sistemas (Próximo a graduarse)',
      institution: 'Universidad de los Llanos',
      status: 'Último semestre · Enfoque en Ingeniería de Software, Arquitectura y Ciencia de Datos',
      focus: 'Diseño de sistemas modulares, compiladores y autómatas, redes neuronales y despliegues en nube.',
    },
    experienceTitle: 'Experiencia en proyectos y entregas en producción',
    experience: [
      {
        role: 'Desarrollador Backend, Frontend y Calidad CI/CD',
        project: 'UniSport — Plataforma de Reservas Deportivas (Universidad de los Llanos)',
        period: '2026',
        points: [
          'Implementación del ciclo de vida de reservas (HU-05): generación transaccional desde solicitudes aprobadas, cancelaciones, expiración automática y búsqueda administrativa en .NET 10 y PostgreSQL.',
          'Desarrollo del módulo de reportería y exportación de solicitudes (HU-07) integrado con Angular 22 Signals y PrimeNG.',
          'Configuración de CI artifact gating en Azure Pipelines con 828 pruebas backend (Testcontainers + k6) y 427 pruebas frontend (Vitest).',
        ],
      },
      {
        role: 'Autor y Arquitecto de Software',
        project: 'Contratos Rurales por Voz (EasyContractField)',
        period: '2026',
        points: [
          'Diseño de analizador léxico (AFD propios), sintáctico (Autómata a Pila) y verificador de consistencia (Máquina de Turing) en TypeScript.',
          'Detección de términos ambiguos en lenguaje natural rural y exportación estructurada a PDF/Markdown en Netlify.',
        ],
      },
      {
        role: 'Ingeniero de Machine Learning Aplicado',
        project: 'HAR Classifier — UCI HAR (PyTorch)',
        period: '2026',
        points: [
          'Evaluación comparativa de Conv1D+LSTM (92.45% CV) vs LSTM (90.61% CV) con validación cruzada por sujeto (StratifiedGroupKFold).',
          'Modelo final con 97.8% en validación y 92.6% en test UCI, integrado con seguimiento en Weights & Biases y demo web.',
        ],
      },
      {
        role: 'Desarrollador Web Freelance',
        project: 'Teje Ideas (@teje_ideas01)',
        period: '2026',
        points: [
          'Diseño, optimización y despliegue en producción de landing page comercial conectada a catálogo real y WhatsApp.',
        ],
      },
    ],
    skillsTitle: 'Capacidades técnicas verificadas',
    skillGroups: [
      {
        category: 'Backend y Arquitectura',
        items: ['.NET 10 / C#', 'TypeScript / Node.js', 'Python', 'Clean Architecture', 'Monolitos Modulares', 'REST / OpenAPI'],
      },
      {
        category: 'Frontend',
        items: ['Angular 22 (Signals)', 'React 19', 'Astro 5', 'Tailwind CSS', 'PrimeNG', 'Accesibilidad WCAG AA'],
      },
      {
        category: 'Datos, ML y Teoría',
        items: ['PostgreSQL (esquemas)', 'Entity Framework Core', 'PyTorch', 'Validación por sujeto', 'Autómatas y Compilación'],
      },
      {
        category: 'Cloud, Testing y DevOps',
        items: ['Azure Pipelines', 'Docker & ACR', 'Testcontainers', 'Vitest', 'k6', 'Netlify / Vercel / Cloudflare R2'],
      },
    ],
    languagesTitle: 'Idiomas',
    languages: ['Español (Nativo)', 'Inglés (Lectura técnica avanzada y documentación)'],
  },
  footer: {
    builtWith: 'Construido con Astro, React, TypeScript y Tailwind CSS · Sin plantillas genéricas.',
    availability: 'Villavicencio / Remoto · Disponible para incorporación inmediata.',
  },
};

const EN_DATA: PortfolioContent = {
  locale: 'en',
  meta: {
    title: 'Johan Hernández — Full-Stack & Systems Architecture Engineer',
    description:
      'Portfolio of Johan Deivy Hernández Basallo. Production software built with .NET 10, Angular, TypeScript, PyTorch, PostgreSQL, and Azure CI/CD.',
  },
  nav: {
    projects: 'Projects',
    architecture: 'Architecture',
    approach: 'How I work',
    cv: 'Resume',
    switchLangLabel: 'ES',
    switchLangHref: '/',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    skipToContent: 'Skip to main content',
  },
  profile: {
    name: 'Johan Deivy Hernández Basallo',
    shortName: 'Johan Hernández',
    role: 'Full-Stack & Systems Architecture Software Engineer',
    location: 'Colombia (Remote / On-site)',
    university: 'Universidad de los Llanos — Systems Engineering',
    status: 'Graduating Senior · Open to Junior / Full-Stack Engineering Roles',
    email: 'johanhernandez064@gmail.com',
    githubUrl: 'https://github.com/Brokenearth',
    githubHandle: 'github.com/Brokenearth',
    linkedinUrl: 'https://www.linkedin.com/in/johan-deivy-hernandez/',
    linkedinHandle: 'linkedin.com/in/johan-deivy-hernandez',
    headline:
      'I build modular, tested software deployed to production.',
    summary:
      'Final-semester Systems Engineering student at Universidad de los Llanos. I design clean boundaries across domain, data, and UI layers, back every delivery with automated testing, and leverage AI tooling with rigorous engineering verification.',
    primaryCta: 'Inspect UniSport architecture',
    cvCta: 'View printable resume',
    copyEmailLabel: 'Copy email',
    copiedEmailLabel: 'Email copied to clipboard',
    openMailLabel: 'Send email',
    metricsTitle: 'Verifiable production evidence',
    metrics: [
      {
        value: '4 apps',
        label: 'Live in production',
        detail: 'Azure Static Web Apps, Azure App Service & Netlify',
      },
      {
        value: '1,255',
        label: 'Automated tests',
        detail: '828 in .NET (Testcontainers) and 427 in Angular (Vitest)',
      },
      {
        value: '97.8%',
        label: 'Subject-split validation',
        detail: 'Leakage-free Conv1D+LSTM in PyTorch (UCI HAR)',
      },
    ],
  },
  sectionTitles: {
    flagship: 'Flagship case study',
    selectedSystems: 'Deployed technical systems',
    commercialDelivery: 'Production client delivery',
  },
  uniSport: {
    title: 'UniSport — Sports Facilities & Reservations Platform',
    subtitle:
      'Institutional platform centralizing real-time facility occupancy, training schedules, requests, and reservations at Universidad de los Llanos.',
    contextTag: 'Team project (Profundización III) · Private Azure DevOps repository',
    liveUrl: 'https://victorious-desert-02f78d31e.6.azurestaticapps.net',
    liveLabel: 'Open live Azure app',
    privateRepoNote:
      'Source code lives in a private university Azure DevOps organization. The interactive inspector below documents the verified architecture and delivered modules.',
    overview:
      'Coordinates students, coaches, and sports administrators by replacing manual bookings and schedule conflicts with transactional validation and module-isolated database schemas.',
    myContributionsTitle: 'My direct engineering contributions',
    myContributions: [
      'HU-05: Designed the Reservation domain model, transactional reservation creation on request approval, user/admin cancellations, automatic expiration, and admin search.',
      'HU-07: Built the full request reporting and export workflow across backend and frontend (PR #53 merged to develop).',
      'Quality & CI/CD: Implemented CI artifact gating in Azure Pipelines and real PostgreSQL integration coverage via Testcontainers.',
    ],
    metrics: [
      { label: 'Backend Tests', value: '828 / 828 (Testcontainers + k6)' },
      { label: 'Frontend Tests', value: '427 / 427 (Vitest / 36 files)' },
      { label: 'MVP User Stories', value: '12 / 12 Closed on Azure Boards' },
      { label: 'Hosting', value: 'Azure App Service + Static Web Apps' },
    ],
    stack: [
      '.NET 10',
      'Clean Architecture',
      'PostgreSQL (schemas)',
      'Angular 22 + Signals',
      'PrimeNG',
      'Cloudflare R2',
      'Docker + ACR',
      'Azure Pipelines',
    ],
    inspectorTitle: 'Interactive architecture inspector',
    inspectorHint: 'Select any node in the system map to inspect its layer responsibilities, data target, and test verification.',
    inspectorLabels: {
      layer: 'Layer',
      target: 'Target / Schema',
      responsibilities: 'Core responsibilities',
      verification: 'Automated verification',
    },
    nodes: [
      {
        id: 'frontend',
        layer: 'Web Client',
        name: 'Angular 22 SPA',
        tech: 'Angular 22.2 · Signals · PrimeNG · WCAG AA',
        schemaOrTarget: 'Azure Static Web Apps',
        summary:
          'Standalone component architecture using Angular Signals, native control flow (@if/@for), Signal Forms, and role-based route guards (authGuard & roleGuard).',
        responsibilities: [
          'Public occupancy views (Free, Occupied, Closed) and schedules under /zonas and /ocupacion.',
          'Request submission, reservation tracking (/reservas), and admin inbox (/admin/solicitudes).',
          'Reporting and export dashboard under /admin/reportes/solicitudes.',
        ],
        verification: '427 Vitest unit and component tests passing across 36 files (CI #20261120.8).',
      },
      {
        id: 'api-host',
        layer: 'HTTP Host',
        name: 'UniSport.API (.NET 10)',
        tech: '.NET 10 · EF Core · Swagger OpenAPI · Docker',
        schemaOrTarget: 'Azure App Service (unisport-server)',
        summary:
          'Modular Monolith host wiring three bounded contexts under Clean Architecture with strict module boundaries.',
        responsibilities: [
          'Dependency injection orchestration, JWT authentication middleware, and OpenAPI documentation.',
          'Containerized as unisport-api Docker image pushed to Azure Container Registry.',
          'Object storage integration via Cloudflare R2.',
        ],
        verification: 'End-to-end integration test suite plus k6 load testing prior to deployment.',
      },
      {
        id: 'mod-auth',
        layer: 'Domain Module',
        name: 'Auth Module',
        tech: 'JWT · Email Recovery · RBAC',
        schemaOrTarget: 'PostgreSQL schema: auth',
        summary:
          'Handles university community onboarding, JWT token issuance, session termination, and email-based password recovery.',
        responsibilities: [
          'HU-01 & HU-02: Validated user registration and role-guarded authentication.',
          'HU-03 & HU-04: Forgot/reset password flow and secure logout.',
          'User identity isolation inside the dedicated auth PostgreSQL schema.',
        ],
        verification: 'Domain and protected endpoint tests verified against ephemeral Testcontainers PostgreSQL.',
      },
      {
        id: 'mod-facilities',
        layer: 'Domain Module',
        name: 'Facilities Module',
        tech: 'Clean Architecture · EF Core · PostgreSQL',
        schemaOrTarget: 'PostgreSQL schema: facilities',
        summary:
          'Manages sports catalog, physical sports zones, and official training/class schedules.',
        responsibilities: [
          'HU-08 & HU-13: Admin CRUD for sports zones and sports catalog.',
          'HU-06: Public occupancy lookup and institutional schedule management.',
          'Authoritative time-slot source consulted before approving booking requests.',
        ],
        verification: 'Schedule overlap and availability rule checks executed in CI.',
      },
      {
        id: 'mod-reservations',
        layer: 'Domain Module',
        name: 'Reservations Module',
        tech: 'SQL Transactions · Lifecycle · Reporting',
        schemaOrTarget: 'PostgreSQL schema: reservations.reservations',
        summary:
          'Transactional core governing request registration, consecutive tracking codes, approvals, active reservations, and reports.',
        responsibilities: [
          'HU-10, HU-11 & HU-12: Conflict-checked requests, tracking history, rejection reasons, and transactional approval.',
          'HU-05 (Direct ownership): Reservation entity, user/admin cancellation, automatic expiration, and admin search.',
          'HU-07 (Direct ownership): Request reporting and auditable export endpoints.',
        ],
        verification: 'Comprehensive state-transition and concurrency coverage within the 828 backend tests.',
      },
      {
        id: 'cicd',
        layer: 'Delivery & QA',
        name: 'CI/CD & Testing',
        tech: 'Azure Pipelines · Testcontainers · k6 · Vitest',
        schemaOrTarget: 'acrunisportdev.azurecr.io',
        summary:
          'Dedicated YAML pipelines for backend and frontend on ubuntu-latest with strict test and artifact gates.',
        responsibilities: [
          'Implemented CI artifact gating to block broken builds from reaching deployment.',
          'Automated Docker build and push to Azure Container Registry and Static Web Apps.',
          '828 backend tests (9m 13s) and 427 frontend tests (1m 57s) passing at 100%.',
        ],
        verification: 'Verified Azure Pipeline runs (#20261120.3 Backend and #20261120.8 Frontend).',
      },
    ],
  },
  contractsProject: {
    title: 'Voice Rural Contracts — EasyContractField',
    subtitle:
      'Natural-language and voice-to-contract compiler for rural lease agreements powered by formal automata theory.',
    liveUrl: 'https://easycontractfield.netlify.app/#redactar',
    repoUrl: 'https://github.com/Brokenearth/contratosPorVoz',
    liveLabel: 'Try live web app',
    repoLabel: 'GitHub repository',
    description:
      'Turns dictated or written lease descriptions in Spanish into structured grazing, crop, or mixed-use legal drafts. Rather than relying on opaque black boxes, it uses custom formal recognizers for deterministic parsing and ambiguity flagging before exporting to PDF or Markdown.',
    highlights: [
      'Deterministic lexical scanning built with custom DFAs in TypeScript.',
      'Syntactic clause validation enforced via a Pushdown Automaton (PDA).',
      'Consistency checks and missing/ambiguous field detection handled by a Turing Machine.',
    ],
    stack: ['TypeScript', 'Custom DFAs', 'Pushdown Automaton', 'Turing Machine', 'PDF / Markdown', 'Netlify'],
    simulatorTitle: 'Formal pipeline preview',
    simulatorHint: 'Pick a sample input to inspect how the DFA, Pushdown Automaton, and Turing Machine process it.',
    simulatorLabels: {
      inputLabel: 'Dictated / written input',
      afdLabel: 'Recognized tokens (DFA)',
      pdaLabel: 'Structural check (PDA)',
      turingLabel: 'Verdict (Turing Machine)',
      fieldsLabel: 'Extracted fields',
      warningsLabel: 'Detected ambiguities',
    },
    samples: [
      {
        id: 'valid-grazing',
        label: 'Valid input (Grazing)',
        input:
          'Arrendamiento del Lote El Cedro para pastoreo de ganado desde el 01/12/2026 por 12 meses, valor total 4.800.000 pesos entre Carlos Ruiz y Marta Gómez.',
        contractType: 'Grazing',
        status: 'valid',
        statusLabel: 'Ready to export',
        tokens: [
          { token: 'LAND_LOT', lexeme: 'Lote El Cedro' },
          { token: 'USE_TYPE', lexeme: 'pastoreo' },
          { token: 'START_DATE', lexeme: '01/12/2026' },
          { token: 'TERM', lexeme: '12 meses' },
          { token: 'AMOUNT_COP', lexeme: '4.800.000 pesos' },
          { token: 'PARTIES', lexeme: 'Carlos Ruiz / Marta Gómez' },
        ],
        pdaStackResult: 'Empty stack on EOF: lot-use-amount-parties grammar balanced.',
        turingVerdict: 'Accept state q_accept: all mandatory legal fields verified.',
        extractedFields: [
          { key: 'Land lot', value: 'Lote El Cedro' },
          { key: 'Use mode', value: 'Grazing' },
          { key: 'Total fee', value: '$4,800,000 COP' },
          { key: 'Start / Term', value: '01/12/2026 · 12 months' },
        ],
        warnings: [],
      },
      {
        id: 'ambiguous-crop',
        label: 'Ambiguous input',
        input:
          'Alquiler de la parcela norte para cultivo de maíz empezando pronto, pagando dos millones más o menos con el señor Pedro.',
        contractType: 'Crop lease',
        status: 'ambiguous',
        statusLabel: 'Needs clarification',
        tokens: [
          { token: 'VAGUE_LOT', lexeme: 'parcela norte' },
          { token: 'USE_TYPE', lexeme: 'cultivo' },
          { token: 'AMB_DATE', lexeme: 'pronto' },
          { token: 'AMB_AMOUNT', lexeme: 'dos millones más o menos' },
          { token: 'PARTIAL_PARTY', lexeme: 'señor Pedro' },
        ],
        pdaStackResult: 'Stack halted at <EXACT_DATE>: missing calendar date and counterparty.',
        turingVerdict: 'State q_review: export blocked until 3 ambiguities are resolved.',
        extractedFields: [
          { key: 'Land lot', value: 'parcela norte (missing boundary/name)' },
          { key: 'Use mode', value: 'Crop lease' },
          { key: 'Fee', value: 'Undetermined ("más o menos")' },
        ],
        warnings: [
          'Ambiguous start date ("pronto"): exact DD/MM/YYYY date required.',
          'Imprecise fee ("más o menos"): total amount in COP must be exact.',
          'Counterparty full name is missing.',
        ],
      },
      {
        id: 'mixed-use',
        label: 'Valid input (Mixed use)',
        input:
          'Contrato mixto de cultivo y pastoreo en Finca La Esperanza desde el 15/01/2027 por 6 meses, canon total 3.200.000 pesos entre Ana Torres y Luis Vega.',
        contractType: 'Mixed use',
        status: 'valid',
        statusLabel: 'Ready to export',
        tokens: [
          { token: 'MIXED_USE', lexeme: 'cultivo y pastoreo' },
          { token: 'LAND_LOT', lexeme: 'Finca La Esperanza' },
          { token: 'START_DATE', lexeme: '15/01/2027' },
          { token: 'TERM', lexeme: '6 meses' },
          { token: 'AMOUNT_COP', lexeme: '3.200.000 pesos' },
          { token: 'PARTIES', lexeme: 'Ana Torres / Luis Vega' },
        ],
        pdaStackResult: 'Empty stack on EOF: mixed-use clauses and obligations validated.',
        turingVerdict: 'Accept state q_accept: enabled for PDF and Markdown export.',
        extractedFields: [
          { key: 'Land lot', value: 'Finca La Esperanza' },
          { key: 'Use mode', value: 'Mixed (crop + grazing)' },
          { key: 'Total fee', value: '$3,200,000 COP' },
          { key: 'Start / Term', value: '15/01/2027 · 6 months' },
        ],
        warnings: [],
      },
    ],
  },
  harProject: {
    title: 'HAR Classifier — Human Activity Recognition',
    subtitle:
      'Reproducible PyTorch deep learning pipeline over smartphone inertial signals (UCI HAR) with a web prediction explorer.',
    liveUrl: 'https://harclassifier-uci.netlify.app/',
    repoUrl: 'https://github.com/Brokenearth/har-uci-classification',
    liveLabel: 'Explore live demo',
    repoLabel: 'GitHub repository',
    description:
      'Classifies 6 human activities from 9 accelerometer and gyroscope signals across 2.56 s windows (128 steps). To prevent inflated metrics, model selection runs via StratifiedGroupKFold grouped strictly by subject—guaranteeing zero subject leakage between training and validation.',
    metrics: [
      { label: 'Final validation', value: '97.8% accuracy' },
      { label: 'UCI official test', value: '92.6% (2,947 samples)' },
      { label: 'Dataset split', value: '5,551 train · 1,801 val' },
      { label: 'Traceability', value: '01-06 pipeline + W&B' },
    ],
    comparisonTitle: 'Subject-grouped cross-validation benchmark',
    comparisonRows: [
      {
        architecture: 'Conv1D (32-64) + LSTM (2x128)',
        cvAccuracy: '92.45%',
        note: 'Selected architecture: extracts local signal motifs prior to temporal modeling.',
        winner: true,
      },
      {
        architecture: 'Pure LSTM (128x9 window)',
        cvAccuracy: '90.61%',
        note: 'Recurrent baseline without convolutional feature extraction.',
      },
    ],
    stack: ['PyTorch', 'StratifiedGroupKFold', 'Conv1D + LSTM', 'Weights & Biases', 'Flask / Streamlit', 'Netlify'],
  },
  commercialProject: {
    title: 'Teje Ideas — Production Commercial Website',
    subtitle:
      'Direct delivery for an active handmade crochet brand (@teje_ideas01), engineered for mobile speed, real photography, and WhatsApp conversion.',
    liveUrl: 'https://tejeideas.netlify.app/',
    repoUrl: 'https://github.com/Brokenearth/Landing-Page-de-Tejidos',
    liveLabel: 'Visit live site',
    repoLabel: 'GitHub repository',
    description:
      'Not every business problem calls for heavy infrastructure. This delivery demonstrates end-to-end execution for a real client—optimizing visual assets, responsive layout, and zero-friction direct sales channels.',
    deliverables: [
      'Brand-aligned web presence built around @teje_ideas01 real product photography.',
      'Continuous static deployment on Netlify tuned for fast mobile browsing.',
      'Direct WhatsApp ordering flow for custom crochet requests.',
    ],
    stack: ['Semantic HTML5', 'Responsive CSS', 'JavaScript', 'Netlify'],
  },
  approach: {
    title: 'How I contribute from day one on an engineering team',
    subtitle:
      'Modern teams do not hire engineers just to emit syntax; they hire engineers who set clean boundaries, verify behavior automatically, and orchestrate modern tooling with sound judgment.',
    pillars: [
      {
        title: 'Modular architecture with clear boundaries',
        summary:
          'Explicit separation across domain, application, and infrastructure layers (Clean Architecture and isolated SQL schemas) so module changes stay contained.',
        evidence: 'Proven in UniSport (.NET 10 + 3 isolated PostgreSQL schemas).',
      },
      {
        title: 'Automated verification before calling anything done',
        summary:
          'Real-container integration tests, leakage-free ML cross-validation, and strict CI/CD gates. Whether code is handwritten or AI-assisted, tests are the source of truth.',
        evidence: '1,255 automated tests in UniSport and StratifiedGroupKFold in HAR UCI.',
      },
      {
        title: 'AI-augmented engineering and orchestration',
        summary:
          'I use structured specifications, multi-step verification, and AI tooling to accelerate delivery without compromising readability, security, or maintainability.',
        evidence: 'Repeatable workflow from system design through cloud deployment.',
      },
    ],
    contactTitle: 'Available for Junior / Full-Stack Engineering roles',
    contactText:
      'If your team is looking for a graduating engineer who has already shipped modular architecture, automated test suites, and ML models to production, let us talk.',
  },
  cv: {
    pageTitle: 'Resume — Johan Deivy Hernández Basallo',
    backLabel: 'Back to portfolio',
    printLabel: 'Print or save PDF',
    educationTitle: 'Education',
    education: {
      degree: 'B.S. in Systems Engineering (Graduating Senior)',
      institution: 'Universidad de los Llanos',
      status: 'Final semester · Focus on Software Engineering, Architecture, and Applied ML',
      focus: 'Modular system design, formal languages and compilers, neural networks, and cloud delivery.',
    },
    experienceTitle: 'Production projects & engineering experience',
    experience: [
      {
        role: 'Backend, Frontend & CI/CD Engineer',
        project: 'UniSport — Sports Reservations Platform (Universidad de los Llanos)',
        period: '2026',
        points: [
          'Built the Reservation lifecycle (HU-05): transactional creation from approved requests, user/admin cancellation, automatic expiration, and admin search in .NET 10 and PostgreSQL.',
          'Delivered request reporting and export module (HU-07) across .NET 10 and Angular 22 Signals + PrimeNG.',
          'Implemented CI artifact gating in Azure Pipelines backed by 828 backend tests (Testcontainers + k6) and 427 frontend tests (Vitest).',
        ],
      },
      {
        role: 'Software Architect & Author',
        project: 'Voice Rural Contracts (EasyContractField)',
        period: '2026',
        points: [
          'Engineered custom DFA lexical scanner, Pushdown Automaton syntax validator, and Turing Machine consistency checker in TypeScript.',
          'Implemented ambiguity detection for natural-language rural lease descriptions with PDF and Markdown export on Netlify.',
        ],
      },
      {
        role: 'Applied Machine Learning Engineer',
        project: 'HAR Classifier — UCI HAR (PyTorch)',
        period: '2026',
        points: [
          'Benchmarked Conv1D+LSTM (92.45% CV) vs pure LSTM (90.61% CV) using subject-grouped StratifiedGroupKFold.',
          'Achieved 97.8% validation accuracy and 92.6% test accuracy, tracked with Weights & Biases and deployed as a web explorer.',
        ],
      },
      {
        role: 'Freelance Web Developer',
        project: 'Teje Ideas (@teje_ideas01)',
        period: '2026',
        points: [
          'Designed and deployed a responsive commercial website on Netlify connected to WhatsApp ordering.',
        ],
      },
    ],
    skillsTitle: 'Verified technical skills',
    skillGroups: [
      {
        category: 'Backend & Architecture',
        items: ['.NET 10 / C#', 'TypeScript / Node.js', 'Python', 'Clean Architecture', 'Modular Monoliths', 'REST / OpenAPI'],
      },
      {
        category: 'Frontend',
        items: ['Angular 22 (Signals)', 'React 19', 'Astro 5', 'Tailwind CSS', 'PrimeNG', 'WCAG AA Accessibility'],
      },
      {
        category: 'Data, ML & CS Foundations',
        items: ['PostgreSQL (schemas)', 'Entity Framework Core', 'PyTorch', 'Subject-split CV', 'Automata & Compilers'],
      },
      {
        category: 'Cloud, Testing & DevOps',
        items: ['Azure Pipelines', 'Docker & ACR', 'Testcontainers', 'Vitest', 'k6', 'Netlify / Vercel / Cloudflare R2'],
      },
    ],
    languagesTitle: 'Languages',
    languages: ['Spanish (Native)', 'English (Advanced technical reading and documentation)'],
  },
  footer: {
    builtWith: 'Built with Astro, React, TypeScript, and Tailwind CSS · Zero generic templates.',
    availability: 'Colombia / Remote · Ready for immediate onboarding.',
  },
};

export function getPortfolioData(locale: Locale): PortfolioContent {
  return locale === 'en' ? EN_DATA : ES_DATA;
}
