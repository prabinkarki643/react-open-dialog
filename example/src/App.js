import React from 'react'

import { DialogUtils, ConfirmDialog, CustomDialog } from 'react-open-dialog'

const App = () => {
  return (
    <div>
      <center>
        <h2>React Open Dialog</h2>
        <a href="" target="_blank">Get it in NPM</a>
        <div style={{ marginBottom: '1.5%' }}>
          <div>
            <h3>Example As Function Call</h3>
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
                  title: 'Custom Dialog',
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
          </div>
        </div>
        <hr />
        <div>
          <h3>Example As React Component</h3>
          <div>
            <ConfirmDialog
              anchorElement={
                <div
                  style={{
                    border: '1px solid black',
                    padding: 3,
                    marginRight: 20
                  }}
                >
                  Open Confirm Dialog
                </div>
              }
              title='Dilog Title'
              message='Elit amet esse minim elit pariatur voluptate dolor non et. Nulla ad do amet amet mollit duis voluptate magna. Nisi in non cillum amet magna consequat occaecat adipisicing. Ex consequat qui mollit eu exercitation et do adipisicing reprehenderit. Laborum sint eu sit sit ea anim Lorem id ut qui consectetur proident eiusmod laborum. Ipsum aliquip duis fugiat veniam nulla ut.'
            />

            <CustomDialog
              anchorElement={
                <div style={{ border: '1px solid black', padding: 3 }}>
                  Open Custom Dialog
                </div>
              }
              title='Dilog Title'
            >
              {({ closeDialog }) => {
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
              }}
            </CustomDialog>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App
