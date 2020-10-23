import React, { forwardRef } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const CustomDialog = ({
  anchorElement,
  anchorElementContainerStyle,
  title,
  disableBackdropClick,
  dialogProps,
  titleProps,
  defaultOpen,
  children
}) => {
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
        {anchorElement || <div>anchorElement</div>}
      </div>
      <Dialog
        onClose={handleClose}
        open={open}
        keepMounted
        disableBackdropClick={disableBackdropClick}
        disableEscapeKeyDown={disableBackdropClick}
        {...dialogProps}
      >
        {title && <DialogTitle {...titleProps}>{title}</DialogTitle>}
        <DialogContent>
          {children({
            closeDialog: handleClose,
          })}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
CustomDialog.defaultProps = {
  anchorElement:<div>anchorElement</div>,
  anchorElementContainerStyle:null,
  title: 'Dialog Title',
  disableBackdropClick: false,
  defaultOpen: false,
  dialogProps:null,
  titleProps:null,
  children:()=><div>Content</div>
}

export default CustomDialog
