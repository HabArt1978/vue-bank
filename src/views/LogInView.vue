<script setup lang="ts">
import { ref } from 'vue'

const loginForm = ref({
  email: '',
  password: '',
  remember: false
})

let visible = ref(false)
</script>

<template>
  <div class="px-4">
    <v-card class="mx-auto mt-10 pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-card-title class="text-center text-h4 text-blue-darken-3">Log in</v-card-title>

      <v-form fast-fail @submit.prevent>
        <div class="text-subtitle-1 text-medium-emphasis">Email</div>

        <v-text-field
          v-model="loginForm.email"
          type="email"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password

          <RouterLink
            class="text-caption text-decoration-none text-blue"
            to="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</RouterLink
          >
        </div>

        <v-text-field
          v-model="loginForm.password"
          autocomplete="off"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-checkbox
          v-model="loginForm.remember"
          label="Remember Me"
          color="orange-darken-3"
        ></v-checkbox>

        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          prepend-icon="mdi-login"
          block
        >
          Log In
        </v-btn>
      </v-form>

      <v-card-text class="text-center">
        <RouterLink
          class="text-blue text-decoration-none"
          to="/sing-up"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </RouterLink>
      </v-card-text>
    </v-card>
  </div>
</template>
