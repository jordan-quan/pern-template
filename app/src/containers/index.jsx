import React from 'react'
import { any } from 'prop-types'
import { Router, Route } from 'react-router-dom'
import { Layout } from 'antd'

import { createHistory as history } from 'utils'
import * as routes from 'constants/routes'
import { SIDEBAR_WIDTH } from 'constants/styles'
import Navigation from 'components/Navigation/index'
import NavBar from 'components/NavBar'
import HomePage from './Home'

const { Content, Header, Sider } = Layout

const Container = ({ session }) => (
  <Router history={history}>
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Layout>
        <Sider style={{
          overflow: 'auto',
          height: '100%',
          position: 'fixed',
          left: 0,
          width: SIDEBAR_WIDTH
        }} >
          <Navigation session={session} />
        </Sider>

        <Layout style={{ marginLeft: SIDEBAR_WIDTH }}>
          <Content>
            <Route exact path={routes.HOME} component={HomePage} />
          </Content>
        </Layout>

      </Layout>

    </Layout>
  </Router>
)

Container.propTypes = {
  session: any
}
Container.defaultProps = {
  session: {}
}

export default Container
