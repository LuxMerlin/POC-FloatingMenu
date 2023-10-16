<script setup lang="ts">
import { ref } from 'vue'
import SimpleTab from './SimpleTab.vue'
import SimpleTabPage from './SimpleTabPage.vue'
const openTab = ref<Number>(1)
function toggleTabs(tabNumber: Number) {
  openTab.value = tabNumber
}
</script>

<template>
  <div class="w-full">
    <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
      <SimpleTab lable="Layout" :tab-id="1" :open-tab="openTab" @change-tab="toggleTabs" />
      <SimpleTab lable="Broadcast" :tab-id="2" :open-tab="openTab" @change-tab="toggleTabs" />
      <SimpleTab lable="Developer" :tab-id="3" :open-tab="openTab" @change-tab="toggleTabs" />
    </ul>
    <div
      class="relative flex flex-col m-1 p-1 break-words bg-white border border-black mb-6 shadow-lg rounded"
    >
      <SimpleTabPage :tab-id="1" :open-tab="openTab">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic quos tempore deleniti
        debitis recusandae quod nesciunt necessitatibus. Repudiandae enim facilis praesentium sint
        dignissimos minima vitae quasi assumenda corporis at.
      </SimpleTabPage>
      <SimpleTabPage :tab-id="2" :open-tab="openTab">
        Settings Page 2, more Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        totam ullam voluptates nisi sit repellendus. Reprehenderit voluptatibus ea eos repellendus,
        possimus sapiente, distinctio quidem deleniti placeat consequatur facere optio perspiciatis!
      </SimpleTabPage>
      <SimpleTabPage :tab-id="3" :open-tab="openTab">
        <div>
          <label>Toggles setting</label>
          <input type="checkbox" />
        </div>
      </SimpleTabPage>
    </div>
  </div>
</template>

<style></style>
