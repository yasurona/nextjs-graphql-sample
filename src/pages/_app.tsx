import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { csrClient } from '../lib/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={csrClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
