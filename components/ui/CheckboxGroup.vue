<script setup lang="ts">
const props = defineProps<{
  modelValue: string[]
  options: readonly { value: string; emoji?: string; label: string }[]
  columns?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

function toggle(value: string) {
  const arr = [...props.modelValue]
  const idx = arr.indexOf(value)
  if (idx > -1) arr.splice(idx, 1)
  else arr.push(value)
  emit('update:modelValue', arr)
}
</script>

<template>
  <div class="grid gap-4" :class="columns || 'grid-cols-2 lg:grid-cols-3'">
    <label v-for="option in options" :key="option.value" class="flex items-center space-x-3 cursor-pointer">
      <input
        type="checkbox"
        class="w-4 h-4 text-blue-600"
        :checked="modelValue.includes(option.value)"
        @change="toggle(option.value)"
      />
      <span class="flex items-center space-x-2">
        <span v-if="option.emoji" class="text-lg">{{ option.emoji }}</span>
        <span>{{ option.label }}</span>
      </span>
    </label>
  </div>
</template>
