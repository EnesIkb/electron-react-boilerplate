import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarController from "../components/NavbarController";
import Profile from "pages/Profile";
import RegisterSuccess from "pages/RegisterSuccess";
import Customer from "pages/customer/Customer";
import CreateCustomer from "pages/customer/CreateCustomer";
import Login from "pages/Login";
import Register from "pages/Register";
import NewCustomerSuccess from "pages/customer/NewCustomerSuccess";
import CustomerView from "pages/customer/CustomerView";
import CarDetailedView from "pages/car/CarDetailedVIew";





export default function App() {
  return (
    <BrowserRouter>
    <div style={{backgroundColor:"#F4F5F51A"}}>

    <NavbarController/>
      <div style={{marginLeft: "270px", marginTop: "3%", backgroundColor:"#F4F5F51A" }}>
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="/registerSuccess" element={<RegisterSuccess />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/create" element={<CreateCustomer test={undefined} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customer/create/success" element={<NewCustomerSuccess/>}/>
          <Route path="/customer/view" element={<CustomerView/>}/>
          <Route path="/car/view" element={<CarDetailedView/>}/>

        </Routes>
      </div>
      </div>

  </BrowserRouter>
  );
}
