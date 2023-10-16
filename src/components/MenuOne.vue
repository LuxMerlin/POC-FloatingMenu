<script setup lang="ts">
import { ref } from 'vue'
import type { MenuItem } from '@/Types/MenuItem'

const items = ref<MenuItem[]>([])
const noOfItems = 50

for (let index = 1; index < noOfItems + 1; index++) {
  items.value.push({
    id: index,
    lable: 'Item ' + index,
    image: 'http://placekitten.com/100/100'
  } as MenuItem)
}
</script>

<template>
  <div class="w-1/2 translate-x-1/2 border-4 border-red flex flex-row overflow-x-scroll gap-4">
    <div v-for="i in items" :key="i.id" class="text-center h-full flex-none">
      <img :src="i.image" class="object-fit rounded-lg" />
      <label>{{ i.lable }}</label>
    </div>
  </div>
</template>

<style></style>
