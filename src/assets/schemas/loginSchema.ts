import { z } from 'zod'
import {
  emailMinLength,
  miniumOneMark,
  passMaxLength,
  passMinLength
} from './constants'

export const logInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(miniumOneMark, 'Поле обязательное для заполнения!')
    .min(
      emailMinLength,
      `Почта пользователя должна содержать не менее ${emailMinLength} символов`
    )
    .email('Электронная почта имеет невалидное значение!'),
  password: z
    .string()
    .trim()
    .min(miniumOneMark, 'Поле обязательное для заполнения!')
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
