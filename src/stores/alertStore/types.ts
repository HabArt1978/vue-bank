export type Alert = AlertPayload | null
export type AlertType = 'success' | 'error' | 'warning' | 'info'
export type AlertTitle =
  | 'Ошибка!'
  | 'Успешно!'
  | 'Предупреждение!'
  | 'Информация!'
export type AlertButtonColor = 'red' | 'green' | 'yellow' | 'blue'
interface AlertPayload {
  message: string
  messageType: AlertType
  alertTitle: AlertTitle
  alertColor: AlertButtonColor
}
