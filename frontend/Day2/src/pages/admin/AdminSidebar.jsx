import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { BiSolidDashboard, BiUser} from 'react-icons/bi';
import { FaServicestack } from 'react-icons/fa';
import { TbBrandBooking } from 'react-icons/tb';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import './../../assets/css/adminsidebar.css';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  const [isSmallSide, setIsSmallSide] = useState(true);

  const toggleSide = () => {
    setIsSmallSide(!isSmallSide);
  };

  return (
    <div className="adside-container">
      {isSmallSide ? (
        <div className="small-side">
          <ul>
            <br />
            <li onClick={toggleSide}>
              <FaBars size={40} />
            </li>
            <br />
            <br></br>
            <Link to="/homecare/adminhome">
            <li className='small-side-options' >
              <BiSolidDashboard size={35} />
            </li>
            </Link>
            <br />
            <Link to="/homecare/adminusermanage">
            <li className='small-side-options'>
              <BiUser size={35} />
            </li>
            </Link>
            <br />
            <Link to="/homecare/adminservicesmanage">
            <li className='small-side-options'>
              <FaServicestack size={35} />
            </li>
            </Link>
            <br />
            <Link to="/homecare/adminbookingsmanage">
            <li className='small-side-options'>
              <TbBrandBooking size={35} />
            </li>
            </Link>
            <br />
            <li className='small-side-options'>
              <RiLogoutCircleRFill size={35} />
            </li>
          </ul>
        </div>
      ) : (
        <div className="large-side">
          <ul>
            <br />
            <li onClick={toggleSide}>
              <FaBars size={40} />
            </li>
            <br></br>
            <br />
            <Link to="/homecare/adminhome">
            <li className="large-side-options">
              <p>Dashboard</p>
              <BiSolidDashboard size={35} />
            </li>
            </Link>
            <br />
            <Link to="/homecare/adminusermanage">
            <li className="large-side-options">
              <p>Users</p>
              <BiUser size={35} />
            </li>
            </Link>
            <br />
            <Link to="/homecare/adminservicesmanage">
            <li className="large-side-options">
              <p>Services</p>
              <FaServicestack size={35} />
            </li>
            </Link>
            <br />
            <li className="large-side-options">
              <p>Bookings</p>
              <TbBrandBooking size={35} />
            </li>
            <br />
            <li className="large-side-options">
              <p>Log Out</p>
              <RiLogoutCircleRFill size={35} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminSidebar;
