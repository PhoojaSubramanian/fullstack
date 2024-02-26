import { Link } from 'react-router-dom';
import './../../../assets/css/navbar.css';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="nav_container">
      <div className="left">
        {/* <img src="" alt="Logo" /> */}
        <p>Logo</p>
      </div>
      <div className="right">
        <ul>
          <li>
            <Link to="/homecare/home">Home</Link>
          </li>
          <li><Link to="/homecare/allservices">Services</Link></li>
          <li>About Us</li>
          <li onClick={toggleSidebar}> <FaBars /></li>
          {showSidebar && <Sidebar onClose={toggleSidebar} />}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
