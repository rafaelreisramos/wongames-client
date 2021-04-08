import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

import Home, { HomeTemplateProps } from 'templates/Home'

import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    revalidate: 60,
    props: {
      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        ...(banner.button && {
          buttonLabel: banner.button?.label,
          buttonLink: banner.button?.link
        }),
        ...(banner.ribbon && {
          ribbon: banner.ribbon?.text,
          ribbonColor: banner.ribbon?.color,
          ribbonSize: banner.ribbon?.size
        })
      })),
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingGames: gamesMock,
      upcomingMoreGames: gamesMock,
      freeHighlight: highlightMock,
      freeGames: gamesMock
    }
  }
}
