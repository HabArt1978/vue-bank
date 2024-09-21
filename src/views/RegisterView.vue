<script setup lang="ts">
import {
  registerSchema,
  type RegisterSchema
} from '@/assets/schemas/registerSchema'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm, useIsFormValid } from 'vee-validate'
import { ref } from 'vue'

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(registerSchema)
})

const { value: nickname } = useField('nickname')
const { value: email } = useField('email')
const { value: password } = useField('password')
const { value: confirmPassword } = useField('confirmPassword')

const isValid = useIsFormValid()
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)

const onSubmit = handleSubmit((submitted: RegisterSchema) => {
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
        >Регистрация</v-card-title
      >

      <v-form
        fast-fail
        @submit.prevent="onSubmit"
      >
        <v-text-field
          id="nickname"
          v-model="nickname"
          class="mt-4"
          name="nickname"
          type="text"
          label="Nickname"
          placeholder="Псевдоним пользователя"
          prepend-inner-icon="mdi-account-outline"
          :error-messages="errors.nickname"
          autofocus
        />

        <v-text-field
          id="email"
          v-model="email"
          class="mt-2"
          name="email"
          type="email"
          label="Email"
          placeholder="Адрес электронной почты"
          prepend-inner-icon="mdi-email-outline"
          :error-messages="errors.email"
        />

        <v-text-field
          id="password"
          v-model="password"
          class="mt-2"
          name="password"
          autocomplete="off"
          :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="isPasswordVisible ? 'text' : 'password'"
          label="Password"
          placeholder="Введите пароль"
          prepend-inner-icon="mdi-lock-outline"
          :error-messages="errors.password"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />

        <v-text-field
          id="confirmPassword"
          v-model="confirmPassword"
          class="mt-2"
          name="confirmPassword"
          autocomplete="off"
          :append-inner-icon="
            isConfirmPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'
          "
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          label="Confirm password"
          placeholder="Повторите пароль"
          prepend-inner-icon="mdi-lock-check-outline"
          :error-messages="errors.confirmPassword"
          @click:append-inner="
            isConfirmPasswordVisible = !isConfirmPasswordVisible
          "
        />

        <v-btn
          class="mb-8 mt-2"
          size="large"
          prepend-icon="mdi-account-check-outline"
          block
          type="submit"
          :disabled="!isValid"
          >Зарегистрироваться</v-btn
        >
      </v-form>

      <v-card-text class="text-center">
        <RouterLink
          class="text-blue text-decoration-none"
          to="/login"
        >
          Вернуться на страницу авторизации
        </RouterLink>
      </v-card-text>
    </v-card>
  </div>
</template>
