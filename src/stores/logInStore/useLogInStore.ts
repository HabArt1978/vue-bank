import type { LoginSchema } from '@/assets/schemas/loginSchema'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Token } from './types'

// state = ref()
// getters = computed(() => {})
// action = function() {}
// mutations = мутаций (mutations) больше не существуют, mutations теперь автоматически происходят при использовании action = function() {}

export const useLogInStore = defineStore('logIn', () => {
  // state
  const token = ref<Token | null>(null)
  // computed
  const isAuthenticated = computed<boolean>(() => (token.value ? true : false))
  //  functions
  function setToken(newToken: Token): void {
    token.value = newToken
    localStorage.setItem('jwt-token', newToken)
  }

  async function logIn(payload: LoginSchema): Promise<void> {
    // пока подставляем вместо TOKEN тестовую строку

    setToken('TEST TOKEN')
  }

  function logOut(): void {
    token.value = null
    localStorage.removeItem('jwt-token')
  }

  return {
    token,
    isAuthenticated,
    logIn,
    setToken,
    logOut
  }
})
