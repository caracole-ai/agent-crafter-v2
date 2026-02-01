<script setup lang="ts">
import type { TabName } from '~/types/personality'

const store = usePersonalityStore()

const tabs: { key: TabName; emoji: string; label: string }[] = [
  { key: 'core', emoji: '🧠', label: 'Core Personality' },
  { key: 'communication', emoji: '💬', label: 'Communication' },
  { key: 'expertise', emoji: '💼', label: 'Expertise' },
  { key: 'behavioral', emoji: '🎯', label: 'Behavioral' },
  { key: 'advanced', emoji: '⚙️', label: 'Advanced' },
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
      {{ tab.emoji }} {{ tab.label }}
    </button>
  </div>
</template>
