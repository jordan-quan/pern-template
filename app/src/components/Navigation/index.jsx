import React from 'react'
import { any } from 'prop-types'
import { Col, Row } from 'antd'

import ListAuth from './ListAuth'
import List from './List'
import { ReactComponent as TelusLogo } from 'assets/telusLogo.svg'
import * as styles from './styles'

const Navigation = ({ session }) => (
  <styles.Sidebar>
    <Row>
      <Col>
        <styles.SideHeader>
          <TelusLogo />
        </styles.SideHeader>
        <List />
        {session?.me && <ListAuth session={session} />}
      </Col>
    </Row>
  </styles.Sidebar>
)

Navigation.propTypes = {
  session: any
}
Navigation.defaultProps = {
  session: null
}

export default Navigation
