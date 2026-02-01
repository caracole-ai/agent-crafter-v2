<script setup lang="ts">
import { dramaticArchetypes, dramaticFunctions, theatricalRegisters, actingTools } from '~/data/options'
import type { DramaticArchetype, DramaticFunction, TheatricalRegister, ActingTool } from '~/types/personality'

const store = usePersonalityStore()
</script>

<template>
  <div>
    <div class="section-toggle-header mb-4">
      <UCheckbox v-model="store.enabled.theater._self" />
      <h2 class="text-2xl font-bold">🎭 {{ $t('tabs.theater') }}</h2>
    </div>

    <div :class="{ 'section-disabled-overlay': !store.enabled.theater._self }">
      <div class="space-y-2">
        <!-- Dramatic Archetype -->
        <UiToggleSection
          v-model:enabled="store.enabled.theater.archetype"
          :title="'🎭 ' + $t('theater.archetypeTitle')"
          :default-open="true"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('theater.archetypeDesc') }}</p>
          <UiRadioCardGroup
            :model-value="store.theater.dramaticArchetype"
            :options="dramaticArchetypes"
            active-color="bg-rose-500/20 border-rose-500"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            @update:model-value="store.theater.dramaticArchetype = $event as DramaticArchetype"
          />
        </UiToggleSection>

        <!-- Dramatic Function -->
        <UiToggleSection
          v-model:enabled="store.enabled.theater.function"
          :title="'🎬 ' + $t('theater.functionTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('theater.functionDesc') }}</p>
          <UiRadioCardGroup
            :model-value="store.theater.dramaticFunction"
            :options="dramaticFunctions"
            active-color="bg-orange-500/20 border-orange-500"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            @update:model-value="store.theater.dramaticFunction = $event as DramaticFunction"
          />
        </UiToggleSection>

        <!-- Theatrical Register -->
        <UiToggleSection
          v-model:enabled="store.enabled.theater.register"
          :title="'🎪 ' + $t('theater.registerTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('theater.registerDesc') }}</p>
          <UiRadioCardGroup
            :model-value="store.theater.theatricalRegister"
            :options="theatricalRegisters"
            active-color="bg-fuchsia-500/20 border-fuchsia-500"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            @update:model-value="store.theater.theatricalRegister = $event as TheatricalRegister"
          />
        </UiToggleSection>

        <!-- Play Dynamics -->
        <UiToggleSection
          v-model:enabled="store.enabled.theater.dynamics"
          :title="'🎲 ' + $t('theater.dynamicsTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('theater.dynamicsDesc') }}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiRangeSlider v-model="store.theater.playDynamics.protagonistSupport" :label="$t('theater.protagonistSupport')" :min="0" :max="100" :left-label="$t('theater.centerStage')" :right-label="$t('theater.inSupport')" :center-label="$t('balanced')" value-color="text-rose-400" />
            <UiRangeSlider v-model="store.theater.playDynamics.textSubtext" :label="$t('theater.textSubtext')" :min="0" :max="100" :left-label="$t('theater.explicit')" :right-label="$t('theater.suggested')" :center-label="$t('balanced')" value-color="text-orange-400" />
            <UiRangeSlider v-model="store.theater.playDynamics.maskAuthenticity" :label="$t('theater.maskAuthenticity')" :min="0" :max="100" :left-label="$t('theater.formalPersona')" :right-label="$t('theater.genuineExpression')" :center-label="$t('balanced')" value-color="text-fuchsia-400" />
            <UiRangeSlider v-model="store.theater.playDynamics.monologueDialogue" :label="$t('theater.monologueDialogue')" :min="0" :max="100" :left-label="$t('theater.expository')" :right-label="$t('theater.interactive')" :center-label="$t('balanced')" value-color="text-violet-400" />
          </div>
        </UiToggleSection>

        <!-- Acting Tools -->
        <UiToggleSection
          v-model:enabled="store.enabled.theater.actingTools"
          :title="'🎬 ' + $t('theater.actingToolsTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('theater.actingToolsDesc') }}</p>
          <UiCheckboxGroup
            :model-value="store.theater.actingTools"
            :options="actingTools"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            @update:model-value="store.theater.actingTools = $event as ActingTool[]"
          />
        </UiToggleSection>

        <!-- Brechtian Distance -->
        <UiToggleSection
          v-model:enabled="store.enabled.theater.brechtian"
          :title="'🪟 ' + $t('theater.brechtianTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('theater.brechtianDesc') }}</p>
          <UiRangeSlider
            v-model="store.theater.brechtianDistance"
            :label="$t('theater.immersionDistance')"
            :min="0" :max="100"
            :left-label="$t('theater.totalImmersion')"
            :right-label="$t('theater.criticalDistance')"
            :center-label="$t('theater.semiConscious')"
            value-color="text-cyan-400"
          />
        </UiToggleSection>
      </div>
    </div>
  </div>
</template>
