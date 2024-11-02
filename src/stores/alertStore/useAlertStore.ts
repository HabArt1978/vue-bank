import type { AlertMessage } from '@/components/UI/TheAlert/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  const alertMessage = ref<AlertMessage>(null)

  const setAlertMessage = (payload: AlertMessage) =>
    (alertMessage.value = payload)

  return {
    alertMessage,
    setAlertMessage
  }
})
