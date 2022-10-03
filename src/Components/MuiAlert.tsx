import CheckIcon from "@mui/icons-material/Check";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an Error Alert.</Alert>
      <Alert severity="warning">This is an Waring Alert.</Alert>
      <Alert severity="info">This is an Info Alert.</Alert>
      <Alert severity="success">This is an Success Alert.</Alert>

      <Alert variant="outlined" severity="error">
        This is an Error Alert.
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an Warning Alert.
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an Info Alert.
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an Success Alert.
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close alert")}
      >
        <AlertTitle>Error</AlertTitle>
        This is an Error Alert.
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an Warning Alert.
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an Info Alert.
      </Alert>
      <Alert variant="filled" severity="success">
        <AlertTitle>Success</AlertTitle>
        This is an Success Alert.
      </Alert>

      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        variant="filled"
        severity="success"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Customize Success</AlertTitle>
        This is an Success Alert.
      </Alert>
    </Stack>
  );
};
