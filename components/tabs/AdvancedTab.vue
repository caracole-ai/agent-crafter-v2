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

const fileInput = ref<HTMLInputElement>()

async function handleImport(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) {
    const result = await importConfig(file)
    alert(result.success ? `✅ ${result.message}` : `❌ ${result.message}`)
  }
}

function handleCommunityPreset() {
  alert('🌟 Community Presets - Coming Soon!\nThis feature will allow you to browse and import agent configurations shared by the community.')
}

function handleValidate() {
  const { validate } = useValidation()
  const issues = validate()
  if (issues.length === 0) {
    alert('✅ Configuration Valid!\nYour agent configuration looks good and ready to use.')
  } else {
    alert('Configuration Issues Found:\n\n' + issues.map(i => `⚠️ ${i}`).join('\n'))
  }
}
</script>

<template>
  <UCard class="glass-effect">
    <h2 class="text-2xl font-bold mb-6">⚙️ Advanced Configuration</h2>

    <div class="space-y-8">
      <!-- Technical Capabilities -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Technical Capabilities</h3>
        <UiCheckboxGroup
          :model-value="store.advanced.technicalCapabilities"
          :options="technicalCapabilities"
          columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          @update:model-value="store.advanced.technicalCapabilities = $event as TechnicalCapability[]"
        />
      </div>

      <!-- Response Limits & Security -->
      <div>
        <h3 class="text-lg font-semibold mb-6">Response Limits & Security</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UFormField label="Max Response Length">
            <USelect
              :model-value="store.advanced.maxResponseLength"
              :items="maxResponseLengths"
              value-key="value"
              label-key="label"
              class="w-full"
              @update:model-value="store.advanced.maxResponseLength = $event as MaxResponseLength"
            />
          </UFormField>

          <UFormField label="Security Level">
            <USelect
              :model-value="store.advanced.securityLevel"
              :items="securityLevels"
              value-key="value"
              label-key="label"
              class="w-full"
              @update:model-value="store.advanced.securityLevel = $event as SecurityLevel"
            />
          </UFormField>
        </div>

        <div class="mt-4">
          <h4 class="font-medium mb-3">Content Filters</h4>
          <UiCheckboxGroup
            :model-value="store.advanced.contentFilters"
            :options="contentFilters"
            columns="grid-cols-1 md:grid-cols-2"
            @update:model-value="store.advanced.contentFilters = $event as ContentFilter[]"
          />
        </div>
      </div>

      <!-- Custom Instructions -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Custom Instructions</h3>
        <div class="space-y-4">
          <UFormField label="System Instructions" hint="These instructions will be processed at the system level">
            <UTextarea
              v-model="store.advanced.systemInstructions"
              :rows="4"
              class="w-full"
              placeholder="Define specific behaviors, rules, or constraints for your agent..."
              :resize="false"
            />
          </UFormField>

          <UFormField label="User Context Instructions" hint="These will be visible to users interacting with the agent">
            <UTextarea
              v-model="store.advanced.userInstructions"
              :rows="3"
              class="w-full"
              placeholder="Instructions that will be shared with users about this agent..."
              :resize="false"
            />
          </UFormField>

          <UFormField label="Fallback Responses" hint="Comma-separated responses for uncertainty situations">
            <UTextarea
              v-model="store.advanced.fallbackResponses"
              :rows="2"
              class="w-full"
              placeholder="Custom responses when the agent cannot fulfill a request..."
              :resize="false"
            />
          </UFormField>
        </div>
      </div>

      <!-- Conditional Behaviors -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Conditional Behaviors</h3>
        <div class="space-y-4">
          <div class="p-4 bg-[var(--ui-bg-elevated)] rounded-lg">
            <h4 class="font-medium mb-3">Context-Based Adaptations</h4>
            <UiCheckboxGroup
              :model-value="store.advanced.conditionalBehaviors"
              :options="conditionalBehaviors"
              columns="grid-cols-1 md:grid-cols-2"
              @update:model-value="store.advanced.conditionalBehaviors = $event as ConditionalBehavior[]"
            />
          </div>

          <div class="p-4 bg-[var(--ui-bg-elevated)] rounded-lg">
            <h4 class="font-medium mb-3">Time-Based Behaviors</h4>
            <UiCheckboxGroup
              :model-value="store.advanced.timeBehaviors"
              :options="timeBehaviors"
              columns="grid-cols-1 md:grid-cols-2"
              @update:model-value="store.advanced.timeBehaviors = $event as TimeBehavior[]"
            />
          </div>
        </div>
      </div>

      <!-- Integration Settings -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Integration Settings</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UFormField label="Preferred Model">
            <USelect
              :model-value="store.advanced.preferredModel"
              :items="preferredModels"
              value-key="value"
              label-key="label"
              class="w-full"
              @update:model-value="store.advanced.preferredModel = $event as PreferredModel"
            />
          </UFormField>

          <UFormField label="Response Format">
            <USelect
              :model-value="store.advanced.responseFormat"
              :items="responseFormats"
              value-key="value"
              label-key="label"
              class="w-full"
              @update:model-value="store.advanced.responseFormat = $event as ResponseFormat"
            />
          </UFormField>

          <UiRangeSlider
            :model-value="store.advanced.temperature"
            :min="0"
            :max="1"
            :step="0.1"
            label="Temperature"
            value-color="text-purple-600"
            left-label="Consistent"
            right-label="Creative"
            :display-value="store.advanced.temperature.toFixed(1)"
            @update:model-value="store.advanced.temperature = $event"
          />

          <UiRangeSlider
            :model-value="store.advanced.timeout"
            :min="5"
            :max="120"
            :step="5"
            label="Response Timeout (s)"
            value-color="text-orange-600"
            left-label="Fast"
            right-label="Patient"
            @update:model-value="store.advanced.timeout = $event"
          />
        </div>
      </div>

      <!-- Configuration Management -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Configuration Management</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UCard variant="soft" class="rounded-lg">
            <h4 class="font-medium mb-2">💾 Export Options</h4>
            <div class="space-y-2">
              <UButton block color="green" @click="exportFullConfig">
                Export Complete Configuration
              </UButton>
              <UButton block color="green" variant="soft" @click="exportPromptOnly">
                Export as Prompt Template
              </UButton>
              <UButton block color="green" variant="outline" @click="exportSummary">
                Export Summary Report
              </UButton>
            </div>
          </UCard>

          <UCard variant="soft" class="rounded-lg">
            <h4 class="font-medium mb-2">📥 Import Options</h4>
            <div class="space-y-2">
              <input ref="fileInput" type="file" accept=".json" class="hidden" @change="handleImport" />
              <UButton block color="blue" @click="fileInput?.click()">
                Import Configuration
              </UButton>
              <UButton block color="blue" variant="soft" @click="handleCommunityPreset">
                Load Community Preset
              </UButton>
              <UButton block color="blue" variant="outline" @click="handleValidate">
                Validate Configuration
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </UCard>
</template>
