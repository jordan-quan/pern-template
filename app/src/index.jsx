import React from 'react'
import ReactDOM from 'react-dom'

import config from 'config'
import App from './App'
import 'antd/dist/antd.css'

  /*
   * Self-executing setup function
   * Uses async to resolve env information
   */
  ; (async () => {
    Window.config = await config()
    ReactDOM.render(<App />, document.getElementById('root'))
  })()
