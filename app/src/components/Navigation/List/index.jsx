import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'

import * as routes from 'constants/routes'

const { SubMenu } = Menu;


/**
 * Basic link list
 */
const List = () => (
  <Menu
    style={{ width: '100%' }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
    <SubMenu key="sub1" title="Navigation One">

      <Menu.Item key="1">
        {/* <NavLink to={routes.HOME}> */}
          HOME
        {/* </NavLink> */}
      </Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>

    </SubMenu>

  </Menu>
)

export default List
