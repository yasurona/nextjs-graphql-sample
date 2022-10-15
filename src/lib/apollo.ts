import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const link = createHttpLink({
  uri: `${process.env.API_BASE_URL}/graphql/`,
})

export const createClient = () => {
  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })
}

export const csrClient = createClient()
