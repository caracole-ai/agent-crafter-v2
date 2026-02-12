<script setup lang="ts">
const store = usePersonalityStore()
</script>

<template>
  <UCard class="glass-effect">
    <div class="section-toggle-header mb-4">
      <UCheckbox v-model="store.enabled.preprompt._self" />
      <h2 class="text-2xl font-bold">📝 {{ $t('tabs.preprompt') }}</h2>
    </div>

    <div :class="{ 'section-disabled-overlay': !store.enabled.preprompt._self }">
      <div class="space-y-2">
        <!-- System Instructions -->
        <UiToggleSection
          v-model:enabled="store.enabled.preprompt.systemInstructions"
          :title="'🔧 ' + $t('preprompt.systemInstructionsTitle')"
          :default-open="true"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('preprompt.systemInstructionsDesc') }}</p>
          <UFormField :label="$t('preprompt.systemInstructions')" :hint="$t('preprompt.systemInstructionsHint')">
            <UTextarea v-model="store.preprompt.systemInstructions" :rows="6" class="w-full" :placeholder="$t('preprompt.systemInstructionsPlaceholder')" :resize="false" />
          </UFormField>
        </UiToggleSection>

        <!-- User Instructions -->
        <UiToggleSection
          v-model:enabled="store.enabled.preprompt.userInstructions"
          :title="'👤 ' + $t('preprompt.userInstructionsTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('preprompt.userInstructionsDesc') }}</p>
          <UFormField :label="$t('preprompt.userInstructions')" :hint="$t('preprompt.userInstructionsHint')">
            <UTextarea v-model="store.preprompt.userInstructions" :rows="4" class="w-full" :placeholder="$t('preprompt.userInstructionsPlaceholder')" :resize="false" />
          </UFormField>
        </UiToggleSection>

        <!-- Fallback Responses -->
        <UiToggleSection
          v-model:enabled="store.enabled.preprompt.fallbackResponses"
          :title="'🛡️ ' + $t('preprompt.fallbackTitle')"
        >
          <p class="text-sm text-[var(--ui-text-muted)] mb-4">{{ $t('preprompt.fallbackDesc') }}</p>
          <UFormField :label="$t('preprompt.fallbackResponses')" :hint="$t('preprompt.fallbackHint')">
            <UTextarea v-model="store.preprompt.fallbackResponses" :rows="3" class="w-full" :placeholder="$t('preprompt.fallbackPlaceholder')" :resize="false" />
          </UFormField>
        </UiToggleSection>
      </div>
    </div>
  </UCard>
</template>
