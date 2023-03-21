import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CarsView from './car/CarsView';
import { createMuiTheme, MuiThemeProvider } from '@mui/material';
import { blue, red } from '@mui/material/colors';
import CustomerOver from './customer/customerOver';
import { useLocation } from 'react-router-dom';


function TabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Tabes(props) {
  const locatio = useLocation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{  }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs"    sx={{
            '& .MuiTabs-indicator': { backgroundColor: "#24C3BF" },
            '& .MuiTab-root': { color: "black", fontWeight:"400px", fontSize:"15px", textTransform: "none" },
            '& .Mui-selected': { color: "#24C3BF", fontWeight:"600px", fontSize:"15px", textTransform: "none" },
          }}
>
          <Tab label="Überblick" {...a11yProps(0)} />
          <Tab label="Profil" {...a11yProps(1)} />
          <Tab label="Aufträge" />
          <Tab label="Fahrzeuge" {...a11yProps(3)} />
          <Tab label="Bestellungen" {...a11yProps(4)} />
          <Tab label="Rechnungen" {...a11yProps(3)} />
          <Tab label="Termine"{...a11yProps(4)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CustomerOver customer={locatio.state.userm}/>
    {() => console.log(locatio.state.customer)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
    </Box>
  );
}
