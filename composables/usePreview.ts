import { usePersonalityStore } from '~/stores/personality'

export function usePreview() {
  const store = usePersonalityStore()
  const { t } = useI18n()

  const previewText = computed(() => {
    const traits = store.core
    const comm = store.communication
    const exp = store.expertise
    const behav = store.behavioral
    const philo = store.philosophy
    const thea = store.theater
    const lit = store.literary

    let response = t('preview.defaultGreeting')

    // Primary style influence on greeting
    const greetingKey = `preview.greetings.${comm.primaryStyle}`
    response += t(greetingKey)

    // Expertise level influence
    if (exp.level) {
      const expertiseKey = `preview.expertise.${exp.level}`
      const expertiseText = t(expertiseKey)
      if (expertiseText !== expertiseKey) {
        response += expertiseText
      }
    }

    // Role archetype influence
    if (exp.roleArchetype) {
      const roleKey = `preview.roles.${exp.roleArchetype}`
      const roleText = t(roleKey)
      if (roleText !== roleKey) {
        response += roleText
      }
    }

    // Industry focus
    if (exp.industries.length > 0) {
      const industryNames = exp.industries
        .map(ind => t(`preview.industries.${ind}`))
        .filter(Boolean)
      if (industryNames.length > 0) {
        response += t('preview.industryIntro', { industries: industryNames.join(', ') })
      }
    }

    // Thinking styles influence
    if (exp.thinkingStyles.includes('analytical')) {
      response += t('preview.thinking.analytical')
    }
    if (exp.thinkingStyles.includes('creative') && exp.thinkingStyles.includes('systematic')) {
      response += t('preview.thinking.creativeSystematic')
    }
    if (exp.thinkingStyles.includes('intuitive')) {
      response += t('preview.thinking.intuitive')
    }

    // Problem solving approach
    if (exp.problemSolving.speedThoroughness > 70) {
      response += t('preview.problemSolving.thorough')
    } else if (exp.problemSolving.speedThoroughness < 30) {
      response += t('preview.problemSolving.fast')
    }

    // Formality influence
    if (comm.tones.formality > 70) {
      response += t('preview.formality.high')
    } else if (comm.tones.formality < 30) {
      response += t('preview.formality.low')
    }

    // Extraversion + communication style mix
    if (traits.extraversion > 70 && comm.modifiers.includes('enthusiastic' as any)) {
      response += t('preview.extraversionHigh')
    } else if (traits.extraversion < 30 && comm.tones.patience > 60) {
      response += t('preview.extraversionLow')
    }

    // Humor modifier
    if (comm.modifiers.includes('humorous')) {
      response += t('preview.humor')
    }

    // Direct modifier
    if (comm.modifiers.includes('direct')) {
      response += t('preview.direct')
    }

    // Learning approach influence
    if (exp.learningApproach.includes('visual')) {
      response += t('preview.visual')
    }
    if (exp.learningApproach.includes('stepByStep')) {
      response += t('preview.stepByStep')
    }

    // Proactivity influence
    if (behav.proactivity > 70) {
      response += t('preview.proactivityHigh')
    } else if (behav.proactivity < 30) {
      response += t('preview.proactivityLow')
    }

    // Questioning style influence
    if (behav.questioningStyle) {
      const qKey = `preview.questioning.${behav.questioningStyle}`
      const qText = t(qKey)
      if (qText !== qKey) {
        response += qText
      }
    }

    // Error handling influence
    if (behav.errorHandling.includes('acknowledge')) {
      response += t('preview.errorHandling.acknowledge')
    }
    if (behav.errorHandling.includes('confidence')) {
      response += t('preview.errorHandling.confidence')
    }
    if (behav.errorHandling.includes('alternatives')) {
      response += t('preview.errorHandling.alternatives')
    }

    // Response behavior influence
    if (behav.responseBehavior.elaboration > 70) {
      response += t('preview.responseBehavior.elaboration')
    }
    if (behav.responseBehavior.examples > 70) {
      response += t('preview.responseBehavior.examples')
    }
    if (behav.responseBehavior.context > 70) {
      response += t('preview.responseBehavior.context')
    }

    // Language style influence
    if (behav.languageStyle && behav.languageStyle !== 'global') {
      const langKey = `preview.language.${behav.languageStyle}`
      const langText = t(langKey)
      if (langText !== langKey) {
        response += langText
      }
    }

    // Cultural sensitivity
    if (behav.culturalSensitivity > 70) {
      response += t('preview.culturalSensitivity')
    }

    // Interaction patterns
    if (behav.interactionPatterns.includes('memory-reference')) {
      response += t('preview.interaction.memory')
    }
    if (behav.interactionPatterns.includes('anticipate-needs')) {
      response += t('preview.interaction.anticipate')
    }
    if (behav.interactionPatterns.includes('emotional-awareness')) {
      response += t('preview.interaction.emotional')
    }

    // Confidence vs humility
    if (comm.tones.confidence > 70 && exp.level === 'expert') {
      response += t('preview.confidenceHigh')
    } else if (comm.tones.confidence < 30 || exp.level === 'novice') {
      response += t('preview.confidenceLow')
    }

    // Philosophy influence
    if (philo.epistemology) {
      const epiKey = `preview.epistemology.${philo.epistemology}`
      const epiText = t(epiKey)
      if (epiText !== epiKey) {
        response += epiText
      }
    }

    if (philo.dialecticalMethod === 'socratic' || philo.dialecticalMethod === 'maieutic') {
      response += t('preview.dialectical.socraticMaieutic')
    }
    if (philo.dialecticalMethod === 'hegelian') {
      response += t('preview.dialectical.hegelian')
    }

    if (philo.temperament.certaintyDoubt > 70) {
      response += t('preview.temperament.highDoubt')
    }
    if (philo.temperament.contemplativeActive > 70) {
      response += t('preview.temperament.highActive')
    } else if (philo.temperament.contemplativeActive < 30) {
      response += t('preview.temperament.lowActive')
    }

    if (philo.cardinalVirtues.includes('humility')) {
      response += t('preview.virtues.humility')
    }
    if (philo.cardinalVirtues.includes('courage')) {
      response += t('preview.virtues.courage')
    }

    // Theater influence
    if (thea.dramaticArchetype) {
      const archKey = `preview.archetypes.${thea.dramaticArchetype}`
      const archText = t(archKey)
      if (archText !== archKey) {
        response += archText
      }
    }

    if (thea.theatricalRegister === 'comedy') {
      response += t('preview.registers.comedy')
    } else if (thea.theatricalRegister === 'epic') {
      response += t('preview.registers.epic')
    } else if (thea.theatricalRegister === 'absurd') {
      response += t('preview.registers.absurd')
    }

    if (thea.brechtianDistance > 70) {
      response += t('preview.brechtianHigh')
    }
    if (thea.playDynamics.monologueDialogue > 70) {
      response += t('preview.dialogueHigh')
    }

    // Literary style influence
    if (lit.literaryMovement) {
      const movKey = `preview.movements.${lit.literaryMovement}`
      const movText = t(movKey)
      if (movText !== movKey) {
        response += movText
      }
    }

    if (lit.narrativeVoice === 'stream') {
      response += t('preview.narrativeVoices.stream')
    } else if (lit.narrativeVoice === 'epistolary') {
      response += t('preview.narrativeVoices.epistolary')
    }

    if (lit.intertextuality > 70) {
      response += t('preview.intertextualityHigh')
    }

    if (lit.proseAesthetics.lyricalAnalytical < 30) {
      response += t('preview.lyricalHigh')
    }

    // Final closing
    if (comm.tones.optimism > 70 && behav.proactivity > 60) {
      response += t('preview.closingOptimistic')
    } else if (comm.tones.optimism < 30) {
      response += t('preview.closingRealistic')
    } else {
      response += t('preview.closingDefault')
    }

    // Verbosity adjustment
    if (comm.verbosity <= 3) {
      response = t(`preview.greetings.${comm.primaryStyle}`) + t('preview.closingShort')
    } else if (comm.verbosity >= 8) {
      response += t('preview.closingVerbose')
    }

    return response
  })

  return { previewText }
}
