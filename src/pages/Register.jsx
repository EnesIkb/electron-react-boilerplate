import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import jwt_decode from "jwt-decode";



const Register = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isValid, setValid] = useState(false);
  const [user, setUser] = useState(false);

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

useEffect(() => {
    AuthorizationHeader();
    var token = localStorage.getItem(("jwt-token"));
    if(!token === null){
      var decoded = jwt_decode(token);
    }
}, [])

if(isValid){
    navigate('/');
}



  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:8080/register",
        {
          name: name,
          email: email,
          username: userName,
          password: password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
          },
        }
      )
      .then(function (response) {
        navigate('/registerSuccess');    
        console.log(response);
      })
      .catch(function (error) {
        alert("Fehler bei der Registrierung");
        alert(error);
      });
  };

  return (
    <Form
      style={{
        marginLeft: "40%",
        marginRight: "40%",
        marginTop: "10%",
        marginBottom: "20%",
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Gebe deinen Benutzernamen ein" onChange={e => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-Mail</Form.Label>
        <Form.Control type="email" placeholder="Gebe deine Email ein" onChange={e => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Gebe deine Email ein" onChange={e => setUserName(e.target.value)}/>
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
};

export default Register;
