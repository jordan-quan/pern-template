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
      <NavLink to={routes.HOME} activeClassName="selected">
        HOME
      </NavLink>

    </Col>
  </Row>
)

export default List
