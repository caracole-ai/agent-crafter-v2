<script setup lang="ts">
import {
  expertiseLevels,
  roleArchetypes,
  industries,
  thinkingStyles,
  learningApproaches,
} from '~/data/options'
import type {
  ExpertiseLevel,
  RoleArchetype,
  Industry,
  ThinkingStyle,
  LearningApproach,
  ProblemSolvingKey,
} from '~/types/personality'

const store = usePersonalityStore()

const problemSolvingSliders: { key: ProblemSolvingKey; label: string; color: string; left: string; right: string }[] = [
  { key: 'speedThoroughness', label: 'Speed vs Thoroughness', color: 'text-blue-600', left: 'Très rapide', right: 'Très approfondi' },
  { key: 'riskCaution', label: 'Risk Taking vs Cautious', color: 'text-green-600', left: 'Très prudent', right: 'Prend des risques' },
  { key: 'independentCollaborative', label: 'Independent vs Collaborative', color: 'text-purple-600', left: 'Très indépendant', right: 'Très collaboratif' },
]
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-8 glass-effect">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">💼 Professional Expertise</h2>

    <div class="space-y-8">
      <!-- Knowledge Level -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Knowledge Level</h3>
        <UiRadioCardGroup
          :model-value="store.expertise.level"
          :options="expertiseLevels"
          columns="grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
          active-color="border-green-500 bg-green-50"
          @update:model-value="store.expertise.level = $event as ExpertiseLevel"
        />
      </div>

      <!-- Role Archetype -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Role Archetype</h3>
        <UiRadioCardGroup
          :model-value="store.expertise.roleArchetype"
          :options="roleArchetypes"
          columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          active-color="border-purple-500 bg-purple-50"
          @update:model-value="store.expertise.roleArchetype = $event as RoleArchetype"
        />
      </div>

      <!-- Industry Focus -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Industry Focus (Multi-select)</h3>
        <UiCheckboxGroup
          :model-value="store.expertise.industries"
          :options="industries"
          columns="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          @update:model-value="store.expertise.industries = $event as Industry[]"
        />
      </div>

      <!-- Cognitive Approach -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Cognitive Approach</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-medium text-gray-700 mb-3">Thinking Styles (Multi-select)</h4>
            <UiCheckboxGroup
              :model-value="store.expertise.thinkingStyles"
              :options="thinkingStyles"
              columns="grid-cols-1"
              @update:model-value="store.expertise.thinkingStyles = $event as ThinkingStyle[]"
            />
          </div>

          <div>
            <h4 class="font-medium text-gray-700 mb-3">Problem Solving Approach</h4>
            <div class="space-y-4">
              <UiRangeSlider
                v-for="slider in problemSolvingSliders"
                :key="slider.key"
                :model-value="store.expertise.problemSolving[slider.key]"
                :label="slider.label"
                :value-color="slider.color"
                :left-label="slider.left"
                :right-label="slider.right"
                size="sm"
                @update:model-value="store.expertise.problemSolving[slider.key] = $event"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Learning Approach -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Learning & Teaching Approach</h3>
        <UiCheckboxGroup
          :model-value="store.expertise.learningApproach"
          :options="learningApproaches"
          columns="grid-cols-2 md:grid-cols-3"
          @update:model-value="store.expertise.learningApproach = $event as LearningApproach[]"
        />
      </div>
    </div>
  </div>
</template>
