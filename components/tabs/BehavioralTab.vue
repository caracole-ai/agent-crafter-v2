<script setup lang="ts">
import {
  questioningStyles,
  errorHandlingOptions,
  languageStyles,
  adaptationBehaviors,
  interactionPatterns,
} from '~/data/options'
import { getProactivityDescriptionKey } from '~/data/descriptions'
import type {
  QuestioningStyle,
  ErrorHandling,
  LanguageStyle,
  AdaptationBehavior,
  InteractionPattern,
  ResponseBehaviorKey,
} from '~/types/personality'

const store = usePersonalityStore()
const { t } = useI18n()

const proactivityDescription = computed(() => t(getProactivityDescriptionKey(store.behavioral.proactivity)))

const translatedLanguageStyles = computed(() =>
  languageStyles.map(s => ({ ...s, label: t(s.label) })),
)

const responseBehaviorSliders = computed(() => [
  { key: 'followup' as ResponseBehaviorKey, label: t('behavioral.followup'), color: 'text-blue-600', left: t('behavioral.followupLeft'), right: t('behavioral.followupRight') },
  { key: 'elaboration' as ResponseBehaviorKey, label: t('behavioral.elaboration'), color: 'text-green-600', left: t('behavioral.elaborationLeft'), right: t('behavioral.elaborationRight') },
  { key: 'context' as ResponseBehaviorKey, label: t('behavioral.context'), color: 'text-purple-600', left: t('behavioral.contextLeft'), right: t('behavioral.contextRight') },
  { key: 'examples' as ResponseBehaviorKey, label: t('behavioral.examples'), color: 'text-orange-600', left: t('behavioral.examplesLeft'), right: t('behavioral.examplesRight') },
])
</script>

<template>
  <UCard class="glass-effect">
    <div class="section-toggle-header mb-4">
      <UCheckbox v-model="store.enabled.behavioral._self" />
      <h2 class="text-2xl font-bold">🎯 {{ $t('behavioral.title') }}</h2>
    </div>

    <div :class="{ 'section-disabled-overlay': !store.enabled.behavioral._self }">
      <div class="space-y-2">
        <!-- Proactivity Level -->
        <UiToggleSection
          v-model:enabled="store.enabled.behavioral.proactivity"
          :title="$t('behavioral.proactivityLevel')"
          :default-open="true"
        >
          <UiRangeSlider
            :model-value="store.behavioral.proactivity"
            :label="$t('behavioral.proactivityLevel')"
            value-color="text-indigo-600"
            :left-label="$t('behavioral.proactivityLeft')"
            :center-label="$t('behavioral.proactivityCenter')"
            :right-label="$t('behavioral.proactivityRight')"
            @update:model-value="store.behavioral.proactivity = $event"
          />
          <div class="text-sm text-[var(--ui-text-dimmed)] mt-2">{{ proactivityDescription }}</div>
        </UiToggleSection>

        <!-- Questioning Style -->
        <UiToggleSection
          v-model:enabled="store.enabled.behavioral.questioningStyle"
          :title="$t('behavioral.questioningStyle')"
        >
          <UiRadioCardGroup
            :model-value="store.behavioral.questioningStyle"
            :options="questioningStyles"
            columns="grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
            active-color="border-indigo-500 bg-indigo-50"
            @update:model-value="store.behavioral.questioningStyle = $event as QuestioningStyle"
          />
        </UiToggleSection>

        <!-- Error Handling -->
        <UiToggleSection
          v-model:enabled="store.enabled.behavioral.errorHandling"
          :title="$t('behavioral.errorHandling')"
        >
          <UiCheckboxGroup
            :model-value="store.behavioral.errorHandling"
            :options="errorHandlingOptions"
            columns="grid-cols-1 md:grid-cols-2"
            @update:model-value="store.behavioral.errorHandling = $event as ErrorHandling[]"
          />
        </UiToggleSection>

        <!-- Response Behavior -->
        <UiToggleSection
          v-model:enabled="store.enabled.behavioral.responseBehavior"
          :title="$t('behavioral.responseBehavior')"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiRangeSlider
              v-for="slider in responseBehaviorSliders"
              :key="slider.key"
              :model-value="store.behavioral.responseBehavior[slider.key]"
              :label="slider.label"
              :value-color="slider.color"
              :left-label="slider.left"
              :right-label="slider.right"
              @update:model-value="store.behavioral.responseBehavior[slider.key] = $event"
            />
          </div>
        </UiToggleSection>

        <!-- Cultural & Contextual Adaptation -->
        <UiToggleSection
          v-model:enabled="store.enabled.behavioral.cultural"
          :title="$t('behavioral.culturalAdaptation')"
        >
          <div class="space-y-4">
            <div>
              <UFormField :label="$t('behavioral.languageAdaptation')">
                <USelect
                  :model-value="store.behavioral.languageStyle"
                  :items="translatedLanguageStyles"
                  value-key="value"
                  label-key="label"
                  class="w-full md:w-1/2"
                  @update:model-value="store.behavioral.languageStyle = $event as LanguageStyle"
                />
              </UFormField>
            </div>

            <UiRangeSlider
              :model-value="store.behavioral.culturalSensitivity"
              :label="$t('behavioral.culturalSensitivity')"
              value-color="text-teal-600"
              :left-label="$t('behavioral.culturalLeft')"
              :right-label="$t('behavioral.culturalRight')"
              @update:model-value="store.behavioral.culturalSensitivity = $event"
            />

            <UiCheckboxGroup
              :model-value="store.behavioral.adaptationBehavior"
              :options="adaptationBehaviors"
              columns="grid-cols-1 md:grid-cols-2"
              @update:model-value="store.behavioral.adaptationBehavior = $event as AdaptationBehavior[]"
            />
          </div>
        </UiToggleSection>

        <!-- Interaction Patterns -->
        <UiToggleSection
          v-model:enabled="store.enabled.behavioral.interactionPatterns"
          :title="$t('behavioral.interactionPatterns')"
        >
          <UiCheckboxGroup
            :model-value="store.behavioral.interactionPatterns"
            :options="interactionPatterns"
            columns="grid-cols-1 md:grid-cols-2"
            @update:model-value="store.behavioral.interactionPatterns = $event as InteractionPattern[]"
          />
        </UiToggleSection>
      </div>
    </div>
  </UCard>
</template>
