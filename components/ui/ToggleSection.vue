<script setup lang="ts">
const props = withDefaults(defineProps<{
  enabled?: boolean
  title: string
  defaultOpen?: boolean
}>(), {
  enabled: true,
})

const emit = defineEmits<{
  'update:enabled': [value: boolean]
}>()

const isOpen = ref(props.defaultOpen ?? false)

function toggleAccordion() {
  isOpen.value = !isOpen.value
}

function onCheckboxChange(val: boolean | 'indeterminate') {
  if (typeof val === 'boolean') emit('update:enabled', val)
}
</script>

<template>
  <div class="mb-3">
    <div class="subsection-header" @click="toggleAccordion">
      <div @click.stop>
        <UCheckbox
          :model-value="enabled"
          @update:model-value="onCheckboxChange"
        />
      </div>
      <span class="text-sm font-semibold flex-1" :class="{ 'text-[var(--ui-text-muted)]': !enabled }">
        {{ title }}
      </span>
      <span class="subsection-chevron" :class="{ open: isOpen }">&#9660;</span>
    </div>
    <div v-show="isOpen" class="pt-4 pb-2 px-1">
      <div :class="{ 'subsection-disabled': !enabled }">
        <slot />
      </div>
    </div>
  </div>
</template>
