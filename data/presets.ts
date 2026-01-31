import type { CoreTraits } from '~/types/personality'

export interface PresetDefinition {
  key: string
  emoji: string
  label: string
  description: string
  core: CoreTraits
}

export const presets: PresetDefinition[] = [
  {
    key: 'supportAgent',
    emoji: '🎧',
    label: 'Support Agent',
    description: 'Patient & helpful',
    core: {
      extraversion: 65,
      agreeableness: 85,
      conscientiousness: 80,
      emotionalStability: 90,
      openness: 40,
    },
  },
  {
    key: 'creativePartner',
    emoji: '🎨',
    label: 'Creative Partner',
    description: 'Innovative & inspiring',
    core: {
      extraversion: 75,
      agreeableness: 70,
      conscientiousness: 45,
      emotionalStability: 60,
      openness: 95,
    },
  },
  {
    key: 'dataAnalyst',
    emoji: '📊',
    label: 'Data Analyst',
    description: 'Analytical & precise',
    core: {
      extraversion: 40,
      agreeableness: 55,
      conscientiousness: 95,
      emotionalStability: 80,
      openness: 70,
    },
  },
]
