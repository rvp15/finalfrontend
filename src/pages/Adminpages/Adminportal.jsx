import { Link } from "react-router-dom";

function Adminportal() {
  return (
    <div className='admin-ctn'>
      <h2>Admin Portal</h2>
<div className='admin-container'>
<Link className='tenant-li' to="/admin/alltenants"> All Tenants List</Link >
<Link className='ticket-li' to="/admin/alltickets" >All Tickets </Link >
 
</div>
    </div>
  )
}

export default Adminportal