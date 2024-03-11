import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './../../../assets/css/Sidebar.css'
import { CgProfile } from "react-icons/cg";

import { FaTimes } from 'react-icons/fa';
import { logout } from '../../../services/auth';

const Sidebar = ({ onClose }) => {
  return (
    <div className="sidebar">
      <div style={{backgroundColor:'#49274a'}}>
        <li onClick={onClose}><FaTimes/></li>
        <center>
          <CgProfile size={50}/>
          <br></br>
          <br></br>
          <p>Welcome Phooja!</p>
          <br></br>
        </center>
        </div>

        <Link to = '/profile'><p className='options_option'>Profile</p></Link>

        <p className='options_option'>Help</p>

        <p className='options_option'>Settings</p>

        <Link to ='/feed'><p className='options_option'>Testimonials</p></Link>

        <p className='options_option'><button onClick={() => logout()}>Log Out</button></p>


    </div>
  );
};
Sidebar.propTypes ={
    onClose:PropTypes.func.isRequired
}

export default Sidebar;
