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
  const { setAlert } = useAlertStore()
  // state
  const token = ref<string | null>(localStorage.getItem(TOKEN_KEY))
  const authenticationError = ref<boolean>(false)
  // computed
  const isAuthenticated = computed<boolean>(() => (token.value ? true : false))
  const isAuthenticationError = computed<boolean>(
    () => authenticationError.value
  )
  //  functions
  function setToken(newToken: Token): void {
    token.value = newToken
    localStorage.setItem(TOKEN_KEY, newToken)
  }

  const setAuthenticationError = (payload: boolean) =>
    (authenticationError.value = payload)

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

        isAuthenticationError.value && setAuthenticationError(false)

        setAlert({
          message: `Пользователь ${userResponseData.email} вошёл в систему`,
          messageType: 'success',
          alertTitle: 'Успешно!',
          alertColor: 'green'
        })
        setToken(userResponseData.idToken)
      }
    } catch (error: unknown) {
      // Проверяем, является ли ошибка экземпляром AxiosError
      if (isAxiosError<{ error?: { message: string } }>(error)) {
        // Если есть ответ от сервера
        if (error.response) {
          const errorStatus = error.response.status
          const errorMessage = error.response.data.error?.message

          console.error('AXIOS / Response error:', errorStatus, errorMessage)

          setAuthenticationError(true)

          errorMessage &&
            setAlert({
              message: errorMessage,
              messageType: 'error',
              alertTitle: 'Ошибка!',
              alertColor: 'red'
            })
        }
        // Если запрос был сделан, но не получен ответ (например, ошибка сети)
        else if (error.request) {
          const errorRequest = error.request
          const errorMessage = error.message

          const requestErrorMessage = `Ошибка запроса: ${errorRequest}, сообщение об ошибке: ${errorMessage}`

          console.error(
            'AXIOS / No response received:',
            error.request,
            error.message
          )

          setAuthenticationError(true)

          setAlert({
            message: requestErrorMessage,
            messageType: 'error',
            alertTitle: 'Ошибка!',
            alertColor: 'red'
          })
        }
        // Если ошибка при настройке запроса (например, неправильный URL)
        else {
          console.error('Axios / Error setting up request:', error.message)

          setAuthenticationError(true)

          error.message &&
            setAlert({
              message: error.message,
              messageType: 'error',
              alertTitle: 'Ошибка!',
              alertColor: 'red'
            })
        }
      } else {
        // Неизвестная ошибка (не связанная с Axios)
        console.error('Unknown error:', error)

        setAuthenticationError(true)

        error &&
          setAlert({
            message: `Неопознанная ошибка: ${error}`,
            messageType: 'error',
            alertTitle: 'Ошибка!',
            alertColor: 'red'
          })
      }
    }
  }

  function logOut(): void {
    token.value = null
    authenticationError.value = false

    localStorage.removeItem(TOKEN_KEY)
  }

  return {
    token,
    isAuthenticated,
    isAuthenticationError,
    logIn,
    setToken,
    setAuthenticationError,
    logOut
  }
})
