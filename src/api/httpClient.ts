import router from '@/router'
import { useAlertStore } from '@/stores/index'
import axios from 'axios'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_FB_URL,
  responseType: 'json'
  // cookie, автоматически прикрепляем к каждому запросу
  // withCredentials: true
})

httpClient.interceptors.response.use(null, (error) => {
  const { setAlert } = useAlertStore()

  if (error.response.status === 401) {
    router.push({ name: 'Login' })

    setAlert({
      alertColor: 'red',
      alertTitle: 'Ошибка!',
      messageType: 'error',
      message: 'Пожалуйста, пройдите авторизацию!'
    })
  }

  return Promise.reject(error)
})

export default httpClient
