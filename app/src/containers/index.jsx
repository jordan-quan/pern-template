import React from 'react'
import { any } from 'prop-types'
import { Router, Route } from 'react-router-dom'

import Navigation from 'components/Navigation/index'
import * as routes from 'constants/routes'
import { createHistory as history } from 'utils'
import HomePage from './Home'

import * as styles from './styles'

const Container = ({ session }) => (
  <Router history={history}>
    <styles.Container>
      <Navigation session={session} />
      <styles.Content>
        <styles.ContentPadding>
          <Route exact path={routes.HOME} component={HomePage} />
        </styles.ContentPadding>
      </styles.Content>
    </styles.Container>
  </Router>
)

Container.propTypes = {
  session: any
}
Container.defaultProps = {
  session: {}
}

export default Container
