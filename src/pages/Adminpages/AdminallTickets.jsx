import axios from "axios";
import { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";






export default function AdminallTickets() {
 
  const [tickets, setTickets] = useState(null);
  const token =
    localStorage.getItem("token") !== null
      ? JSON.parse(localStorage.getItem("token"))
      : "";

  /////////////////////////////////////////
  const axiosAuth = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //////////////////////////////
  const getallTickets = async () => {
    try {
      const response = await axiosAuth.get("/admin/getallticket",token);
const res = response.data
console.log(res)
     setTickets(response.data.tickets) 
     } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallTickets();
  }, []);

  // const handleEdit=async(item)=>{
  //   const id = item._id;
  //   try {
  //     const response = await axiosAuth.put(`/admin/edit/${id}`,token);
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <div>
    <h1>All Tickets</h1>
    <MDBTable align="middle">
      <MDBTableHead className="tablehead" blue-gradient>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">House Unit No</th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">Created Date</th>
          <th scope="col">Ticket Number</th>
          <th scope="col">Edit</th>
  
        </tr>
      </MDBTableHead >
      {tickets?.map((item, i) => {
        return (
          <MDBTableBody key={item._id}>
            <tr className="xxx " >
              <th scope="row">{item.name}</th>
              <th scope="row">{item.unitnum}</th>
              <td className="xx" >{item.category}</td>
            
              {item.detail.map((des, i) => {
                return (
                  <ul>
                    <li>{des.description}</li> 
                  </ul>
                );
              })}
              <hr />
              <td className={item.status === 'In Progress'?"green":item.status === 'Closed'?"red":'orange'}>{item.status}</td>
              <td>{item.createdAt}</td>
              <td>{item.user}</td>
             <Link to={`/admin/ticket/${item._id}`}> <MdOutlineModeEditOutline /> </Link>
            </tr>
          </MDBTableBody>
        );
      })}
    </MDBTable>                                              
  </div>
  );
}
