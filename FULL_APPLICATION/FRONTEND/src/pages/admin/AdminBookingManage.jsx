import { useState, useEffect } from 'react';
import './../../assets/css/adminusermanage.css';
import { updateBookings, viewBookings } from '../../services/bookings';

const AdminBookingManage = () => {
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await viewBookings();
        console.log(response);
        setBookingsData(response.data.bookings || []);
      } catch (error) {
        console.error('Error fetching service data:', error);
      }
    };

    fetchServiceData();
  }, []);

  const handleEditBookingClick = async (booking) => {

    await updateBookings(booking.booking_id, {
      patientname: booking.patientname,
      dateofbirth: booking.dateofbirth,
      gender: booking.gender,
      address: booking.address,
      mobilenumber: booking.mobilenumber,
      emergencycontact: booking.emergencycontact,
      medicalcondition: booking.medicalcondition,
      servicename: booking.servicename,
      frequency: booking.frequency,
      timing: booking.timing,
      language: booking.language,
      bookingstatus: "accepted",
      email: booking.email,
    });
  };
  const handleEditBookingClick2 = async (booking) => {

    await updateBookings(booking.booking_id, {
      patientname: booking.patientname,
      dateofbirth: booking.dateofbirth,
      gender: booking.gender,
      address: booking.address,
      mobilenumber: booking.mobilenumber,
      emergencycontact: booking.emergencycontact,
      medicalcondition: booking.medicalcondition,
      servicename: booking.servicename,
      frequency: booking.frequency,
      timing: booking.timing,
      language: booking.language,
      bookingstatus: "Rejected",
      email: booking.email,
    });
  };
  

  return (
    <div className="admin-user-manage-container">
      <p style={{ color: '#49274a', fontVariant: 'small-caps', fontSize: '30px' }}>Bookings Management</p>
      <br />
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <br />
      <br />
      <div className='table-container'>
        <table className="user-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Patient Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Mobile Number</th>
              <th>Emergency Contact</th>
              <th>Medical Conditions</th>
              <th>Service Name</th>
              <th>Frequency</th>
              <th>Timing</th>
              <th>Language</th>
              <th>Booking Status</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookingsData.map((booking) => (
              <tr key={booking.booking_id}>
                <td>{booking.booking_id}</td>
                <td>{booking.patientname}</td>
                <td>{booking.dateofbirth}</td>
                <td>{booking.gender}</td>
                <td>{booking.address}</td>
                <td>{booking.mobilenumber}</td>
                <td>{booking.emergencycontact}</td>
                <td>{booking.medicalcondition}</td>
                <td>{booking.servicename}</td>
                <td>{booking.frequency}</td>
                <td>{booking.timing}</td>
                <td>{booking.language}</td>
                <td>{booking.bookingstatus}</td>
                <td>{booking.email}</td>
                <td>
                  <button style={{ backgroundColor: 'lightgreen', height: '30px', borderRadius: '5px' }}
                    onClick={() => handleEditBookingClick(booking)}>
                    Accept
                  </button>
                </td>
                <td>
                  <button style={{ backgroundColor: 'red', height: '30px', borderRadius: '5px' }}
                  onClick={() => handleEditBookingClick2(booking)}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookingManage;
