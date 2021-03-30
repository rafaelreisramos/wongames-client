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

export function getServerSideProps() {
  return {
    props: {
      cards: cardsMock
    }
  }
}
