<script setup lang="ts">
import { drawerItems } from '@/assets/library/library'
import { defineModel } from "vue";
import { useDisplay } from "vuetify";

const isDrawerOpen = defineModel<boolean>('isOpen', { required: true })

const { mobile } = useDisplay()
</script>

<template>
  <v-navigation-drawer v-model="isDrawerOpen" :location="mobile ? 'bottom' : 'left'" temporary>
    <v-list-item
      lines="two"
      prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
      subtitle="Logged in"
      title="Jane Smith"
    />

    <v-divider></v-divider>

    <v-list v-for="(item, idx) in drawerItems" :key="idx">
      <v-list-item :prepend-icon="item.icon" :title="item.title" :value="item.value"></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block prepend-icon="mdi-logout" color="red-darken-4"> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
