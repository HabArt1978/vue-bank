import { z } from 'zod'
import {
  emailMinLength,
  miniumOneMark,
  nameMaxLength,
  nameMinLength
} from './constants'

export const submitRequestSchema = z.object({
  lastName: z
    .string()
    .min(miniumOneMark, 'Поле обязательное для заполнения')
    .min(
      nameMinLength,
      `Фамилия пользователя должна содержать не менее ${nameMinLength} символов`
    )
    .max(
      nameMaxLength,
      `Фамилия пользователя не может содержать более ${nameMaxLength} символов`
    )
    .regex(
      /^[a-zA-Zа-яА-ЯёЁ]+$/,
      'Фамилия пользователя может содержать только буквы'
    ),
  firstName: z
    .string()
    .min(miniumOneMark, 'Поле обязательное для заполнения')
    .min(
      nameMinLength,
      `Имя пользователя должно содержать не менее ${nameMinLength} символов`
    )
    .max(
      nameMaxLength,
      `Имя пользователя не может содержать более ${nameMaxLength} символов`
    )
    .regex(
      /^[a-zA-Zа-яА-ЯёЁ]+$/,
      'Имя пользователя может содержать только буквы'
    ),
  middleName: z
    .string()
    .min(
      nameMinLength,
      `Отчество пользователя должно содержать не менее ${nameMaxLength}символов`
    )
    .max(
      nameMaxLength,
      `Отчество пользователя не может содержать более ${nameMaxLength} символов`
    )
    .regex(
      /^[a-zA-Zа-яА-ЯёЁ]+$/,
      'Отчество пользователя может содержать только буквы'
    )
    .optional(),
  phone: z
    .string()
    .min(miniumOneMark, 'Поле обязательное для заполнения')
    .regex(
      /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/,
      'Номер телефона должен быть в формате +7-XXX-XXX-XX-XX, где X — цифра'
    ),
  email: z
    .string()
    .trim()
    .min(miniumOneMark, 'Поле обязательное для заполнения!')
    .min(
      emailMinLength,
      `Почта пользователя должна содержать не менее ${emailMinLength} символов`
    )
    .email('Введите корректный адрес электронной почты!'),
  amount: z
    .string()
    .min(miniumOneMark, 'Поле обязательное для заполнения!')
    .transform((value) => {
      const parsed = Number(value)
      if (isNaN(parsed)) throw new Error('Invalid number')
      return parsed
    })
    .refine((value) => value >= 10000 && value <= 1000000, {
      message: 'Значение должно быть от 10 000 до 1 000 000'
    }),
  status: z.enum(['Option 1', 'Option 2', 'Option 3'], {
    message: 'Пожалуйста, определите статус заявки'
  })
})
export type SubmitRequestSchema = z.infer<typeof submitRequestSchema>
