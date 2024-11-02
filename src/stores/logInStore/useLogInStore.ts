import { logInFromApi } from '@/api/modules/auth'
import type { UserRequestData, UserResponseData } from '@/api/modules/types'
import type { LoginSchema } from '@/assets/schemas/loginSchema'
import { useAlertStore } from '@/stores/index'
import { isAxiosError } from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Token } from './types'

// state = ref()
// getters = computed(() => {})
// action = function() {}
// mutations = мутаций (mutations) больше не существуют, mutations теперь автоматически происходят при использовании action = function() {}

const TOKEN_KEY = 'jwt-token' // key for localStorage

export const useLogInStore = defineStore('logIn', () => {
  const { setAlertMessage } = useAlertStore()
  // state
  const token = ref<string | null>(localStorage.getItem(TOKEN_KEY))
  // computed
  const isAuthenticated = computed<boolean>(() => (token.value ? true : false))
  //  functions
  function setToken(newToken: Token): void {
    token.value = newToken
    localStorage.setItem(TOKEN_KEY, newToken)
  }

  async function logIn(payload: LoginSchema): Promise<void> {
    const userRequestData: UserRequestData = {
      email: payload.email,
      password: payload.password
    }

    try {
      const response = await logInFromApi(userRequestData)
      const userResponseData: UserResponseData = response.data
      if (userResponseData) {
        console.log('AXIOS / Response data:', userResponseData)
        setAlertMessage({
          message: `Пользователь ${userResponseData.email} вошёл в систему`,
          messageType: 'success'
        })
        setToken(userResponseData.idToken)
        // `Пользователь ${userResponseData.email} вошёл в систему`
      }
    } catch (error: unknown) {
      // Проверяем, является ли ошибка экземпляром AxiosError
      if (isAxiosError<{ error?: { message: string } }>(error)) {
        // Если есть ответ от сервера
        if (error.response) {
          const errorStatus = error.response.status
          const errorMessage = error.response.data.error?.message

          console.error('AXIOS / Response error:', errorStatus, errorMessage)

          errorMessage &&
            setAlertMessage({
              message: errorMessage,
              messageType: 'error'
            })
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
