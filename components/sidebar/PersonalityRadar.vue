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

const chartData = computed(() => ({
  labels: ['Extraversion', 'Agreeableness', 'Conscientiousness', 'Emotional Stability', 'Openness'],
  datasets: [
    {
      label: 'Personality Profile',
      data: store.coreTraitsArray,
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
    },
  ],
}))

const chartOptions = {
  responsive: true,
  animation: { duration: 0 },
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      ticks: { display: false },
    },
  },
  plugins: {
    legend: { display: false },
  },
} as const
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6 glass-effect">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">📊 Personality Radar</h3>
    <div class="max-w-[300px] mx-auto">
      <Radar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>
