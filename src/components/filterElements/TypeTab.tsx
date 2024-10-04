import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function TypeTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", borderBottom: "1px" }}>
      <TabContext value={value}>
        <Box sx={{ border: 1, borderRadius: "12px", borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label='lab API tabs example'
            sx={{ width: "100%" }}
          >
            <Tab
              sx={{
                color: "black",
                width: "33%",
                fontWeight: "500",
                textTransform: "capitalize",
                borderRight: "1px",
                borderColor: "black",
              }}
              label='Any Type'
              value='1'
            />
            <Tab
              sx={{
                color: "black",
                fontWeight: "500",
                width: "33%",
                textTransform: "capitalize",
                borderRight: "1px",
                borderColor: "black",
              }}
              label='Room'
              value='2'
            />
            <Tab
              sx={{
                color: "black",
                fontWeight: "500",
                width: "33%",
                textTransform: "capitalize",
                borderRight: "1px",
                borderColor: "black",
              }}
              label='Entire Home'
              value='3'
            />
          </TabList>
        </Box>
        <TabPanel value='1'>Item One</TabPanel>
        <TabPanel value='2'>Item Two</TabPanel>
        <TabPanel value='3'>Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
