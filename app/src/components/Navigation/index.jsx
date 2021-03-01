import React from 'react'
import { any } from 'prop-types'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import * as routes from 'constants/routes'

import ListAuth from './ListAuth'

const Navigation = ({ session }) => (

  <Menu
    style={{ width: '100%', height: '100%', paddingTop: 20 }}
    defaultSelectedKeys={['1']}
    mode="inline"
  >
    <Menu.Item key="1">
      <NavLink to={routes.HOME}>
        Home
          </NavLink>
    </Menu.Item>

    {session?.me && <ListAuth session={session} />}

  </Menu>

)

Navigation.propTypes = {
  session: any
}
Navigation.defaultProps = {
  session: null
}

export default Navigation
