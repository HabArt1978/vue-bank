import { z } from 'zod'
import { emailMinLength, passMaxLength, passMinLength } from './constants'

export const logInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(emailMinLength, 'Поле обязательное для заполнения!')
    .email('Электронная почта имеет невалидное значение!'),
  password: z
    .string()
    .trim()
    .min(
      passMinLength,
      `Пароль должен содержать не менее ${passMinLength} символов!`
    )
    .max(
      passMaxLength,
      `Пароль не может иметь более ${passMaxLength} символов!`
    ),
  remember: z.boolean().optional()
})
export type LoginSchema = z.infer<typeof logInSchema>
