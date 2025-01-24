<script setup lang="ts">
import { useAlertStore, useLogInStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
import TheAlert from './components/UI/TheAlert/TheAlert.vue'
import LoggedInLayout from './layouts/LoggedInLayout/LoggedInLayout.vue'
import MainLayout from './layouts/MainLayout/MainLayout.vue'

const { isAuthenticated } = storeToRefs(useLogInStore())
const { setAlert } = useAlertStore()

isAuthenticated &&
  setTimeout(() => {
    setAlert({
      alertColor: 'blue',
      alertTitle: 'Информация!',
      messageType: 'info',
      message: 'Пожалуйста пройдите авторизацию!'
    })
  }, 1000)
</script>

<template>
  <v-app>
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
  </v-app>
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
