<script setup lang="ts">
import { ref } from 'vue'

const logInForm = ref({
  email: '',
  password: '',
  remember: false
})

let visible = ref(false)
</script>

<template>
  <div class="px-4">
    <v-card
      class="mx-auto mt-10 pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-card-title class="text-center text-h4 text-blue-darken-3"
        >Авторизация</v-card-title
      >

      <v-form
        fast-fail
        @submit.prevent
      >
        <v-text-field
          v-model="logInForm.email"
          type="email"
          label="Email"
          placeholder="Адрес электронной почты"
          prepend-inner-icon="mdi-email-outline"
        />

        <div class="text-subtitle-1 text-medium-emphasis d-flex justify-end">
          <RouterLink
            class="text-caption text-decoration-none text-blue"
            to="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Забыли пароль для входа в систему?</RouterLink
          >
        </div>

        <v-text-field
          v-model="logInForm.password"
          autocomplete="off"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          label="Password"
          placeholder="Введите пароль"
          prepend-inner-icon="mdi-lock-outline"
          @click:append-inner="visible = !visible"
        />

        <v-checkbox
          v-model="logInForm.remember"
          label="Запомнить меня"
          color="orange-darken-3"
        />

        <v-btn
          class="mb-8"
          size="large"
          prepend-icon="mdi-login"
          block
          >Войти</v-btn
        >
      </v-form>

      <v-card-text class="text-center">
        <RouterLink
          class="text-blue text-decoration-none"
          to="/sing-up"
        >
          Зарегистрироваться <v-icon icon="mdi-chevron-right" />
        </RouterLink>
      </v-card-text>
    </v-card>
  </div>
</template>
