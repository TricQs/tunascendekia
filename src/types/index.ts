export type LmsModuleTab = 'chat' | 'upload' | 'recording' | 'attendance' | 'advising';

export type B2BPlanId = 'paket-a' | 'paket-b' | 'paket-custom';

export type InstitutionType =
  | 'Universitas / Perguruan Tinggi'
  | 'Sekolah (SD / SMP / SMA)'
  | 'Lembaga Pelatihan & Vokasi';

export type BillingCycle = 'bulanan' | 'tahunan';

export interface SelectedB2BInquiry {
  planId: B2BPlanId;
  planName: string;
  billingCycle: BillingCycle;
  userCapacityLabel: string;
}

export interface FormDataType {
  namaInstitusi: string;
  namaPic: string;
  tipeInstitusi: InstitutionType | '';
  jumlahPengguna: string;
  nomorWhatsapp: string;
  paketPilihan: string;
}

export type FormFieldKey = keyof Pick<
  FormDataType,
  'namaInstitusi' | 'namaPic' | 'tipeInstitusi' | 'jumlahPengguna' | 'nomorWhatsapp'
>;

export type FormStatus = 'idle' | 'error' | 'submitting' | 'submitted';

export type DeckIllustrationKey =
  | 'problem'
  | 'vision'
  | 'opportunity'
  | 'solution'
  | 'product-zoom'
  | 'product-clinic'
  | 'contact-team';

export interface StrategicStoryCard {
  id: string;
  tag: string;
  title: string;
  body: string;
  highlightText?: string;
  accentTheme: 'navy' | 'emerald' | 'gold';
  illustrationKey: DeckIllustrationKey;
}

export interface PortalComparisonRow {
  aspect: string;
  legacyPortal: string;
  tunasCendekiaLms: string;
}

export interface LmsModuleFeature {
  id: string;
  number: string;
  title: string;
  description: string;
  benefitText: string;
  iconKey: 'chat' | 'cloud' | 'video' | 'attendance' | 'calendar' | 'shield';
}

export interface B2BPricingTier {
  id: B2BPlanId;
  codeLabel: string;
  name: string;
  targetInstitution: string;
  userLimitLabel: string;
  uploadLimitLabel: string;
  storagePoolLabel: string;
  monthlyPriceRp: number | null;
  annualPriceRp: number | null;
  customPriceNote?: string;
  highlights: string[];
  featured?: boolean;
  badgeLabel?: string;
  ctaLabel: string;
  tone: 'teal' | 'emerald' | 'navy';
}

export interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}
