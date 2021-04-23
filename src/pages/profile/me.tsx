import { GetServerSidePropsContext } from 'next'

import protectedRoute from 'utils/protectedRoute'

import { initializeApollo } from 'utils/apollo'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import {
  QueryProfileMe,
  QueryProfileMeVariables
} from 'graphql/generated/QueryProfileMe'

import Profile from 'templates/Profile'
import FormProfile, { FormProfileProps } from 'components/FormProfile'

export default function ProfileMe(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoute(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) return { props: {} }

  const { data } = await apolloClient.query<
    QueryProfileMe,
    QueryProfileMeVariables
  >({
    query: QUERY_PROFILE_ME,
    variables: { identifier: session?.user?.id as string }
  })

  return {
    props: {
      session,
      username: data?.user?.username,
      email: data?.user?.email
    }
  }
}
