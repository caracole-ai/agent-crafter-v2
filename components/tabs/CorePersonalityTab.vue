<script setup lang="ts">
import type { CoreTraitKey } from '~/types/personality'

const store = usePersonalityStore()
const { t } = useI18n()

const traits = computed(() => [
  {
    key: 'extraversion' as CoreTraitKey,
    label: t('core.extraversion'),
    color: 'text-blue-600',
    facets: [
      { key: 'extraversion-warmth', label: t('core.warmth') },
      { key: 'extraversion-assertiveness', label: t('core.assertiveness') },
      { key: 'extraversion-activity', label: t('core.activity') },
      { key: 'extraversion-excitement', label: t('core.excitementSeeking') },
    ],
  },
  {
    key: 'agreeableness' as CoreTraitKey,
    label: t('core.agreeableness'),
    color: 'text-green-600',
    facets: [
      { key: 'agreeableness-trust', label: t('core.trust') },
      { key: 'agreeableness-cooperation', label: t('core.cooperation') },
      { key: 'agreeableness-empathy', label: t('core.empathy') },
      { key: 'agreeableness-modesty', label: t('core.modesty') },
    ],
  },
  {
    key: 'conscientiousness' as CoreTraitKey,
    label: t('core.conscientiousness'),
    color: 'text-purple-600',
    facets: [
      { key: 'conscientiousness-organization', label: t('core.organization') },
      { key: 'conscientiousness-discipline', label: t('core.discipline') },
      { key: 'conscientiousness-achievement', label: t('core.achievement') },
      { key: 'conscientiousness-dutifulness', label: t('core.dutifulness') },
    ],
  },
  {
    key: 'emotionalStability' as CoreTraitKey,
    label: t('core.emotionalStability'),
    color: 'text-red-600',
    facets: [
      { key: 'emotional-calm', label: t('core.calm') },
      { key: 'emotional-confidence', label: t('core.confidence') },
      { key: 'emotional-resilience', label: t('core.resilience') },
      { key: 'emotional-stress', label: t('core.stressManagement') },
    ],
  },
  {
    key: 'openness' as CoreTraitKey,
    label: t('core.openness'),
    color: 'text-orange-600',
    facets: [
      { key: 'openness-creativity', label: t('core.creativity') },
      { key: 'openness-curiosity', label: t('core.curiosity') },
      { key: 'openness-imagination', label: t('core.imagination') },
      { key: 'openness-intellectual', label: t('core.intellectual') },
    ],
  },
])

function onTraitUpdate(key: CoreTraitKey, val: number | number[]) {
  store.setCoreTrait(key, Array.isArray(val) ? val[0] : val)
}
</script>

<template>
  <UCard class="glass-effect">
    <h2 class="text-2xl font-bold mb-6">🧠 {{ $t('core.title') }}</h2>

    <div class="space-y-8">
      <div v-for="trait in traits" :key="trait.key" class="personality-trait">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-lg font-semibold">{{ trait.label }}</h3>
          <span :class="[trait.color, 'font-bold']">{{ store.core[trait.key] }}</span>
        </div>
        <USlider
          :model-value="store.core[trait.key]"
          :min="0"
          :max="100"
          @update:model-value="onTraitUpdate(trait.key, $event)"
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
  </UCard>
</template>
