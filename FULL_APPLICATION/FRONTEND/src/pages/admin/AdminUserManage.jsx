import { useState, useEffect } from 'react';
import { FaUserEdit, FaUserMinus } from 'react-icons/fa';
import './../../assets/css/adminusermanage.css';
import { addUser, deleteUser, viewUser } from '../../services/user';

const AdminUserManage = () => {
  const [isAddUserFormVisible, setAddUserFormVisible] = useState(false);
  const [isEditUserFormVisible, setEditUserFormVisible] = useState(false);
  const [userData, setUserData] = useState([]);
  const [addUserData, setAddUserData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    con_password: '',
    role: 'USER', 
  });
  const [editUserData, setEditUserData] = useState({
    id: '',
    name: '',
    email: '',
    number: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await viewUser();
        setUserData(response.data.users || []);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleAddUserClick = () => {
    setAddUserFormVisible(true);
  };

  const handleEditUserClick = (user) => {
    setEditUserFormVisible(true);
    setEditUserData({
      id: user.id,
      name: user.name,
      email: user.email,
      number: user.number,
    });
  };

  const handleCloseForm = () => {
    setAddUserFormVisible(false);
    setEditUserFormVisible(false);
  };

  const handleInputChange = (e, dataSetter) => {
    const { name, value } = e.target;
    dataSetter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddUserSubmit = (e) => {
    e.preventDefault();
    addUser(addUserData);
    console.log('Add User Form Data:', addUserData);
    setAddUserData({
      name: '',
      email: '',
      number: '',
      password: '',
      con_password: '',
      role: 'USER',
    });
    setAddUserFormVisible(false);
  };

  const handleEditUserSubmit = (e) => {
    e.preventDefault();
    // Implement logic to update user details
    // updateUserData(editUserData);
    setEditUserFormVisible(false);
  };

  const handleDeleteUserClick= async (serviceIdToDelete) => {
    try {
     
      console.log(serviceIdToDelete);
      await deleteUser(serviceIdToDelete);
      
      
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  return (
    <div className="admin-user-manage-container">
      <p style={{ color: '#49274a', fontVariant: 'small-caps', fontSize: '30px' }}>User Management</p>
      <br />
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="add-user-btn" onClick={handleAddUserClick}>
          Add User
        </button>
      </div>
      <br />
      <br />
      {isAddUserFormVisible && (
        <div className="form-overlay">
          <div className="add-user-form">
            <h2>Add User Form</h2>
            <form onSubmit={handleAddUserSubmit}>
              <label htmlFor="name">User Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={addUserData.name}
                onChange={(e) =>handleInputChange(e,setAddUserData)}
                required
              />

              <label htmlFor="email">Email ID:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={addUserData.email}
                onChange={(e) =>handleInputChange(e,setAddUserData)}
                required
              />

              <label htmlFor="number">Phone Number:</label>
              <input
                type="tel"
                id="number"
                name="number"
                value={addUserData.number}
                onChange={(e) =>handleInputChange(e,setAddUserData)}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={addUserData.password}
                onChange={(e) =>handleInputChange(e,setAddUserData)}
                required
              />

              <label htmlFor="con_password">Confirm Password:</label>
              <input
                type="password"
                id="con_password"
                name="con_password"
                value={addUserData.con_password}
                onChange={(e) =>handleInputChange(e,setAddUserData)}
                required
              />

              <label htmlFor="role">Role:</label>
              <select
                id="role"
                name="role"
                value={addUserData.role}
                onChange={(e) =>handleInputChange(e,setAddUserData)}
                required
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
              <div>
                <button type="submit">Add User</button>
                <button type="button" onClick={handleCloseForm}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditUserFormVisible && (
        <div className="form-overlay">
          <div className="edit-user-form">
            <h2>Edit User Form</h2>
            <form onSubmit={handleEditUserSubmit}>
              <label htmlFor="name">User Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={editUserData.name}
                onChange={(e) => handleInputChange(e, setEditUserData)}
                required
              />

              <label htmlFor="email">Email ID:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={editUserData.email}
                onChange={(e) => handleInputChange(e, setEditUserData)}
                required
              />

              <label htmlFor="number">Phone Number:</label>
              <input
                type="tel"
                id="number"
                name="number"
                value={editUserData.number}
                onChange={(e) => handleInputChange(e, setEditUserData)}
                required
              />

              <div>
                <button type="submit">Update User</button>
                <button type="button">Change Password</button>
                <button type="button" onClick={handleCloseForm}>
                  Close
                </button>
              </div>
            </form>
          </div>
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
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.number}</td>
              <td>
                <button onClick={() => handleEditUserClick(user)}>
                  <FaUserEdit size={30} />
                </button>
              </td>
              <td>
                <button onClick={() => handleDeleteUserClick(user.id)}>

                  <FaUserMinus size={30} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserManage;
