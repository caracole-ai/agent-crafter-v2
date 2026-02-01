<script setup lang="ts">
const { presets, loadPreset } = usePresets()
</script>

<template>
  <UCard class="glass-effect">
    <h3 class="text-lg font-semibold mb-4">⚡ Quick Presets</h3>
    <div class="space-y-2">
      <button
        v-for="preset in presets"
        :key="preset.key"
        class="preset-card w-full p-3 text-left border border-[var(--ui-border)] rounded-lg hover:border-[var(--ui-border-active)] bg-[var(--ui-bg)] transition-all"
        @click="loadPreset(preset.key)"
      >
        <div class="font-medium">{{ preset.emoji }} {{ preset.label }}</div>
        <div class="text-sm text-[var(--ui-text-dimmed)]">{{ preset.description }}</div>
      </button>
    </div>
  </UCard>
</template>
