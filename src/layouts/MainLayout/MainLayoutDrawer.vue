<script setup lang="ts">
import { drawerItems } from '@/assets/library/library'
import { defineModel } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'

const isDrawerOpen = defineModel<boolean>('isOpen', { required: true })

const { mobile } = useDisplay()

const router = useRouter()
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

    <v-list>
      <v-list-item
        v-for="(item, idx) in drawerItems"
        :key="idx"
        @click="router.push({ name: item.value })"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
      ></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn variant="flat" block prepend-icon="mdi-logout" color="red-darken-4"> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
