<script setup lang="ts">
import { menuItems } from '@/assets/library/library'
import { ref } from 'vue'
import { useDisplay, useTheme } from 'vuetify'

const { mdAndUp, mobile } = useDisplay()
const theme = useTheme()

console.log(theme.global.name.value)

const darkTheme = ref<boolean>(false)
function toggleTheme() {
  darkTheme.value = !darkTheme.value
  theme.global.name.value = darkTheme.value ? 'dark' : 'light'
}

const emit = defineEmits<{
  (e: 'toggle-drawer'): void
}>()
</script>

<template>
  <v-app-bar
    :color="darkTheme ? 'blue-grey-darken-4' : 'primary'"
    prominent
    :location="mobile ? 'bottom' : 'top'"
  >
    <v-app-bar-nav-icon
      color="white"
      @click.stop="emit('toggle-drawer')"
    />
    <v-toolbar-title>Bank Application</v-toolbar-title>

    <v-spacer />

    <template v-if="mdAndUp">
      <v-btn
        icon="mdi-theme-light-dark"
        color="white"
        variant="text"
        @click="toggleTheme"
      />

      <v-btn
        icon="mdi-magnify"
        color="white"
        variant="text"
      />

      <v-btn
        icon="mdi-filter"
        color="white"
        variant="text"
      />
    </template>

    <v-menu v-else>
      <template v-slot:activator="{ props }">
        <v-btn
          icon="mdi-dots-vertical"
          color="white"
          v-bind="props"
        />
      </template>

      <v-list class="mt-1">
        <v-list-item
          v-for="(item, idx) in menuItems"
          :key="idx"
        >
          <v-btn
            variant="text"
            :prepend-icon="item.icon"
            min-width="100%"
            >{{ item.title }}</v-btn
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
