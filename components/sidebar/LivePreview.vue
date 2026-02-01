<script setup lang="ts">
const { previewText } = usePreview()
</script>

<template>
  <UCard class="glass-effect">
    <h3 class="text-lg font-semibold mb-4">💬 Live Preview</h3>
    <div class="preview-panel">
      <div class="chat-message chat-user">
        Bonjour ! Peux-tu te présenter ?
      </div>
      <div class="chat-message chat-agent">
        {{ previewText }}
      </div>
    </div>
  </UCard>
</template>
