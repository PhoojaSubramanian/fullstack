import { FaUsers } from "react-icons/fa"
import { FaMoneyCheck } from "react-icons/fa6";
import { FaServicestack } from 'react-icons/fa';
import { TbBrandBooking } from 'react-icons/tb';

import './../../assets/css/adminhome.css'
const AdminHome = () => {
  return (
    <div className="dash">
      <div className="top-stat">
        <div className="stat">
          <div>
            <FaUsers size={50}/>
          </div>
          <div>
          <p>Total Users</p>
          <p>2000</p>
          </div>
        </div>

        <div className="stat1">
          <div>
            <FaServicestack size={50}/>
          </div>
          <div>
          <p>Total Services</p>
          <p>20</p>
          </div>
        </div>

        <div className="stat2">
          <div>
            <TbBrandBooking size={50}/>
          </div>
          <div>
          <p>Total Bookings</p>
          <p>4000</p>
          </div>
        </div>

        <div className="stat3">
          <div>
            <FaMoneyCheck size={50}/>
          </div>
          <div>
          <p>Total Revenue</p>
          <p>Rs.200000</p>
          </div>
        </div>
        </div>
        <p style={{fontVariant:'small-caps',color:'#49274a',fontSize:'25px',margin:'20px'}}>Recent Activities</p>
        <div className="mid-dash">
        <div className="left-dash">
          <p style={{ fontVariant: 'small-caps', color: '#49274a', fontSize: '20px'}}>
            Recent Bookings
          </p>

          <table className="recent-bookings-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>Medical Service</th>
                <th>Booked Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example data, replace with actual data from your application */}
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Physiotherapy</td>
                <td>2024-02-25</td>
                <td>10:00 AM</td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>Nursing Care</td>
                <td>2024-02-24</td>
                <td>02:30 PM</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Physiotherapy</td>
                <td>2024-02-25</td>
                <td>10:00 AM</td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>Nursing Care</td>
                <td>2024-02-24</td>
                <td>02:30 PM</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Physiotherapy</td>
                <td>2024-02-25</td>
                <td>10:00 AM</td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>Nursing Care</td>
                <td>2024-02-24</td>
                <td>02:30 PM</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="right-dash">
          <p style={{ fontVariant: 'small-caps', color: '#49274a', fontSize: '20px' }}>
            New Users
          </p>

          <table className="new-users-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>User Name</th>
              </tr>
            </thead>
            <tbody>
              {/* Example data, replace with actual data from your application */}
              <tr>
                <td>3</td>
                <td>Mary Johnson</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Robert White</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Emily Davis</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Emily Davis</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Emily Davis</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Emily Davis</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Emily Davis</td>
              </tr>
            </tbody>
          </table>
        </div>


        </div>
    </div>
  )
}
export default AdminHome
