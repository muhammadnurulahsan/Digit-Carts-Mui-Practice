import React from "react";
import { Box } from "@mui/material";

export const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: "300px",
          bgcolor: "primary.main",
        }}
      >
        MuiResponsiveness
      </Box>
      <Box
        sx={{
          marginTop: "50px",
          height: "300px",
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          bgcolor: "primary.main",
        }}
      >
        MuiResponsiveness
      </Box>
    </>
  );
};
