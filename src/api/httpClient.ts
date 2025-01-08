import axios from 'axios'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_FB_URL,
  responseType: 'json'
  // cookie, автоматически прикрепляем к каждому запросу
  // withCredentials: true
})

export default httpClient
