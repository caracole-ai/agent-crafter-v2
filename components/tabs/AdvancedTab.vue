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
  <div class="bg-white rounded-xl shadow-lg p-8 glass-effect">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">⚙️ Advanced Configuration</h2>

    <div class="space-y-8">
      <!-- Technical Capabilities -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Technical Capabilities</h3>
        <UiCheckboxGroup
          :model-value="store.advanced.technicalCapabilities"
          :options="technicalCapabilities"
          columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          @update:model-value="store.advanced.technicalCapabilities = $event as TechnicalCapability[]"
        />
      </div>

      <!-- Response Limits & Security -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-6">Response Limits & Security</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Max Response Length</label>
            <select
              :value="store.advanced.maxResponseLength"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              @change="store.advanced.maxResponseLength = ($event.target as HTMLSelectElement).value as MaxResponseLength"
            >
              <option v-for="opt in maxResponseLengths" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Security Level</label>
            <select
              :value="store.advanced.securityLevel"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              @change="store.advanced.securityLevel = ($event.target as HTMLSelectElement).value as SecurityLevel"
            >
              <option v-for="opt in securityLevels" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
          </div>
        </div>

        <div class="mt-4">
          <h4 class="font-medium text-gray-700 mb-3">Content Filters</h4>
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
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Custom Instructions</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">System Instructions</label>
            <textarea
              v-model="store.advanced.systemInstructions"
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 resize-none"
              placeholder="Define specific behaviors, rules, or constraints for your agent..."
            />
            <div class="text-xs text-gray-500 mt-1">These instructions will be processed at the system level</div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">User Context Instructions</label>
            <textarea
              v-model="store.advanced.userInstructions"
              rows="3"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 resize-none"
              placeholder="Instructions that will be shared with users about this agent..."
            />
            <div class="text-xs text-gray-500 mt-1">These will be visible to users interacting with the agent</div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Fallback Responses</label>
            <textarea
              v-model="store.advanced.fallbackResponses"
              rows="2"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 resize-none"
              placeholder="Custom responses when the agent cannot fulfill a request..."
            />
            <div class="text-xs text-gray-500 mt-1">Comma-separated responses for uncertainty situations</div>
          </div>
        </div>
      </div>

      <!-- Conditional Behaviors -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Conditional Behaviors</h3>
        <div class="space-y-4">
          <div class="p-4 bg-gray-50 rounded-lg">
            <h4 class="font-medium text-gray-700 mb-3">Context-Based Adaptations</h4>
            <UiCheckboxGroup
              :model-value="store.advanced.conditionalBehaviors"
              :options="conditionalBehaviors"
              columns="grid-cols-1 md:grid-cols-2"
              @update:model-value="store.advanced.conditionalBehaviors = $event as ConditionalBehavior[]"
            />
          </div>

          <div class="p-4 bg-blue-50 rounded-lg">
            <h4 class="font-medium text-gray-700 mb-3">Time-Based Behaviors</h4>
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
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Integration Settings</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Model</label>
            <select
              :value="store.advanced.preferredModel"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              @change="store.advanced.preferredModel = ($event.target as HTMLSelectElement).value as PreferredModel"
            >
              <option v-for="opt in preferredModels" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Response Format</label>
            <select
              :value="store.advanced.responseFormat"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              @change="store.advanced.responseFormat = ($event.target as HTMLSelectElement).value as ResponseFormat"
            >
              <option v-for="opt in responseFormats" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
          </div>

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
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Configuration Management</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-green-50 rounded-lg">
            <h4 class="font-medium text-green-800 mb-2">💾 Export Options</h4>
            <div class="space-y-2">
              <button
                class="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition-all"
                @click="exportFullConfig"
              >
                Export Complete Configuration
              </button>
              <button
                class="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm transition-all"
                @click="exportPromptOnly"
              >
                Export as Prompt Template
              </button>
              <button
                class="w-full bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-lg text-sm transition-all"
                @click="exportSummary"
              >
                Export Summary Report
              </button>
            </div>
          </div>

          <div class="p-4 bg-blue-50 rounded-lg">
            <h4 class="font-medium text-blue-800 mb-2">📥 Import Options</h4>
            <div class="space-y-2">
              <input ref="fileInput" type="file" accept=".json" class="hidden" @change="handleImport" />
              <button
                class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-all"
                @click="fileInput?.click()"
              >
                Import Configuration
              </button>
              <button
                class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm transition-all"
                @click="handleCommunityPreset"
              >
                Load Community Preset
              </button>
              <button
                class="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm transition-all"
                @click="handleValidate"
              >
                Validate Configuration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
