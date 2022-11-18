import React from 'react'
import ann from './ann.jpg'
import { Link} from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
function Announcement() {
  return (
    <div  className='portal-menu ann'>
     <h3> Announcement</h3> <br /><br />
      <img src={ann} alt='announcement'/> <br /><br />
    <h3>- Expect Maintance Visit on Dec 12 between 9am to 4pm</h3>
    <h3>- Notice to be sent to tenants not keeping their front door Hallway clean.</h3>
    
    <Link to="/profile"><MdArrowBackIosNew/></Link>
    </div>
  )
}

export default Announcement
