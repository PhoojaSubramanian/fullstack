import { useState, useEffect } from 'react';
import './../../assets/css/userProfile.css';
import { getUser } from '../../services/user';

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({
  });

  const email = sessionStorage.getItem('email');
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser(email);
        console.log(response);
        setUserDetails(response.data|| []);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const [bookings, setBookings] = useState([]);



  return (
    <div className="user-profile-container">
      <div className="user-details">
        <h1 style={{fontVariant:'small-caps'}}>User Profile</h1>
        <br></br>

        <p style={{fontSize:'20px'}}> Welcome {userDetails.name} !!</p>
        <br></br>
        <p style={{fontSize:'17px'}}>{userDetails.email}</p>
        {/* <p>Mobile Number: {userDetails.number}</p> */}
      </div>

      <div className="bookings-table">
        <h2 style={{fontVariant:'small-caps'}}> Your Bookings</h2>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Patient Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Service Name</th>
              <th>Medical Condition</th>
              <th>Timing</th>
              <th>Booking Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.booking_id}>
                <td>{booking.booking_id}</td>
                <td>{booking.patientname}</td>
                <td>{booking.dateofbirth}</td>
                <td>{booking.gender}</td>
                <td>{booking.servicename}</td>
                <td>{booking.medicalcondition}</td>
                <td>{booking.timing}</td>
                <td>{booking.bookingstatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
