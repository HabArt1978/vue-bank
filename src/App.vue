<script setup lang="ts">
import { useLogInStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
import LoggedInLayout from './layouts/LoggedInLayout/LoggedInLayout.vue'
import MainLayout from './layouts/MainLayout/MainLayout.vue'

const { isAuthenticated } = storeToRefs(useLogInStore())
</script>

<template>
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
