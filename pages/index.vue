<script setup lang="ts">
const store = usePersonalityStore()
const { t } = useI18n()

function handleReset() {
  store.resetAll()
}

function handleTest() {
  alert(`🧪 ${t('alerts.advancedTestComingSoon')}`)
}
</script>

<template>
  <div class="bg-[var(--ui-bg)] min-h-screen">
    <AppHeader />

    <!-- Home / Landing Page -->
    <div v-if="store.showHome" class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-8">
          <span class="text-6xl mb-4 block">🧠</span>
          <h1 class="text-4xl md:text-5xl font-bold text-[var(--ui-text)] mb-4">
            Agent Crafter <span class="text-[var(--ui-text-muted)]">v2.0</span>
          </h1>
          <p class="text-xl text-[var(--ui-text-muted)] max-w-2xl mx-auto">
            {{ $t('home.tagline') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          <UCard class="glass-effect">
            <div class="text-center">
              <span class="text-3xl mb-3 block">🎛️</span>
              <h3 class="font-semibold text-lg mb-2">{{ $t('home.feature1Title') }}</h3>
              <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('home.feature1Desc') }}</p>
            </div>
          </UCard>
          <UCard class="glass-effect">
            <div class="text-center">
              <span class="text-3xl mb-3 block">👁️</span>
              <h3 class="font-semibold text-lg mb-2">{{ $t('home.feature2Title') }}</h3>
              <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('home.feature2Desc') }}</p>
            </div>
          </UCard>
          <UCard class="glass-effect">
            <div class="text-center">
              <span class="text-3xl mb-3 block">💾</span>
              <h3 class="font-semibold text-lg mb-2">{{ $t('home.feature3Title') }}</h3>
              <p class="text-sm text-[var(--ui-text-muted)]">{{ $t('home.feature3Desc') }}</p>
            </div>
          </UCard>
        </div>

        <UButton size="xl" color="primary" @click="store.startCrafting()">
          🚀 {{ $t('home.startCrafting') }}
        </UButton>
      </div>
    </div>

    <!-- Crafter Interface -->
    <div v-else class="container mx-auto px-4 py-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Main Configuration Panel -->
          <div class="lg:col-span-2">
            <TabsCorePersonalityTab v-show="store.activeTab === 'core'" />
            <TabsCommunicationTab v-show="store.activeTab === 'communication'" />
            <TabsExpertiseTab v-show="store.activeTab === 'expertise'" />
            <TabsBehavioralTab v-show="store.activeTab === 'behavioral'" />
            <TabsPhilosophyTab v-show="store.activeTab === 'philosophy'" />
            <TabsTheaterTab v-show="store.activeTab === 'theater'" />
            <TabsLiteraryTab v-show="store.activeTab === 'literary'" />
            <TabsPrePromptTab v-show="store.activeTab === 'preprompt'" />
            <TabsAdvancedTab v-show="store.activeTab === 'advanced'" />
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-28 space-y-6">
              <SidebarPersonalityRadar />
              <SidebarLivePreview />
              <SidebarQuickPresets />
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="mt-8 flex justify-center gap-4">
          <UButton color="gray" size="lg" @click="handleReset">
            🔄 {{ $t('actions.resetAll') }}
          </UButton>
          <UButton color="purple" size="lg" @click="handleTest">
            🧪 {{ $t('actions.advancedTest') }}
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
