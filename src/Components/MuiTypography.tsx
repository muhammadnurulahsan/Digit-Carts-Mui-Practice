import { Typography } from "@mui/material";
import React from "react";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        H4 Heading
      </Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h5">H6 Heading</Typography>

      <Typography variant="subtitle1">Sub Title One</Typography>
      <Typography variant="subtitle2">Sub Title Two</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ab, eligendi ipsa repellendus reiciendis illo? Exercitationem
        veniam aliquid quasi.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores impedit
        tempora culpa voluptatem iusto perferendis molestias non velit deleniti.
        Facere!
      </Typography>
    </div>
  );
};
