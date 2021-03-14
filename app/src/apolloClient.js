import { ApolloClient, from, HttpLink, InMemoryCache, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

import { getAPIRoute } from 'utils'

export const apolloClient = () => {
  const cache = new InMemoryCache()

  const httpLink = new HttpLink({ uri: getAPIRoute('graphql') })
  const wsLink = new WebSocketLink({ uri: getAPIRoute('ws'), options: { reconnect: true } })
  const terminatingLink = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLink
  )

  return new ApolloClient({
    link: from([terminatingLink]),
    cache
  })
}
