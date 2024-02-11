import { Alert, Snackbar } from '@mui/material';
import React from 'react';

function Snack({ openSnack, handleClose }) {
  return (
    <Snackbar open={openSnack} autoHideDuration={1000} onClose={handleClose}>
      <Alert severity="success" onClose={handleClose}>
        product added
      </Alert>
    </Snackbar>
  );
}

export default Snack;
