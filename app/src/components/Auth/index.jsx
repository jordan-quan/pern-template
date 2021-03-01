import React, { useState } from 'react'

import { ReactComponent as Logo } from 'assets/logo.svg'
import { useAuthToken } from 'utils'
import * as styles from './styles'

const Auth = () => {
  const [token, setToken] = useAuthToken()
  const [isDisabled, setIsDisabled] = useState(false)
  let popup

  const checkPopup = () => {
    const check = setInterval(() => {
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check)
        setIsDisabled(false)
      }
    }, 1000)
  }

  const openPopup = () => {
    window.addEventListener(
      'message',
      (event) => {
        const params = new URLSearchParams(event.data)
        setToken(params.get('code'))
        window.location.reload()
      },
      false
    )
    const width = 600
    const height = 600
    const left = window.innerWidth / 2 - width / 2
    const top = window.innerHeight / 2 - height / 2
    const url = `${Window.config.restRoute}login`

    return window.open(
      url,
      '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    )
  }

  const startAuth = (e) => {
    if (!isDisabled) {
      e.preventDefault()
      popup = openPopup()
      checkPopup()
      setIsDisabled(true)
    }
  }

  return (
    <styles.Container>
      <styles.Header>
        <Logo />
      </styles.Header>

      <styles.Button onClick={startAuth}>Login with Google</styles.Button>
    </styles.Container>
  )
}

export default Auth
