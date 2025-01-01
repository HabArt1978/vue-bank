<script setup lang="ts">
import { ref } from 'vue'

import AppBar from './LoggedInLayoutAppBar.vue'
import Drawer from './LoggedInLayoutDrawer.vue'

const isDrawerOpen = ref(false)
</script>

<template>
  <v-layout class="h-100">
    <AppBar @toggle-drawer="isDrawerOpen = !isDrawerOpen" />

    <Drawer v-model:is-open="isDrawerOpen" />

    <v-main class="h-100">
      <slot />
    </v-main>
  </v-layout>
</template>
