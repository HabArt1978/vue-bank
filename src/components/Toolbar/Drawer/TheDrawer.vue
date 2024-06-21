<script setup lang="ts"></script>

<template>
  <v-navigation-drawer v-model="drawer" :location="mobile.value ? 'left' : undefined" temporary>
    <v-list-item
      lines="two"
      prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
      subtitle="Logged in"
      title="Jane Smith"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list v-for="(item, idx) in drawerItems" :key="idx">
      <v-list-item :prepend-icon="item.icon" :title="item.title" :value="item.value"></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block v-btn prepend-icon="mdi-logout" color="red-darken-4"> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
