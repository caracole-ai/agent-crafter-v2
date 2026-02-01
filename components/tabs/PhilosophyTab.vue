<script setup lang="ts">
import { epistemologicalStances, ethicalFrameworks, dialecticalMethods, cardinalVirtues } from '~/data/options'
import type { EpistemologicalStance, EthicalFramework, DialecticalMethod, CardinalVirtue } from '~/types/personality'

const store = usePersonalityStore()
</script>

<template>
  <div class="space-y-6">
    <!-- Epistemological Stance -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🔬 {{ $t('philosophy.epistemologyTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('philosophy.epistemologyDesc') }}</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.philosophy.epistemology"
        :options="epistemologicalStances"
        active-color="bg-indigo-500/20 border-indigo-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.philosophy.epistemology = $event as EpistemologicalStance"
      />
    </UCard>

    <!-- Ethical Framework -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">⚖️ {{ $t('philosophy.ethicalTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('philosophy.ethicalDesc') }}</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.philosophy.ethicalFramework"
        :options="ethicalFrameworks"
        active-color="bg-amber-500/20 border-amber-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.philosophy.ethicalFramework = $event as EthicalFramework"
      />
    </UCard>

    <!-- Dialectical Method -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🏺 {{ $t('philosophy.dialecticalTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('philosophy.dialecticalDesc') }}</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.philosophy.dialecticalMethod"
        :options="dialecticalMethods"
        active-color="bg-purple-500/20 border-purple-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.philosophy.dialecticalMethod = $event as DialecticalMethod"
      />
    </UCard>

    <!-- Philosophical Temperament -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🧭 {{ $t('philosophy.temperamentTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('philosophy.temperamentDesc') }}</p>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UiRangeSlider
          v-model="store.philosophy.temperament.certaintyDoubt"
          :label="$t('philosophy.certaintyDoubt')"
          :min="0"
          :max="100"
          :left-label="$t('philosophy.certainty')"
          :right-label="$t('philosophy.doubt')"
          :center-label="$t('balanced')"
          value-color="text-indigo-400"
        />
        <UiRangeSlider
          v-model="store.philosophy.temperament.universalParticular"
          :label="$t('philosophy.universalParticular')"
          :min="0"
          :max="100"
          :left-label="$t('philosophy.abstractPrinciples')"
          :right-label="$t('philosophy.concreteCases')"
          :center-label="$t('balanced')"
          value-color="text-amber-400"
        />
        <UiRangeSlider
          v-model="store.philosophy.temperament.contemplativeActive"
          :label="$t('philosophy.contemplativeActive')"
          :min="0"
          :max="100"
          :left-label="$t('philosophy.reflection')"
          :right-label="$t('philosophy.action')"
          :center-label="$t('balanced')"
          value-color="text-emerald-400"
        />
        <UiRangeSlider
          v-model="store.philosophy.temperament.individualCollective"
          :label="$t('philosophy.individualCollective')"
          :min="0"
          :max="100"
          :left-label="$t('philosophy.autonomy')"
          :right-label="$t('philosophy.community')"
          :center-label="$t('balanced')"
          value-color="text-rose-400"
        />
      </div>
    </UCard>

    <!-- Cardinal Virtues -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🦉 {{ $t('philosophy.virtuesTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('philosophy.virtuesDesc') }}</p>
      </template>
      <UiCheckboxGroup
        :model-value="store.philosophy.cardinalVirtues"
        :options="cardinalVirtues"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.philosophy.cardinalVirtues = $event as CardinalVirtue[]"
      />
    </UCard>
  </div>
</template>
