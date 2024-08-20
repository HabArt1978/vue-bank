<script setup lang="ts">
import { logInSchema, type LoginSchema } from '@/assets/schemas/loginSchema'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'

const { handleSubmit, errors, isFieldValid } = useForm({
  validationSchema: toTypedSchema(logInSchema)
})

const { value: email } = useField('email')
const { value: password } = useField('password')
const { value: remember } = useField('remember')

const isFieldsValid = ref(isFieldValid)
const isVisible = ref(false)

const onSubmit = handleSubmit((submitted: LoginSchema) => {
  alert(JSON.stringify(submitted, null, 2))
})
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
        @submit.prevent="onSubmit"
      >
        <v-text-field
          id="email"
          v-model="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Адрес электронной почты"
          prepend-inner-icon="mdi-email-outline"
          :error-messages="errors.email"
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
          id="password"
          v-model="password"
          name="password"
          autocomplete="off"
          :append-inner-icon="isVisible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="isVisible ? 'text' : 'password'"
          label="Password"
          placeholder="Введите пароль"
          prepend-inner-icon="mdi-lock-outline"
          :error-messages="errors.password"
          @click:append-inner="isVisible = !isVisible"
        />

        <v-checkbox
          id="remember"
          v-model="remember"
          name="remember"
          label="Запомнить меня"
          color="orange-darken-3"
        />

        <v-btn
          class="mb-8"
          size="large"
          prepend-icon="mdi-login"
          block
          type="submit"
          >Войти</v-btn
        >
      </v-form>

      <v-card-text class="text-center">
        <RouterLink
          class="text-blue text-decoration-none"
          to="/register"
        >
          Зарегистрироваться <v-icon icon="mdi-chevron-right" />
        </RouterLink>
      </v-card-text>
    </v-card>
  </div>
</template>
