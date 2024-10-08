import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useTheme } from 'vuetify'

// state = ref()
// getters = computed(() => {})
// action = function() {}
// mutations = мутаций (mutations) больше не существуют, mutations теперь автоматически происходят при использовании action = function() {}c

export const useThemeStore = defineStore('theme', () => {
  const theme = useTheme()
  // Определяем системную тему

  // state
  const darkTheme = ref<boolean>(false)

  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

  if (localStorage.getItem('theme') === null) {
    if (prefersDarkScheme.matches) {
      darkTheme.value = true
      theme.global.name.value = 'dark'
      localStorage.setItem('theme', theme.global.name.value)
    } else {
      darkTheme.value = false
      theme.global.name.value = 'light'
      localStorage.setItem('theme', theme.global.name.value)
    }
  } else {
    if (localStorage.getItem('theme') === 'dark') {
      darkTheme.value = true
      theme.global.name.value = 'dark'
    } else {
      darkTheme.value = false
      theme.global.name.value = 'light'
    }
  }

  //  functions
  function toggleTheme() {
    darkTheme.value = !darkTheme.value
    theme.global.name.value = darkTheme.value ? 'dark' : 'light'
    localStorage.setItem('theme', theme.global.name.value)
  }

  return {
    darkTheme,
    toggleTheme
  }
})
