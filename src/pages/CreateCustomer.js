import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateCustomer = ({ test }) => {
  const [isValid, setValid] = useState(false);
  const [token, setToken] = useState('');
  const location = useLocation();

  let decoded;

  const user = useState({
    customerNr: '',
    salutation: '',
    firstName: '',
    lastName: '',
    street: '',
    username: '',
    nameOfWorkshop: '',
  });

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
  const navigate = useNavigate();
  useEffect(() => {
    try {
      try {
        AuthorizationHeader();
        let token = localStorage.getItem('jwt-token');
        decoded = jwt_decode(token);

        axios
          .post('http://localhost:8080/user/isvalid', {
            userName: decoded.sub,
            token: token,
          })
          .then((res) => {})
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

  function handleSubmit() {
    user[0].nameOfWorkshop = decoded.sub;
    axios
      .post('http://localhost:8080/customer/create', user[0], {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
        },
      })
      .then((res) => {
        navigate('/customer/create/success');
      })
      .catch((err) => {
        console.log(user[0]);
        console.log(err);
      });
  }

  return (
    <Form style={{ marginLeft: '20%', marginRight: '20%', marginTop: '3%' }}>
      <h2>Kunden erstellen</h2>

      <Container>
        <Row style={{backgroundColor:"grey"}}>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Kundennummer</Form.Label>
              <Form.Control
                disabled="true"
                defaultValue="12"
                type="text"
                placeholder="Kundennummer"
                onChange={(e) => {
                  user[0].firstName = e.target.value;
                }}
              />
            </Form.Group>
          </Col>

          <Col>
            <FormGroup>
              <Form.Label>Kundenart</Form.Label>
              <Form.Select
                placeholder="Gebe den Nachnamen ein"
                onChange={(e) => {
                  user[0].lastName = e.target.value;
                }}
              >
                <option>Standard</option>
                <option>Firma</option>
                <option>Verein</option>
              </Form.Select>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Form.Label>Anrede</Form.Label>
              <Form.Select
                placeholder="Anrede"
                onChange={(e) => {
                  user[0].lastName = e.target.value;
                }}
              >
                <option>Herr</option>
                <option>Frau</option>
                <option>Divers</option>
              </Form.Select>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Vorname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gebe den Vornamen ein"
                onChange={(e) => {
                  user[0].firstName = e.target.value;
                }}
              />
            </Form.Group>
          </Col>

          <Col>
            <FormGroup>
              <Form.Label>Nachname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gebe den Nachnamen ein"
                onChange={(e) => {
                  user[0].lastName = e.target.value;
                }}
              />
            </FormGroup>
          </Col>

          <Row style={{marginTop:"3%"}}>
            <Col sm={8}>
              <FormGroup>
                <Form.Label>Straße</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Gebe den Nachnamen ein"
                  onChange={(e) => {
                    user[0].lastName = e.target.value;
                  }}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row style={{marginTop:"3%"}}>
            <Col sm={3}>
              <FormGroup>
                <Form.Label>PLZ</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Gebe den Nachnamen ein"
                  onChange={(e) => {
                    user[0].lastName = e.target.value;
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm={8}>
              <FormGroup>
                <Form.Label>Ort</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Gebe den Nachnamen ein"
                  onChange={(e) => {
                    user[0].lastName = e.target.value;
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          
        </Row>
      </Container>

      <Button
        variant="primary"
        style={{ marginTop: '2%' }}
        onClick={handleSubmit}
      >
        Erstellen
      </Button>
    </Form>
  );
};

export default CreateCustomer;
