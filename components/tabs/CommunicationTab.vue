<script setup lang="ts">
import { primaryStyles, communicationModifiers, responseStructures } from '~/data/options'
import { verbosityDescriptions } from '~/data/descriptions'
import type { PrimaryStyle, CommunicationModifier, ResponseStructure, ToneKey } from '~/types/personality'

const store = usePersonalityStore()

const verbosityDescription = computed(
  () => verbosityDescriptions[store.communication.verbosity] || '',
)

const toneSliders: { key: ToneKey; label: string; color: string; left: string; right: string }[] = [
  { key: 'optimism', label: 'Optimisme vs Réalisme', color: 'text-green-600', left: 'Très réaliste', right: 'Très optimiste' },
  { key: 'formality', label: 'Formality Level', color: 'text-purple-600', left: 'Très informel', right: 'Très formel' },
  { key: 'patience', label: 'Patience vs Urgence', color: 'text-blue-600', left: 'Très urgent', right: 'Très patient' },
  { key: 'confidence', label: 'Confiance vs Humilité', color: 'text-orange-600', left: 'Très humble', right: 'Très confiant' },
]
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-8 glass-effect">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">💬 Communication Style Matrix</h2>

    <div class="space-y-8">
      <!-- Primary Style -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Primary Style</h3>
        <UiRadioCardGroup
          :model-value="store.communication.primaryStyle"
          :options="primaryStyles"
          @update:model-value="store.communication.primaryStyle = $event as PrimaryStyle"
        />
      </div>

      <!-- Style Modifiers -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Style Modifiers</h3>
        <UiCheckboxGroup
          :model-value="store.communication.modifiers"
          :options="communicationModifiers"
          @update:model-value="store.communication.modifiers = $event as CommunicationModifier[]"
        />
      </div>

      <!-- Response Characteristics -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-6">Response Characteristics</h3>

        <!-- Verbosity -->
        <div class="mb-6">
          <UiRangeSlider
            :model-value="store.communication.verbosity"
            :min="1"
            :max="10"
            label="Verbosity Level"
            left-label="Ultra concis"
            center-label="Équilibré"
            right-label="Exhaustif"
            @update:model-value="store.communication.verbosity = $event"
          />
          <div class="text-sm text-gray-600 mt-2">{{ verbosityDescription }}</div>
        </div>

        <!-- Response Structure -->
        <div class="mb-6">
          <label class="font-medium text-gray-700 mb-3 block">Response Structure</label>
          <select
            :value="store.communication.structure"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            @change="store.communication.structure = ($event.target as HTMLSelectElement).value as ResponseStructure"
          >
            <option v-for="opt in responseStructures" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>
        </div>

        <!-- Tone Sliders -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UiRangeSlider
            v-for="tone in toneSliders"
            :key="tone.key"
            :model-value="store.communication.tones[tone.key]"
            :label="tone.label"
            :value-color="tone.color"
            :left-label="tone.left"
            :right-label="tone.right"
            @update:model-value="store.communication.tones[tone.key] = $event"
          />
        </div>
      </div>
    </div>
  </div>
</template>
