/* eslint-disable no-unused-vars */

/*
 * This is currently unused; use with Apollo client when ready
 */
import { gql, useMutation } from '@apollo/client'
import { useAuthToken } from 'utils'

export const loginMutationGQL = gql`
  mutation login($login: String!, $password: String!) {
    login(input: { identifier: $login, password: $password }) {
      jwt
    }
  }
`

export const useLoginMutation = () => {
  const [_, setAuthToken] = useAuthToken()

  const [mutation, mutationResults] = useMutation(loginMutationGQL, {
    onCompleted: (data) => {
      setAuthToken(data.login.jwt)
    }
  })

  const login = (user, password) => {
    return mutation({
      variables: {
        login: user,
        password
      }
    })
  }
  return [login, mutationResults]
}
