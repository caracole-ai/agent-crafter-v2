<script setup lang="ts">
import type { TabName } from '~/types/personality'

const store = usePersonalityStore()
const { exportFullConfig, importConfig } = useExport()
const { locale } = useI18n()
const { t } = useI18n()

const headerImportInput = ref<HTMLInputElement>()

const budgetColorClass = computed(() => {
  switch (store.budgetStatus) {
    case 'danger': return 'bg-red-500'
    case 'warning': return 'bg-yellow-500'
    default: return 'bg-green-500'
  }
})

function toggleLocale() {
  locale.value = locale.value === 'en' ? 'fr' : 'en'
}

async function handleImport(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) {
    const result = await importConfig(file)
    alert(result.success ? `✅ ${result.message}` : `❌ ${result.message}`)
  }
  if (headerImportInput.value) headerImportInput.value.value = ''
}

const currentLocaleLabel = computed(() => locale.value === 'en' ? 'EN' : 'FR')

const tabs: { key: TabName; emoji: string; labelKey: string }[] = [
  { key: 'core', emoji: '🧠', labelKey: 'tabs.core' },
  { key: 'communication', emoji: '💬', labelKey: 'tabs.communication' },
  { key: 'expertise', emoji: '💼', labelKey: 'tabs.expertise' },
  { key: 'behavioral', emoji: '🎯', labelKey: 'tabs.behavioral' },
  { key: 'philosophy', emoji: '🏛️', labelKey: 'tabs.philosophy' },
  { key: 'theater', emoji: '🎭', labelKey: 'tabs.theater' },
  { key: 'literary', emoji: '✒️', labelKey: 'tabs.literary' },
  { key: 'preprompt', emoji: '📝', labelKey: 'tabs.preprompt' },
  { key: 'advanced', emoji: '⚙️', labelKey: 'tabs.advanced' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[var(--ui-border)] bg-[var(--ui-bg)]/80 backdrop-blur-lg">
    <!-- Top bar: branding + controls -->
    <div class="container mx-auto px-4 py-2">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2 cursor-pointer" @click="store.showHome = true">
          <span class="text-lg">🧠</span>
          <h1 class="text-sm font-semibold text-[var(--ui-text)]">Agent Crafter <span class="text-[var(--ui-text-muted)] font-normal">v2.0</span></h1>
        </div>
        <div class="flex items-center gap-3">
          <input ref="headerImportInput" type="file" accept=".json" class="hidden" @change="handleImport" />
          <UButton size="xs" color="info" variant="soft" @click="headerImportInput?.click()">
            📥 {{ t('actions.importAgent') }}
          </UButton>
          <UButton size="xs" color="success" variant="soft" @click="exportFullConfig">
            💾 {{ t('actions.exportAgent') }}
          </UButton>
          <UButton size="xs" color="neutral" variant="ghost" @click="toggleLocale">
            {{ currentLocaleLabel }}
          </UButton>
          <UColorModeButton size="xs" />
          <div class="budget-indicator text-white px-2.5 py-1 rounded-md text-xs" :class="budgetColorClass">
            <span class="font-semibold">{{ store.budgetUsed }}</span> / {{ store.budgetTotal }}
          </div>
        </div>
      </div>
    </div>

    <!-- Tab navigation -->
    <div v-if="!store.showHome" class="container mx-auto px-4">
      <nav class="flex flex-wrap gap-0 -mb-px">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="header-tab"
          :class="{ active: store.activeTab === tab.key, disabled: !store.enabled[tab.key]?._self }"
          @click="store.switchTab(tab.key)"
        >
          <span class="hidden sm:inline">{{ tab.emoji }}</span> {{ t(tab.labelKey) }}
        </button>
      </nav>
    </div>
  </header>
</template>
