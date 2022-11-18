import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log(user)
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <h2>Tenant Portal</h2>
      <h1>Welcome {user.name} !!</h1>
      <section className="portal-section">
      <Link className='portal-menu' to="/profile/payment" > Payment
        </Link >
        <Link className='portal-menu' to="/profile/maintancerequest" > Maintance Request
        </Link >
        <Link  className='portal-menu' to="/profile/announcement">
        Announcement
        </Link>
        <Link className='portal-menu' to="/profile/lease"> Lease
        </Link>
        <Link  className='portal-menu' to="/profile/contacts"> Contacts
        </Link>
      </section>
    </div>
  );
}

export default Profile;
