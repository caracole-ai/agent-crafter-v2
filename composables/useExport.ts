import { usePersonalityStore } from '~/stores/personality'
import type { AgentConfig } from '~/types/personality'

export function useExport() {
  const store = usePersonalityStore()
  const { t } = useI18n()

  const complexity = computed(() => {
    let c = 5 // Core personality (5 traits)
    if (store.enabled.communication._self) c += store.communication.modifiers.length
    if (store.enabled.expertise._self) {
      c += store.expertise.industries.length
      c += store.expertise.thinkingStyles.length
      c += store.expertise.learningApproach.length
    }
    if (store.enabled.behavioral._self) {
      c += store.behavioral.errorHandling.length
      c += store.behavioral.adaptationBehavior.length
      c += store.behavioral.interactionPatterns.length
    }
    if (store.enabled.philosophy._self) c += store.philosophy.cardinalVirtues.length
    if (store.enabled.theater._self) c += store.theater.actingTools.length
    if (store.enabled.literary._self) c += store.literary.rhetoricalDevices.length
    if (store.enabled.advanced._self) {
      c += store.advanced.technicalCapabilities.length
      c += store.advanced.conditionalBehaviors.length
    }
    return c
  })

  function downloadFile(content: string, filename: string, type: string) {
    const blob = new Blob([content], { type })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  function exportFullConfig() {
    const agentConfig: Partial<AgentConfig> & { version: string; metadata: AgentConfig['metadata']; core: AgentConfig['core']; facets: AgentConfig['facets']; enabled: typeof store.enabled } = {
      version: '2.0',
      metadata: {
        name: t('export.agentName'),
        description: t('export.agentDescription'),
        createdAt: new Date().toISOString(),
        budgetUsed: store.budgetUsed,
        complexity: complexity.value,
      },
      core: { ...store.core },
      facets: { ...store.facets },
      enabled: JSON.parse(JSON.stringify(store.enabled)),
    }

    if (store.enabled.communication._self) {
      agentConfig.communication = {
        ...store.communication,
        modifiers: [...store.communication.modifiers],
        tones: { ...store.communication.tones },
      }
    }

    if (store.enabled.expertise._self) {
      agentConfig.expertise = {
        ...store.expertise,
        industries: [...store.expertise.industries],
        thinkingStyles: [...store.expertise.thinkingStyles],
        problemSolving: { ...store.expertise.problemSolving },
        learningApproach: [...store.expertise.learningApproach],
      }
    }

    if (store.enabled.behavioral._self) {
      agentConfig.behavioral = {
        ...store.behavioral,
        errorHandling: [...store.behavioral.errorHandling],
        responseBehavior: { ...store.behavioral.responseBehavior },
        adaptationBehavior: [...store.behavioral.adaptationBehavior],
        interactionPatterns: [...store.behavioral.interactionPatterns],
      }
    }

    if (store.enabled.philosophy._self) {
      agentConfig.philosophy = {
        ...store.philosophy,
        temperament: { ...store.philosophy.temperament },
        cardinalVirtues: [...store.philosophy.cardinalVirtues],
      }
    }

    if (store.enabled.theater._self) {
      agentConfig.theater = {
        ...store.theater,
        playDynamics: { ...store.theater.playDynamics },
        actingTools: [...store.theater.actingTools],
      }
    }

    if (store.enabled.literary._self) {
      agentConfig.literary = {
        ...store.literary,
        proseAesthetics: { ...store.literary.proseAesthetics },
        rhetoricalDevices: [...store.literary.rhetoricalDevices],
      }
    }

    if (store.enabled.advanced._self) {
      agentConfig.advanced = {
        ...store.advanced,
        technicalCapabilities: [...store.advanced.technicalCapabilities],
        contentFilters: [...store.advanced.contentFilters],
        conditionalBehaviors: [...store.advanced.conditionalBehaviors],
        timeBehaviors: [...store.advanced.timeBehaviors],
      }
    }

    downloadFile(JSON.stringify(agentConfig, null, 2), 'agent-crafter-v2-config.json', 'application/json')
  }

  function generatePromptTemplate(): string {
    const sections: string[] = []

    sections.push(`# AI Agent Personality Configuration

## Core Personality
Extraversion: ${store.core.extraversion}/100
Agreeableness: ${store.core.agreeableness}/100
Conscientiousness: ${store.core.conscientiousness}/100
Emotional Stability: ${store.core.emotionalStability}/100
Openness: ${store.core.openness}/100`)

    if (store.enabled.communication._self) {
      sections.push(`
## Communication Style
Primary Style: ${store.communication.primaryStyle}
Modifiers: ${store.communication.modifiers.join(', ')}
Verbosity: ${store.communication.verbosity}/10
Structure: ${store.communication.structure}`)
    }

    if (store.enabled.expertise._self) {
      sections.push(`
## Professional Context
Expertise Level: ${store.expertise.level}
Role Archetype: ${store.expertise.roleArchetype}
Industries: ${store.expertise.industries.join(', ')}`)
    }

    if (store.enabled.behavioral._self) {
      sections.push(`
## Behavioral Patterns
Proactivity: ${store.behavioral.proactivity}/100
Questioning Style: ${store.behavioral.questioningStyle}`)
    }

    if (store.enabled.philosophy._self) {
      sections.push(`
## Philosophy
Epistemology: ${store.philosophy.epistemology}
Ethical Framework: ${store.philosophy.ethicalFramework}
Dialectical Method: ${store.philosophy.dialecticalMethod}
Cardinal Virtues: ${store.philosophy.cardinalVirtues.join(', ') || t('export.none')}
Temperament — Certainty↔Doubt: ${store.philosophy.temperament.certaintyDoubt}/100
Temperament — Universal↔Particular: ${store.philosophy.temperament.universalParticular}/100
Temperament — Contemplative↔Active: ${store.philosophy.temperament.contemplativeActive}/100
Temperament — Individual↔Collective: ${store.philosophy.temperament.individualCollective}/100`)
    }

    if (store.enabled.theater._self) {
      sections.push(`
## Theater & Character
Dramatic Archetype: ${store.theater.dramaticArchetype}
Dramatic Function: ${store.theater.dramaticFunction}
Theatrical Register: ${store.theater.theatricalRegister}
Acting Tools: ${store.theater.actingTools.join(', ') || t('export.none')}
Brechtian Distance: ${store.theater.brechtianDistance}/100
Dynamics — Protagonist↔Support: ${store.theater.playDynamics.protagonistSupport}/100
Dynamics — Text↔Subtext: ${store.theater.playDynamics.textSubtext}/100
Dynamics — Mask↔Authenticity: ${store.theater.playDynamics.maskAuthenticity}/100
Dynamics — Monologue↔Dialogue: ${store.theater.playDynamics.monologueDialogue}/100`)
    }

    if (store.enabled.literary._self) {
      sections.push(`
## Literary Style
Narrative Voice: ${store.literary.narrativeVoice}
Literary Movement: ${store.literary.literaryMovement}
Textual Rhythm: ${store.literary.textualRhythm}
Rhetorical Devices: ${store.literary.rhetoricalDevices.join(', ') || t('export.none')}
Intertextuality: ${store.literary.intertextuality}/100
Prose — Ornate↔Austere: ${store.literary.proseAesthetics.ornateAustere}/100
Prose — Abstract↔Concrete: ${store.literary.proseAesthetics.abstractConcrete}/100
Prose — Lyrical↔Analytical: ${store.literary.proseAesthetics.lyricalAnalytical}/100
Prose — Linear↔Digressive: ${store.literary.proseAesthetics.linearDigressive}/100
Prose — Didactic↔Evocative: ${store.literary.proseAesthetics.didacticEvocative}/100`)
    }

    if (store.enabled.advanced._self && store.advanced.systemInstructions) {
      sections.push(`
## Custom Instructions
${store.advanced.systemInstructions}`)
    }

    sections.push(`
---
Generated by Agent Crafter v2.0`)

    return sections.join('\n')
  }

  function exportPromptOnly() {
    downloadFile(generatePromptTemplate(), 'agent-prompt-template.txt', 'text/plain')
  }

  function generateAgentSummary(): string {
    const extLevel = store.core.extraversion > 60 ? t('export.high') : store.core.extraversion < 40 ? t('export.low') : t('export.moderate')
    const sections: string[] = []

    sections.push(`# Agent Configuration Summary

**Generated:** ${new Date().toLocaleDateString()}
**Configuration Version:** 2.0

## Personality Overview
This agent combines ${extLevel} extraversion${store.enabled.communication._self ? ` with ${store.communication.primaryStyle} communication style` : ''}.

## Key Characteristics${store.enabled.expertise._self ? `\n- **Expertise:** ${store.expertise.level} level ${store.expertise.roleArchetype}` : ''}${store.enabled.communication._self ? `\n- **Communication:** ${store.communication.verbosity}/10 verbosity, ${store.communication.modifiers.length} style modifiers` : ''}${store.enabled.behavioral._self ? `\n- **Proactivity:** ${store.behavioral.proactivity}/100` : ''}${store.enabled.advanced._self ? `\n- **Capabilities:** ${store.advanced.technicalCapabilities.length} technical capabilities` : ''}

## Configuration Complexity
**Total Parameters Configured:** ${complexity.value}
**Budget Usage:** ${store.budgetUsed}/${store.budgetTotal}`)

    if (store.enabled.philosophy._self) {
      sections.push(`
## Philosophy
- **Epistemology:** ${store.philosophy.epistemology}
- **Ethical Framework:** ${store.philosophy.ethicalFramework}
- **Dialectical Method:** ${store.philosophy.dialecticalMethod}
- **Cardinal Virtues:** ${store.philosophy.cardinalVirtues.length > 0 ? store.philosophy.cardinalVirtues.join(', ') : t('export.noneSelected')}
- **Temperament:** certainty↔doubt ${store.philosophy.temperament.certaintyDoubt}/100, universal↔particular ${store.philosophy.temperament.universalParticular}/100, contemplative↔active ${store.philosophy.temperament.contemplativeActive}/100, individual↔collective ${store.philosophy.temperament.individualCollective}/100`)
    }

    if (store.enabled.theater._self) {
      sections.push(`
## Theater & Character
- **Dramatic Archetype:** ${store.theater.dramaticArchetype}
- **Dramatic Function:** ${store.theater.dramaticFunction}
- **Theatrical Register:** ${store.theater.theatricalRegister}
- **Acting Tools:** ${store.theater.actingTools.length > 0 ? store.theater.actingTools.join(', ') : t('export.noneSelected')}
- **Brechtian Distance:** ${store.theater.brechtianDistance}/100
- **Play Dynamics:** protagonist↔support ${store.theater.playDynamics.protagonistSupport}/100, text↔subtext ${store.theater.playDynamics.textSubtext}/100, mask↔authenticity ${store.theater.playDynamics.maskAuthenticity}/100, monologue↔dialogue ${store.theater.playDynamics.monologueDialogue}/100`)
    }

    if (store.enabled.literary._self) {
      sections.push(`
## Literary Style
- **Narrative Voice:** ${store.literary.narrativeVoice}
- **Literary Movement:** ${store.literary.literaryMovement}
- **Textual Rhythm:** ${store.literary.textualRhythm}
- **Rhetorical Devices:** ${store.literary.rhetoricalDevices.length > 0 ? store.literary.rhetoricalDevices.join(', ') : t('export.noneSelected')}
- **Intertextuality:** ${store.literary.intertextuality}/100
- **Prose Aesthetics:** ornate↔austere ${store.literary.proseAesthetics.ornateAustere}/100, abstract↔concrete ${store.literary.proseAesthetics.abstractConcrete}/100, lyrical↔analytical ${store.literary.proseAesthetics.lyricalAnalytical}/100, linear↔digressive ${store.literary.proseAesthetics.linearDigressive}/100, didactic↔evocative ${store.literary.proseAesthetics.didacticEvocative}/100`)
    }

    const notableFeatures: string[] = []
    if (store.enabled.advanced._self && store.advanced.systemInstructions) notableFeatures.push('- Custom system instructions defined')
    if (store.enabled.behavioral._self && store.behavioral.interactionPatterns.length > 0) notableFeatures.push(`- ${store.behavioral.interactionPatterns.length} interaction patterns enabled`)
    if (store.enabled.expertise._self && store.expertise.industries.length > 0) notableFeatures.push(`- Specialized in ${store.expertise.industries.length} industries`)

    if (notableFeatures.length > 0) {
      sections.push(`
## Notable Features
${notableFeatures.join('\n')}`)
    }

    sections.push(`
---
*Created with Agent Crafter v2.0*`)

    return sections.join('\n')
  }

  function exportSummary() {
    downloadFile(generateAgentSummary(), 'agent-summary-report.md', 'text/markdown')
  }

  async function importConfig(file: File): Promise<{ success: boolean; message: string }> {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const config = JSON.parse(e.target?.result as string)
          if (config.version === '2.0') {
            store.loadConfig(config)
            resolve({ success: true, message: t('alerts.importSuccess') })
          } else {
            resolve({ success: false, message: t('alerts.importVersionError') })
          }
        } catch {
          resolve({ success: false, message: t('alerts.importFormatError') })
        }
      }
      reader.readAsText(file)
    })
  }

  return {
    complexity,
    exportFullConfig,
    exportPromptOnly,
    exportSummary,
    importConfig,
  }
}
