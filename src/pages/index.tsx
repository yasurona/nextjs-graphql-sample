import type { NextPage } from 'next'
import { usePlayerListQuery } from '../graphql/types'

const Home: NextPage = () => {
  const { data, loading, error } = usePlayerListQuery()

  if (loading) return <p>Loading...</p>
  if (error) throw error
  if (!data) {
    return <div>no data</div>
  }
  return (
    <div>
      <h1>Players list</h1>
      {data.players?.map((player) => (
        <p key={player.id}>
          id: {player.id} name: {player.name}
        </p>
      ))}
    </div>
  )
}

export default Home
