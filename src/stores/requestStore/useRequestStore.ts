import {
  createClientRequestFromApi,
  getClientRequestFromApi
} from '@/api/modules/requestList/requestList'
import type { SubmitRequestSchema } from '@/assets/schemas/submitRequestSchema'
import { useAlertStore } from '@/stores/index'
import { isAxiosError } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { NewRequestData } from './types'

export const useRequestStore = defineStore('request', () => {
  const alertStore = useAlertStore()
  const { setAlert } = alertStore

  const requests = ref<NewRequestData[]>([])

  const setRequests = (newRequestData: any) => {
    // Преобразуем одиночный объект в массив
    const dataArray = [newRequestData]
    requests.value = [...dataArray]
  }

  const createClientRequest = async (
    payload: SubmitRequestSchema
  ): Promise<boolean> => {
    try {
      const response = await createClientRequestFromApi(payload)
      const createdRequestId = response.data.name
      if (createdRequestId) {
        setRequests({
          ...payload,
          id: createdRequestId
        })

        setAlert({
          alertColor: 'green',
          alertTitle: 'Успешно!',
          message: 'Заявка успешно создана!',
          messageType: 'success'
        })
      }

      return true
    } catch (error: unknown) {
      // Проверяем, является ли ошибка экземпляром AxiosError
      if (isAxiosError<{ error?: { message: string } }>(error)) {
        // Если есть ответ от сервера
        if (error.response) {
          const errorStatus = error.response.status
          const errorMessage = error.response.data.error?.message

          console.error('AXIOS / Response error:', errorStatus, errorMessage)

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

        error &&
          setAlert({
            message: `Неопознанная ошибка: ${error}`,
            messageType: 'error',
            alertTitle: 'Ошибка!',
            alertColor: 'red'
          })
      }
    }
    return false
  }

  const getClientRequests = async (): Promise<boolean> => {
    try {
      const response = await getClientRequestFromApi()
      const clientRequests = []
      if (response?.data) {
        setRequests(response.data)
        console.log(response)
      }

      return true
    } catch (error: unknown) {
      // Проверяем, является ли ошибка экземпляром AxiosError
      if (isAxiosError<{ error?: { message: string } }>(error)) {
        // Если есть ответ от сервера
        if (error.response) {
          const errorStatus = error.response.status
          const errorMessage = error.response.data.error?.message

          console.error('AXIOS / Response error:', errorStatus, errorMessage)

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

        error &&
          setAlert({
            message: `Неопознанная ошибка: ${error}`,
            messageType: 'error',
            alertTitle: 'Ошибка!',
            alertColor: 'red'
          })
      }
    }
    return false
  }

  return {
    requests,
    setRequests,
    createClientRequest,
    getClientRequests
  }
})
