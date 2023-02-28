import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import { AiFillDelete } from "react-icons/ai";
import { IoPersonAdd } from "react-icons/io5";
import Modal from "react-bootstrap/Modal";
import {FaUserEdit} from "react-icons/fa";
import {MdModeEdit} from "react-icons/md";
import CustomerList from "./CustomerList";

const Customer = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [customers, setCustomers] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState(0);

  function AuthorizationHeader() {
    axios.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem(
          "jwt-token"
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
        let token = localStorage.getItem("jwt-token");
        decoded = jwt_decode(token);
        setUser(decoded);

        axios
          .post("http://localhost:8080/user/isvalid", {
            userName: decoded.sub,
            token: token,
          })
          .then((res) => {
            axios
              .get(
                "http://localhost:8080/customer/get/" +
                  localStorage.getItem("jwt-token") +
                  "/" +
                  decoded.sub,
                {
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers":
                      "Origin, X-Requested-With, Content-Type, Accept",
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
          .catch((err) => navigate("/login"));
      } catch (e) {
        navigate("/login");
        console.log(e);
      }
    } catch (e) {
      navigate("/login");
      console.log(e);
    }
  }, []);

  function deleteUser(id) {
    axios
      .delete("http://localhost:8080/customer/" + String(id), {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      })
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
        alert("fehler");
      });
  }

  return (
    <>
      <Button
        style={{ marginBottom: "1%" }}
        onClick={() => navigate("/customer/create")}
      >
        Kunde hinzufügen <IoPersonAdd />
      </Button>

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

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Benutzername</th>
            <th>Auto</th>
            <th>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((ob) => (
            <tr>
              <td>{ob.firstName}</td>
              <td>{ob.lastName}</td>
              <td>{ob.userName}</td>
              <td>Kommt</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  style={{marginBottom:"-2%", marginTop:"-2%"}}
                  onClick={() => {
                    handleShow();

                    setId(ob.id);
                  }}
                >
                  <AiFillDelete />
                </Button>

                  <Button onClick={() => {
                    navigate('/customer/create', {state:{test:ob}});
                  }} variant="warning" size="sm" style={{marginBottom:"-2%", marginTop:"-2%", marginLeft:"4%"}}>
                    <MdModeEdit color="white"/>
                  </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <CustomerList customer={customers}/>
    </>
  );
};

export default Customer;
