import { usePersonalityStore } from '~/stores/personality'
import { presets } from '~/data/presets'
import type { CoreTraitKey } from '~/types/personality'

export function usePresets() {
  const store = usePersonalityStore()

  function enableAllSubs(cat: string) {
    const catEnabled = store.enabled[cat]
    if (catEnabled) {
      Object.keys(catEnabled).forEach((key) => {
        catEnabled[key] = true
      })
    }
  }

  function loadPreset(presetKey: string) {
    const preset = presets.find(p => p.key === presetKey)
    if (!preset) return

    // Core traits (always present)
    ;(Object.keys(preset.core) as CoreTraitKey[]).forEach((trait) => {
      store.setCoreTrait(trait, preset.core[trait])
    })

    // Facets
    if (preset.facets) {
      Object.entries(preset.facets).forEach(([key, value]) => {
        store.setFacet(key, value)
      })
    }

    // Communication
    if (preset.communication) {
      store.enabled.communication._self = true
      enableAllSubs('communication')
      store.communication.primaryStyle = preset.communication.primaryStyle
      store.communication.modifiers = [...preset.communication.modifiers]
      store.communication.verbosity = preset.communication.verbosity
      store.communication.structure = preset.communication.structure
      store.communication.tones.optimism = preset.communication.tones.optimism
      store.communication.tones.formality = preset.communication.tones.formality
      store.communication.tones.patience = preset.communication.tones.patience
      store.communication.tones.confidence = preset.communication.tones.confidence
    } else {
      store.enabled.communication._self = false
    }

    // Expertise
    if (preset.expertise) {
      store.enabled.expertise._self = true
      enableAllSubs('expertise')
      store.expertise.level = preset.expertise.level
      store.expertise.roleArchetype = preset.expertise.roleArchetype
      store.expertise.industries = [...preset.expertise.industries]
      store.expertise.thinkingStyles = [...preset.expertise.thinkingStyles]
      store.expertise.problemSolving.speedThoroughness = preset.expertise.problemSolving.speedThoroughness
      store.expertise.problemSolving.riskCaution = preset.expertise.problemSolving.riskCaution
      store.expertise.problemSolving.independentCollaborative = preset.expertise.problemSolving.independentCollaborative
      store.expertise.learningApproach = [...preset.expertise.learningApproach]
    } else {
      store.enabled.expertise._self = false
    }

    // Behavioral
    if (preset.behavioral) {
      store.enabled.behavioral._self = true
      enableAllSubs('behavioral')
      store.behavioral.proactivity = preset.behavioral.proactivity
      store.behavioral.questioningStyle = preset.behavioral.questioningStyle
      store.behavioral.errorHandling = [...preset.behavioral.errorHandling]
      store.behavioral.responseBehavior.followup = preset.behavioral.responseBehavior.followup
      store.behavioral.responseBehavior.elaboration = preset.behavioral.responseBehavior.elaboration
      store.behavioral.responseBehavior.context = preset.behavioral.responseBehavior.context
      store.behavioral.responseBehavior.examples = preset.behavioral.responseBehavior.examples
      store.behavioral.languageStyle = preset.behavioral.languageStyle
      store.behavioral.culturalSensitivity = preset.behavioral.culturalSensitivity
      store.behavioral.adaptationBehavior = [...preset.behavioral.adaptationBehavior]
      store.behavioral.interactionPatterns = [...preset.behavioral.interactionPatterns]
    } else {
      store.enabled.behavioral._self = false
    }

    // Philosophy
    if (preset.philosophy) {
      store.enabled.philosophy._self = true
      enableAllSubs('philosophy')
      store.philosophy.epistemology = preset.philosophy.epistemology
      store.philosophy.ethicalFramework = preset.philosophy.ethicalFramework
      store.philosophy.dialecticalMethod = preset.philosophy.dialecticalMethod
      store.philosophy.temperament.certaintyDoubt = preset.philosophy.temperament.certaintyDoubt
      store.philosophy.temperament.universalParticular = preset.philosophy.temperament.universalParticular
      store.philosophy.temperament.contemplativeActive = preset.philosophy.temperament.contemplativeActive
      store.philosophy.temperament.individualCollective = preset.philosophy.temperament.individualCollective
      store.philosophy.cardinalVirtues = [...preset.philosophy.cardinalVirtues]
    } else {
      store.enabled.philosophy._self = false
    }

    // Theater
    if (preset.theater) {
      store.enabled.theater._self = true
      enableAllSubs('theater')
      store.theater.dramaticArchetype = preset.theater.dramaticArchetype
      store.theater.dramaticFunction = preset.theater.dramaticFunction
      store.theater.theatricalRegister = preset.theater.theatricalRegister
      store.theater.playDynamics.protagonistSupport = preset.theater.playDynamics.protagonistSupport
      store.theater.playDynamics.textSubtext = preset.theater.playDynamics.textSubtext
      store.theater.playDynamics.maskAuthenticity = preset.theater.playDynamics.maskAuthenticity
      store.theater.playDynamics.monologueDialogue = preset.theater.playDynamics.monologueDialogue
      store.theater.actingTools = [...preset.theater.actingTools]
      store.theater.brechtianDistance = preset.theater.brechtianDistance
    } else {
      store.enabled.theater._self = false
    }

    // Literary
    if (preset.literary) {
      store.enabled.literary._self = true
      enableAllSubs('literary')
      store.literary.narrativeVoice = preset.literary.narrativeVoice
      store.literary.literaryMovement = preset.literary.literaryMovement
      store.literary.rhetoricalDevices = [...preset.literary.rhetoricalDevices]
      store.literary.proseAesthetics.ornateAustere = preset.literary.proseAesthetics.ornateAustere
      store.literary.proseAesthetics.abstractConcrete = preset.literary.proseAesthetics.abstractConcrete
      store.literary.proseAesthetics.lyricalAnalytical = preset.literary.proseAesthetics.lyricalAnalytical
      store.literary.proseAesthetics.linearDigressive = preset.literary.proseAesthetics.linearDigressive
      store.literary.proseAesthetics.didacticEvocative = preset.literary.proseAesthetics.didacticEvocative
      store.literary.textualRhythm = preset.literary.textualRhythm
      store.literary.intertextuality = preset.literary.intertextuality
    } else {
      store.enabled.literary._self = false
    }

    // Advanced
    if (preset.advanced) {
      store.enabled.advanced._self = true
      enableAllSubs('advanced')
      const a = preset.advanced
      if (a.technicalCapabilities) store.advanced.technicalCapabilities = [...a.technicalCapabilities]
      if (a.maxResponseLength) store.advanced.maxResponseLength = a.maxResponseLength
      if (a.securityLevel) store.advanced.securityLevel = a.securityLevel
      if (a.contentFilters) store.advanced.contentFilters = [...a.contentFilters]
      if (a.systemInstructions !== undefined) store.advanced.systemInstructions = a.systemInstructions
      if (a.userInstructions !== undefined) store.advanced.userInstructions = a.userInstructions
      if (a.fallbackResponses !== undefined) store.advanced.fallbackResponses = a.fallbackResponses
      if (a.conditionalBehaviors) store.advanced.conditionalBehaviors = [...a.conditionalBehaviors]
      if (a.timeBehaviors) store.advanced.timeBehaviors = [...a.timeBehaviors]
      if (a.preferredModel) store.advanced.preferredModel = a.preferredModel
      if (a.responseFormat) store.advanced.responseFormat = a.responseFormat
      if (a.temperature !== undefined) store.advanced.temperature = a.temperature
      if (a.timeout !== undefined) store.advanced.timeout = a.timeout
    } else {
      store.enabled.advanced._self = false
    }
  }

  return { presets, loadPreset }
}
