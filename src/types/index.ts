export type EducationLevel = 'SD' | 'SMP' | 'SMA';

export type ProgramTrack = 'TKA' | 'Olimpiade' | 'TKA + Olimpiade';

export type LevelFilter = 'ALL' | EducationLevel;

export type BillingCycle = 'bulanan' | 'semester';

export type SandboxState = 'exploring' | 'answered-correct' | 'answered-retry';

export interface SelectedConsultationProgram {
  level: EducationLevel;
  track: ProgramTrack;
  planName: string;
  billingCycle: BillingCycle;
}

export interface FormDataType {
  namaOrangTua: string;
  namaDanKelasSiswa: string;
  nomorWhatsapp: string;
  jenjang: EducationLevel | '';
  targetProgram: ProgramTrack | '';
  paketPilihan: string;
}

export type FormFieldKey = keyof Pick<
  FormDataType,
  'namaOrangTua' | 'namaDanKelasSiswa' | 'nomorWhatsapp' | 'jenjang' | 'targetProgram'
>;

export type FormStatus = 'idle' | 'error' | 'submitting' | 'submitted';

export interface ProofStage {
  stageNumber: 1 | 2 | 3;
  shortLabel: string;
  title: string;
  highlightBadge: string;
  explanation: string;
}

export interface QuizOption {
  id: string;
  label: string;
  isCorrect: boolean;
  feedbackHint: string;
}

export interface SandboxProblemSet {
  level: EducationLevel;
  tabLabel: string;
  gradeRangeLabel: string;
  trackLabel: string;
  conceptTitle: string;
  parameterLabel: string;
  parameterUnit: string;
  parameterMin: number;
  parameterMax: number;
  parameterDefault: number;
  stages: [ProofStage, ProofStage, ProofStage];
  challengeQuestion: string;
  challengeOptions: [QuizOption, QuizOption, QuizOption];
  correctExplanation: string;
}

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
  accentTheme: 'navy' | 'emerald' | 'gold' | 'slate';
  illustrationKey: DeckIllustrationKey;
}

export interface PainPointItem {
  id: string;
  painQuestion: string;
  solutionLabel: string;
  detailText: string;
}

export interface FeatureCardData {
  id: string;
  number: string;
  title: string;
  description: string;
  benefitText: string;
  iconKey: 'zoom' | 'curriculum' | 'group' | 'analytics';
}

export interface TrackOverviewData {
  stepNumber: string;
  track: ProgramTrack;
  title: string;
  subtitle: string;
  suitableFor: string;
  learningFocus: [string, string];
}

export interface ProgramCatalogItem {
  id: string;
  level: EducationLevel;
  track: ProgramTrack;
  trackLabel: string;
  headline: string;
  bullets: [string, string];
  classQuota: string;
  sessionQuotaMonthly: string;
  sessionQuotaSemester: string;
  monthlyPriceRp: number;
  semesterPriceRp: number;
  cardTone: 'teal' | 'emerald' | 'navy';
  badgeLabel?: string;
}

export interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}
