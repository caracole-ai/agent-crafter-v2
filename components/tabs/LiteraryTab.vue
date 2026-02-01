<script setup lang="ts">
import { narrativeVoices, literaryMovements, rhetoricalDevices, textualRhythms } from '~/data/options'
import type { NarrativeVoice, LiteraryMovement, RhetoricalDevice, TextualRhythm } from '~/types/personality'

const store = usePersonalityStore()
</script>

<template>
  <div>
    <div class="section-toggle-header mb-4">
      <UCheckbox v-model="store.enabled.literary._self" />
      <h2 class="text-2xl font-bold">✒️ {{ $t('tabs.literary') }}</h2>
    </div>

    <div :class="{ 'section-disabled-overlay': !store.enabled.literary._self }">
      <div class="space-y-2">
        <!-- Narrative Voice -->
        <UiToggleSection
          v-model:enabled="store.enabled.literary.narrativeVoice"
          :title="'🗣️ ' + $t('literary.narrativeTitle')"
          :default-open="true"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('literary.narrativeDesc') }}</p>
          <UiRadioCardGroup
            :model-value="store.literary.narrativeVoice"
            :options="narrativeVoices"
            active-color="bg-teal-500/20 border-teal-500"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            @update:model-value="store.literary.narrativeVoice = $event as NarrativeVoice"
          />
        </UiToggleSection>

        <!-- Literary Movement -->
        <UiToggleSection
          v-model:enabled="store.enabled.literary.movement"
          :title="'📚 ' + $t('literary.movementTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('literary.movementDesc') }}</p>
          <UiRadioCardGroup
            :model-value="store.literary.literaryMovement"
            :options="literaryMovements"
            active-color="bg-sky-500/20 border-sky-500"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            @update:model-value="store.literary.literaryMovement = $event as LiteraryMovement"
          />
        </UiToggleSection>

        <!-- Rhetorical Devices -->
        <UiToggleSection
          v-model:enabled="store.enabled.literary.rhetoricalDevices"
          :title="'✨ ' + $t('literary.figuresTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('literary.figuresDesc') }}</p>
          <UiCheckboxGroup
            :model-value="store.literary.rhetoricalDevices"
            :options="rhetoricalDevices"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            @update:model-value="store.literary.rhetoricalDevices = $event as RhetoricalDevice[]"
          />
        </UiToggleSection>

        <!-- Prose Aesthetics -->
        <UiToggleSection
          v-model:enabled="store.enabled.literary.prose"
          :title="'🖋️ ' + $t('literary.proseTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('literary.proseDesc') }}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiRangeSlider v-model="store.literary.proseAesthetics.ornateAustere" :label="$t('literary.ornateAustere')" :min="0" :max="100" :left-label="$t('literary.baroque')" :right-label="$t('literary.stripped')" :center-label="$t('balanced')" value-color="text-teal-400" />
            <UiRangeSlider v-model="store.literary.proseAesthetics.abstractConcrete" :label="$t('literary.abstractConcrete')" :min="0" :max="100" :left-label="$t('literary.concepts')" :right-label="$t('literary.tangibleExamples')" :center-label="$t('balanced')" value-color="text-sky-400" />
            <UiRangeSlider v-model="store.literary.proseAesthetics.lyricalAnalytical" :label="$t('literary.lyricalAnalytical')" :min="0" :max="100" :left-label="$t('literary.poetic')" :right-label="$t('literary.methodical')" :center-label="$t('balanced')" value-color="text-violet-400" />
            <UiRangeSlider v-model="store.literary.proseAesthetics.linearDigressive" :label="$t('literary.linearDigressive')" :min="0" :max="100" :left-label="$t('literary.straightToPoint')" :right-label="$t('literary.exploration')" :center-label="$t('balanced')" value-color="text-amber-400" />
            <UiRangeSlider v-model="store.literary.proseAesthetics.didacticEvocative" :label="$t('literary.didacticEvocative')" :min="0" :max="100" :left-label="$t('literary.teach')" :right-label="$t('literary.evoke')" :center-label="$t('balanced')" value-color="text-rose-400" />
          </div>
        </UiToggleSection>

        <!-- Textual Rhythm -->
        <UiToggleSection
          v-model:enabled="store.enabled.literary.rhythm"
          :title="'🎵 ' + $t('literary.rhythmTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('literary.rhythmDesc') }}</p>
          <UiRadioCardGroup
            :model-value="store.literary.textualRhythm"
            :options="textualRhythms"
            active-color="bg-emerald-500/20 border-emerald-500"
            columns="grid-cols-1 sm:grid-cols-2"
            @update:model-value="store.literary.textualRhythm = $event as TextualRhythm"
          />
        </UiToggleSection>

        <!-- Intertextuality -->
        <UiToggleSection
          v-model:enabled="store.enabled.literary.intertextuality"
          :title="'📖 ' + $t('literary.intertextualityTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('literary.intertextualityDesc') }}</p>
          <UiRangeSlider
            v-model="store.literary.intertextuality"
            :label="$t('literary.intertextualityLevel')"
            :min="0" :max="100"
            :left-label="$t('literary.autonomous')"
            :right-label="$t('literary.richlyReferenced')"
            :center-label="$t('literary.moderate')"
            value-color="text-indigo-400"
          />
        </UiToggleSection>
      </div>
    </div>
  </div>
</template>
