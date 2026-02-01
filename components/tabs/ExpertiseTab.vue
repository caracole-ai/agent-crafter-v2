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
    <div class="section-toggle-header mb-4">
      <UCheckbox v-model="store.enabled.expertise._self" />
      <h2 class="text-2xl font-bold">💼 {{ $t('expertise.title') }}</h2>
    </div>

    <div :class="{ 'section-disabled-overlay': !store.enabled.expertise._self }">
      <div class="space-y-2">
        <!-- Knowledge Level -->
        <UiToggleSection
          v-model:enabled="store.enabled.expertise.level"
          :title="$t('expertise.knowledgeLevel')"
          :default-open="true"
        >
          <UiRadioCardGroup
            :model-value="store.expertise.level"
            :options="expertiseLevels"
            columns="grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
            active-color="border-green-500 bg-green-50"
            @update:model-value="store.expertise.level = $event as ExpertiseLevel"
          />
        </UiToggleSection>

        <!-- Role Archetype -->
        <UiToggleSection
          v-model:enabled="store.enabled.expertise.roleArchetype"
          :title="$t('expertise.roleArchetype')"
        >
          <UiRadioCardGroup
            :model-value="store.expertise.roleArchetype"
            :options="roleArchetypes"
            columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            active-color="border-purple-500 bg-purple-50"
            @update:model-value="store.expertise.roleArchetype = $event as RoleArchetype"
          />
        </UiToggleSection>

        <!-- Industry Focus -->
        <UiToggleSection
          v-model:enabled="store.enabled.expertise.industries"
          :title="$t('expertise.industryFocus')"
        >
          <UiCheckboxGroup
            :model-value="store.expertise.industries"
            :options="industries"
            columns="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            @update:model-value="store.expertise.industries = $event as Industry[]"
          />
        </UiToggleSection>

        <!-- Cognitive Approach -->
        <UiToggleSection
          v-model:enabled="store.enabled.expertise.cognitive"
          :title="$t('expertise.cognitiveApproach')"
        >
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
        </UiToggleSection>

        <!-- Learning Approach -->
        <UiToggleSection
          v-model:enabled="store.enabled.expertise.learning"
          :title="$t('expertise.learningTeaching')"
        >
          <UiCheckboxGroup
            :model-value="store.expertise.learningApproach"
            :options="learningApproaches"
            columns="grid-cols-2 md:grid-cols-3"
            @update:model-value="store.expertise.learningApproach = $event as LearningApproach[]"
          />
        </UiToggleSection>
      </div>
    </div>
  </UCard>
</template>
