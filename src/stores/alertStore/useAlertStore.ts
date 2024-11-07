import type { Alert } from '@/stores/alertStore/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  const alertPayload = ref<Alert>(null)

  const setAlert = (payload: Alert) => (alertPayload.value = payload)

  return {
    alertPayload,
    setAlert
  }
})
