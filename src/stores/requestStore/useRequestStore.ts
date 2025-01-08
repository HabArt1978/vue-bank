import { createClientRequestFromApi } from '@/api/modules/requestList'
import type { SubmitRequestSchema } from '@/assets/schemas/submitRequestSchema'
import { useAlertStore } from '@/stores/index'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRequestStore = defineStore('request', () => {
  const alertStore = useAlertStore()
  const { setAlert } = alertStore

  const requests = ref<any[]>([])

  const setRequests = (newRequest: any) => {
    requests.value = [...newRequest]
  }

  const createClientRequest = async (
    payload: SubmitRequestSchema
  ): Promise<void> => {
    try {
      const { data } = await createClientRequestFromApi(payload)
      console.log(data)
      setAlert({
        alertColor: 'green',
        alertTitle: 'Успешно!',
        message: 'Заявка успешно создана!',
        messageType: 'success'
      })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    requests,
    setRequests,
    createClientRequest
  }
})
