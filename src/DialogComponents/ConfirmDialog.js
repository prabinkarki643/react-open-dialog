import React, { forwardRef } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import { Button, DialogContentText } from '@material-ui/core'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const  ConfirmDialog = ({
  anchorElement,
  anchorElementContainerStyle,
  title,
  message,
  onClickYes,
  onClickNo,
  yesText,
  noText,
  disableBackdropClick,
  closeOnButtonClicked,
  yesButtonProps,
  noButtonProps,
  dialogProps,
  titleProps,
  defaultOpen
})=> {
  const [open, setOpen] = React.useState(defaultOpen)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <div
        onClick={handleClickOpen}
        style={{ cursor: 'pointer',display:'inline-block', ...anchorElementContainerStyle }}
      >
        {anchorElement}
      </div>
        <Dialog
          onClose={handleClose}
          open={open}
          keepMounted
          disableBackdropClick={disableBackdropClick}
          disableEscapeKeyDown={disableBackdropClick}
          {...dialogProps}
        >
          <DialogTitle {...titleProps}>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{message}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                onClickNo()
                closeOnButtonClicked && handleClose()
              }}
              style={{ backgroundColor: '#0f0e0b', color: 'white' }}
              {...noButtonProps}
            >
              {noText}
            </Button>
            <Button
              onClick={() => {
                onClickYes()
                closeOnButtonClicked && handleClose()
              }}
              style={{ backgroundColor: '#0f0e0b', color: 'white' }}
              {...yesButtonProps}
            >
              {yesText}
            </Button>
          </DialogActions>
        </Dialog>
    </React.Fragment>
  )
}
ConfirmDialog.defaultProps = {
  anchorElement:<div>anchorElement</div>,
  anchorElementContainerStyle:null,
  title: 'Dialog Title',
  message:
    ' To subscribe to this website, please enter your email address here. We will send updates occasionally.',
  onClickYes: () => {},
  onClickNo: () => {},
  disableBackdropClick: false,
  closeOnButtonClicked: true,
  yesText: 'Yes',
  noText: 'No',
  yesButtonProps:null,
  noButtonProps:null,
  dialogProps:null,
  titleProps:null,
  defaultOpen:false
}

export default ConfirmDialog
