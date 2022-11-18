import { useState} from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setuser ,settoken} from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify'


const axiosAuth = axios.create({
  baseURL: "http://localhost:5000/api",
});


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axiosAuth.post("/user/login", form);
      console.log(response);
      dispatch(setuser(response.data));
      toast.success('Logged In successfully!')
   navigate('/profile')
  
    }catch(error){
      toast.error('Invalid Credentials')
      console.log(error.response.data.error)
     
    }
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Tenant Login
        </h1>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Login
            </button>
          </div>
        </form>
      </section>
     
    </>
  );
}

export default Login;
