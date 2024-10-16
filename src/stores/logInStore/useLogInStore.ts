import { logInFromApi } from '@/api/modules/auth'
import type { LoginSchema } from '@/assets/schemas/loginSchema'
import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Token } from './types'

// state = ref()
// getters = computed(() => {})
// action = function() {}
// mutations = мутаций (mutations) больше не существуют, mutations теперь автоматически происходят при использовании action = function() {}

const TOKEN_KEY = 'jwt-token'

export const useLogInStore = defineStore('logIn', () => {
  // state
  const token = ref<Token | null>(localStorage.getItem(TOKEN_KEY))
  // computed
  const isAuthenticated = computed<boolean>(() => (token.value ? true : false))
  //  functions
  function setToken(newToken: Token): void {
    token.value = newToken
    localStorage.setItem(TOKEN_KEY, newToken)
  }

  async function logIn(payload: LoginSchema): Promise<void> {
    const userLogInData: Omit<LoginSchema, 'remember'> = {
      email: payload.email,
      password: payload.password
    }

    try {
      const { data } = await logInFromApi(userLogInData)
      if (data) {
        console.log('AXIOS / Response data:', data)
      }
    } catch (error) {
      // Проверяем, является ли ошибка экземпляром AxiosError
      if (axios.isAxiosError(error)) {
        // Если есть ответ от сервера
        if (error.response) {
          console.error(
            'AXIOS / Response error:',
            error.response.status,
            error.response.data.error.message
          )
        }
        // Если запрос был сделан, но не получен ответ (например, ошибка сети)
        else if (error.request) {
          console.error(
            'AXIOS / No response received:',
            error.request,
            error.message
          )
        }
        // Если ошибка при настройке запроса (например, неправильный URL)
        else {
          console.error('Axios / Error setting up request:', error.message)
        }
      } else {
        // Неизвестная ошибка (не связанная с Axios)
        console.error('Unknown error:', error)
      }
    }

    // пока подставляем вместо TOKEN тестовую строку
    setToken('TEST TOKEN')
  }

  function logOut(): void {
    token.value = null
    localStorage.removeItem(TOKEN_KEY)
  }

  return {
    token,
    isAuthenticated,
    logIn,
    setToken,
    logOut
  }
})
