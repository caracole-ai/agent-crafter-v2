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
  <header class="gradient-bg text-white shadow-lg">
    <div class="container mx-auto px-4 py-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-4xl font-bold">🧠 Agent Crafter v2.0</h1>
          <p class="text-blue-100 mt-2">Professional AI Personality Builder</p>
        </div>
        <div class="flex items-center gap-4">
          <UColorModeButton />
          <div class="budget-indicator text-white px-4 py-2 rounded-lg" :class="budgetColorClass">
            <div class="text-sm">Personality Budget</div>
            <div class="text-xl font-bold">{{ store.budgetUsed }} / {{ store.budgetTotal }}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
