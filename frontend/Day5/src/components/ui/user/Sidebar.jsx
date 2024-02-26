import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './../../../assets/css/Sidebar.css'

import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ onClose }) => {
  return (
    <div className="sidebar">
        <li onClick={onClose}><FaTimes/></li>
        <br></br>
        <center>
        <b>
        <Link to = '/profile'><p className='options_option'>Profile</p></Link>

        <p className='options_option'>Help</p>

        <p className='options_option'>Settings</p>

        <Link to ='/feed'><p className='options_option'>Testimonials</p></Link>

        <p className='options_option'>Log Out</p>
        </b>
        </center>
    </div>
  );
};
Sidebar.propTypes ={
    onClose:PropTypes.bool.isRequired
}

export default Sidebar;
