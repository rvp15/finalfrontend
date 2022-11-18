import React from 'react'
import {Table} from 'react-bootstrap';
import { Link} from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
function Contacts() {
  return (
    <div  className='portal-menu'><h1>Emergency Contacts</h1>
    {/* <br /><br />
    <div> <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone number</th>
          <th>Service</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Willy</td>
          <td>5677895768</td>
          <td>Apartment Manager</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>346565768</td>
          <td>Plumbing</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>7685646736</td>
          <td>Leasing Office</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>4535645869</td>
          <td>On-Site Service</td>
        </tr>
      </tbody>
    </Table>
    <Link to="/profile"><MdArrowBackIosNew/></Link>
    </div> */}
    </div>
  )
}

export default Contacts