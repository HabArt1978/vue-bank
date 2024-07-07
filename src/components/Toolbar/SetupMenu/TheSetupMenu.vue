<script setup lang="ts">
import { menuItems } from '@/assets/library/library'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
</script>

<template>
  <template v-if="mdAndUp">
    <v-btn icon="mdi-theme-light-dark" variant="text"></v-btn>

    <v-btn icon="mdi-magnify" variant="text"></v-btn>

    <v-btn icon="mdi-filter" variant="text"></v-btn>
  </template>

  <v-menu v-else>
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
    </template>

    <v-list class="mt-1">
      <v-list-item v-for="(item, idx) in menuItems" :key="idx">
        <v-btn variant="text" :prepend-icon="item.icon" min-width="100%">{{ item.title }}</v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
