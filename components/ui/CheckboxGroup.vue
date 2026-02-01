<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  modelValue: string[]
  options: readonly { value: string; emoji?: string; label: string }[]
  columns?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

const items = computed(() =>
  props.options.map(opt => ({
    value: opt.value,
    label: opt.emoji ? `${opt.emoji} ${t(opt.label)}` : t(opt.label),
  })),
)
</script>

<template>
  <UCheckboxGroup
    :model-value="modelValue"
    :items="items"
    value-key="value"
    label-key="label"
    :ui="{ fieldset: `grid gap-3 ${columns || 'grid-cols-2 lg:grid-cols-3'}` }"
    @update:model-value="emit('update:modelValue', $event as string[])"
  />
</template>
