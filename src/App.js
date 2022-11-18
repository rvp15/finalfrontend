import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Payment from "./pages/portalpages/Payment";
import MaintanceRequest from "./pages/portalpages/MaintanceRequest";
import Announcement from "./pages/portalpages/Announcement";
import Lease from "./pages/portalpages/Lease";
import Contacts from "./pages/portalpages/Contacts";
import TicketEdit from "./pages/TicketEdit";
import Adminlogin from "./pages/Adminlogin";
import Adminportal from "./pages/Adminpages/Adminportal";
import Adminalluser from "./pages/Adminpages/Adminalluser";
import AdminallTickets from "./pages/Adminpages/AdminallTickets";
import AdminEditTicket from "./pages/Adminpages/AdminEditTicket";
import Amenities from "./pages/Amenities";

function App() {
  const { user } = useSelector((state) => state.auth);
  let routes;
  if (user) {
    if (user.isadmin) {
      routes = (
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/admin/adminportal" element={<Adminportal />} />
          <Route path="/admin/alltenants" element={<Adminalluser />} />
          <Route path="/admin/alltickets" element={<AdminallTickets />} />
          <Route path="/admin/ticket/:id" element={<AdminEditTicket/>} />
          <Route path='/amenities' element={<Amenities/>}></Route>
        </Routes>
      );
    } else {
      routes = (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/payment" element={<Payment />} />
          <Route
            path="/profile/maintancerequest"
            element={<MaintanceRequest />}
          />
          <Route path="/profile/announcement" element={<Announcement />} />
          <Route path="/profile/lease" element={<Lease />} />
          <Route path="/profile/contacts" element={<Contacts />} />
          <Route path="/ticket/:id" element={<TicketEdit />} />
          <Route path='/amenities' element={<Amenities/>}></Route>
       
        </Routes>
      );
    }
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} />
        <Route path='/amenities' element={<Amenities/>}></Route>
      </Routes>
    );
  }
  console.log(routes)
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          {routes}
          <Routes></Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
