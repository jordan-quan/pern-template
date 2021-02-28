import React from 'react'
import { string } from 'prop-types'
import * as styles from './styles'

const ScrollAnchor = ({ id, ...rest }) => (
  <styles.ParentWrapper>
    <styles.ScrollAnchor id={id} {...rest} />
  </styles.ParentWrapper>
)

ScrollAnchor.propTypes = {
  id: string
}

ScrollAnchor.defaultProps = {
  id: 'scroll-to-element'
}

export default ScrollAnchor
