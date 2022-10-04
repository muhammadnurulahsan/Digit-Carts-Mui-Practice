import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const height = [150, 30, 90, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

export const MuiMasonry = () => {
  return (
    <>
      <Box sx={{ width: 500, minHeight: 400 }}>
        <Masonry columns={4} spacing={1}>
          {height.map((height, index) => (
            <Paper
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height,
                border: "1px solid",
              }}
            >
              {index + 1}
            </Paper>
          ))}
        </Masonry>
      </Box>

      <Box sx={{ width: 500, minHeight: 400 }}>
        <Masonry columns={4} spacing={1}>
          {height.map((height, index) => (
            <Paper
              key={index}
              sx={{
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // height,
                border: "1px solid",
              }}
            >
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Content</AccordionDetails>
              </Accordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    </>
  );
};
