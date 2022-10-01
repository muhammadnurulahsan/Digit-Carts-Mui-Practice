import React from "react";
import { Link, Stack, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <div>
      <Stack spacing={2} direction="row" m={4}>
        <Link href="#" variant='body2' fontWeight='bold'>Link</Link>
        <Typography variant='h6'>
          <Link href="#" color="secondary" underline="none">
            Secondary
          </Link>
        </Typography>
      </Stack>
    </div>
  );
};
