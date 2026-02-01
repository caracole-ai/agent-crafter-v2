<script setup lang="ts">
import { dramaticArchetypes, dramaticFunctions, theatricalRegisters, actingTools } from '~/data/options'
import type { DramaticArchetype, DramaticFunction, TheatricalRegister, ActingTool } from '~/types/personality'

const store = usePersonalityStore()
</script>

<template>
  <div class="space-y-6">
    <!-- Dramatic Archetype -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🎭 {{ $t('theater.archetypeTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('theater.archetypeDesc') }}</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.theater.dramaticArchetype"
        :options="dramaticArchetypes"
        active-color="bg-rose-500/20 border-rose-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.theater.dramaticArchetype = $event as DramaticArchetype"
      />
    </UCard>

    <!-- Dramatic Function -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🎬 {{ $t('theater.functionTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('theater.functionDesc') }}</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.theater.dramaticFunction"
        :options="dramaticFunctions"
        active-color="bg-orange-500/20 border-orange-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.theater.dramaticFunction = $event as DramaticFunction"
      />
    </UCard>

    <!-- Theatrical Register -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🎪 {{ $t('theater.registerTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('theater.registerDesc') }}</p>
      </template>
      <UiRadioCardGroup
        :model-value="store.theater.theatricalRegister"
        :options="theatricalRegisters"
        active-color="bg-fuchsia-500/20 border-fuchsia-500"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.theater.theatricalRegister = $event as TheatricalRegister"
      />
    </UCard>

    <!-- Play Dynamics -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🎲 {{ $t('theater.dynamicsTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('theater.dynamicsDesc') }}</p>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UiRangeSlider
          v-model="store.theater.playDynamics.protagonistSupport"
          :label="$t('theater.protagonistSupport')"
          :min="0"
          :max="100"
          :left-label="$t('theater.centerStage')"
          :right-label="$t('theater.inSupport')"
          :center-label="$t('balanced')"
          value-color="text-rose-400"
        />
        <UiRangeSlider
          v-model="store.theater.playDynamics.textSubtext"
          :label="$t('theater.textSubtext')"
          :min="0"
          :max="100"
          :left-label="$t('theater.explicit')"
          :right-label="$t('theater.suggested')"
          :center-label="$t('balanced')"
          value-color="text-orange-400"
        />
        <UiRangeSlider
          v-model="store.theater.playDynamics.maskAuthenticity"
          :label="$t('theater.maskAuthenticity')"
          :min="0"
          :max="100"
          :left-label="$t('theater.formalPersona')"
          :right-label="$t('theater.genuineExpression')"
          :center-label="$t('balanced')"
          value-color="text-fuchsia-400"
        />
        <UiRangeSlider
          v-model="store.theater.playDynamics.monologueDialogue"
          :label="$t('theater.monologueDialogue')"
          :min="0"
          :max="100"
          :left-label="$t('theater.expository')"
          :right-label="$t('theater.interactive')"
          :center-label="$t('balanced')"
          value-color="text-violet-400"
        />
      </div>
    </UCard>

    <!-- Acting Tools -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🎬 {{ $t('theater.actingToolsTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('theater.actingToolsDesc') }}</p>
      </template>
      <UiCheckboxGroup
        :model-value="store.theater.actingTools"
        :options="actingTools"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        @update:model-value="store.theater.actingTools = $event as ActingTool[]"
      />
    </UCard>

    <!-- Brechtian Distance -->
    <UCard class="glass-effect">
      <template #header>
        <h3 class="text-lg font-semibold">🪟 {{ $t('theater.brechtianTitle') }}</h3>
        <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('theater.brechtianDesc') }}</p>
      </template>
      <UiRangeSlider
        v-model="store.theater.brechtianDistance"
        :label="$t('theater.immersionDistance')"
        :min="0"
        :max="100"
        :left-label="$t('theater.totalImmersion')"
        :right-label="$t('theater.criticalDistance')"
        :center-label="$t('theater.semiConscious')"
        value-color="text-cyan-400"
      />
    </UCard>
  </div>
</template>
