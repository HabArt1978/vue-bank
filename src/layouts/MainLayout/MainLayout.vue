<script setup lang="ts">
import AppBar from './MainLayoutAppBar.vue'
</script>

<template>
  <v-layout>
    <AppBar />

    <v-main class="h-100">
      <slot />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
