import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';


const RegisterSuccess = (props) => {
    const navigate = useNavigate();
    return (  
        <>
            <h1>
                Die Registrierung war erfolgreich
            </h1>
            <Button onClick={() => {
                navigate("/login")
            }}>
                Zum Login
            </Button>
        </>
    );
}
 
export default RegisterSuccess;