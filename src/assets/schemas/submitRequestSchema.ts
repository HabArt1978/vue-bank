import { z } from 'zod'
import { emailMinLength, nameMaxLength, nameMinLength } from './constants'

export const orderStatuses = ['Принято', 'В обработке', 'Отклонено']

export const submitRequestSchema = z.object({
  lastName: z
    .string({ message: 'Поле обязательное для заполнения' })
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
    .string({ message: 'Поле обязательное для заполнения' })
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
    .string({ message: 'Поле обязательное для заполнения' })
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
    .string({ message: 'Поле обязательное для заполнения' })
    .regex(
      /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/,
      'Номер телефона должен быть в формате +7-XXX-XXX-XX-XX, где X — цифра'
    ),
  email: z
    .string({ message: 'Поле обязательное для заполнения' })
    .trim()
    .min(
      emailMinLength,
      `Почта пользователя должна содержать не менее ${emailMinLength} символов`
    )
    .email('Введите корректный адрес электронной почты!'),
  amount: z
    .number({ message: 'Поле обязательное для заполнения' })
    .refine((val) => val >= 10000, {
      message: 'Сумма должна быть не менее 10 000 руб'
    })
    .refine((val) => val <= 1000000, {
      message: 'Сумма должна быть не более 1 000 000 руб'
    }),
  status: z
    .string({ message: 'Поле обязательное для заполнения' })
    .refine((value) => orderStatuses.includes(value), {
      message: 'Пожалуйста, выберите допустимый статус заявки!'
    })
})
export type SubmitRequestSchema = z.infer<typeof submitRequestSchema>
