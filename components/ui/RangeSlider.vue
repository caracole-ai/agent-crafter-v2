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

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', Number(target.value))
}

const shown = computed(() => props.displayValue ?? String(props.modelValue))
</script>

<template>
  <div>
    <div v-if="label" class="flex justify-between items-center" :class="size === 'sm' ? 'mb-1' : 'mb-2'">
      <label class="text-gray-700" :class="size === 'sm' ? 'text-sm' : 'font-medium'">{{ label }}</label>
      <span :class="[valueColor, 'font-bold']">{{ shown }}</span>
    </div>
    <input
      type="range"
      class="range-slider"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      @input="onInput"
    />
    <div
      v-if="leftLabel || rightLabel || centerLabel"
      class="flex justify-between text-xs text-gray-500 mt-1"
    >
      <span>{{ leftLabel }}</span>
      <span v-if="centerLabel">{{ centerLabel }}</span>
      <span>{{ rightLabel }}</span>
    </div>
  </div>
</template>
