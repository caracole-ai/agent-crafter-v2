import { defineStore } from 'pinia'
import type {
  CoreTraits,
  CoreTraitKey,
  Facets,
  CommunicationData,
  ExpertiseData,
  BehavioralData,
  AdvancedData,
  PhilosophyData,
  TheaterData,
  LiteraryData,
  TabName,
  PrimaryStyle,
  CommunicationModifier,
  ResponseStructure,
  ToneKey,
  ExpertiseLevel,
  RoleArchetype,
  QuestioningStyle,
  LanguageStyle,
} from '~/types/personality'

export interface EnabledState {
  _self: boolean
  [key: string]: boolean
}

export interface AllEnabledState {
  core: EnabledState
  communication: EnabledState
  expertise: EnabledState
  behavioral: EnabledState
  philosophy: EnabledState
  theater: EnabledState
  literary: EnabledState
  advanced: EnabledState
  [key: string]: EnabledState
}

function createDefaultEnabled(): AllEnabledState {
  return {
    core: { _self: true, extraversion: true, agreeableness: true, conscientiousness: true, emotionalStability: true, openness: true },
    communication: { _self: true, primaryStyle: true, modifiers: true, responseCharacteristics: true, tones: true },
    expertise: { _self: true, level: true, roleArchetype: true, industries: true, cognitive: true, learning: true },
    behavioral: { _self: true, proactivity: true, questioningStyle: true, errorHandling: true, responseBehavior: true, cultural: true, interactionPatterns: true },
    philosophy: { _self: true, epistemology: true, ethicalFramework: true, dialecticalMethod: true, temperament: true, virtues: true },
    theater: { _self: true, archetype: true, function: true, register: true, dynamics: true, actingTools: true, brechtian: true },
    literary: { _self: true, narrativeVoice: true, movement: true, rhetoricalDevices: true, prose: true, rhythm: true, intertextuality: true },
    advanced: { _self: true, capabilities: true, responseLimits: true, instructions: true, conditionalBehaviors: true, integration: true, configManagement: true },
  }
}

export const usePersonalityStore = defineStore('personality', () => {
  const activeTab = ref<TabName>('core')
  const enabled = reactive<AllEnabledState>(createDefaultEnabled())

  const core = reactive<CoreTraits>({
    extraversion: 50,
    agreeableness: 50,
    conscientiousness: 50,
    emotionalStability: 50,
    openness: 50,
  })

  const facets = reactive<Facets>({})

  const communication = reactive<CommunicationData>({
    primaryStyle: 'friendly',
    modifiers: [],
    verbosity: 5,
    structure: 'paragraphs',
    tones: { optimism: 50, formality: 50, patience: 50, confidence: 50 },
  })

  const expertise = reactive<ExpertiseData>({
    level: 'competent',
    roleArchetype: 'mentor',
    industries: [],
    thinkingStyles: [],
    problemSolving: { speedThoroughness: 50, riskCaution: 50, independentCollaborative: 50 },
    learningApproach: [],
  })

  const behavioral = reactive<BehavioralData>({
    proactivity: 50,
    questioningStyle: 'clarifying',
    errorHandling: [],
    responseBehavior: { followup: 50, elaboration: 50, context: 50, examples: 50 },
    languageStyle: 'global',
    culturalSensitivity: 50,
    adaptationBehavior: [],
    interactionPatterns: [],
  })

  const philosophy = reactive<PhilosophyData>({
    epistemology: 'pragmatist',
    ethicalFramework: 'contextual',
    dialecticalMethod: 'maieutic',
    temperament: { certaintyDoubt: 50, universalParticular: 50, contemplativeActive: 50, individualCollective: 50 },
    cardinalVirtues: [],
  })

  const theater = reactive<TheaterData>({
    dramaticArchetype: 'guide',
    dramaticFunction: 'mentor',
    theatricalRegister: 'drama',
    playDynamics: { protagonistSupport: 50, textSubtext: 50, maskAuthenticity: 50, monologueDialogue: 50 },
    actingTools: [],
    brechtianDistance: 30,
  })

  const literary = reactive<LiteraryData>({
    narrativeVoice: 'engaged-first',
    literaryMovement: 'realism',
    rhetoricalDevices: [],
    proseAesthetics: { ornateAustere: 50, abstractConcrete: 50, lyricalAnalytical: 50, linearDigressive: 50, didacticEvocative: 50 },
    textualRhythm: 'mixed',
    intertextuality: 30,
  })

  const advanced = reactive<AdvancedData>({
    technicalCapabilities: [],
    maxResponseLength: 'medium',
    securityLevel: 'standard',
    contentFilters: ['adult-content', 'violence', 'hate-speech'],
    systemInstructions: '',
    userInstructions: '',
    fallbackResponses: '',
    conditionalBehaviors: [],
    timeBehaviors: [],
    preferredModel: 'auto',
    responseFormat: 'adaptive',
    temperature: 0.7,
    timeout: 30,
  })

  // Getters
  const budgetUsed = computed(() =>
    Object.values(core).reduce((sum, val) => sum + val, 0),
  )
  const budgetTotal = 500

  const budgetStatus = computed<'ok' | 'warning' | 'danger'>(() => {
    const ratio = budgetUsed.value / budgetTotal
    if (ratio > 0.9) return 'danger'
    if (ratio > 0.8) return 'warning'
    return 'ok'
  })

  const coreTraitsArray = computed(() => [
    core.extraversion,
    core.agreeableness,
    core.conscientiousness,
    core.emotionalStability,
    core.openness,
  ])

  // Actions
  function setCoreTrait(trait: CoreTraitKey, value: number) {
    core[trait] = value
  }

  function setFacet(key: string, value: number) {
    facets[key] = value
  }

  function switchTab(tab: TabName) {
    activeTab.value = tab
  }

  function toggleArrayItem<T>(arr: T[], item: T) {
    const idx = arr.indexOf(item)
    if (idx > -1) arr.splice(idx, 1)
    else arr.push(item)
  }

  function resetAll() {
    const defaultVal = 50
    ;(Object.keys(core) as CoreTraitKey[]).forEach((k) => {
      core[k] = defaultVal
    })
    Object.keys(facets).forEach((k) => {
      facets[k] = 50
    })
    communication.primaryStyle = 'friendly'
    communication.modifiers = []
    communication.verbosity = 5
    communication.structure = 'paragraphs'
    communication.tones.optimism = 50
    communication.tones.formality = 50
    communication.tones.patience = 50
    communication.tones.confidence = 50
    expertise.level = 'competent'
    expertise.roleArchetype = 'mentor'
    expertise.industries = []
    expertise.thinkingStyles = []
    expertise.problemSolving.speedThoroughness = 50
    expertise.problemSolving.riskCaution = 50
    expertise.problemSolving.independentCollaborative = 50
    expertise.learningApproach = []
    behavioral.proactivity = 50
    behavioral.questioningStyle = 'clarifying'
    behavioral.errorHandling = []
    behavioral.responseBehavior.followup = 50
    behavioral.responseBehavior.elaboration = 50
    behavioral.responseBehavior.context = 50
    behavioral.responseBehavior.examples = 50
    behavioral.languageStyle = 'global'
    behavioral.culturalSensitivity = 50
    behavioral.adaptationBehavior = []
    behavioral.interactionPatterns = []
    philosophy.epistemology = 'pragmatist'
    philosophy.ethicalFramework = 'contextual'
    philosophy.dialecticalMethod = 'maieutic'
    philosophy.temperament.certaintyDoubt = 50
    philosophy.temperament.universalParticular = 50
    philosophy.temperament.contemplativeActive = 50
    philosophy.temperament.individualCollective = 50
    philosophy.cardinalVirtues = []
    theater.dramaticArchetype = 'guide'
    theater.dramaticFunction = 'mentor'
    theater.theatricalRegister = 'drama'
    theater.playDynamics.protagonistSupport = 50
    theater.playDynamics.textSubtext = 50
    theater.playDynamics.maskAuthenticity = 50
    theater.playDynamics.monologueDialogue = 50
    theater.actingTools = []
    theater.brechtianDistance = 30
    literary.narrativeVoice = 'engaged-first'
    literary.literaryMovement = 'realism'
    literary.rhetoricalDevices = []
    literary.proseAesthetics.ornateAustere = 50
    literary.proseAesthetics.abstractConcrete = 50
    literary.proseAesthetics.lyricalAnalytical = 50
    literary.proseAesthetics.linearDigressive = 50
    literary.proseAesthetics.didacticEvocative = 50
    literary.textualRhythm = 'mixed'
    literary.intertextuality = 30
    advanced.technicalCapabilities = []
    advanced.maxResponseLength = 'medium'
    advanced.securityLevel = 'standard'
    advanced.contentFilters = ['adult-content', 'violence', 'hate-speech']
    advanced.systemInstructions = ''
    advanced.userInstructions = ''
    advanced.fallbackResponses = ''
    advanced.conditionalBehaviors = []
    advanced.timeBehaviors = []
    advanced.preferredModel = 'auto'
    advanced.responseFormat = 'adaptive'
    advanced.temperature = 0.7
    advanced.timeout = 30
    // Reset enabled state
    const defaults = createDefaultEnabled()
    Object.assign(enabled, defaults)
  }

  function loadConfig(config: Record<string, any>) {
    if (config.core) Object.assign(core, config.core)
    if (config.communication) {
      const { tones, ...rest } = config.communication
      Object.assign(communication, rest)
      if (tones) Object.assign(communication.tones, tones)
    }
    if (config.expertise) {
      const { problemSolving, ...rest } = config.expertise
      Object.assign(expertise, rest)
      if (problemSolving) Object.assign(expertise.problemSolving, problemSolving)
    }
    if (config.behavioral) {
      const { responseBehavior, ...rest } = config.behavioral
      Object.assign(behavioral, rest)
      if (responseBehavior) Object.assign(behavioral.responseBehavior, responseBehavior)
    }
    if (config.philosophy) {
      const { temperament, ...rest } = config.philosophy
      Object.assign(philosophy, rest)
      if (temperament) Object.assign(philosophy.temperament, temperament)
    }
    if (config.theater) {
      const { playDynamics, ...rest } = config.theater
      Object.assign(theater, rest)
      if (playDynamics) Object.assign(theater.playDynamics, playDynamics)
    }
    if (config.literary) {
      const { proseAesthetics, ...rest } = config.literary
      Object.assign(literary, rest)
      if (proseAesthetics) Object.assign(literary.proseAesthetics, proseAesthetics)
    }
    if (config.advanced) Object.assign(advanced, config.advanced)
    if (config.facets) Object.assign(facets, config.facets)
    if (config.enabled) {
      for (const cat of Object.keys(config.enabled)) {
        if (enabled[cat]) {
          Object.assign(enabled[cat], config.enabled[cat])
        }
      }
    }
  }

  return {
    activeTab,
    enabled,
    core,
    facets,
    communication,
    expertise,
    behavioral,
    philosophy,
    theater,
    literary,
    advanced,
    budgetUsed,
    budgetTotal,
    budgetStatus,
    coreTraitsArray,
    setCoreTrait,
    setFacet,
    switchTab,
    toggleArrayItem,
    resetAll,
    loadConfig,
  }
})
