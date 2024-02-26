import { useState } from 'react';
import { FaUserEdit, FaUserMinus } from 'react-icons/fa';
import './../../assets/css/adminusermanage.css';

const AdminUserManage = () => {
  const [isAddUserFormVisible, setAddUserFormVisible] = useState(false);

  const handleAddUserClick = () => {
    setAddUserFormVisible(true);
  };

  const handleCloseForm = () => {
    setAddUserFormVisible(false);
  };

  return (
    <div className="admin-user-manage-container">
      <p style={{ color: '#49274a', fontVariant: 'small-caps', fontSize: '30px' }}>User Management</p>
      <br></br>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="add-user-btn" onClick={handleAddUserClick}>
          Add User
        </button>
      </div>
      <br></br>
      <br></br>
      {isAddUserFormVisible && (
        <div className="add-user-form">
          <h2>Add User Form</h2>
          <form>
            <label htmlFor="userId">User ID:</label>
            <input type="text" id="userId" name="userId" required />

            <label htmlFor="userName">User Name:</label>
            <input type="text" id="userName" name="userName" required />

            <label htmlFor="email">Email ID:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required />

            {/* Add more fields as needed */}
            
            <div>
              <button type="submit">Add User</button>
              <button type="button" onClick={handleCloseForm}>Close</button>
            </div>
          </form>
        </div>
      )}
      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Email ID</th>
            <th>Phone Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Example data, replace with actual data from your application */}
          <tr>
            <td>1</td>
            <td>Sweatha</td>
            <td>Sweatha@email.com</td>
            <td>9874563215</td>
            <td>
              <button>
                <FaUserEdit size={30} />
              </button>
            </td>
            <td>
              <button>
                <FaUserMinus size={30} />
              </button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserManage;
