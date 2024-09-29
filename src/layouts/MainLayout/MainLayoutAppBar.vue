<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay, useTheme } from 'vuetify'

const { mdAndUp, mobile } = useDisplay()
const theme = useTheme()

const darkTheme = ref<boolean>(false)
function toggleTheme() {
  darkTheme.value = !darkTheme.value
  theme.global.name.value = darkTheme.value ? 'dark' : 'light'
}
</script>

<template>
  <v-app-bar
    :color="darkTheme ? 'blue-grey-darken-4' : 'primary'"
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
