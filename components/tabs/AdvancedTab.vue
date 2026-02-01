<script setup lang="ts">
import {
  technicalCapabilities,
  maxResponseLengths,
  securityLevels,
  contentFilters,
  conditionalBehaviors,
  timeBehaviors,
  preferredModels,
  responseFormats,
} from '~/data/options'
import type {
  TechnicalCapability,
  MaxResponseLength,
  SecurityLevel,
  ContentFilter,
  ConditionalBehavior,
  TimeBehavior,
  PreferredModel,
  ResponseFormat,
} from '~/types/personality'

const store = usePersonalityStore()
const { exportFullConfig, exportPromptOnly, exportSummary, importConfig } = useExport()
const { t } = useI18n()

const fileInput = ref<HTMLInputElement>()

const translatedMaxResponseLengths = computed(() =>
  maxResponseLengths.map(s => ({ ...s, label: t(s.label) })),
)
const translatedSecurityLevels = computed(() =>
  securityLevels.map(s => ({ ...s, label: t(s.label) })),
)
const translatedPreferredModels = computed(() =>
  preferredModels.map(s => ({ ...s, label: t(s.label) })),
)
const translatedResponseFormats = computed(() =>
  responseFormats.map(s => ({ ...s, label: t(s.label) })),
)

async function handleImport(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) {
    const result = await importConfig(file)
    alert(result.success ? `✅ ${result.message}` : `❌ ${result.message}`)
  }
}

function handleCommunityPreset() {
  alert(`🌟 ${t('alerts.communityPresetsComingSoon')}`)
}

function handleValidate() {
  const { validate } = useValidation()
  const issues = validate()
  if (issues.length === 0) {
    alert(`✅ ${t('alerts.configValid')}`)
  } else {
    alert(t('alerts.configIssuesFound') + '\n\n' + issues.map(i => `⚠️ ${i}`).join('\n'))
  }
}
</script>

<template>
  <UCard class="glass-effect">
    <div class="section-toggle-header mb-4">
      <UCheckbox v-model="store.enabled.advanced._self" />
      <h2 class="text-2xl font-bold">⚙️ {{ $t('advanced.title') }}</h2>
    </div>

    <div :class="{ 'section-disabled-overlay': !store.enabled.advanced._self }">
      <div class="space-y-2">
        <!-- Technical Capabilities -->
        <UiToggleSection
          v-model:enabled="store.enabled.advanced.capabilities"
          :title="$t('advanced.technicalCapabilities')"
          :default-open="true"
        >
          <UiCheckboxGroup
            :model-value="store.advanced.technicalCapabilities"
            :options="technicalCapabilities"
            columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            @update:model-value="store.advanced.technicalCapabilities = $event as TechnicalCapability[]"
          />
        </UiToggleSection>

        <!-- Response Limits & Security -->
        <UiToggleSection
          v-model:enabled="store.enabled.advanced.responseLimits"
          :title="$t('advanced.responseLimits')"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UFormField :label="$t('advanced.maxResponseLength')">
              <USelect
                :model-value="store.advanced.maxResponseLength"
                :items="translatedMaxResponseLengths"
                value-key="value" label-key="label" class="w-full"
                @update:model-value="store.advanced.maxResponseLength = $event as MaxResponseLength"
              />
            </UFormField>
            <UFormField :label="$t('advanced.securityLevel')">
              <USelect
                :model-value="store.advanced.securityLevel"
                :items="translatedSecurityLevels"
                value-key="value" label-key="label" class="w-full"
                @update:model-value="store.advanced.securityLevel = $event as SecurityLevel"
              />
            </UFormField>
          </div>
          <div class="mt-4">
            <h4 class="font-medium mb-3">{{ $t('advanced.contentFilters') }}</h4>
            <UiCheckboxGroup
              :model-value="store.advanced.contentFilters"
              :options="contentFilters"
              columns="grid-cols-1 md:grid-cols-2"
              @update:model-value="store.advanced.contentFilters = $event as ContentFilter[]"
            />
          </div>
        </UiToggleSection>

        <!-- Custom Instructions -->
        <UiToggleSection
          v-model:enabled="store.enabled.advanced.instructions"
          :title="$t('advanced.customInstructions')"
        >
          <div class="space-y-4">
            <UFormField :label="$t('advanced.systemInstructions')" :hint="$t('advanced.systemInstructionsHint')">
              <UTextarea v-model="store.advanced.systemInstructions" :rows="4" class="w-full" :placeholder="$t('advanced.systemInstructionsPlaceholder')" :resize="false" />
            </UFormField>
            <UFormField :label="$t('advanced.userInstructions')" :hint="$t('advanced.userInstructionsHint')">
              <UTextarea v-model="store.advanced.userInstructions" :rows="3" class="w-full" :placeholder="$t('advanced.userInstructionsPlaceholder')" :resize="false" />
            </UFormField>
            <UFormField :label="$t('advanced.fallbackResponses')" :hint="$t('advanced.fallbackResponsesHint')">
              <UTextarea v-model="store.advanced.fallbackResponses" :rows="2" class="w-full" :placeholder="$t('advanced.fallbackResponsesPlaceholder')" :resize="false" />
            </UFormField>
          </div>
        </UiToggleSection>

        <!-- Conditional Behaviors -->
        <UiToggleSection
          v-model:enabled="store.enabled.advanced.conditionalBehaviors"
          :title="$t('advanced.conditionalBehaviors')"
        >
          <div class="space-y-4">
            <div class="p-4 bg-[var(--ui-bg-elevated)] rounded-lg">
              <h4 class="font-medium mb-3">{{ $t('advanced.contextAdaptations') }}</h4>
              <UiCheckboxGroup
                :model-value="store.advanced.conditionalBehaviors"
                :options="conditionalBehaviors"
                columns="grid-cols-1 md:grid-cols-2"
                @update:model-value="store.advanced.conditionalBehaviors = $event as ConditionalBehavior[]"
              />
            </div>
            <div class="p-4 bg-[var(--ui-bg-elevated)] rounded-lg">
              <h4 class="font-medium mb-3">{{ $t('advanced.timeBehaviors') }}</h4>
              <UiCheckboxGroup
                :model-value="store.advanced.timeBehaviors"
                :options="timeBehaviors"
                columns="grid-cols-1 md:grid-cols-2"
                @update:model-value="store.advanced.timeBehaviors = $event as TimeBehavior[]"
              />
            </div>
          </div>
        </UiToggleSection>

        <!-- Integration Settings -->
        <UiToggleSection
          v-model:enabled="store.enabled.advanced.integration"
          :title="$t('advanced.integrationSettings')"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UFormField :label="$t('advanced.preferredModel')">
              <USelect :model-value="store.advanced.preferredModel" :items="translatedPreferredModels" value-key="value" label-key="label" class="w-full" @update:model-value="store.advanced.preferredModel = $event as PreferredModel" />
            </UFormField>
            <UFormField :label="$t('advanced.responseFormat')">
              <USelect :model-value="store.advanced.responseFormat" :items="translatedResponseFormats" value-key="value" label-key="label" class="w-full" @update:model-value="store.advanced.responseFormat = $event as ResponseFormat" />
            </UFormField>
            <UiRangeSlider :model-value="store.advanced.temperature" :min="0" :max="1" :step="0.1" :label="$t('advanced.temperature')" value-color="text-purple-600" :left-label="$t('advanced.temperatureLeft')" :right-label="$t('advanced.temperatureRight')" :display-value="store.advanced.temperature.toFixed(1)" @update:model-value="store.advanced.temperature = $event" />
            <UiRangeSlider :model-value="store.advanced.timeout" :min="5" :max="120" :step="5" :label="$t('advanced.responseTimeout')" value-color="text-orange-600" :left-label="$t('advanced.timeoutLeft')" :right-label="$t('advanced.timeoutRight')" @update:model-value="store.advanced.timeout = $event" />
          </div>
        </UiToggleSection>

        <!-- Configuration Management -->
        <UiToggleSection
          v-model:enabled="store.enabled.advanced.configManagement"
          :title="$t('advanced.configManagement')"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UCard variant="soft" class="rounded-lg">
              <h4 class="font-medium mb-2">💾 {{ $t('advanced.exportOptions') }}</h4>
              <div class="space-y-2">
                <UButton block color="success" @click="exportFullConfig">{{ $t('advanced.exportComplete') }}</UButton>
                <UButton block color="success" variant="soft" @click="exportPromptOnly">{{ $t('advanced.exportPrompt') }}</UButton>
                <UButton block color="success" variant="outline" @click="exportSummary">{{ $t('advanced.exportSummary') }}</UButton>
              </div>
            </UCard>
            <UCard variant="soft" class="rounded-lg">
              <h4 class="font-medium mb-2">📥 {{ $t('advanced.importOptions') }}</h4>
              <div class="space-y-2">
                <input ref="fileInput" type="file" accept=".json" class="hidden" @change="handleImport" />
                <UButton block color="info" @click="fileInput?.click()">{{ $t('advanced.importConfig') }}</UButton>
                <UButton block color="info" variant="soft" @click="handleCommunityPreset">{{ $t('advanced.loadCommunityPreset') }}</UButton>
                <UButton block color="info" variant="outline" @click="handleValidate">{{ $t('advanced.validateConfig') }}</UButton>
              </div>
            </UCard>
          </div>
        </UiToggleSection>
      </div>
    </div>
  </UCard>
</template>
