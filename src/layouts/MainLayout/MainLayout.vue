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

    <v-main class="h-100">
      <router-view v-slot="{ Component }">
        <v-fade-transition>
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
