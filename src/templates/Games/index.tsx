import { useQuery } from '@apollo/client'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries/games'

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

const Games = ({ filterItems }: GamesTemplateProps) => {
  const { data } = useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, {
    variables: { limit: 15 }
  })

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
          {data?.games.length ? (
            <Grid>
              {data?.games.map((game) => (
                <GameCard
                  key={game.slug}
                  title={game.name}
                  slug={game.slug}
                  img={`http://localhost:1337${game.cover?.url}`}
                  developer={game.developers[0].name}
                  price={game.price}
                />
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
