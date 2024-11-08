import type { Alert } from '@/stores/alertStore/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  const alert = ref<Alert>(null)

  const setAlert = (payload: Alert) => (alert.value = payload)

  return {
    alert,
    setAlert
  }
})
