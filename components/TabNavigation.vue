<script setup lang="ts">
import type { TabName } from '~/types/personality'

const store = usePersonalityStore()
const { t } = useI18n()

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
  <div class="flex flex-wrap border-b border-[var(--ui-border)] mb-6">
    <button
      v-for="tab in tabs"
      :key="tab.key"
      class="tab-button"
      :class="{ active: store.activeTab === tab.key }"
      @click="store.switchTab(tab.key)"
    >
      {{ tab.emoji }} {{ t(tab.labelKey) }}
    </button>
  </div>
</template>
