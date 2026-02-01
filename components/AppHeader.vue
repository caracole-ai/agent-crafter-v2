<script setup lang="ts">
const store = usePersonalityStore()

const budgetColorClass = computed(() => {
  switch (store.budgetStatus) {
    case 'danger': return 'bg-red-500'
    case 'warning': return 'bg-yellow-500'
    default: return 'bg-green-500'
  }
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[var(--ui-border)] bg-[var(--ui-bg)]/80 backdrop-blur-lg">
    <div class="container mx-auto px-4 py-2">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <span class="text-lg">🧠</span>
          <h1 class="text-sm font-semibold text-[var(--ui-text)]">Agent Crafter <span class="text-[var(--ui-text-muted)] font-normal">v2.0</span></h1>
        </div>
        <div class="flex items-center gap-3">
          <UColorModeButton size="xs" />
          <div class="budget-indicator text-white px-2.5 py-1 rounded-md text-xs" :class="budgetColorClass">
            <span class="font-semibold">{{ store.budgetUsed }}</span> / {{ store.budgetTotal }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
