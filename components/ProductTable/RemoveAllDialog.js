import { forwardRef } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RemoveAllDialog = ({ open, handleClose }) => {
  const handleRemove = async () => {
    try {
      await fetch(`api/products`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      handleClose();
    } catch (err) {
      throw new Error(err);
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Remove All</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to remove all items?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemove} color="primary" variant="contained">
            Remove
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

RemoveAllDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default RemoveAllDialog;
