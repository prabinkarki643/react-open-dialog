import React from 'react'

export {default as DialogUtils} from './DialogUtils'
export {ConfirmDialog,CustomDialog} from './DialogComponents'



export const RootDialog = ({ children })=> {
  return (
    <React.Fragment>
      {children}
      <div id='root-model'></div>
    </React.Fragment>
  )
}



