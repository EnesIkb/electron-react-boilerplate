import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";






const Login = () => {
  function AuthorizationHeader() {

    axios.interceptors.request.use(
        config => {
          config.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt-token')}`;
              return config;
          },
          error => {
              return Promise.reject(error);
          }
      );
}

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [redirecet, setRedirecet] = useState(false);
  const [isValid, setValid] = useState(false);
    const [user, setUser] = useState(false);
    const [token, setToken] = useState("");
    const [decoded, setDecoded] = useState();

  const navigate = useNavigate();



  useEffect(() => {
 

    
    try{
      AuthorizationHeader();
      setToken(localStorage.getItem(("jwt-token")));
      setDecoded(jwt_decode(token));
      axios.post('http://localhost:8080/user/isvalid', {

      userName:decoded.sub,
      token : token
    })
  .then(res =>{
     navigate("/")
  } 
      )
      .catch(
         navigate("/login")
      )

  }catch{
      navigate("/login")

  }
    
}, [])
    

  
  const handleSubmit = () => {
    axios.post("http://localhost:8080/login", {
      username:name,
      password:password
    },{
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      }
    })
    .then(function(response) {
      localStorage.setItem('jwt-token', response.data.token);
      navigate("/");
    })
    .catch(function(error) {
      console.log(error);
    })
  
  }



    return ( 
        <Form style={{marginLeft:"40%", marginRight:"40%", marginTop:"10%", marginBottom:"20%"}} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Benutzername</Form.Label>
          <Form.Control type="text" placeholder="Gebe deinen Benutzernamen ein" onChange={e => setName(e.target.value)}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Passwort</Form.Label>
          <Form.Control type="password" placeholder="Gebe deinen Passwort ein" onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Erinnere dich an diesen PC" />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Einloggen
        </Button>
      </Form>
     );
}
 
export default Login;