import { GetServerSidePropsContext } from 'next'

import protectedRoute from 'utils/protectedRoute'

import Profile from 'templates/Profile'
import CardsList, { CardsListProps } from 'components/CardsList'

import cardsMock from 'components/PaymentOptions/data.mock'

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoute(context)

  return {
    props: {
      cards: cardsMock,
      session
    }
  }
}
