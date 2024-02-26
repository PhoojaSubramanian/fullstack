
import {FaUserEdit, FaUserMinus } from 'react-icons/fa';
import './../../assets/css/adminusermanage.css'

const AdminBookingManage = () => {
  return (
    <div className="admin-user-manage-container">
      <p style={{color:'#49274a',fontVariant:'small-caps',fontSize:'30px'}}>Bookings Management</p>
      <br></br>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="add-user-btn">Add Bookings</button>
      </div>
      <br></br>
      <br></br>
      <table className="user-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>UserId</th>
            <th>Service Name</th>
            <th>Booked Date</th>
            <th>Booking Status</th>
            <th>Payment Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        <tr>
  <td>1</td>
  <td>101</td>
  <td>Elderly Care</td>
  <td>2024-03-01</td>
  <td>Confirmed</td>
  <td>Paid</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>2</td>
  <td>102</td>
  <td>Post-Surgery Care</td>
  <td>2024-03-05</td>
  <td>Pending</td>
  <td>Not Paid</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>3</td>
  <td>103</td>
  <td>Dementia Care</td>
  <td>2024-03-10</td>
  <td>Confirmed</td>
  <td>Paid</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>4</td>
  <td>104</td>
  <td>Palliative Care</td>
  <td>2024-03-15</td>
  <td>Cancelled</td>
  <td>Refunded</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>5</td>
  <td>105</td>
  <td>Child Care</td>
  <td>2024-03-20</td>
  <td>Pending</td>
  <td>Not Paid</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>6</td>
  <td>106</td>
  <td>Rehabilitation Services</td>
  <td>2024-03-25</td>
  <td>Confirmed</td>
  <td>Paid</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>7</td>
  <td>107</td>
  <td>Respite Care</td>
  <td>2024-03-30</td>
  <td>Pending</td>
  <td>Not Paid</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>8</td>
  <td>108</td>
  <td>Special Needs Care</td>
  <td>2024-04-01</td>
  <td>Confirmed</td>
  <td>Paid</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>9</td>
  <td>109</td>
  <td>Medication Management</td>
  <td>2024-04-05</td>
  <td>Cancelled</td>
  <td>Refunded</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>10</td>
  <td>110</td>
  <td>Companionship Services</td>
  <td>2024-04-10</td>
  <td>Pending</td>
  <td>Not Paid</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

        </tbody>
      </table>
    </div>
  );
};

export default AdminBookingManage;
