<script setup lang="ts">
import { computed, ref } from 'vue'
import type { MenuItem } from '@/Types/MenuItem'
import { Icon } from '@iconify/vue'
import TabbedSettings from './TabbedSettings.vue'

const items = ref<MenuItem[]>([])
const noOfItems = 50

for (let index = 1; index < noOfItems + 1; index++) {
  items.value.push({
    id: index,
    lable: 'Item ' + index,
    image: 'http://placekitten.com/100/100'
  } as MenuItem)
}

const settingsOpen = ref(false)

const showSetting = computed(() => {
  return settingsOpen.value
})

function toggleSettins() {
  settingsOpen.value = !settingsOpen.value
}
</script>

<template>
  <div class="w-1/2 translate-x-1/2 border border-main shadow-md p-1 flex flex-col overflow-hidden">
    <div class="flex justify-between flex-row p-2">
      <input type="text" placeholder="search" class="border rounded-full px-1 flex-1" />
      <div class="px-10">Tenant: <span class="fi fi-gb-sct"></span></div>
      <div class="flex gap-2">
        <!-- <button><Icon :height="26" icon="icon-park-twotone:info" /></button> -->
        <button @click="toggleSettins">
          <Icon :height="26" icon="icon-park-twotone:setting-two" />
        </button>
      </div>
    </div>
    <div v-show="showSetting">
      <TabbedSettings />
    </div>
    <div class="flex flex-row overflow-x-scroll gap-4">
      <div v-for="i in items" :key="i.id" class="text-center h-full flex-none">
        <img :src="i.image" class="object-fit rounded-lg" />
        <label>{{ i.lable }}</label>
      </div>
    </div>
  </div>
</template>

<style></style>
