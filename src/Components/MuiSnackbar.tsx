import { Button, Snackbar, Alert, AlertProps } from "@mui/material";
import React, { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (e?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "click") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message="From Submitted Successfully!"
        autoHideDuration={4000}
        onClose={handleClose}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      />
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          From Submitted Successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
