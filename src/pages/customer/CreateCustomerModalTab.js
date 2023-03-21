import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CreateCustomer from './CreateCustomer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
     
   return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function CreateCustomerModalTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224, height:"100%" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label=""
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Kundeninformation" {...a11yProps(0)} />
        <Tab label="Kontaktinformationen" {...a11yProps(1)} />
        <Tab label="Fahrzeug" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
       <CreateCustomer/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      
    </Box>
  );
}