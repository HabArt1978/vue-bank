<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile, mdAndUp } = useDisplay()

const drawer = ref(false)

const drawerItems = [
  {
    title: 'Home',
    value: 'home',
    icon: 'mdi-home-city'
  },
  {
    title: 'Account',
    value: 'account',
    icon: 'mdi-account'
  },
  {
    title: 'Account-group',
    value: 'account-group',
    icon: 'mdi-account-group-outline'
  },
  {
    title: 'About Me',
    value: 'about me',
    icon: 'mdi-forum'
  }
]

const menuItems = [
  {
    title: 'Toggle theme',
    value: 'toggle-theme',
    icon: 'mdi-theme-light-dark'
  },
  {
    title: 'Search',
    value: 'search',
    icon: 'mdi-magnify'
  },
  {
    title: 'Filter',
    value: 'filter',
    icon: 'mdi-filter'
  }
]
</script>

<template>
  <v-layout>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Bank Application</v-toolbar-title>

      <v-spacer></v-spacer>

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
            <v-btn variant="text" :prepend-icon="item.icon" min-width="100%">{{
              item.title
            }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :location="mobile.value ? 'left' : undefined" temporary>
      <v-list-item
        lines="two"
        prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
        subtitle="Logged in"
        title="Jane Smith"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list v-for="(item, idx) in drawerItems" :key="idx">
        <v-list-item
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block v-btn prepend-icon="mdi-logout" color="red-darken-4"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main style="height: 100vh">
      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size screens.
      </v-card-text>
    </v-main>
  </v-layout>
</template>
