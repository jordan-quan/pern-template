import React from 'react'
import { oneOfType, func, string, object } from 'prop-types'

const ActionButton = ({ Icon, onClick, a11yText, ...props }) =>
  // On Component = object, On SVG = func
  typeof Icon === 'object' ? (
    <Icon onClick={onClick} a11yText={a11yText} {...props} />
  ) : (
    <div onClick={onClick} a11yText={a11yText} {...props}>
      <Icon />
    </div>
  )

ActionButton.propTypes = {
  Icon: oneOfType([object, func]).isRequired,
  onClick: func.isRequired,
  a11yText: string.isRequired
}

export default ActionButton
