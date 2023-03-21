import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CarsView from './CarsView';
import Fahrzeugschein from './Fahrzeugschein';
import { TextField } from '@mui/material';

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

export default function TabCar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  textColor="primary"
  indicatorColor="primary"
>
          <Tab label="Fahrzeugschein" {...a11yProps(0)} />
          <Tab label="Bestellungen" {...a11yProps(1)} />
          <Tab label="Aufträge" {...a11yProps(2)} />
          <Tab label="Servicehistorie" {...a11yProps(3)} />
          <Tab label="Technische Informationen" {...a11yProps(4)} />
          <Tab label="Teile- und Zubehör" {...a11yProps(5)} />
          <Tab label="Garantie" {...a11yProps(5)} />
          <Tab label="Dokumente" {...a11yProps(5)} />
          <Tab label="Bemerkungen" {...a11yProps(3)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Fahrzeugschein/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TextField>

        </TextField>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TextField>
          
        </TextField>
      </TabPanel>
    </Box>
  );
}
