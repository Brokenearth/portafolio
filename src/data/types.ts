export type Locale = 'es' | 'en';

export interface NavLabels {
  projects: string;
  architecture: string;
  approach: string;
  cv: string;
  switchLangLabel: string;
  switchLangHref: string;
  themeToDark: string;
  themeToLight: string;
  skipToContent: string;
}

export interface HeroMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ProfileData {
  name: string;
  shortName: string;
  role: string;
  location: string;
  university: string;
  status: string;
  email: string;
  githubUrl: string;
  githubHandle: string;
  linkedinUrl: string;
  linkedinHandle: string;
  portfolioUrl: string;
  portfolioHandle: string;
  headline: string;
  summary: string;
  primaryCta: string;
  cvCta: string;
  copyEmailLabel: string;
  copiedEmailLabel: string;
  openMailLabel: string;
  metricsTitle: string;
  metrics: HeroMetric[];
}

export interface ArchitectureNode {
  id: string;
  layer: string;
  name: string;
  tech: string;
  schemaOrTarget: string;
  summary: string;
  responsibilities: string[];
  verification: string;
}

export interface UniSportCaseStudy {
  title: string;
  subtitle: string;
  contextTag: string;
  liveUrl: string;
  liveLabel: string;
  privateRepoNote: string;
  overview: string;
  myContributionsTitle: string;
  myContributions: string[];
  metrics: Array<{ label: string; value: string }>;
  stack: string[];
  inspectorTitle: string;
  inspectorHint: string;
  inspectorLabels: {
    layer: string;
    target: string;
    responsibilities: string;
    verification: string;
  };
  nodes: ArchitectureNode[];
}

export interface AutomataToken {
  token: string;
  lexeme: string;
}

export interface AutomataSample {
  id: string;
  label: string;
  input: string;
  contractType: string;
  status: 'valid' | 'ambiguous';
  statusLabel: string;
  tokens: AutomataToken[];
  pdaStackResult: string;
  turingVerdict: string;
  extractedFields: Array<{ key: string; value: string }>;
  warnings: string[];
}

export interface ContractsProject {
  title: string;
  subtitle: string;
  liveUrl: string;
  repoUrl: string;
  liveLabel: string;
  repoLabel: string;
  description: string;
  highlights: string[];
  stack: string[];
  simulatorTitle: string;
  simulatorHint: string;
  simulatorLabels: {
    inputLabel: string;
    afdLabel: string;
    pdaLabel: string;
    turingLabel: string;
    fieldsLabel: string;
    warningsLabel: string;
  };
  samples: AutomataSample[];
}

export interface HarModelRow {
  architecture: string;
  cvAccuracy: string;
  note: string;
  winner?: boolean;
}

export interface HarProject {
  title: string;
  subtitle: string;
  liveUrl: string;
  repoUrl: string;
  liveLabel: string;
  repoLabel: string;
  description: string;
  metrics: Array<{ label: string; value: string }>;
  comparisonTitle: string;
  comparisonRows: HarModelRow[];
  stack: string[];
}

export interface CommercialProject {
  title: string;
  subtitle: string;
  liveUrl: string;
  repoUrl: string;
  liveLabel: string;
  repoLabel: string;
  description: string;
  deliverables: string[];
  stack: string[];
}

export interface EngineeringPillar {
  title: string;
  summary: string;
  evidence: string;
}

export interface WorkflowStep {
  stage: string;
  detail: string;
}

export interface EngineeringApproachData {
  title: string;
  subtitle: string;
  pillars: EngineeringPillar[];
  workflowTitle: string;
  workflowSteps: WorkflowStep[];
  contactTitle: string;
  contactText: string;
}

export interface CvData {
  pageTitle: string;
  backLabel: string;
  printLabel: string;
  educationTitle: string;
  education: {
    degree: string;
    institution: string;
    status: string;
    focus: string;
  };
  experienceTitle: string;
  experience: Array<{
    role: string;
    project: string;
    period: string;
    points: string[];
  }>;
  skillsTitle: string;
  skillGroups: Array<{
    category: string;
    items: string[];
  }>;
  languagesTitle: string;
  languages: string[];
}

export interface PortfolioContent {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  nav: NavLabels;
  profile: ProfileData;
  sectionTitles: {
    flagship: string;
    selectedSystems: string;
    commercialDelivery: string;
  };
  uniSport: UniSportCaseStudy;
  contractsProject: ContractsProject;
  harProject: HarProject;
  commercialProject: CommercialProject;
  approach: EngineeringApproachData;
  cv: CvData;
  footer: {
    builtWith: string;
    availability: string;
  };
}
