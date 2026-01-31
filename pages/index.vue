<script setup lang="ts">
const store = usePersonalityStore()
const { exportFullConfig } = useExport()

function handleReset() {
  store.resetAll()
}

function handleTest() {
  alert('🧪 Advanced Testing - Coming Soon!')
}
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
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
        <div class="mt-8 flex justify-center space-x-4">
          <button
            class="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-all"
            @click="handleReset"
          >
            🔄 Reset All
          </button>
          <button
            class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all"
            @click="exportFullConfig"
          >
            💾 Export Agent
          </button>
          <button
            class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all"
            @click="handleTest"
          >
            🧪 Advanced Test
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
