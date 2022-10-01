import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <Box width="250px">
        <TextField
          label="Select Country"
          select
          fullWidth
          value={countries}
          onChange={handleChange}
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="success"
          helperText="Please Select your country
          "
        >
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="IN">India</MenuItem>
        </TextField>
      </Box>
    </div>
  );
};
