import { z } from 'zod'

export const logInSchema = z.object({
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
  remember: z.boolean()
})
export type LoginSchema = z.infer<typeof logInSchema>
