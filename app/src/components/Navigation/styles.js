import styled from 'styled-components'

import { SIDEBAR_WIDTH } from 'constants/.'

const colors = {
  gray: 'gray',
  purple: 'purple',
  text: 'darkgray'
}

export const Sidebar = styled.div`
  width: ${SIDEBAR_WIDTH};
  height: 100%;
  background: ${colors.gray};
  border-right: 1px solid rgba(216, 216, 216);
  position: fixed;
  overflow: hidden;

  .selected {
    border-color: ${colors.purple};
    color: ${colors.purple};
    font-weight: 500;
  }

  a {
    line-height: 35px;
    border-left: solid 5px;
    border-color: transparent;
    text-decoration: none;
    color: ${colors.text};
    padding: 0px 25px;
  }

  a:visited {
    color: ${colors.text};
  }

  .selected:visited {
    color: ${colors.purple};
  }
`

export const SideHeader = styled.div`
  padding: 40px 35px 10px 15px;
  svg {
    width: 100%;
  }
`
