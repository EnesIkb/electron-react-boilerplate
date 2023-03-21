import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { FaEdit} from 'react-icons/fa';
import { Button, Fab, Grid } from '@mui/material';
import { HiOutlineDocumentText } from 'react-icons/hi';
import Tabes from '../Tab';
import { Image } from 'react-bootstrap';
import TabCar from './TabCar';

const CarDetailedView = () => {
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
                'http://localhost:8080/customer/get/' +
                  localStorage.getItem('jwt-token') +
                  '/' +
                  decoded.sub,
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
      <Button href="/customer" style={{fontSize:"10px"}}>Zurück</Button>
      <Grid container spacing={0} style={{ marginLeft: '5%' }}>
      
        <Grid item xs={2} style={{ borderRight: 'solid 0.5px grey' }}>

            <Image src= {require('../../images/2023.png')} style={{height:"10%", marginLeft:"-20%"}}/>
          

          <h5
            style={{
              marginTop: '30%',
              fontWeight: 'lighter',
              fontSize: '15px',
              color:"blue"
            }}
          >
            Marke
          </h5>
          <h6>Audi</h6>

          <h5
            style={{
              marginTop: '5%',
              fontWeight: 'lighter',
              fontSize: '15px',
              color:"blue"
            }}
          >
            Modell
          </h5>
          <h6>A7</h6>

          <h5
            style={{ marginTop: '5%', fontWeight: 'lighter', fontSize: '15px', color:"blue" }}
          >
            Baujahr
          </h5>
          <h6>2019</h6>

          <h5
            style={{ marginTop: '5%', fontWeight: 'lighter', fontSize: '15px', color:"blue" }}
          >
            VIN
          </h5>
          <h6> LJKSHSJOJA2232LKNS</h6>
          <h5
            style={{ marginTop: '5%', fontWeight: 'lighter', fontSize: '15px', color:"blue"}}
          >
            Kennzeichen
          </h5>
          <h6> DU-EA-1907</h6>
          <h5
            style={{ marginTop: '5%', fontWeight: 'lighter', fontSize: '15px', color:"blue"}}
          >
            Status
          </h5>
          <h6 style={{color:'blue'}}> Probefahrt</h6>

        
        </Grid>
        <Grid item xs={8}>
        <TabCar/>
        </Grid>
      </Grid>
    </>
  );
};

export default CarDetailedView;
