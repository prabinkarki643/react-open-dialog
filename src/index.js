import React from 'react'
import styles from './styles.module.css'


export {default as DialogUtils} from './DialogUtils'

export const RootDialog = ({ children })=> {
  return (
    <React.Fragment>
      {children}
      <div id='root-model'></div>
    </React.Fragment>
  )
}

