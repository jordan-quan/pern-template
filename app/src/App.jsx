import React from 'react'
import { ApolloProvider } from '@apollo/client'

import Container from 'containers'
import Auth from 'components/Auth'
import { useAuthToken } from 'utils'
import { apolloClient } from './apolloClient'

export const App = () => {
  const [token, setToken] = useAuthToken()

  // unauthenticated flow
  if (!token) return <Auth setUser={setToken} user={token} />

  // authenticated flow
  const client = apolloClient()
  return (
    <ApolloProvider client={client}>
      <Container />
    </ApolloProvider>
  )
}

export default App
