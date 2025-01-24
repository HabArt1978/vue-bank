import type { SubmitRequestSchema } from '@/assets/schemas/submitRequestSchema'

export interface NewRequestData extends SubmitRequestSchema {
  id?: string
}
