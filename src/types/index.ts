export interface SiteConfig {
  companyName: string;
  tagline: string;
  heroHeadline: {
    line1: string;
    line2: string;
    highlight1: string;
    highlight2: string;
  };
  heroSubheadline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  foundedYear: number;
  yearsOfExperience: string;
  projectsCompleted: string;
  happyClients: string;
  qualityCommitment: string;
  workforce?: string;
  sinceYear?: string;
  siteUrl: string;
  googleSiteVerification: string;
  googleAnalyticsId: string;
  headquarters: {
    title: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    latitude?: number;
    longitude?: number;
  };
  branches: {
    city: string;
    state: string;
    address: string;
    phone: string;
    email: string;
  }[];
  socialLinks: {
    instagram: string;
    linkedin: string;
    facebook: string;
    youtube: string;
  };
  social?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
  serviceAreas: string[];
  googleMapsEmbedUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetailData {
  slug: string;
  id: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  shortDesc: string;
  heroImage: string;
  heroImageAlt: string;
  targetAudience: string;
  overview: string;
  whatIsIncluded: string[];
  constructionProcess: {
    step: string;
    title: string;
    desc: string;
  }[];
  whyChooseUs: string[];
  faqs: FAQItem[];
}

export interface ServiceItem {
  id: string;
  slug?: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  specs: string[];
  featuredImage?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Renovation' | 'Turnkey' | 'Civil & Structural';
  location: string;
  projectType: string;
  area: string;
  year: string;
  duration: string;
  description: string;
  image: string;
  highlights: string[];
  scope: string[];
}

export interface WhyUsItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  timeline: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  location: string;
  projectType: string;
  rating: number;
  year: string;
  avatar?: string;
}
