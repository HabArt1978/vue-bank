<script setup lang="ts">
import { drawerItems } from '@/assets/library/library'
import { useAlertStore, useLogInStore } from '@/stores/index'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'

const isDrawerOpen = defineModel<boolean>('isOpen', { required: true })

const { logOut } = useLogInStore()
const { setAlert } = useAlertStore()

const { mobile } = useDisplay()
const router = useRouter()

const user = ref('Артур Хабибулин')

const activeLinks = computed({
  get: () => [router.currentRoute.value.name],
  set: () => {}
})

function userLogout() {
  logOut()
  router.push({ name: 'Login' })

  setTimeout(() => {
    setAlert({
      alertColor: 'blue',
      alertTitle: 'Информация!',
      messageType: 'info',
      message: 'Пожалуйста пройдите авторизацию!'
    })
  }, 1000)
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

    <v-list v-model:selected="activeLinks">
      <v-list-item
        v-for="(item, idx) in drawerItems"
        :key="idx"
        color="primary"
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
