import { z } from 'zod'
import {
  emailMinLength,
  nicknameMaxLength,
  nicknameMinLength,
  passMaxLength,
  passMinLength
} from './constants'

export const registerSchema = z
  .object({
    nickname: z
      .string()
      .trim()
      .min(nicknameMinLength, 'Поле обязательное для заполнения!')
      .max(
        nicknameMaxLength,
        `Псевдоним не может содержать больше ${nicknameMaxLength} символов!`
      ),
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
    confirmPassword: z
      .string()
      .trim()
      .min(passMinLength, 'Поле проверки пароля не может быть пустым!')
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли должны совпадать!',
    path: ['confirmPassword']
  })
export type RegisterSchema = z.infer<typeof registerSchema>

export type UserRegisterData = Omit<RegisterSchema, 'confirmPassword'>
