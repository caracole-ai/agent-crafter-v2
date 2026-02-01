<script setup lang="ts">
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip)

const store = usePersonalityStore()
const { t } = useI18n()

const chartData = computed(() => ({
  labels: [
    t('radar.extraversion'),
    t('radar.agreeableness'),
    t('radar.conscientiousness'),
    t('radar.emotionalStability'),
    t('radar.openness'),
  ],
  datasets: [
    {
      label: t('sidebar.personalityProfile'),
      data: store.coreTraitsArray,
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
    },
  ],
}))

const colorMode = useColorMode()

const chartOptions = computed(() => {
  const isDark = colorMode.value === 'dark'
  return {
    responsive: true,
    animation: { duration: 0 },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: { display: false },
        grid: { color: isDark ? 'rgba(148, 163, 184, 0.2)' : 'rgba(0, 0, 0, 0.1)' },
        angleLines: { color: isDark ? 'rgba(148, 163, 184, 0.2)' : 'rgba(0, 0, 0, 0.1)' },
        pointLabels: { color: isDark ? '#cbd5e1' : '#374151' },
      },
    },
    plugins: {
      legend: { display: false },
    },
  }
})
</script>

<template>
  <UCard class="glass-effect">
    <h3 class="text-lg font-semibold mb-4">📊 {{ $t('sidebar.personalityRadar') }}</h3>
    <div class="max-w-[300px] mx-auto">
      <Radar :data="chartData" :options="chartOptions" />
    </div>
  </UCard>
</template>
