import 'next-auth'

declare module 'next-auth' {
  export * from 'next-auth'

  type UsersPermissionsRole = {
    id: string | number
    name: string
    description: string
    type: string
  }

  export interface User {
    id: string | number
    username: string
    email: string
    provider?: string
    confirmed?: boolean
    blocked?: boolean
    role?: UsersPermissionsRole
    created_at: string
    updated_at: string
    jwt?: string
  }
}

declare module 'next-auth/jwt' {
  export * from 'next-auth/jwt'

  export interface JWT extends Record<string, unknown> {
    id: string | number
    name?: string
    email?: string
    jwt?: string
  }
}
