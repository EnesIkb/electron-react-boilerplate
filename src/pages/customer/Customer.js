import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { AiFillDelete } from 'react-icons/ai';
import { IoPersonAdd } from 'react-icons/io5';
import Modal from 'react-bootstrap/Modal';
import { FaUserEdit } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import CustomerList from './CustomerList';
import { Grid, TextField, Typography } from '@mui/material';
import CreateCustomer from './CreateCustomer';
import CreateCatModalTab from './CreateCustomerModalTab';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { MagnifyingGlassIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import "../../renderer/App.css"
import { CompactTable } from '@table-library/react-table-library/compact';
import Table from '@mui/material/Table';


const Customer = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [customers, setCustomers] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState(0);

  function AuthorizationHeader() {
    axios.interceptors.request.use(
      (config) => {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem(
          'jwt-token'
        )}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  let decoded;

  useEffect(() => {
    
    try {
      try {
        AuthorizationHeader();
        let token = localStorage.getItem('jwt-token');
        decoded = jwt_decode(token);
        setUser(decoded);

        axios
          .post('http://localhost:8080/user/isvalid', {
            userName: decoded.sub,
            token: token,
          })
          .then((res) => {
            axios
              .get(
                'http://localhost:8080/customer',
                {
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers':
                      'Origin, X-Requested-With, Content-Type, Accept',
                      'Authorization': `Bearer ${localStorage.getItem('jwt-token')}`
                  },
                }
              )
              .then((res) => {
                setCustomers(res.data);
                console.log(customers);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => navigate('/login'));
      } catch (e) {
        navigate('/login');
        console.log(e);
      }
    } catch (e) {
      navigate('/login');
      console.log(e);
    }
  }, []);

  function deleteUser(id) {
    axios
      .delete('http://localhost:8080/customer/' + String(id), {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
        },
      })
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
        alert('fehler');
      });
  }

  const [fullscreen, setFullscreen] = useState(true);
  const [showM, setShowM] = useState(false);

  function handleShowM() {
    setFullscreen(true);
    setShowM(true);
  }




    const [search, setSearch] = React.useState('');
  
    const handleSearch = (event) => {
      setSearch(event.target.value);
    };

  
    const COLUMNS = [
      { label: 'Vorname', renderCell: (item) => item.firstName },
      {
        label: 'Nachname',
        renderCell: (item) =>
         item.lastName
      },
    

    ];





  return (
    <>

          <Breadcrumbs aria-label="breadcrumb" style={{ marginTop: '-10px' }}>
            <Typography color="text.primary" fontWeight={500} fontSize="12px" color="#1C1D21">
              Kundenliste
            </Typography>
          </Breadcrumbs>
         
          <Modal
            show={showM}
            fullscreen={fullscreen}
            onHide={() => setShowM(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Kunde erstellen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CreateCatModalTab />
            </Modal.Body>
          </Modal>

          <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"41px"}}>
            <Typography fontWeight={100} fontSize="35px" >Kundenliste</Typography>
            <div style={{display:"flex", flexDirection:"row", alignItems:"flex-end", marginLeft:"auto",}}>
            <Button
            style={{display: 'flex', backgroundColor:"#24C3BF", border:0, borderRadius:"100px", alignItems:"center"}}
            onClick={() => handleShowM()}
          >
                   <PlusCircledIcon fontSize="13px"/> <Typography style={{marginLeft:"10px"}} fontSize="16px">Neuer Kunde</Typography>
   
          </Button>

          <TextField
            id="outlined-basic"
            className="inputRounded"
            label={<Typography color="#3C3C4399"> <MagnifyingGlassIcon/> Suche...</Typography>}
            variant="outlined"
            size="small"
            
            style={{ marginLeft:"14px", borderColor:"#3C3C432E", borderRadius:"200p" }}
          />

            </div>
          
          </div>


    

         <CustomerList customer={customers} />
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Benutzer löschen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bist du dir sicher, dass du den Benutzer löschen möchtest
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Abbbrechen
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteUser(id);
            }}
          >
            Löschen
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Customer;
