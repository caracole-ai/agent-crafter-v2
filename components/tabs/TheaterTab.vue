<script setup lang="ts">
import { dramaticArchetypes, dramaticFunctions, theatricalRegisters, actingTools } from '~/data/options'
import type { DramaticArchetype, DramaticFunction, TheatricalRegister, ActingTool } from '~/types/personality'

const store = usePersonalityStore()
</script>

<template>
  <div class="space-y-6">
    <!-- Archétype Dramatique -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🎭 Archétype Dramatique</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Le pattern profond du personnage, inspiré de Jung et Campbell</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.theater.dramaticArchetype"
        :options="dramaticArchetypes"
        active-color="bg-rose-500/20 border-rose-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.theater.dramaticArchetype = $event as DramaticArchetype"
      />
    </UCard>

    <!-- Fonction Dramatique -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🎬 Fonction Dramatique</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Quel rôle joue l'agent dans « l'histoire » de l'utilisateur</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.theater.dramaticFunction"
        :options="dramaticFunctions"
        active-color="bg-orange-500/20 border-orange-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.theater.dramaticFunction = $event as DramaticFunction"
      />
    </UCard>

    <!-- Registre Théâtral -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🎪 Registre Théâtral</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Le « genre » de la performance, le ton dramatique dominant</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.theater.theatricalRegister"
        :options="theatricalRegisters"
        active-color="bg-fuchsia-500/20 border-fuchsia-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.theater.theatricalRegister = $event as TheatricalRegister"
      />
    </UCard>

    <!-- Dynamiques de Jeu -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🎲 Dynamiques de Jeu</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Les tensions dramatiques qui animent le personnage sur scène</p>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UiRangeSlider
          v-model="store.theater.playDynamics.protagonistSupport"
          label="Protagoniste ↔ Support"
          :min="0"
          :max="100"
          left-label="Centre de la scène"
          right-label="En soutien"
          center-label="Équilibré"
          value-color="text-rose-400"
        />
        <UiRangeSlider
          v-model="store.theater.playDynamics.textSubtext"
          label="Texte ↔ Sous-texte"
          :min="0"
          :max="100"
          left-label="Explicite"
          right-label="Suggéré"
          center-label="Équilibré"
          value-color="text-orange-400"
        />
        <UiRangeSlider
          v-model="store.theater.playDynamics.maskAuthenticity"
          label="Masque ↔ Authenticité"
          :min="0"
          :max="100"
          left-label="Persona formelle"
          right-label="Expression genuine"
          center-label="Équilibré"
          value-color="text-fuchsia-400"
        />
        <UiRangeSlider
          v-model="store.theater.playDynamics.monologueDialogue"
          label="Monologue ↔ Dialogue"
          :min="0"
          :max="100"
          left-label="Expositif"
          right-label="Interactif"
          center-label="Équilibré"
          value-color="text-violet-400"
        />
      </div>
    </UCard>

    <!-- Outils du Comédien -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🎬 Outils du Comédien</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Techniques inspirées de Stanislavski pour habiter le rôle</p>
      </template>
      <UiCheckboxGroup
        :model-value="store.theater.actingTools"
        :options="actingTools"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.theater.actingTools = $event as ActingTool[]"
      />
    </UCard>

    <!-- Distance Brechtienne -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🪟 Distance Brechtienne</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">L'agent reste-t-il dans le « rôle » ou prend-il du recul méta sur ses propres réponses ?</p>
      </template>
      <UiRangeSlider
        v-model="store.theater.brechtianDistance"
        label="Immersion ↔ Distance critique"
        :min="0"
        :max="100"
        left-label="Immersion totale"
        right-label="Distance critique"
        center-label="Semi-conscient"
        value-color="text-cyan-400"
      />
    </UCard>
  </div>
</template>
