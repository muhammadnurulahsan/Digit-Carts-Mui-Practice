import React from "react";
import { Stack, Skeleton } from "@mui/material";

export const MuiSkeleton = () => {
  return (
    <Stack spacing={1} width="250px">
      <Skeleton variant="text" animation={false} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton
        variant="rectangular"
        width={250}
        height={125}
        animation="wave"
      />
    </Stack>
  );
};
