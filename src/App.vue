<script setup lang="ts">
import { useLogInStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
import TheAlert from './components/UI/TheAlert/TheAlert.vue'
import LoggedInLayout from './layouts/LoggedInLayout/LoggedInLayout.vue'
import MainLayout from './layouts/MainLayout/MainLayout.vue'

const { isAuthenticated } = storeToRefs(useLogInStore())
</script>

<template>
  <v-slide-y-transition>
    <TheAlert />
  </v-slide-y-transition>

  <LoggedInLayout v-if="isAuthenticated">
    <router-view v-slot="{ Component }">
      <v-fade-transition :hide-on-leave="true">
        <component :is="Component" />
      </v-fade-transition>
    </router-view>
  </LoggedInLayout>

  <MainLayout v-else>
    <router-view v-slot="{ Component }">
      <v-fade-transition :hide-on-leave="true">
        <component :is="Component" />
      </v-fade-transition>
    </router-view>
  </MainLayout>
</template>

<style scoped>
.custom-scroll-hidden {
  max-height: 300px;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
}

.custom-scroll-hidden::-webkit-scrollbar {
  display: none; /* Chrome и Safari */
}
</style>
