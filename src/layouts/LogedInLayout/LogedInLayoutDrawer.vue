<script setup lang="ts">
import { drawerItems } from '@/assets/library/library'
import { useLogInStore } from '@/stores/index'
import { defineModel, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'

const isDrawerOpen = defineModel<boolean>('isOpen', { required: true })

const { logOut } = useLogInStore()
const { mobile } = useDisplay()
const router = useRouter()

const user = ref('Артур Хабибулин')

function userLogout() {
  logOut()
  router.push({ name: 'Login' })
}
</script>

<template>
  <v-navigation-drawer
    v-model="isDrawerOpen"
    :location="mobile ? 'bottom' : 'left'"
    temporary
  >
    <v-list-item
      lines="three"
      prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
      :title="user"
      subtitle="habart1978@gmail.com"
    />

    <v-divider />

    <v-list>
      <v-list-item
        v-for="(item, idx) in drawerItems"
        :key="idx"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
        @click="router.push({ name: item.value })"
      />
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn
          variant="flat"
          block
          prepend-icon="mdi-logout"
          color="red-darken-4"
          @click="userLogout"
        >
          Выйти
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
