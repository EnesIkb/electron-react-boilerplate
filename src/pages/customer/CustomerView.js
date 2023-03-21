import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import {
  Breadcrumbs,
  Button,
  Fab,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { HiOutlineDocumentText } from 'react-icons/hi';
import Tabes from '../Tab';

const CustomerView = ({ userm }) => {
  const locatio = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [customers, setCustomers] = useState([]);

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
                'http://localhost:8080/customer/' +
                  locatio.state.userm.id,
                {
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers':
                      'Origin, X-Requested-With, Content-Type, Accept',
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

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ marginTop: '-10px', marginLeft: '50px' }}
      >
        <Link underline="hover" color="inherit" href="/customer">
          <Typography color="inherit" fontWeight={500} fontSize="12px">
            Kundenliste
          </Typography>
        </Link>

        <Typography
          color="text.primary"
          fontWeight={500}
          fontSize="12px"
          color="#1C1D21"
        >
          Kundenprofil
        </Typography>
      </Breadcrumbs>


    <div style={{marginLeft:"120px", marginTop:"55px"}}>
    <Tabes customer={customers}/>
    {
    }
    </div>
   
    </>
  );
};

export default CustomerView;
