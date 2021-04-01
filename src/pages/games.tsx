import Games, { GamesTemplateProps } from 'templates/Games'

import itemsMock from 'components/ExploreSidebar/data.mock'
import gamesMock from 'components/GameCardSlider/data.mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <Games {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: itemsMock
    }
  }
}
