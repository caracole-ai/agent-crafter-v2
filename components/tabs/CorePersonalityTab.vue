<script setup lang="ts">
import type { CoreTraitKey } from '~/types/personality'

const store = usePersonalityStore()

const traits = [
  {
    key: 'extraversion' as CoreTraitKey,
    label: 'Extraversion',
    color: 'text-blue-600',
    facets: [
      { key: 'extraversion-warmth', label: 'Warmth' },
      { key: 'extraversion-assertiveness', label: 'Assertiveness' },
      { key: 'extraversion-activity', label: 'Activity' },
      { key: 'extraversion-excitement', label: 'Excitement Seeking' },
    ],
  },
  {
    key: 'agreeableness' as CoreTraitKey,
    label: 'Agreeableness',
    color: 'text-green-600',
    facets: [
      { key: 'agreeableness-trust', label: 'Trust' },
      { key: 'agreeableness-cooperation', label: 'Cooperation' },
      { key: 'agreeableness-empathy', label: 'Empathy' },
      { key: 'agreeableness-modesty', label: 'Modesty' },
    ],
  },
  {
    key: 'conscientiousness' as CoreTraitKey,
    label: 'Conscientiousness',
    color: 'text-purple-600',
    facets: [
      { key: 'conscientiousness-organization', label: 'Organization' },
      { key: 'conscientiousness-discipline', label: 'Discipline' },
      { key: 'conscientiousness-achievement', label: 'Achievement' },
      { key: 'conscientiousness-dutifulness', label: 'Dutifulness' },
    ],
  },
  {
    key: 'emotionalStability' as CoreTraitKey,
    label: 'Emotional Stability',
    color: 'text-red-600',
    facets: [
      { key: 'emotional-calm', label: 'Calm' },
      { key: 'emotional-confidence', label: 'Confidence' },
      { key: 'emotional-resilience', label: 'Resilience' },
      { key: 'emotional-stress', label: 'Stress Management' },
    ],
  },
  {
    key: 'openness' as CoreTraitKey,
    label: 'Openness to Experience',
    color: 'text-orange-600',
    facets: [
      { key: 'openness-creativity', label: 'Creativity' },
      { key: 'openness-curiosity', label: 'Curiosity' },
      { key: 'openness-imagination', label: 'Imagination' },
      { key: 'openness-intellectual', label: 'Intellectual' },
    ],
  },
]
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-8 glass-effect">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">🧠 Core Personality (Big 5)</h2>

    <div class="space-y-8">
      <div v-for="trait in traits" :key="trait.key" class="personality-trait">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-lg font-semibold text-gray-700">{{ trait.label }}</h3>
          <span :class="[trait.color, 'font-bold']">{{ store.core[trait.key] }}</span>
        </div>
        <input
          type="range"
          class="range-slider"
          min="0"
          max="100"
          :value="store.core[trait.key]"
          @input="store.setCoreTrait(trait.key, Number(($event.target as HTMLInputElement).value))"
        />
        <div class="grid grid-cols-2 gap-4 mt-4">
          <UiRangeSlider
            v-for="facet in trait.facets"
            :key="facet.key"
            :model-value="store.facets[facet.key] ?? 50"
            :label="facet.label"
            size="sm"
            @update:model-value="store.setFacet(facet.key, $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
