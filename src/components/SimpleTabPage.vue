<script setup lang="ts">
defineProps<{
  tabId: Number
  openTab: Number
}>()
</script>

<template>
  <div v-bind:class="{ hidden: openTab !== tabId, block: openTab === tabId }">
    {{ tabId }}
    <slot />
  </div>
</template>
