import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'react-open-dialog/dist/index.css'
import {RootDialog} from 'react-open-dialog'

ReactDOM.render(
  <RootDialog>
    <App />
  </RootDialog>,
  document.getElementById('root')
)
