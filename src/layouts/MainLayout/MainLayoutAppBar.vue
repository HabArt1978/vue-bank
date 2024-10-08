<script setup lang="ts">
import { useThemeStore } from '@/stores'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const themeStore = useThemeStore()
const isDarkTheme = computed(() => themeStore.darkTheme)
const toggleTheme = themeStore.toggleTheme

const { mdAndUp, mobile } = useDisplay()
</script>

<template>
  <v-app-bar
    :color="isDarkTheme ? 'blue-grey-darken-4' : 'primary'"
    prominent
    :location="mobile ? 'bottom' : 'top'"
  >
    <v-toolbar-title>Bank Application</v-toolbar-title>

    <v-spacer />

    <template v-if="mdAndUp">
      <v-btn
        icon="mdi-theme-light-dark"
        color="white"
        variant="text"
        @click="toggleTheme"
      />
    </template>
  </v-app-bar>
</template>
