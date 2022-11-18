import React from 'react'
import { Link} from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

function Lease() {
  return (
    <div  className='portal-menu'>
  
  <h1>Lease Information</h1> <br /><br />
  <p>You lease agreement end at July'2024 Please Extend if you wish to stay with us. Thank you</p>
  <Link to="/profile"><MdArrowBackIosNew/></Link>
  </div>
  
  )
}

export default Lease
