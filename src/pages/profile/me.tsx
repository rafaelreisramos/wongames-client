import { GetServerSidePropsContext } from 'next'

import protectedRoute from 'utils/protectedRoute'

import Profile from 'templates/Profile'
import FormProfile from 'components/FormProfile'

export default function ProfileMe() {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoute(context)

  return {
    props: {
      session
    }
  }
}
