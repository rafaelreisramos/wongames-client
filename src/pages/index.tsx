import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

import Home, { HomeTemplateProps } from 'templates/Home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
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
      newGamesTitle: sections?.newGames?.title,
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: {
        backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatImage?.url}`,
        alignment: sections?.popularGames?.highlight?.alignment,
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink
      },
      mostPopularGames: sections!.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingHighlight: {
        backgroundImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.floatImage?.url}`,
        alignment: sections?.upcomingGames?.highlight?.alignment,
        title: sections?.upcomingGames?.highlight?.title,
        subtitle: sections?.upcomingGames?.highlight?.subtitle,
        buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
        buttonLink: sections?.upcomingGames?.highlight?.buttonLink
      },
      upcomingGames: upcomingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      freeGamesTitle: sections?.freeGames?.title,
      freeHighlight: {
        backgroundImage: `http://localhost:1337${sections?.freeGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.freeGames?.highlight?.floatImage?.url}`,
        alignment: sections?.freeGames?.highlight?.alignment,
        title: sections?.freeGames?.highlight?.title,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
        buttonLink: sections?.freeGames?.highlight?.buttonLink
      },
      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      }))
    }
  }
}
