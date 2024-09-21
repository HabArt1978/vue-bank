<script setup lang="ts">
import { logInSchema, type LoginSchema } from '@/assets/schemas/loginSchema'
import { useLogInStore } from '@/stores/index'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm, useIsFormValid } from 'vee-validate'
import { computed, ref, watch } from 'vue'

const logInStore = useLogInStore()

const { handleSubmit, errors, isSubmitting, submitCount } = useForm({
  validationSchema: toTypedSchema(logInSchema)
})

const { value: email } = useField('email')
const { value: password } = useField('password')
const { value: remember } = useField('remember')

const isValid = useIsFormValid()
const isVisible = ref(false)
const isTooManyAttempts = computed(() => submitCount.value >= 3)

watch(isTooManyAttempts, (val) => {
  if (val) {
    setTimeout(() => {
      submitCount.value = 0
    }, 10000)
  }
})

const onSubmit = handleSubmit(async (submitted: LoginSchema) => {
  console.table(submitted)
  await logInStore.logIn(submitted)
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
      <v-card-title
        class="text-center text-h4 text-blue-darken-3"
        style="user-select: none"
        >Авторизация</v-card-title
      >

      <v-form
        fast-fail
        @submit.prevent="onSubmit"
      >
        <v-text-field
          id="email"
          v-model="email"
          class="mt-4"
          name="email"
          type="email"
          label="Email"
          placeholder="Адрес электронной почты"
          prepend-inner-icon="mdi-email-outline"
          :error-messages="errors.email"
          autofocus
        />

        <div class="text-subtitle-1 text-medium-emphasis d-flex justify-end">
          <RouterLink
            class="text-caption text-decoration-none text-blue"
            to="#"
            target="_blank"
            style="user-select: none"
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
          :disabled="!isValid || isSubmitting || isTooManyAttempts"
        >
          Войти
        </v-btn>

        <div
          v-if="isTooManyAttempts"
          class="flex text-center text-red-darken-4"
          style="user-select: none"
        >
          Слишком много попыток входа, повторная попытка будет доступна через 10
          сек.
        </div>
      </v-form>

      <v-card-text class="text-center">
        <RouterLink
          class="text-blue text-decoration-none"
          to="/register"
          style="user-select: none"
        >
          Нет аккаунта? Заведите новый <v-icon icon="mdi-chevron-right" />
        </RouterLink>
      </v-card-text>
    </v-card>
  </div>
</template>
