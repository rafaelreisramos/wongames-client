import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/data.mock'
import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
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
