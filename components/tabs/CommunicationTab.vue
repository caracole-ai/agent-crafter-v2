<script setup lang="ts">
import { primaryStyles, communicationModifiers, responseStructures } from '~/data/options'
import { verbosityDescriptionKeys } from '~/data/descriptions'
import type { PrimaryStyle, CommunicationModifier, ResponseStructure, ToneKey } from '~/types/personality'

const store = usePersonalityStore()
const { t } = useI18n()

const verbosityDescription = computed(
  () => t(verbosityDescriptionKeys[store.communication.verbosity] || 'descriptions.verbosity.5'),
)

const translatedResponseStructures = computed(() =>
  responseStructures.map(s => ({ ...s, label: t(s.label) })),
)

const toneSliders = computed(() => [
  { key: 'optimism' as ToneKey, label: t('communication.optimism'), color: 'text-green-600', left: t('communication.optimismLeft'), right: t('communication.optimismRight') },
  { key: 'formality' as ToneKey, label: t('communication.formality'), color: 'text-purple-600', left: t('communication.formalityLeft'), right: t('communication.formalityRight') },
  { key: 'patience' as ToneKey, label: t('communication.patience'), color: 'text-blue-600', left: t('communication.patienceLeft'), right: t('communication.patienceRight') },
  { key: 'confidence' as ToneKey, label: t('communication.confidenceHumility'), color: 'text-orange-600', left: t('communication.confidenceLeft'), right: t('communication.confidenceRight') },
])
</script>

<template>
  <UCard class="glass-effect">
    <h2 class="text-2xl font-bold mb-6">💬 {{ $t('communication.title') }}</h2>

    <div class="space-y-8">
      <!-- Primary Style -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('communication.primaryStyle') }}</h3>
        <UiRadioCardGroup
          :model-value="store.communication.primaryStyle"
          :options="primaryStyles"
          @update:model-value="store.communication.primaryStyle = $event as PrimaryStyle"
        />
      </div>

      <!-- Style Modifiers -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('communication.styleModifiers') }}</h3>
        <UiCheckboxGroup
          :model-value="store.communication.modifiers"
          :options="communicationModifiers"
          @update:model-value="store.communication.modifiers = $event as CommunicationModifier[]"
        />
      </div>

      <!-- Response Characteristics -->
      <div>
        <h3 class="text-lg font-semibold mb-6">{{ $t('communication.responseCharacteristics') }}</h3>

        <!-- Verbosity -->
        <div class="mb-6">
          <UiRangeSlider
            :model-value="store.communication.verbosity"
            :min="1"
            :max="10"
            :label="$t('communication.verbosityLevel')"
            :left-label="$t('communication.verbosityLeft')"
            :center-label="$t('communication.verbosityCenter')"
            :right-label="$t('communication.verbosityRight')"
            @update:model-value="store.communication.verbosity = $event"
          />
          <div class="text-sm text-[var(--ui-text-dimmed)] mt-2">{{ verbosityDescription }}</div>
        </div>

        <!-- Response Structure -->
        <div class="mb-6">
          <UFormField :label="$t('communication.responseStructure')">
            <USelect
              :model-value="store.communication.structure"
              :items="translatedResponseStructures"
              value-key="value"
              label-key="label"
              class="w-full"
              @update:model-value="store.communication.structure = $event as ResponseStructure"
            />
          </UFormField>
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
  </UCard>
</template>
