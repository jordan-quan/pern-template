import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Row } from 'antd'

import * as routes from 'constants/routes'

/**
 * Basic link list
 */
const List = () => (
  <Row>
    <Col>
      <NavLink to={routes.DASHBOARD} exact activeClassName="selected">
        Dashboard
      </NavLink>

      <NavLink to={routes.ROUTES} activeClassName="selected">
        Routes
      </NavLink>

      <NavLink to={routes.FIFA} activeClassName="selected">
        FIFA
      </NavLink>

      <NavLink to={routes.UTILS} activeClassName="selected">
        Utils
      </NavLink>
    </Col>
  </Row>
)

export default List
