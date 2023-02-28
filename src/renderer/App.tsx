import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarController from "../components/NavbarController";
import Profile from "pages/Profile";
import RegisterSuccess from "pages/RegisterSuccess";
import Customer from "pages/Customer";
import CreateCustomer from "pages/CreateCustomer";
import Login from "pages/Login";
import Register from "pages/Register";
import NewCustomerSuccess from "pages/NewCustomerSuccess";





export default function App() {
  return (
    <BrowserRouter>
    <NavbarController/>
      <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "3%" }}>
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="/registerSuccess" element={<RegisterSuccess />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/create" element={<CreateCustomer test={undefined} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customer/create/success" element={<NewCustomerSuccess/>}/>
        </Routes>
      </div>
  </BrowserRouter>
  );
}
