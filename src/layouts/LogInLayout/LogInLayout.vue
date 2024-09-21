<script setup lang="ts">
import { ref } from 'vue'

import AppBar from './LogInLayoutAppBar.vue'
import Drawer from './LogInLayoutDrawer.vue'

const isDrawerOpen = ref(false)
</script>

<template>
  <v-layout>
    <AppBar @toggle-drawer="isDrawerOpen = !isDrawerOpen" />

    <Drawer v-model:is-open="isDrawerOpen" />

    <v-main class="h-100">
      <slot />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
