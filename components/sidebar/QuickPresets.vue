<script setup lang="ts">
const { presets, loadPreset } = usePresets()
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6 glass-effect">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">⚡ Quick Presets</h3>
    <div class="space-y-2">
      <button
        v-for="preset in presets"
        :key="preset.key"
        class="preset-card w-full p-3 text-left border border-gray-200 rounded-lg hover:border-blue-500"
        @click="loadPreset(preset.key)"
      >
        <div class="font-medium">{{ preset.emoji }} {{ preset.label }}</div>
        <div class="text-sm text-gray-500">{{ preset.description }}</div>
      </button>
    </div>
  </div>
</template>
