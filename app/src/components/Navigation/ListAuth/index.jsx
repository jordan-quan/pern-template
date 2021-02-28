import React from 'react'
import { any } from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'antd'

import * as routes from 'constants/routes'

/**
 * Authenticated, admin level list
 *
 * Currently unused
 */
const ListAuth = ({ session }) => (
  <Row>
    <Col>
      <NavLink to={routes.ACCOUNT} activeClassName="selected">
        Account {session.me?.username}
      </NavLink>

      {session && session.me?.role === 'ADMIN' && (
        <NavLink to={routes.ADMIN} activeClassName="selected">
          Admin
        </NavLink>
      )}
    </Col>
  </Row>
)

ListAuth.propTypes = {
  session: any
}
ListAuth.defaultProps = {
  session: null
}

export default ListAuth
