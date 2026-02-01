<script setup lang="ts">
const store = usePersonalityStore()
const { exportFullConfig, importConfig } = useExport()

const mainImportInput = ref<HTMLInputElement>()

function handleReset() {
  store.resetAll()
}

async function handleImport(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) {
    const result = await importConfig(file)
    alert(result.success ? `✅ ${result.message}` : `❌ ${result.message}`)
  }
  // Reset input so the same file can be re-imported
  if (mainImportInput.value) mainImportInput.value.value = ''
}

function handleTest() {
  alert('🧪 Advanced Testing - Coming Soon!')
}
</script>

<template>
  <div class="bg-[var(--ui-bg)] min-h-screen">
    <AppHeader />

    <div class="container mx-auto px-4 py-8">
      <div class="max-w-7xl mx-auto">
        <TabNavigation />

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Main Configuration Panel -->
          <div class="lg:col-span-2">
            <TabsCorePersonalityTab v-show="store.activeTab === 'core'" />
            <TabsCommunicationTab v-show="store.activeTab === 'communication'" />
            <TabsExpertiseTab v-show="store.activeTab === 'expertise'" />
            <TabsBehavioralTab v-show="store.activeTab === 'behavioral'" />
            <TabsAdvancedTab v-show="store.activeTab === 'advanced'" />
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-8 space-y-6">
              <SidebarPersonalityRadar />
              <SidebarLivePreview />
              <SidebarQuickPresets />
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="mt-8 flex justify-center gap-4">
          <UButton color="gray" size="lg" @click="handleReset">
            🔄 Reset All
          </UButton>
          <input ref="mainImportInput" type="file" accept=".json" class="hidden" @change="handleImport" />
          <UButton color="blue" size="lg" @click="mainImportInput?.click()">
            📥 Import Agent
          </UButton>
          <UButton color="green" size="lg" @click="exportFullConfig">
            💾 Export Agent
          </UButton>
          <UButton color="purple" size="lg" @click="handleTest">
            🧪 Advanced Test
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
