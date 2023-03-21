import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Add, CarRentalOutlined, Dashboard } from '@mui/icons-material';
import { padding } from '@mui/system';
import { CalendarMonthOutlined } from '@mui/icons-material';
import { HiDocument } from 'react-icons/hi';
import { IoDocumentsOutline } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import { DashboardIcon } from '@radix-ui/react-icons';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

const NavbarMan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let path = location.pathname;

  if (
    location.pathname === '/register' ||
    location.pathname === '/login' ||
    location.pathname === '/registerSuccess'
  ) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex'}}>
      <Drawer
        sx={{
          width: 268,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor:"#F4F5F51A" 
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img src={logo} height="150px" width="150px" style={{alignSelf:"center"}}/>

      


        <Typography
          fontWeight={500}
          fontSize="12px"
          style={{ marginLeft: '28px', marginBottom: 0, padding: 0 }}
        >
          MAIN
        </Typography>
        <List disablePadding="true" style={{ margin: 0, padding: 0, background:"opacity:0" }}>
          <ListItem key="dashboard" disablePadding="true" onClick={() => navigate("/")}>
            <ListItemButton
              style={{
                padding: 0,
                marginLeft: '28px',
                marginTop: '10px',
                marginRight: '28px',
              }}
            >
              <ListItemIcon color="red">
                <DashboardIcon fontSize="13px" style={ path==='/' ? {color:'#24C3BF'} : {}}/>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    fontWeight={500}
                    fontSize="13px"
                    style={path==='/' ? {color:'#24C3BF', marginLeft: '-28px', marginBottom: 0, padding: 0} : { marginLeft: '-28px', marginBottom: 0, padding: 0} }
                  >
                    Dashboard
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

     

          <ListItem key="terminplaner" disablePadding="true" onClick={() => navigate("/car/view")}>
            <ListItemButton
              style={{
                padding: 0,
                marginLeft: '28px',
                marginTop: '10px',
                marginRight: '28px',
              }}
            >
              <ListItemIcon>
                <MaterialIcon icon="calendar_today" size="13px"/>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    fontWeight={500}
                    fontSize="13px"
                    style={{ marginLeft: '-28px', marginBottom: 0, padding: 0 }}
                  >
                    Terminplaner
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          <ListItem key="aufträge" disablePadding="true">
            <ListItemButton
              style={{
                padding: 0,
                marginLeft: '28px',
                marginTop: '10px',
                marginRight: '28px',
              }}
            >
              <ListItemIcon>
              <MaterialIcon icon="text_snippet" size="13px"/>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    fontWeight={500}
                    fontSize="13px"
                    style={{ marginLeft: '-28px', marginBottom: 0, padding: 0 }}
                  >
                    Aufträge
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          <ListItem key="kunden" disablePadding="true" onClick={() => navigate("/customer")}>
            <ListItemButton
              style={{
                padding: 0,
                marginLeft: '28px',
                marginTop: '10px',
                marginRight: '28px',
              }}
            >
              <ListItemIcon>
                <AiOutlineUser fontSize="13px" style={ path==='/customer' ? {color:'#24C3BF'} : {}} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    fontWeight={500}
                    fontSize="13px"
                    style={path==='/customer' ? {color:'#24C3BF', marginLeft: '-28px', marginBottom: 0, padding: 0} : { marginLeft: '-28px', marginBottom: 0, padding: 0} }
                  >
                    Kunden
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          <ListItem key="fahrzeuge" disablePadding="true">
            <ListItemButton
              style={{
                padding: 0,
                marginLeft: '28px',
                marginTop: '10px',
                marginRight: '28px',
              }}
            >
              <ListItemIcon>
              <MaterialIcon icon="directions_car" size="13px"/>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    fontWeight={500}
                    fontSize="13px"
                    style={{ marginLeft: '-28px', marginBottom: 0, padding: 0 }}
                  >
                    Fahrzeuge
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider style={{marginTop:"10px"}}/>
       <Button style={{marginLeft:"28px", marginRight:"28px", borderRadius:"30px", background:"#24C3BF", border:0, marginTop:"40px",display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}} >
        <Add style={{fontSize:"13px", marginLeft:"-18px"}}/> <Typography flexDirection="row" style={{marginLeft:"5px",fontSize:"13px", fontWeight:"600"}}>Neuer Auftrag</Typography>
       </Button>
       <div style={{marginLeft:"16px", display:"flex", flexDirection:"row", alignItems:"center", marginTop:"auto", marginBottom:"25px"}}>
       <Avatar style={{marginRight:"13px", height:"30px", width:"30px"}}/>
        <Typography fontWeight={600} fontSize="13px" >Enes Ilkbay</Typography>
       </div>
      </Drawer>
    </Box>
  );
};

export default NavbarMan;
