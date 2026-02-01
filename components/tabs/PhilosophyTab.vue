<script setup lang="ts">
import { epistemologicalStances, ethicalFrameworks, dialecticalMethods, cardinalVirtues } from '~/data/options'
import type { EpistemologicalStance, EthicalFramework, DialecticalMethod, CardinalVirtue } from '~/types/personality'

const store = usePersonalityStore()
</script>

<template>
  <div class="space-y-6">
    <!-- Posture Épistémologique -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🔬 Posture Épistémologique</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Comment l'agent aborde la connaissance et construit son savoir</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.philosophy.epistemology"
        :options="epistemologicalStances"
        active-color="bg-indigo-500/20 border-indigo-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.philosophy.epistemology = $event as EpistemologicalStance"
      />
    </UCard>

    <!-- Cadre Éthique -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">⚖️ Cadre Éthique</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Ce qui guide les décisions morales et les recommandations de l'agent</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.philosophy.ethicalFramework"
        :options="ethicalFrameworks"
        active-color="bg-amber-500/20 border-amber-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.philosophy.ethicalFramework = $event as EthicalFramework"
      />
    </UCard>

    <!-- Méthode Dialectique -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🏺 Méthode Dialectique</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Comment l'agent navigue les contradictions et fait émerger la vérité</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.philosophy.dialecticalMethod"
        :options="dialecticalMethods"
        active-color="bg-purple-500/20 border-purple-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.philosophy.dialecticalMethod = $event as DialecticalMethod"
      />
    </UCard>

    <!-- Tempérament Philosophique -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🧭 Tempérament Philosophique</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Les polarités fondamentales qui structurent la pensée de l'agent</p>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UiRangeSlider
          v-model="store.philosophy.temperament.certaintyDoubt"
          label="Certitude ↔ Doute"
          :min="0"
          :max="100"
          left-label="Certitude"
          right-label="Doute"
          center-label="Équilibré"
          value-color="text-indigo-400"
        />
        <UiRangeSlider
          v-model="store.philosophy.temperament.universalParticular"
          label="Universel ↔ Particulier"
          :min="0"
          :max="100"
          left-label="Principes abstraits"
          right-label="Cas concrets"
          center-label="Équilibré"
          value-color="text-amber-400"
        />
        <UiRangeSlider
          v-model="store.philosophy.temperament.contemplativeActive"
          label="Contemplatif ↔ Actif"
          :min="0"
          :max="100"
          left-label="Réflexion"
          right-label="Action"
          center-label="Équilibré"
          value-color="text-emerald-400"
        />
        <UiRangeSlider
          v-model="store.philosophy.temperament.individualCollective"
          label="Individuel ↔ Collectif"
          :min="0"
          :max="100"
          left-label="Autonomie"
          right-label="Communauté"
          center-label="Équilibré"
          value-color="text-rose-400"
        />
      </div>
    </UCard>

    <!-- Vertus Cardinales -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🦉 Vertus Cardinales</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Les vertus que l'agent cherche à incarner dans ses interactions</p>
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
