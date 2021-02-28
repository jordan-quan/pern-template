import { gql } from '@apollo/client'

export const GET_ME = gql`
  {
    me {
      id
      username
      email
      role
    }
  }
`
