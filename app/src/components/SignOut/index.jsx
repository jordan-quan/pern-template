import React from 'react'
import { ApolloConsumer } from '@apollo/client'

import * as routes from 'constants/routes'
import { createHistory as history } from 'utils'

const SignOutButton = () => (
  <ApolloConsumer>
    {(client) => (
      <button type="button" onClick={() => signOut(client)}>
        Sign Out
      </button>
    )}
  </ApolloConsumer>
)

const signOut = (client) => {
  localStorage.removeItem('token')
  client.resetStore()
  history.push(routes.SIGN_IN)
}

export { signOut }

export default SignOutButton
