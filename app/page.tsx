"use client";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SyntheticEvent, useState } from "react";
import BusinessArticle from "./components/BusinessArticle";
import TechnicalArcticle from "./components/TechnicalArcticle";
import UserManual from "./components/UserManual";
import { ThemeProvider } from "@mui/material";
import theme from "./components/theme";
import Info from "./components/Info";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            paddingTop: 3,
            paddingLeft: { sm: 3, sx: 0 },
            paddingRight: { sm: 3, sx: 0 },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            style={{ justifyContent: "center" }}
            sx={{
              [`& .${tabsClasses.scroller}`]: {
                "&.MuiTabs-scrollableX": { flexGrow: "0" },
              },
            }}
          >
            <Tab label="Info" {...a11yProps(0)} />
            <Tab label="App Flow" {...a11yProps(1)} />
            <Tab label="Technical Details" {...a11yProps(2)} />
            <Tab label="Business Insights" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Info />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <UserManual />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <TechnicalArcticle />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <BusinessArticle />
        </CustomTabPanel>
      </Box>
    </ThemeProvider>
  );
}
