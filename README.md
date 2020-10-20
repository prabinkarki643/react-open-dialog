# react-open-dialog

> Open Dialog Programatically with function call

[![NPM](https://img.shields.io/npm/v/react-open-dialog.svg)](https://www.npmjs.com/package/react-open-dialog) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-open-dialog
```

## Usage

# Open Confirm Dialog

```jsx
import React from 'react'

import { DialogUtils } from 'react-open-dialog'
import 'react-open-dialog/dist/index.css'

const App = () => {
  return (
    <div>
      <button
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
    </div>
  )
}

export default App
```

# Options For Confirm Dialog

```
const options={
      title : string|node,
      message : string|node,
      onClickYes : function,
      onClickNo : function,
      yesText : string,
      noText : string,
      disableBackdropClick : boolean,
      closeOnButtonClicked : boolean,
      yesButtonProps : object,
      noButtonProps : object,
      dialogProps : object,
      titleProps : object,
}
```

# Open Custom Dialog

```jsx
import React from 'react'

import { DialogUtils } from 'react-open-dialog'
import 'react-open-dialog/dist/index.css'

const App = () => {
  return (
    <div>
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
  )
}

export default App
```

# Options For Custom Dialog

```
const options={
      title : string|node,
      customRender : (arg)=>{},
      disableBackdropClick : boolean,
      dialogProps : object,
      titleProps : object,
}
```

## License

MIT © [githubprabin143](https://github.com/githubprabin143)
