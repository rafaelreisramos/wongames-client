import { GetServerSidePropsContext } from 'next'

import protectedRoute from 'utils/protectedRoute'

import { initializeApollo } from 'utils/apollo'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import { QueryProfileMe } from 'graphql/generated/QueryProfileMe'

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

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  })
  return {
    props: {
      session,
      username: data.me?.username,
      email: data.me?.email
    }
  }
}
