export interface Service {
  slug: string;
  title: string;
  description: string;
  outcome: string;
  intro: string;
  capabilities: string[];
  process: Array<{ title: string; description: string }>;
  deliverables: string[];
  icon: 'compass' | 'layers' | 'chart' | 'workflow';
  className: string;
  image?: string;
}

export interface DemoCase {
  slug: string;
  sector: string;
  title: string;
  description: string;
  metric: string;
  image: string;
  challenge: string;
  moves: string[];
  conclusion: string;
}

export interface InsightArticle {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readingTime: string;
  publishedAt: string;
  introduction: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
  takeaway: string;
}

export interface Testimonial {
  quote: string;
  role: string;
  company: string;
  image: string;
}

export interface DiagnosticFormData {
  name: string;
  company: string;
  email: string;
  website?: string;
  objective: string;
  budget: string;
  challenge: string;
}

export interface SimulationResult {
  simulated: true;
  submittedAt: string;
}
