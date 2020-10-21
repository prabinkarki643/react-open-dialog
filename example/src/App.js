import React from 'react'

import { DialogUtils } from 'react-open-dialog'

const App = () => {
  return (
    <div>
      <center style={{marginTop: '5%'}}>
        <button
          style={{ marginRight: 20 }}
          onClick={() => {
            DialogUtils.openConfirmDialog({
              title: 'Dilog Title',
              message:
                'Elit amet esse minim elit pariatur voluptate dolor non et. Nulla ad do amet amet mollit duis voluptate magna. Nisi in non cillum amet magna consequat occaecat adipisicing. Ex consequat qui mollit eu exercitation et do adipisicing reprehenderit. Laborum sint eu sit sit ea anim Lorem id ut qui consectetur proident eiusmod laborum. Ipsum aliquip duis fugiat veniam nulla ut.'
            })
          }}
        >
          Open Confirm Dialog
        </button>

        <button
          onClick={() => {
            DialogUtils.openCustomDialog({
              title:"Custom Dialog",
              customRender: ({ closeDialog }) => {
                return (
                  <div>
                    <p>My very first custom dialog </p>
                    <button
                      onClick={() => {
                        closeDialog()
                      }}
                    >
                      Close
                    </button>
                  </div>
                )
              }
            })
          }}
        >
         Open Custom Dialog
        </button>
      </center>
    </div>
  )
}

export default App
