import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined"> 
        Submit
      </LoadingButton>
    </Stack>
  );
};
