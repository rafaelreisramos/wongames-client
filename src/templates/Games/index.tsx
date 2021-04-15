import { useRouter } from 'next/router'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'
import { ParsedUrlQueryInput } from 'querystring'

import { useQueryGames } from 'graphql/queries/games'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'

import Base from 'templates/Base'
import GameCard from 'components/GameCard'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import Empty from 'components/Empty'

import * as S from './styles'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const Games = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <p>Loading...</p>

  const { games, gamesConnection } = data
  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })

    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: { limit: 15, start: data?.games.length }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          {data?.games.length ? (
            <>
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

              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Loading more games"
                    />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <ArrowDown />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title="Sorry, no games found matching this search criteria."
              description="Try again with another terms or selection."
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default Games
