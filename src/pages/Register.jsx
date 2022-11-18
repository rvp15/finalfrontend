import axios from "axios";
import { useState} from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch} from "react-redux";
import { setuser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
// import Spinner from "../components/Spinner";


const axiosAuth = axios.create({
  baseURL: "http://localhost:5000/api",
});

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
//   const [loading,setLoading] =useState(false)
  const [form, setForm] = useState({
    name: "",
    phnumber: '',
    unitnum:'',
    email: "",
    password: "",
    confirmpwd: "",
  });

   
    const { name,phnumber, unitnum,email, password, confirmpwd } = form;
//   const {user} = useSelector((state)=>state.auth)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmpwd){
        toast.error('Password do not match')
    }else{
        const userData ={name,phnumber,unitnum,email,password}
        try {
        //    setLoading(true)
            const response = await axiosAuth.post("/user/register", userData);
            console.log(response);
            dispatch(setuser(response.data));
           
            // setLoading(false)
            navigate("/profile");
            toast.success('Registration successfully completed! ')
          } catch (error) {
              console.log(error.response.data.error)
              toast.error('User Already Exist')
          }
    }
    // if(loading){
    //     return<Spinner/>
    // }
  
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Create an Account</p>
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
              id="phnumber"
              name="phnumber"
              value={phnumber}
              placeholder="Enter your Phone Number"
              onChange={handleChange}
            />
                    <input
              type="number"
              className="form-control"
              id="unitnum"
              name="unitnum"
              value={unitnum}
              placeholder="Enter your House Unit Number"
              onChange={handleChange}
            />
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
            <input
              type="password"
              className="form-control"
              id="confirmpwd"
              name="confirmpwd"
              value={confirmpwd}
              placeholder="Confirm password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
