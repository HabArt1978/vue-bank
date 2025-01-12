import type { AxiosResponse } from 'axios'
import axios from 'axios'
import type { UserRequestData } from './types'

const API_KEY = import.meta.env.VITE_FB_KEY
const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

//  REST API аутентификация Firebase => returnSecureToken: true - Возвращать ли идентификатор и токен обновления. Всегда должно быть правдой. (https://firebase.google.com/docs/reference/rest/auth?hl=ru)

export const logInFromApi = async (
  data: UserRequestData
): Promise<AxiosResponse> =>
  await axios.post(URL, { ...data, returnSecureToken: true })
