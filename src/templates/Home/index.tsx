import { BannerProps } from 'components/Banner'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

import { Container } from 'components/Container'
import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'
import Footer from 'components/Footer'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingGames: GameCardProps[]
  upcomingMoreGames: GameCardProps[]
  freeHighlight: HighlightProps
  freeGames: GameCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingHighlight,
  upcomingGames,
  upcomingMoreGames,
  freeHighlight,
  freeGames
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <Showcase title="Upcoming" games={upcomingGames} />
      <Showcase highlight={upcomingHighlight} games={upcomingMoreGames} />
    </S.SectionUpcoming>

    <Showcase title="Free Games" highlight={freeHighlight} games={freeGames} />

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
