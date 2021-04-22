import { GetServerSidePropsContext } from 'next'

import protectedRoute from 'utils/protectedRoute'

import Profile from 'templates/Profile'
import OrdersList, { OrdersListProps } from 'components/OrdersList'

import ordersMock from 'components/OrdersList/data.mock'

export default function ProfileOrders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoute(context)

  return {
    props: {
      items: ordersMock,
      session
    }
  }
}
