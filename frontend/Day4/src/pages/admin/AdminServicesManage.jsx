
import {FaUserEdit, FaUserMinus } from 'react-icons/fa';
import './../../assets/css/adminusermanage.css'

const AdminServicesManage = () => {
  return (
    <div className="admin-user-manage-container">
      <p style={{color:'#49274a',fontVariant:'small-caps',fontSize:'30px'}}>Services Management</p>
      <br></br>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="add-user-btn">Add Service</button>
      </div>
      <br></br>
      <br></br>
      <table className="user-table">
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Service Name</th>
            <th>Service Description</th>
            <th>Amount</th>
            <th>Duration</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Example data, replace with actual data from your application */}
          <tr>
  <td>1</td>
  <td>Elderly Care</td>
  <td>Comprehensive care for elderly individuals, including assistance with daily activities and companionship.</td>
  <td>$1500</td>
  <td>1 month</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>2</td>
  <td>Post-Surgery Care</td>
  <td>Specialized care for individuals recovering from surgery, ensuring a smooth and comfortable recovery process.</td>
  <td>$1800</td>
  <td>2 weeks</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>3</td>
  <td>Dementia Care</td>
  <td>Supportive care for individuals with dementia, focusing on safety, engagement, and maintaining quality of life.</td>
  <td>$1200</td>
  <td>3 months</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>
<tr>
  <td>4</td>
  <td>Palliative Care</td>
  <td>Compassionate care for individuals with serious illnesses, focusing on pain management and emotional support.</td>
  <td>$2000</td>
  <td>1 month</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>5</td>
  <td>Child Care</td>
  <td>Professional care services for children, including supervision, educational activities, and playtime.</td>
  <td>$1200</td>
  <td>2 weeks</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>6</td>
  <td>Rehabilitation Services</td>
  <td>Customized care plans to assist individuals in recovering from injuries or surgeries, focusing on rehabilitation exercises.</td>
  <td>$2200</td>
  <td>6 weeks</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>7</td>
  <td>Respite Care</td>
  <td>Temporary relief for primary caregivers, ensuring their loved ones receive quality care during their absence.</td>
  <td>$1600</td>
  <td>2 weeks</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>8</td>
  <td>Special Needs Care</td>
  <td>Dedicated care for individuals with special needs, providing support and assistance tailored to their unique requirements.</td>
  <td>$1800</td>
  <td>1 month</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>9</td>
  <td>Medication Management</td>
  <td>Professional oversight and assistance in managing medications, ensuring proper dosage and adherence to medical plans.</td>
  <td>$1000</td>
  <td>3 months</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

<tr>
  <td>10</td>
  <td>Companionship Services</td>
  <td>Non-medical care focused on providing companionship, social interaction, and emotional support for individuals living alone.</td>
  <td>$800</td>
  <td>1 month</td>
  <td><button><FaUserEdit size={30}/></button></td>
  <td><button><FaUserMinus size={30}/></button></td>
</tr>

        </tbody>
      </table>
    </div>
  );
};

export default AdminServicesManage;
