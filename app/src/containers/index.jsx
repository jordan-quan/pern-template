import React from 'react'
import { any } from 'prop-types'
import { Router, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Navigation from 'components/Navigation/index'
import * as routes from 'constants/routes'
import { createHistory as history } from 'utils'
import HomePage from './Home'
import { SIDEBAR_WIDTH } from 'constants/styles'
import NavBar from 'components/NavBar'

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
