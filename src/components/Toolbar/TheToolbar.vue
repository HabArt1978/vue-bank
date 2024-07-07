<script setup lang="ts">
import { ref } from 'vue'
import TheDrawer from './Drawer/TheDrawer.vue'
import TheSetupMenu from './SetupMenu/TheSetupMenu.vue'

const drawer = ref(false)
</script>

<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Bank Application</v-toolbar-title>

    <v-spacer></v-spacer>

    <TheDrawer :drawer="drawer" />

    <TheSetupMenu />
  </v-app-bar>
</template>
