import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const modal = ref<boolean>(false)
  const isModalActive = computed(() => modal.value)
  const setModal = (payload: boolean) => (modal.value = payload)

  return {
    modal,
    isModalActive,
    setModal
  }
})
