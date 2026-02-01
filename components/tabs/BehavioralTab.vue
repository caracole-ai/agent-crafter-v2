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
    <h2 class="text-2xl font-bold mb-6">🎯 {{ $t('behavioral.title') }}</h2>

    <div class="space-y-8">
      <!-- Proactivity Level -->
      <div>
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
      </div>

      <!-- Questioning Style -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('behavioral.questioningStyle') }}</h3>
        <UiRadioCardGroup
          :model-value="store.behavioral.questioningStyle"
          :options="questioningStyles"
          columns="grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
          active-color="border-indigo-500 bg-indigo-50"
          @update:model-value="store.behavioral.questioningStyle = $event as QuestioningStyle"
        />
      </div>

      <!-- Error Handling -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('behavioral.errorHandling') }}</h3>
        <UiCheckboxGroup
          :model-value="store.behavioral.errorHandling"
          :options="errorHandlingOptions"
          columns="grid-cols-1 md:grid-cols-2"
          @update:model-value="store.behavioral.errorHandling = $event as ErrorHandling[]"
        />
      </div>

      <!-- Response Behavior -->
      <div>
        <h3 class="text-lg font-semibold mb-6">{{ $t('behavioral.responseBehavior') }}</h3>
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
      </div>

      <!-- Cultural & Contextual Adaptation -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('behavioral.culturalAdaptation') }}</h3>
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
      </div>

      <!-- Interaction Patterns -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('behavioral.interactionPatterns') }}</h3>
        <UiCheckboxGroup
          :model-value="store.behavioral.interactionPatterns"
          :options="interactionPatterns"
          columns="grid-cols-1 md:grid-cols-2"
          @update:model-value="store.behavioral.interactionPatterns = $event as InteractionPattern[]"
        />
      </div>
    </div>
  </UCard>
</template>
