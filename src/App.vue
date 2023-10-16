<script setup lang="ts">
import MenuOne from './components/MenuOne.vue'
import MenuTwo from './components/MenuTwo.vue'

const showOne = false
const showTwo = true
</script>

<template>
  <MenuOne v-if="showOne" />
  <MenuTwo v-if="showTwo" />
</template>

<style></style>
