import { DateRange, DateRangePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log({ value });
  return (
    <Box width="500px">
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        // onChange={(newValue) => {
        //   setValue(newValue)
        // }}
        // renderInput={(startProps, endProps) => (
        //   <>
        //     <TextField {...startProps} />
        //     <Box sx={{ mx: 2 }}>TO</Box>
        //     <TextField {...endProps} />
        //   </>
        // )}
      />
    </Box>
  );
};
