import { initializeApollo } from 'utils/apollo'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannersMapper, gamesMapper, highlightMapper } from 'utils/mappers'

import Home, { HomeTemplateProps } from 'templates/Home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10) // 2021-04-08

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY }
  })

  return {
    revalidate: 60,
    props: {
      banners: bannersMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      upcomingGames: gamesMapper(upcomingGames),
      freeGamesTitle: sections?.freeGames?.title,
      freeHighlight: highlightMapper(sections?.freeGames?.highlight),
      freeGames: gamesMapper(freeGames)
    }
  }
}
