import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import { Stack } from "@mui/system";

export const MuiGrid = () => {
  return (
    <div>
      <Stack
        my={8}
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          // component='span'
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          MuiLayout
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        >
          MuiLayout
        </Box>
      </Stack>
      <Grid container my-={4} spacing={2} rowSpacing={3} columnSpacing={2}>
        <Grid item xs sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Grid Item-1
          </Box>
        </Grid>
        <Grid item xs sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Grid Item-2
          </Box>
        </Grid>
        <Grid item xs sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Grid Item-3
          </Box>
        </Grid>
        <Grid item xs sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Grid Item-4
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
