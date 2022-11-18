import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createticket, alltickets } from "../../features/tickets/ticketSlice";
import DisplayTickets from "../../components/DisplayTickets";


const token =
localStorage.getItem("token") !== null
  ? JSON.parse(localStorage.getItem("token"))
  : "";
  const user =
localStorage.getItem("user") !== null
  ? JSON.parse(localStorage.getItem("user"))
  : "";

console.log(token)
const axiosAuth = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
function MaintanceRequest() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    unitnum: '',
    category: "",
    detail: "",
  });
  // {$push:{detail:{'description':req.body.update,'date':new Date()}}},
  const {name,unitnum, category, detail } = form;
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category || !detail) {
      toast.error("Please enter all fields");
    } else {
      const ticketdetail = {name,unitnum, category, detail };
      try {
        const response = await axiosAuth.post("/ticket", ticketdetail, token,user);
        console.log(response.data);
        dispatch(createticket(response.data));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getalltickets = async () => {
    try {
      const response = await axiosAuth.get("/ticket", token)
      dispatch(alltickets(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getalltickets();
  }, []);

  return (
    <>
      <section className="heading">
    
        <h3>Submit a Maintance Request Ticket</h3>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
              <input
              type="number"
              className="form-control"
              id="unitnum"
              name="unitnum"
              value={unitnum}
              placeholder="Enter your House Unite"
              onChange={handleChange}
            />
            <select
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={category}
              placeholder="Select Category"
              onChange={handleChange}
            >
              <option></option>
              <option>Plumbing</option>
              <option>Electric</option>
              <option>Cosmetic repair</option>
              <option>Other</option>
            </select>
            <textarea
              type="detail"
              className="form-control"
              id="detail"
              name="detail"
              value={detail}
              placeholder="Describe your complaint"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    
      <DisplayTickets />
    </>
  );
}

export default MaintanceRequest;
