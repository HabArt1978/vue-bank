import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
  // cookie, автоматически прикрепляем к каждому запросу
  withCredentials: true
})

export default httpClient
