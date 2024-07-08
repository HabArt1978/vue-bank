<script setup lang="ts">
import { ref } from 'vue'

import AppBar from './MainLayoutAppBar.vue'
import Drawer from './MainLayoutDrawer.vue'

const isDrawerOpen = ref(false)
</script>

<template>
  <v-layout>
    <AppBar @toggle-drawer="isDrawerOpen = !isDrawerOpen" />

    <Drawer v-model:is-open="isDrawerOpen" />

    <v-main style="height: 100vh">
      <slot />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
