import React from 'react'
import { Menu } from 'antd'

import { NAVBAR_HEIGHT } from 'constants/styles'


const NavBar = () => (
  <>
    <div style={{ color: 'white', fontSize: 30 }}>LOGO</div>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{
      top: 0,
      height: NAVBAR_HEIGHT,
      right: 60,
      position: 'fixed',
    }}>
      <div style={{ cursor: 'pointer' }}>ACCOUNT</div>
    </Menu>
  </>

)

export default NavBar
