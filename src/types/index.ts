export type JenjangType = 'SD' | 'SMP' | 'SMA';

export type BidangMinatType = 'Matematika' | 'IPA-Sains' | 'IPS' | 'TKA Umum';

export interface FormDataType {
  namaLengkap: string;
  jenjangKelas: JenjangType | '';
  bidangMinat: BidangMinatType | '';
  nomorWhatsapp: string;
  paketPilihan: string;
}

export interface AlgorithmStep {
  stepNumber: number;
  title: string;
  formula: string;
  explanation: string;
  highlightBadge: string;
}

export interface HotsTopic {
  id: 'math' | 'science' | 'tka';
  label: string;
  tag: string;
  level: string;
  question: string;
  algorithmName: string;
  finalAnswer: string;
  steps: AlgorithmStep[];
}

export interface PillarCardData {
  id: JenjangType;
  title: string;
  badge: string;
  description: string;
}

export interface FeatureCardData {
  number: string;
  title: string;
  description: string;
  benefit: string;
  iconType: 'zoom' | 'curriculum' | 'class' | 'cbt';
}

export interface PricingCardData {
  id: string;
  name: string;
  target: string;
  priceMain: string;
  priceSub: string;
  features: string[];
  ctaText: string;
  featured?: boolean;
  popularRibbon?: string;
  buttonVariant: 'navy' | 'primary' | 'gold';
}

export interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}
