<script setup lang="ts">
import MainLayout from './layouts/MainLayout/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <router-view v-slot="{ Component }">
      <v-fade-transition :hide-on-leave="true">
        <component :is="Component" />
      </v-fade-transition>
    </router-view>
  </MainLayout>
</template>
