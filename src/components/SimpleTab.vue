<script setup lang="ts">
defineProps<{
  openTab: Number
  tabId: Number
  lable: String
}>()

const emit = defineEmits<{
  (e: 'changeTab', id: Number): void
}>()

function toggleTabs(tabNumber: Number) {
  emit('changeTab', tabNumber)
}
</script>

<template>
  <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
    <a
      class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
      v-on:click="toggleTabs(tabId)"
      v-bind:class="{
        'text-main-text bg-white': openTab !== tabId,
        'text-main-text bg-main': openTab === tabId
      }"
    >
      {{ lable }}
    </a>
  </li>
</template>
