import { z } from 'zod'
import { emailMinLength, passMaxLength, passMinLength } from './constants'

export const logInSchema = z.object({
  email: z
    .string({ message: 'Поле обязательно для заполнения!' })
    .trim()
    .min(
      emailMinLength,
      `Почта пользователя должна содержать не менее ${emailMinLength} символов`
    )
    .email('Электронная почта имеет невалидное значение!'),
  password: z
    .string({ message: 'Поле обязательно для заполнения!' })
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
