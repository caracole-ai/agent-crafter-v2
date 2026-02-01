<script setup lang="ts">
import { narrativeVoices, literaryMovements, rhetoricalDevices, textualRhythms } from '~/data/options'
import type { NarrativeVoice, LiteraryMovement, RhetoricalDevice, TextualRhythm } from '~/types/personality'

const store = usePersonalityStore()
</script>

<template>
  <div class="space-y-6">
    <!-- Voix Narrative -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🗣️ Voix Narrative</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Le point de vue et la posture narrative de l'agent</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.literary.narrativeVoice"
        :options="narrativeVoices"
        active-color="bg-teal-500/20 border-teal-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.literary.narrativeVoice = $event as NarrativeVoice"
      />
    </UCard>

    <!-- Mouvement Littéraire -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">📚 Mouvement Littéraire</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">L'esthétique dominante qui colore l'écriture de l'agent</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.literary.literaryMovement"
        :options="literaryMovements"
        active-color="bg-sky-500/20 border-sky-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.literary.literaryMovement = $event as LiteraryMovement"
      />
    </UCard>

    <!-- Figures de Style -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">✨ Figures de Style Préférées</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Les outils rhétoriques que l'agent privilégie dans son expression</p>
      </template>
      <UiCheckboxGroup
        :model-value="store.literary.rhetoricalDevices"
        :options="rhetoricalDevices"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.literary.rhetoricalDevices = $event as RhetoricalDevice[]"
      />
    </UCard>

    <!-- Esthétique de la Prose -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🖋️ Esthétique de la Prose</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">Les polarités stylistiques qui définissent la texture de l'écriture</p>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UiRangeSlider
          v-model="store.literary.proseAesthetics.ornateAustere"
          label="Orné ↔ Austère"
          :min="0"
          :max="100"
          left-label="Baroque"
          right-label="Dépouillé"
          center-label="Équilibré"
          value-color="text-teal-400"
        />
        <UiRangeSlider
          v-model="store.literary.proseAesthetics.abstractConcrete"
          label="Abstrait ↔ Concret"
          :min="0"
          :max="100"
          left-label="Concepts"
          right-label="Exemples tangibles"
          center-label="Équilibré"
          value-color="text-sky-400"
        />
        <UiRangeSlider
          v-model="store.literary.proseAesthetics.lyricalAnalytical"
          label="Lyrique ↔ Analytique"
          :min="0"
          :max="100"
          left-label="Poétique"
          right-label="Méthodique"
          center-label="Équilibré"
          value-color="text-violet-400"
        />
        <UiRangeSlider
          v-model="store.literary.proseAesthetics.linearDigressive"
          label="Linéaire ↔ Digressif"
          :min="0"
          :max="100"
          left-label="Droit au but"
          right-label="Exploration"
          center-label="Équilibré"
          value-color="text-amber-400"
        />
        <UiRangeSlider
          v-model="store.literary.proseAesthetics.didacticEvocative"
          label="Didactique ↔ Évocateur"
          :min="0"
          :max="100"
          left-label="Enseigner"
          right-label="Faire ressentir"
          center-label="Équilibré"
          value-color="text-rose-400"
        />
      </div>
    </UCard>

    <!-- Rythme Textuel -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🎵 Rythme Textuel</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">La cadence et le tempo de la prose de l'agent</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.literary.textualRhythm"
        :options="textualRhythms"
        active-color="bg-emerald-500/20 border-emerald-500"
        columns="grid-cols-1 sm:grid-cols-2"
        @update:model-value="store.literary.textualRhythm = $event as TextualRhythm"
      />
    </UCard>

    <!-- Intertextualité -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">📖 Intertextualité</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">L'agent fait-il référence à d'autres œuvres, idées, penseurs ?</p>
      </template>
      <UiRangeSlider
        v-model="store.literary.intertextuality"
        label="Niveau d'intertextualité"
        :min="0"
        :max="100"
        left-label="Autonome"
        right-label="Richement référencé"
        center-label="Modéré"
        value-color="text-indigo-400"
      />
    </UCard>
  </div>
</template>
