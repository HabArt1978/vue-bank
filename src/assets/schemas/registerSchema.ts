import { z } from 'zod'

export const registrationSchema = z
  .object({
    nickname: z
      .string()
      .trim()
      .min(1, 'Поле обязательное для заполнения!')
      .max(20, 'Псевдоним не может содержать больше 20 символов!'),
    email: z
      .string()
      .trim()
      .min(1, 'Поле обязательное для заполнения!')
      .email('Электронная почта имеет невалидное значение!'),
    password: z
      .string()
      .trim()
      .min(8, 'Пароль должен содержать не менее 8 символов!')
      .max(32, 'Пароль не может иметь более 32 символов!'),
    confirmPassword: z
      .string()
      .trim()
      .min(1, 'Поле проверки пароля не может быть пустым!')
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли должны совпадать!',
    path: ['confirmPassword']
  })
export type RegistrationSchema = z.infer<typeof registrationSchema>

export type UserRegistrationData = Omit<RegistrationSchema, 'confirmPassword'>
