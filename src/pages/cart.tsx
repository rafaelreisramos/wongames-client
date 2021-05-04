import { GetServerSidePropsContext } from 'next'

import protectedRoute from 'utils/protectedRoute'

import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import Cart, { CartProps } from 'templates/Cart'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoute(context)
  const apolloClient = initializeApollo(null, session)

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({ query: QUERY_RECOMMENDED })

  return {
    props: {
      session,
      recommendedTitle: recommended?.section?.title,
      recommendedGames: gamesMapper(recommended?.section?.games),
      recommendedHighlight: highlightMapper(recommended?.section?.highlight)
    }
  }
}
