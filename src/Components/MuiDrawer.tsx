import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import React, { useState } from "react";

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        {/* <MenuIcon/> */}
        <Typography>
          This is Drawer.
        </Typography>
        </IconButton >
      <Drawer anchor="left"
      open={isDrawerOpen}        
      onClick={() => setIsDrawerOpen(false)}

      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
};
