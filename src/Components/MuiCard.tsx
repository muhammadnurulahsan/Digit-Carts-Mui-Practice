import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <div>
      <Box width="300px">
        <Card>
          <CardMedia
            component="img"
            height="300px"
            image="https://source.unsplash.com/random"
            alt="unsplash-image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography variant="body2" color="GrayText.secondary">
              React is a JavaScript library developed by Facebook which, among
              other things, was used to build Instagram.com. Its aim is to allow
              developers to easily create fast user interfaces for websites and
              applications alike. The main concept of React. js is virtual DOM.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};
