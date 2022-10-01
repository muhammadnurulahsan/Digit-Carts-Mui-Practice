import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";

export const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <Box>
        <FormControl error>
          <FormLabel id="job-experience-group-label">
            Years Of Experience
          </FormLabel>

          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            onChange={handleChange}
            value={value}
            row
          >
            <FormControlLabel
              control={<Radio size="medium" color="warning" />}
              label="0-2"
              value="0-2"
            />
            <FormControlLabel
              control={<Radio size="medium" color="secondary" />}
              label="3-5"
              value="3-5"
            />
            <FormControlLabel
              control={<Radio size="medium" color="error" />}
              label="6-10"
              value="6-10"
            />
          </RadioGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </div>
  );
};
