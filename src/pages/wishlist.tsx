import { GetServerSidePropsContext } from 'next'

import { initializeApollo } from 'utils/apollo'
import protectedRoute from 'utils/protectedRoute'

import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import Wishlist, { WhishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/data.mock'

export default function Index(props: WhishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoute(context)

  const apolloClient = initializeApollo()

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  return {
    props: {
      games: gamesMock,
      recommendedTitle: recommended?.section?.title,
      recommendedGames: gamesMapper(recommended?.section?.games),
      recommendedHighlight: highlightMapper(recommended?.section?.highlight),
      session
    }
  }
}
