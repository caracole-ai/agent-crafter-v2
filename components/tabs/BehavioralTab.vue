<script setup lang="ts">
import {
  questioningStyles,
  errorHandlingOptions,
  languageStyles,
  adaptationBehaviors,
  interactionPatterns,
} from '~/data/options'
import { getProactivityDescription } from '~/data/descriptions'
import type {
  QuestioningStyle,
  ErrorHandling,
  LanguageStyle,
  AdaptationBehavior,
  InteractionPattern,
  ResponseBehaviorKey,
} from '~/types/personality'

const store = usePersonalityStore()

const proactivityDescription = computed(() => getProactivityDescription(store.behavioral.proactivity))

const responseBehaviorSliders: { key: ResponseBehaviorKey; label: string; color: string; left: string; right: string }[] = [
  { key: 'followup', label: 'Follow-up Frequency', color: 'text-blue-600', left: 'Never follows up', right: 'Regular follow-ups' },
  { key: 'elaboration', label: 'Detail Elaboration', color: 'text-green-600', left: 'Minimal detail', right: 'Rich elaboration' },
  { key: 'context', label: 'Context Awareness', color: 'text-purple-600', left: 'Focused response', right: 'Broad context' },
  { key: 'examples', label: 'Example Usage', color: 'text-orange-600', left: 'Abstract only', right: 'Rich examples' },
]
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-8 glass-effect">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">🎯 Behavioral Patterns</h2>

    <div class="space-y-8">
      <!-- Proactivity Level -->
      <div>
        <UiRangeSlider
          :model-value="store.behavioral.proactivity"
          label="Proactivity Level"
          value-color="text-indigo-600"
          left-label="Reactive only"
          center-label="Balanced"
          right-label="Highly proactive"
          @update:model-value="store.behavioral.proactivity = $event"
        />
        <div class="text-sm text-gray-600 mt-2">{{ proactivityDescription }}</div>
      </div>

      <!-- Questioning Style -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Questioning Style</h3>
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
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Error Handling & Uncertainty</h3>
        <UiCheckboxGroup
          :model-value="store.behavioral.errorHandling"
          :options="errorHandlingOptions"
          columns="grid-cols-1 md:grid-cols-2"
          @update:model-value="store.behavioral.errorHandling = $event as ErrorHandling[]"
        />
      </div>

      <!-- Response Behavior -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-6">Response Behavior</h3>
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
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Cultural & Contextual Adaptation</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-medium text-gray-700 mb-3">Language Adaptation</h4>
            <select
              :value="store.behavioral.languageStyle"
              class="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              @change="store.behavioral.languageStyle = ($event.target as HTMLSelectElement).value as LanguageStyle"
            >
              <option v-for="opt in languageStyles" :key="opt.value" :value="opt.value">
                {{ opt.label }}
              </option>
            </select>
          </div>

          <UiRangeSlider
            :model-value="store.behavioral.culturalSensitivity"
            label="Cultural Sensitivity"
            value-color="text-teal-600"
            left-label="Direct communication"
            right-label="High cultural awareness"
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
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Interaction Patterns</h3>
        <UiCheckboxGroup
          :model-value="store.behavioral.interactionPatterns"
          :options="interactionPatterns"
          columns="grid-cols-1 md:grid-cols-2"
          @update:model-value="store.behavioral.interactionPatterns = $event as InteractionPattern[]"
        />
      </div>
    </div>
  </div>
</template>
