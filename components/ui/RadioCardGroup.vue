<script setup lang="ts">
defineProps<{
  modelValue: string
  options: readonly { value: string; emoji: string; label: string; description: string }[]
  activeColor?: string
  columns?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="grid gap-4" :class="columns || 'grid-cols-2 lg:grid-cols-4'">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="p-4 border-2 rounded-lg text-center transition-all cursor-pointer"
      :class="
        modelValue === option.value
          ? `${activeColor || 'border-blue-500 bg-blue-50'}`
          : 'border-gray-200 hover:border-blue-300'
      "
      @click="emit('update:modelValue', option.value)"
    >
      <div class="text-3xl mb-2">{{ option.emoji }}</div>
      <div class="font-medium">{{ option.label }}</div>
      <div class="text-sm text-gray-500">{{ option.description }}</div>
    </button>
  </div>
</template>
