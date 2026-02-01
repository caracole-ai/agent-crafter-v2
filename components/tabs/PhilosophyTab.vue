<script setup lang="ts">
import { epistemologicalStances, ethicalFrameworks, dialecticalMethods, cardinalVirtues } from '~/data/options'
import type { EpistemologicalStance, EthicalFramework, DialecticalMethod, CardinalVirtue } from '~/types/personality'

const store = usePersonalityStore()
</script>

<template>
  <div>
    <div class="section-toggle-header mb-4">
      <UCheckbox v-model="store.enabled.philosophy._self" />
      <h2 class="text-2xl font-bold">🏛️ {{ $t('tabs.philosophy') }}</h2>
    </div>

    <div :class="{ 'section-disabled-overlay': !store.enabled.philosophy._self }">
      <div class="space-y-2">
        <!-- Epistemological Stance -->
        <UiToggleSection
          v-model:enabled="store.enabled.philosophy.epistemology"
          :title="'🔬 ' + $t('philosophy.epistemologyTitle')"
          :default-open="true"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('philosophy.epistemologyDesc') }}</p>
          <UiRadioCardGroup
            :model-value="store.philosophy.epistemology"
            :options="epistemologicalStances"
            active-color="bg-indigo-500/20 border-indigo-500"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            @update:model-value="store.philosophy.epistemology = $event as EpistemologicalStance"
          />
        </UiToggleSection>

        <!-- Ethical Framework -->
        <UiToggleSection
          v-model:enabled="store.enabled.philosophy.ethicalFramework"
          :title="'⚖️ ' + $t('philosophy.ethicalTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('philosophy.ethicalDesc') }}</p>
          <UiRadioCardGroup
            :model-value="store.philosophy.ethicalFramework"
            :options="ethicalFrameworks"
            active-color="bg-amber-500/20 border-amber-500"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            @update:model-value="store.philosophy.ethicalFramework = $event as EthicalFramework"
          />
        </UiToggleSection>

        <!-- Dialectical Method -->
        <UiToggleSection
          v-model:enabled="store.enabled.philosophy.dialecticalMethod"
          :title="'🏺 ' + $t('philosophy.dialecticalTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('philosophy.dialecticalDesc') }}</p>
          <UiRadioCardGroup
            :model-value="store.philosophy.dialecticalMethod"
            :options="dialecticalMethods"
            active-color="bg-purple-500/20 border-purple-500"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            @update:model-value="store.philosophy.dialecticalMethod = $event as DialecticalMethod"
          />
        </UiToggleSection>

        <!-- Philosophical Temperament -->
        <UiToggleSection
          v-model:enabled="store.enabled.philosophy.temperament"
          :title="'🧭 ' + $t('philosophy.temperamentTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('philosophy.temperamentDesc') }}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiRangeSlider
              v-model="store.philosophy.temperament.certaintyDoubt"
              :label="$t('philosophy.certaintyDoubt')"
              :min="0" :max="100"
              :left-label="$t('philosophy.certainty')"
              :right-label="$t('philosophy.doubt')"
              :center-label="$t('balanced')"
              value-color="text-indigo-400"
            />
            <UiRangeSlider
              v-model="store.philosophy.temperament.universalParticular"
              :label="$t('philosophy.universalParticular')"
              :min="0" :max="100"
              :left-label="$t('philosophy.abstractPrinciples')"
              :right-label="$t('philosophy.concreteCases')"
              :center-label="$t('balanced')"
              value-color="text-amber-400"
            />
            <UiRangeSlider
              v-model="store.philosophy.temperament.contemplativeActive"
              :label="$t('philosophy.contemplativeActive')"
              :min="0" :max="100"
              :left-label="$t('philosophy.reflection')"
              :right-label="$t('philosophy.action')"
              :center-label="$t('balanced')"
              value-color="text-emerald-400"
            />
            <UiRangeSlider
              v-model="store.philosophy.temperament.individualCollective"
              :label="$t('philosophy.individualCollective')"
              :min="0" :max="100"
              :left-label="$t('philosophy.autonomy')"
              :right-label="$t('philosophy.community')"
              :center-label="$t('balanced')"
              value-color="text-rose-400"
            />
          </div>
        </UiToggleSection>

        <!-- Cardinal Virtues -->
        <UiToggleSection
          v-model:enabled="store.enabled.philosophy.virtues"
          :title="'🦉 ' + $t('philosophy.virtuesTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('philosophy.virtuesDesc') }}</p>
          <UiCheckboxGroup
            :model-value="store.philosophy.cardinalVirtues"
            :options="cardinalVirtues"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            @update:model-value="store.philosophy.cardinalVirtues = $event as CardinalVirtue[]"
          />
        </UiToggleSection>
      </div>
    </div>
  </div>
</template>
