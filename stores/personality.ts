import { defineStore } from 'pinia'
import type {
  CoreTraits,
  CoreTraitKey,
  Facets,
  CommunicationData,
  ExpertiseData,
  BehavioralData,
  AdvancedData,
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

export const usePersonalityStore = defineStore('personality', () => {
  const activeTab = ref<TabName>('core')

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
    if (config.advanced) Object.assign(advanced, config.advanced)
    if (config.facets) Object.assign(facets, config.facets)
  }

  return {
    activeTab,
    core,
    facets,
    communication,
    expertise,
    behavioral,
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
