import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";


const NewCustomerSuccess = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

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
          setUser(decoded);
        })
        .catch((err) => navigate("/login"));
    } catch (e) {
      navigate("/login");
      console.log(e);
    }
  }, []);

  return (
    <div >
     <h5>Neuer Kunde wurde erfolgreich angelegt</h5>
     <Button onClick={() => {navigate("/customer")}}>Zu den Kunden</Button>
    </div>
  );
};

export default NewCustomerSuccess;
