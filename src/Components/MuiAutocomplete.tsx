import React, { useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";

type skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "Javascript", "TypeScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<skill | null>(null);
  console.log(skill);
  return (
    <div>
      <Stack spacing={2} width="250px">
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="skills" />}
          value={value}
          onChange={(e: any, newValue: string | null) => setValue(newValue)}
          freeSolo
        />
        <Autocomplete
          options={skillsOptions}
          renderInput={(params) => <TextField {...params} label="skills" />}
          value={skill}
          onChange={(e: any, newValue: skill | null) => setSkill(newValue)}
        />
      </Stack>
    </div>
  );
};
