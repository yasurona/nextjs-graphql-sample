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
          id: {player.id} 名前: {player.name} 国籍: {player.nationality.name}{' '}
          生年月日: {player.bornOn} 血液型: {player.bloodType.name}
        </p>
      ))}
    </div>
  )
}

export default Home
