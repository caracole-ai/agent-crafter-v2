<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  options: readonly { value: string; emoji: string; label: string; description: string }[]
  activeColor?: string
  columns?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const items = computed(() =>
  props.options.map(opt => ({
    value: opt.value,
    label: `${opt.emoji} ${opt.label}`,
    description: opt.description,
  })),
)
</script>

<template>
  <URadioGroup
    :model-value="modelValue"
    :items="items"
    variant="card"
    value-key="value"
    label-key="label"
    description-key="description"
    :ui="{ fieldset: `grid gap-3 ${columns || 'grid-cols-2 lg:grid-cols-4'}` }"
    @update:model-value="emit('update:modelValue', $event as string)"
  />
</template>
