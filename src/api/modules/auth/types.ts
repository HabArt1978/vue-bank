export interface UserResponseData {
  kind: string
  localId: string
  email: string
  displayName: string
  idToken: string
  registered: boolean
  refreshToken: string
  expiresIn: string
}

export interface UserRequestData {
  email: string
  password: string
}
