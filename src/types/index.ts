export type EducationLevel = 'SD' | 'SMP' | 'SMA';

export type ProgramTrack = 'TKA' | 'OSN';

export type TargetProgramChoice = 'TKA' | 'OSN' | 'TKA & OSN';

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
  targetProgram: TargetProgramChoice | '';
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

export interface PillarCardData {
  id: string;
  stepLabel: string;
  title: string;
  description: string;
  jenjangValue: EducationLevel;
  iconKey: 'seedling' | 'compass' | 'graduation';
}

export interface FeatureCardData {
  id: string;
  number: string;
  title: string;
  description: string;
  benefitText: string;
  iconKey: 'zoom' | 'curriculum' | 'group' | 'analytics';
}

export interface PricingTierData {
  id: string;
  track: ProgramTrack;
  level: EducationLevel;
  name: string;
  target: string;
  classQuota: string;
  sessionQuotaMonthly: string;
  sessionQuotaSemester: string;
  mentorCredential: string;
  monthlyPriceRp: number;
  semesterPriceRp: number;
  semesterSavingsLabel: string;
  features: string[];
  featured?: boolean;
  ribbonLabel?: string;
  buttonVariant: 'navy' | 'primary' | 'secondary';
}

export interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}
