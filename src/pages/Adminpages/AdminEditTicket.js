import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const token =
  localStorage.getItem("token") !== null
    ? JSON.parse(localStorage.getItem("token"))
    : "";

const axiosAuth = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

function AdminEditTicket() {
  const [tickets, setTickets] = useState(null);
  const [update, setUpdate] = useState({'update':''});
  const [filteredTicket, setFilteredTicket] = useState(null);
  // const navigate = useNavigate()

  let params = useParams();
  console.log(params.id);

  const getallTickets = async () => {
    try {
      const response = await axiosAuth.get("/admin/getallticket", token);
      const res = response.data;
      console.log(res);
      setTickets(response.data.tickets);
      const filteredTicket = tickets?.filter((item) => item._id === params.id);
      setFilteredTicket(filteredTicket);
      console.log('filteredTicket', filteredTicket)    
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallTickets();
  }, []);

  const handleChange = (e) => {
    setUpdate({ 'update': e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(update);
    try {
      const response = await axiosAuth.put(
        `/admin/edit/${params.id}`,
         update ,
        token
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1>Edit Ticket Status</h1>
      <div>
        {filteredTicket?.map((item) => {
          return (
            <ul>
              <li>
                <span>Tenant Name:{item.name}</span> <br />
                <span>House Number:{item.unitnum}</span>
                <br />
                <span>Update Status of Ticket</span>
              </li>
            </ul>
          );
        })}

        <form onSubmit={handleSubmit} className="form-group adminedit">
          <select
            type="text"
            className="form-control"
            id="update"
            name="update"
            value={update.update}
            placeholder="Select Category"
            onChange={handleChange}
          >
            <option></option>
            <option>In Progress</option>
            <option>Closed</option>
          </select>
          <div className="form-group">
            
            <button className="edit-btn" type="submit">
              Update
            </button>
            <Link to={`/admin/alltickets`}>
              <button className="edit-btn" type="submit">
                Back
              </button>{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminEditTicket;
