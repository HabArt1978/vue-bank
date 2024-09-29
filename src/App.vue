<script setup lang="ts">
import { ref } from 'vue'
import LogInLayout from './layouts/LogedInLayout/LogedInLayout.vue'
import MainLayout from './layouts/MainLayout/MainLayout.vue'

const isLogin = ref(true)
</script>

<template>
  <LogInLayout v-if="isLogin">
    <router-view v-slot="{ Component }">
      <v-fade-transition :hide-on-leave="true">
        <component :is="Component" />
      </v-fade-transition>
    </router-view>
  </LogInLayout>

  <MainLayout v-else>
    <router-view v-slot="{ Component }">
      <v-fade-transition :hide-on-leave="true">
        <component :is="Component" />
      </v-fade-transition>
    </router-view>
  </MainLayout>
</template>
