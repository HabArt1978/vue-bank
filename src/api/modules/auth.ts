import type { LoginSchema } from '@/assets/schemas/loginSchema'

import type { AxiosResponse } from 'axios'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_FB_KEY
const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

export const logInFromApi = async (
  data: Omit<LoginSchema, 'remember'>
): Promise<AxiosResponse> => await axios.post(URL, data)
