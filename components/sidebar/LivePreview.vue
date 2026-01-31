<script setup lang="ts">
const { previewText } = usePreview()
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6 glass-effect">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">💬 Live Preview</h3>
    <div class="preview-panel">
      <div class="chat-message chat-user">
        Bonjour ! Peux-tu te présenter ?
      </div>
      <div class="chat-message chat-agent">
        {{ previewText }}
      </div>
    </div>
  </div>
</template>
