import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'
import Providers from 'next-auth/providers'
import NextAuth, { Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

const options = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    Providers.Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize({ email, password }: Record<string, string>) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({ identifier: email, password })
          }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    jwt: async (token: JWT, user: User) => {
      if (user) {
        token.id = user.id
        token.name = user.username as string
        token.email = user.email
        token.jwt = user.jwt
      }

      return Promise.resolve(token)
    },
    session: async (session: Session, user: User) => {
      session.userId = user.id
      session.accessToken = user.jwt

      return Promise.resolve(session)
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default Auth
