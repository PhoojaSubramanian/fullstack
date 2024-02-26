
import {FaUserEdit, FaUserMinus } from 'react-icons/fa';
import './../../assets/css/adminusermanage.css'

const AdminUserManage = () => {
  return (
    <div className="admin-user-manage-container">
      <p style={{color:'#49274a',fontVariant:'small-caps',fontSize:'30px'}}>User Management</p>
      <br></br>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="add-user-btn">Add User</button>
      </div>
      <br></br>
      <br></br>
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
