<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: number
    min?: number
    max?: number
    step?: number
    label?: string
    leftLabel?: string
    rightLabel?: string
    centerLabel?: string
    valueColor?: string
    size?: 'sm' | 'md'
    displayValue?: string
  }>(),
  {
    min: 0,
    max: 100,
    step: 1,
    valueColor: 'text-blue-600',
    size: 'md',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const shown = computed(() => props.displayValue ?? String(props.modelValue))

function onUpdate(val: number | number[]) {
  emit('update:modelValue', Array.isArray(val) ? val[0] : val)
}
</script>

<template>
  <div>
    <div v-if="label" class="flex justify-between items-center" :class="size === 'sm' ? 'mb-1' : 'mb-2'">
      <label :class="size === 'sm' ? 'text-sm' : 'font-medium'">{{ label }}</label>
      <span :class="[valueColor, 'font-bold']">{{ shown }}</span>
    </div>
    <USlider
      :model-value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      :size="size === 'sm' ? 'sm' : 'md'"
      @update:model-value="onUpdate"
    />
    <div
      v-if="leftLabel || rightLabel || centerLabel"
      class="flex justify-between text-xs text-[var(--ui-text-dimmed)] mt-1"
    >
      <span>{{ leftLabel }}</span>
      <span v-if="centerLabel">{{ centerLabel }}</span>
      <span>{{ rightLabel }}</span>
    </div>
  </div>
</template>
