import React from 'react'
import { Typography } from 'antd'

import withSession from 'components/Session/withSession'

const { Title } = Typography

const Home = ({ session }) => {
  return <div style={{ padding: '30px 40px' }}><Title>Home</Title></div>
}

export default withSession(Home)
