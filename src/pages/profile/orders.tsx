import { GetServerSidePropsContext } from 'next'

import { initializeApollo } from 'utils/apollo'
import {
  QueryOrders,
  QueryOrdersVariables
} from 'graphql/generated/QueryOrders'
import { QUERY_ORDERS } from 'graphql/queries/orders'

import protectedRoute from 'utils/protectedRoute'
import { ordersMapper } from 'utils/mappers'

import Profile from 'templates/Profile'
import OrdersList, { OrdersListProps } from 'components/OrdersList'

export default function ProfileOrders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoute(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) return { props: {} }

  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: { identifier: session?.userId as string },
    fetchPolicy: 'no-cache'
  })

  return {
    props: {
      items: ordersMapper(data.orders),
      session
    }
  }
}
