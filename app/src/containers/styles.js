import styled from 'styled-components'
import { SIDEBAR_WIDTH } from 'constants/.'

export const Container = styled.div`
  height: 100vh;
  display: flex;
`

export const Content = styled.div`
  height: 100vh;
  margin-left: ${SIDEBAR_WIDTH};
  width: calc(100vw - ${SIDEBAR_WIDTH});
`

export const ContentPadding = styled.div`
  padding: 30px 40px;
`
