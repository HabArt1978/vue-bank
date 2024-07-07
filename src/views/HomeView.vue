<script setup lang="ts">
import { drawerItems, menuItems } from '@/assets/library/library'
import TheToolbar from '@/components/Toolbar/TheToolbar.vue'
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile, mdAndUp } = useDisplay()

const drawer = ref(false)
</script>

<template>
  <v-layout>
    <TheToolbar />
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

    <v-navigation-drawer v-model="drawer" :location="mobile ? 'left' : undefined" temporary>
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
        <h1 style="color: red">HOME VIEW</h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur hic velit mollitia.
          Quod similique vero veritatis? Exercitationem sequi esse temporibus, incidunt placeat
          laboriosam distinctio est corporis, at qui sit architecto reprehenderit debitis facilis
          ipsam. Quidem dicta illum totam, quam animi iste ab id doloremque recusandae voluptas nemo
          numquam, asperiores enim.
        </p>
      </v-card-text>
    </v-main>
  </v-layout>
</template>
