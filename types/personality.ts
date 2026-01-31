export interface CoreTraits {
  extraversion: number
  agreeableness: number
  conscientiousness: number
  emotionalStability: number
  openness: number
}

export type CoreTraitKey = keyof CoreTraits

export interface Facets {
  [key: string]: number
}

export interface CommunicationTones {
  optimism: number
  formality: number
  patience: number
  confidence: number
}

export type ToneKey = keyof CommunicationTones

export type PrimaryStyle =
  | 'professional'
  | 'friendly'
  | 'academic'
  | 'creative'
  | 'technical'
  | 'coaching'
  | 'therapeutic'
  | 'enthusiastic'

export type CommunicationModifier =
  | 'humorous'
  | 'direct'
  | 'diplomatic'
  | 'storytelling'
  | 'patient'
  | 'encouraging'

export type ResponseStructure = 'bullets' | 'paragraphs' | 'mixed' | 'qa' | 'steps'

export interface CommunicationData {
  primaryStyle: PrimaryStyle
  modifiers: CommunicationModifier[]
  verbosity: number
  structure: ResponseStructure
  tones: CommunicationTones
}

export type ExpertiseLevel = 'novice' | 'competent' | 'proficient' | 'expert' | 'master'

export type RoleArchetype =
  | 'consultant'
  | 'mentor'
  | 'partner'
  | 'executor'
  | 'researcher'
  | 'creator'

export type Industry =
  | 'technology'
  | 'business'
  | 'education'
  | 'healthcare'
  | 'creative'
  | 'science'
  | 'sales'
  | 'legal'

export type ThinkingStyle = 'analytical' | 'intuitive' | 'systematic' | 'creative'

export type LearningApproach =
  | 'visual'
  | 'stepByStep'
  | 'theoretical'
  | 'handson'
  | 'analogies'
  | 'cases'

export interface ProblemSolving {
  speedThoroughness: number
  riskCaution: number
  independentCollaborative: number
}

export type ProblemSolvingKey = keyof ProblemSolving

export interface ExpertiseData {
  level: ExpertiseLevel
  roleArchetype: RoleArchetype
  industries: Industry[]
  thinkingStyles: ThinkingStyle[]
  problemSolving: ProblemSolving
  learningApproach: LearningApproach[]
}

export type QuestioningStyle = 'socratic' | 'direct' | 'clarifying' | 'challenging' | 'supportive'

export type ErrorHandling =
  | 'acknowledge'
  | 'confidence'
  | 'verification'
  | 'alternatives'
  | 'escalate'
  | 'research'

export type LanguageStyle = 'global' | 'american' | 'british' | 'technical' | 'simple'

export type AdaptationBehavior =
  | 'formality-matching'
  | 'escalate-professional'
  | 'deescalate-casual'
  | 'inclusive-language'

export type InteractionPattern =
  | 'memory-reference'
  | 'progress-tracking'
  | 'personalization'
  | 'anticipate-needs'
  | 'emotional-awareness'
  | 'boundary-respect'

export interface ResponseBehavior {
  followup: number
  elaboration: number
  context: number
  examples: number
}

export type ResponseBehaviorKey = keyof ResponseBehavior

export interface BehavioralData {
  proactivity: number
  questioningStyle: QuestioningStyle
  errorHandling: ErrorHandling[]
  responseBehavior: ResponseBehavior
  languageStyle: LanguageStyle
  culturalSensitivity: number
  adaptationBehavior: AdaptationBehavior[]
  interactionPatterns: InteractionPattern[]
}

export type TechnicalCapability =
  | 'web-search'
  | 'memory'
  | 'file-analysis'
  | 'code-generation'
  | 'image-analysis'
  | 'data-visualization'
  | 'api-integration'
  | 'workflow-automation'
  | 'real-time-data'

export type SecurityLevel = 'open' | 'standard' | 'strict' | 'enterprise'
export type MaxResponseLength = 'short' | 'medium' | 'long' | 'extended' | 'unlimited'

export type ContentFilter =
  | 'adult-content'
  | 'violence'
  | 'hate-speech'
  | 'misinformation'
  | 'privacy-protection'
  | 'legal-compliance'

export type ConditionalBehavior =
  | 'formal-business'
  | 'casual-personal'
  | 'detailed-technical'
  | 'simplified-beginner'
  | 'urgent-responsive'
  | 'creative-brainstorm'

export type TimeBehavior =
  | 'morning-energetic'
  | 'evening-reflective'
  | 'weekend-relaxed'
  | 'deadline-focused'

export type PreferredModel = 'auto' | 'gpt-4' | 'claude-3' | 'gemini' | 'llama-2' | 'custom'
export type ResponseFormat = 'adaptive' | 'markdown' | 'plain-text' | 'structured' | 'rich-html'

export interface AdvancedData {
  technicalCapabilities: TechnicalCapability[]
  maxResponseLength: MaxResponseLength
  securityLevel: SecurityLevel
  contentFilters: ContentFilter[]
  systemInstructions: string
  userInstructions: string
  fallbackResponses: string
  conditionalBehaviors: ConditionalBehavior[]
  timeBehaviors: TimeBehavior[]
  preferredModel: PreferredModel
  responseFormat: ResponseFormat
  temperature: number
  timeout: number
}

export type TabName = 'core' | 'communication' | 'expertise' | 'behavioral' | 'advanced'

export interface AgentConfig {
  version: string
  metadata: {
    name: string
    description: string
    createdAt: string
    budgetUsed: number
    complexity: number
  }
  core: CoreTraits
  communication: CommunicationData
  expertise: ExpertiseData
  behavioral: BehavioralData
  advanced: AdvancedData
  facets: Facets
}
