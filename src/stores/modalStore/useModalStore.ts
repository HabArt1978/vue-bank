import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const modal = ref<boolean>(false)

  const setModal = (payload: boolean) => (modal.value = payload)

  return {
    modal,
    setModal
  }
})
