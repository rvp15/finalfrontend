import { MdOutlineLogin } from "react-icons/md";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutuser } from "../features/auth/authSlice";
import { resetTicket } from "../features/tickets/ticketSlice";
import { GiFlowers } from "react-icons/gi";
import React, { useState } from "react";
import Menu from "./menu/Menu";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutuser(user));
    dispatch(resetTicket());
    navigate("/");
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <span className="material-icons menu-btn" onClick={() => setIsOpen(true)}>
        menu
      </span>
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
 <Link to="/">
          <h3 className="villa">
            <span className="flower">
              <AiTwotoneHome />
            </span>
          </h3>
        </Link>
      <div className="logo">
       <h2 className="villa">
          <span> Sudiksha Villas</span>{" "}
          <span className="sudiksha">At Marlboro</span>
          <span className="flower">
            {" "}
            <GiFlowers />
          </span>
        </h2>
      </div>
      <ul>
        {user ? (
          <>
            {user.isadmin ? (
              <ul>
                <Link to="/admin/adminportal">
                  <h3>
                    <FaUser />
                    {user.name}
                  </h3>
                </Link>
                <li >
                  <button className="btn " onClick={handleLogout}>
                    <FaSignOutAlt />
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <>
                <li>
                  <Link to="/profile">
                    <h3>
                      <FaUser />
                      {user.name}
                    </h3>
                  </Link>
                </li>
                <li>
                  <button className="btn" onClick={handleLogout}>
                    <FaSignOutAlt />
                    Logout
                  </button>
                </li>
              </>
            )}
          </>
        ) : (
          <ul>
            {" "}
            <li>
              <Link to="/adminlogin">
                <RiLoginBoxFill />
                Admin Login
              </Link>
            </li>
            <li>
              <Link to="/login">
                <MdOutlineLogin />
                Tenant Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser />
                Register
              </Link>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
