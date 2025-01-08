import type { SubmitRequestSchema } from '@/assets/schemas/submitRequestSchema'
import { useLogInStore } from '@/stores/index'
import type { AxiosResponse } from 'axios'
import { storeToRefs } from 'pinia'
import httpClient from '../httpClient'

export const createClientRequestFromApi = async (
  userData: SubmitRequestSchema
): Promise<AxiosResponse> => {
  const { token } = storeToRefs(useLogInStore())
  return await httpClient.post(`/requests.json?auth=${token}`, userData)
}
