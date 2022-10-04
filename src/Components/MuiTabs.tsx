import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Favorite from "@mui/icons-material/Favorite";

export const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList aria-label="Tabs Example" onChange={handleChange}>
            <Tab label="Tab One" value="1" />
            <Tab label="Tab Two" value="2" />
            <Tab label="Tab Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
      </TabContext>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="Tabs Example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab label="Tab One" value="1" />
            <Tab label="Tab Two" value="2" />
            <Tab label="Tab Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
      </TabContext>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="Tabs Example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab label="Tab One" value="1" icon={<Favorite />} />
            <Tab label="Tab Two" value="2" />
            <Tab label="Tab Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
      </TabContext>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="Tabs Example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab
              label="Tab One"
              value="1"
              icon={<Favorite />}
              iconPosition="start"
            />
            <Tab label="Tab Two" value="2" disabled />
            <Tab label="Tab Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
      </TabContext>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
          <TabList
            aria-label="Tabs Example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Tab One"
              value="1"
              icon={<Favorite />}
              iconPosition="start"
            />
            <Tab label="Tab Two" value="2" />
            <Tab label="Tab Three" value="3" />
            <Tab label="Tab Four" value="4" />
            <Tab label="Tab Five" value="5" />
            <Tab label="Tab Six" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
        <TabPanel value="4">Panel Four</TabPanel>
        <TabPanel value="5">Panel Five</TabPanel>
        <TabPanel value="6">Panel Six</TabPanel>
      </TabContext>
    </Box>
  );
};
