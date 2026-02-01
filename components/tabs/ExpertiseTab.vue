<script setup lang="ts">
import {
  expertiseLevels,
  roleArchetypes,
  industries,
  thinkingStyles,
  learningApproaches,
} from '~/data/options'
import type {
  ExpertiseLevel,
  RoleArchetype,
  Industry,
  ThinkingStyle,
  LearningApproach,
  ProblemSolvingKey,
} from '~/types/personality'

const store = usePersonalityStore()
const { t } = useI18n()

const problemSolvingSliders = computed(() => [
  { key: 'speedThoroughness' as ProblemSolvingKey, label: t('expertise.speedThoroughness'), color: 'text-blue-600', left: t('expertise.speedLeft'), right: t('expertise.speedRight') },
  { key: 'riskCaution' as ProblemSolvingKey, label: t('expertise.riskCaution'), color: 'text-green-600', left: t('expertise.riskLeft'), right: t('expertise.riskRight') },
  { key: 'independentCollaborative' as ProblemSolvingKey, label: t('expertise.independentCollaborative'), color: 'text-purple-600', left: t('expertise.independentLeft'), right: t('expertise.independentRight') },
])
</script>

<template>
  <UCard class="glass-effect">
    <h2 class="text-2xl font-bold mb-6">💼 {{ $t('expertise.title') }}</h2>

    <div class="space-y-8">
      <!-- Knowledge Level -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('expertise.knowledgeLevel') }}</h3>
        <UiRadioCardGroup
          :model-value="store.expertise.level"
          :options="expertiseLevels"
          columns="grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
          active-color="border-green-500 bg-green-50"
          @update:model-value="store.expertise.level = $event as ExpertiseLevel"
        />
      </div>

      <!-- Role Archetype -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('expertise.roleArchetype') }}</h3>
        <UiRadioCardGroup
          :model-value="store.expertise.roleArchetype"
          :options="roleArchetypes"
          columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          active-color="border-purple-500 bg-purple-50"
          @update:model-value="store.expertise.roleArchetype = $event as RoleArchetype"
        />
      </div>

      <!-- Industry Focus -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('expertise.industryFocus') }}</h3>
        <UiCheckboxGroup
          :model-value="store.expertise.industries"
          :options="industries"
          columns="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          @update:model-value="store.expertise.industries = $event as Industry[]"
        />
      </div>

      <!-- Cognitive Approach -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('expertise.cognitiveApproach') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-medium mb-3">{{ $t('expertise.thinkingStyles') }}</h4>
            <UiCheckboxGroup
              :model-value="store.expertise.thinkingStyles"
              :options="thinkingStyles"
              columns="grid-cols-1"
              @update:model-value="store.expertise.thinkingStyles = $event as ThinkingStyle[]"
            />
          </div>

          <div>
            <h4 class="font-medium mb-3">{{ $t('expertise.problemSolving') }}</h4>
            <div class="space-y-4">
              <UiRangeSlider
                v-for="slider in problemSolvingSliders"
                :key="slider.key"
                :model-value="store.expertise.problemSolving[slider.key]"
                :label="slider.label"
                :value-color="slider.color"
                :left-label="slider.left"
                :right-label="slider.right"
                size="sm"
                @update:model-value="store.expertise.problemSolving[slider.key] = $event"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Learning Approach -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('expertise.learningTeaching') }}</h3>
        <UiCheckboxGroup
          :model-value="store.expertise.learningApproach"
          :options="learningApproaches"
          columns="grid-cols-2 md:grid-cols-3"
          @update:model-value="store.expertise.learningApproach = $event as LearningApproach[]"
        />
      </div>
    </div>
  </UCard>
</template>
