<script setup lang="ts">
import { narrativeVoices, literaryMovements, rhetoricalDevices, textualRhythms } from '~/data/options'
import type { NarrativeVoice, LiteraryMovement, RhetoricalDevice, TextualRhythm } from '~/types/personality'

const store = usePersonalityStore()
</script>

<template>
  <div class="space-y-6">
    <!-- Narrative Voice -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🗣️ {{ $t('literary.narrativeTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('literary.narrativeDesc') }}</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.literary.narrativeVoice"
        :options="narrativeVoices"
        active-color="bg-teal-500/20 border-teal-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.literary.narrativeVoice = $event as NarrativeVoice"
      />
    </UCard>

    <!-- Literary Movement -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">📚 {{ $t('literary.movementTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('literary.movementDesc') }}</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.literary.literaryMovement"
        :options="literaryMovements"
        active-color="bg-sky-500/20 border-sky-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.literary.literaryMovement = $event as LiteraryMovement"
      />
    </UCard>

    <!-- Rhetorical Devices -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">✨ {{ $t('literary.figuresTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('literary.figuresDesc') }}</p>
      </template>
      <UiCheckboxGroup
        :model-value="store.literary.rhetoricalDevices"
        :options="rhetoricalDevices"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.literary.rhetoricalDevices = $event as RhetoricalDevice[]"
      />
    </UCard>

    <!-- Prose Aesthetics -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🖋️ {{ $t('literary.proseTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('literary.proseDesc') }}</p>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UiRangeSlider
          v-model="store.literary.proseAesthetics.ornateAustere"
          :label="$t('literary.ornateAustere')"
          :min="0"
          :max="100"
          :left-label="$t('literary.baroque')"
          :right-label="$t('literary.stripped')"
          :center-label="$t('balanced')"
          value-color="text-teal-400"
        />
        <UiRangeSlider
          v-model="store.literary.proseAesthetics.abstractConcrete"
          :label="$t('literary.abstractConcrete')"
          :min="0"
          :max="100"
          :left-label="$t('literary.concepts')"
          :right-label="$t('literary.tangibleExamples')"
          :center-label="$t('balanced')"
          value-color="text-sky-400"
        />
        <UiRangeSlider
          v-model="store.literary.proseAesthetics.lyricalAnalytical"
          :label="$t('literary.lyricalAnalytical')"
          :min="0"
          :max="100"
          :left-label="$t('literary.poetic')"
          :right-label="$t('literary.methodical')"
          :center-label="$t('balanced')"
          value-color="text-violet-400"
        />
        <UiRangeSlider
          v-model="store.literary.proseAesthetics.linearDigressive"
          :label="$t('literary.linearDigressive')"
          :min="0"
          :max="100"
          :left-label="$t('literary.straightToPoint')"
          :right-label="$t('literary.exploration')"
          :center-label="$t('balanced')"
          value-color="text-amber-400"
        />
        <UiRangeSlider
          v-model="store.literary.proseAesthetics.didacticEvocative"
          :label="$t('literary.didacticEvocative')"
          :min="0"
          :max="100"
          :left-label="$t('literary.teach')"
          :right-label="$t('literary.evoke')"
          :center-label="$t('balanced')"
          value-color="text-rose-400"
        />
      </div>
    </UCard>

    <!-- Textual Rhythm -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🎵 {{ $t('literary.rhythmTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('literary.rhythmDesc') }}</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.literary.textualRhythm"
        :options="textualRhythms"
        active-color="bg-emerald-500/20 border-emerald-500"
        columns="grid-cols-1 sm:grid-cols-2"
        @update:model-value="store.literary.textualRhythm = $event as TextualRhythm"
      />
    </UCard>

    <!-- Intertextuality -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">📖 {{ $t('literary.intertextualityTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('literary.intertextualityDesc') }}</p>
      </template>
      <UiRangeSlider
        v-model="store.literary.intertextuality"
        :label="$t('literary.intertextualityLevel')"
        :min="0"
        :max="100"
        :left-label="$t('literary.autonomous')"
        :right-label="$t('literary.richlyReferenced')"
        :center-label="$t('literary.moderate')"
        value-color="text-indigo-400"
      />
    </UCard>
  </div>
</template>
