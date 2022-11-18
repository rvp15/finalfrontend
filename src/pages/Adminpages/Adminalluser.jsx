import axios from "axios";
import { useEffect, useState } from "react";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { AiOutlineDelete } from "react-icons/ai";

export default function Adminalluser() {
  const [tenants, setTenants] = useState([]);
  const user =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : "";

  /////////////////////////////////////////
  const axiosAuth = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  //////////////////////////////
  const getallTenant = async () => {
    try {
      const response = await axiosAuth.get("/admin/getalluser", user.token);
      setTenants(response.data);
      console.log(response.data);
      //   dispatch(alltickets(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallTenant();
  }, []);

  const handleDelete = async (item) => {
    // console.log(item._id);
    const id = item._id;
    try {
      const response = await axiosAuth.delete(`/admin/delete/${id}`,user.token);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>All Tenants</h1>
      <MDBTable align="middle">
        <MDBTableHead light>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Delete</th>
          </tr>
        </MDBTableHead>
        {tenants.map((item,i) => {
          return (
            <MDBTableBody key={item._id}>
              <tr>
                <th scope="row">#</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phnumber}</td>
                <td
                  onClick={(e) => {
                    handleDelete(item);
                  }}
                >
                  <AiOutlineDelete />
                </td>
              </tr>
            </MDBTableBody>
          );
        })}
      </MDBTable>
    </div>
  );
}
