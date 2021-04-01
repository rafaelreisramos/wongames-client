import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import GameCard, { GameCardProps } from 'components/GameCard'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import Empty from 'components/Empty'

import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const Games = ({ games = [], filterItems }: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          {games.length ? (
            <Grid>
              {games.map((game) => (
                <GameCard key={game.title} {...game} />
              ))}
            </Grid>
          ) : (
            <Empty
              title="Sorry, no games found mathing this search criteria."
              description="Try again with another terms or selection."
            />
          )}

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default Games
