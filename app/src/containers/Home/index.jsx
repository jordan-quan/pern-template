import React from 'react'

import withSession from 'components/Session/withSession'

const Home = ({ session }) => {
  return <h1 level="h1">Home</h1>
}

export default withSession(Home)
