export interface Statistic {
  value: string;
  label: string;
}

export interface Service {
  name: string;
  description: string;
  duration: string;
  recovery: string;
  priceRange: string;
  benefits: string[];
  category: 'dental' | 'aesthetic';
}

export interface Doctor {
  name: string;
  title: string;
  specialization: string;
  qualifications: string[];
  expertise: string[];
  languages: string[];
  achievements: string[];
  image: string;
}

export interface Package {
  name: string;
  treatments: string[];
  accommodation: string;
  transport: string;
  languageSupport: string[];
  tourism: string[];
  priceComparison: {
    eu: string;
    us: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  name: string;
  nationality: string;
  treatment: string;
  content: string;
  rating: number;
}