import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'

async function protectedRoute(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session) {
    context.res.setHeader(
      'Location',
      `/sign-in?callbackUrl=${context.resolvedUrl}`
    )
    context.res.statusCode = 302
  }

  return session
}

export default protectedRoute
