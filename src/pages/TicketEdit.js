import axios from "axios";
import { useState } from "react";
import { useParams,useNavigate,Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

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

function TicketEdit() {
    const navigate = useNavigate()
  const { tickets } = useSelector((state) => state.ticket);
  let params = useParams();
  const filtereddata = tickets.filter((item) => item._id === params.id);
const id =filtereddata[0]._id
  const [update, setUpdate] = useState('');

  const handleChange = (e) => {
    setUpdate( e.target.value);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(update)
    if(update === ''){
        toast.error("Please enter all fields");
    }else{
        const response = await axiosAuth.put(`/ticket/${id}`,{update}, token);
        console.log(response.data);
        navigate('/profile/maintancerequest')
    }
  }

  return (
    <div>
      Edit Your Ticket
      <div>
        <span>{filtereddata[0].category} Issue</span>

        <form onSubmit={handleSubmit} className="form-group">
          <textarea
            type="update"
            id="update"
            name="update"
            value={update}
            placeholder="update your complaint"
            onChange={handleChange}
          ></textarea>
          <div className="form-group">
            <button className="edit-btn" type="submit">
              Update
            </button>
            <Link to={`/profile/maintancerequest`}>
            <button className="edit-btn" type="submit">
              Cancle
            </button>  </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TicketEdit;
