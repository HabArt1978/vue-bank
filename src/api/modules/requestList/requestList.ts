import type { SubmitRequestSchema } from '@/assets/schemas/submitRequestSchema'

import { useLogInStore } from '@/stores/index'
import type { AxiosResponse } from 'axios'
import { storeToRefs } from 'pinia'
import httpClient from '../../httpClient'
import type { dataOnTheCreatedRequest } from './types'

export const createClientRequestFromApi = async (
  userData: SubmitRequestSchema
): Promise<AxiosResponse<dataOnTheCreatedRequest>> => {
  const { token } = storeToRefs(useLogInStore())
  return await httpClient.post(`/requests.json?auth=${token}`, userData)
}

export const getClientRequestFromApi = async (): Promise<AxiosResponse> => {
  const { token } = storeToRefs(useLogInStore())
  return await httpClient.get(`/requests.json?auth=${token}`)
}
