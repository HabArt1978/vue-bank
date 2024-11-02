export type AlertMessage = AlertMessagePayload | null

interface AlertMessagePayload {
  message: string
  messageType: 'success' | 'error' | 'warning' | 'info'
}
