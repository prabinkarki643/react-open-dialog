import React from 'react'

import { ExampleComponent,DialogUtils } from 'react-open-dialog'
import 'react-open-dialog/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <button onClick={()=>{
          DialogUtils.openConfirmDialog();
      }}>Open Dialog</button>
    </div>
  )
}

export default App
