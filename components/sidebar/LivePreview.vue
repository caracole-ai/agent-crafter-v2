<script setup lang="ts">
const { previewText } = usePreview()
</script>

<template>
  <UCard class="glass-effect">
    <h3 class="text-lg font-semibold mb-4">💬 {{ $t('sidebar.livePreview') }}</h3>
    <div class="preview-panel">
      <div class="chat-message chat-user">
        {{ $t('sidebar.previewPrompt') }}
      </div>
      <div class="chat-message chat-agent">
        {{ previewText }}
      </div>
    </div>
  </UCard>
</template>
