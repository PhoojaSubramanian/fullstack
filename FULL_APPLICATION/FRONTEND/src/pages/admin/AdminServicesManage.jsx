import { useState, useEffect } from 'react';
import { FaUserEdit, FaUserMinus } from 'react-icons/fa';
import './../../assets/css/adminusermanage.css';
import { addService, deleteService, updateService, viewService } from '../../services/Service';

const AdminServicesManage = () => {
  // State to manage the list of services
  const [servicesData, setServicesData] = useState([]);
  
  // States for handling the visibility of forms
  const [isAddServiceFormVisible, setAddServiceFormVisible] = useState(false);
  const [isEditServiceFormVisible, setEditServiceFormVisible] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null); 

  // State for holding data of a new service being added
  const [addServiceData, setAddServiceData] = useState({
    service_name: '',
    description: '',
    amount: '',
    duration: '',
    availability: true, // Set default value to 'Available'
  });

  // State for holding data of a service being edited
  const [editServiceData, setEditServiceData] = useState({
    service_name: '',
    description: '',
    amount: '',
    duration: '',
    availability: true,
  });

  // Fetch service data on component mount
  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await viewService();
        setServicesData(response.data.services || []);
      } catch (error) {
        console.error('Error fetching service data:', error);
      }
    };

    fetchServiceData();
  }, []);

  // Handle click on "Add Service" button
  const handleAddServiceClick = () => {
    setAddServiceFormVisible(true);
  };

  // Handle click on "Edit" button for a specific service
  const handleEditServiceClick = (service) => {
    setSelectedServiceId(service.service_id);
    setEditServiceFormVisible(true);
    setEditServiceData(service);
  };

  // Handle closing of the forms
  const handleCloseForm = () => {
    setAddServiceFormVisible(false);
    setEditServiceFormVisible(false);
  };

  // Handle input changes in the forms
  const handleInputChange = (e, dataSetter) => {
    const { name, value } = e.target;
    const updatedValue = name === 'availability' ? value === 'available' : value;
    dataSetter((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  // Handle form submission for adding a new service
  const handleAddServiceSubmit = (e) => {
    e.preventDefault();
    addService(addServiceData);
    // Update servicesData with the new service
    setServicesData((prevServices) => [
      ...prevServices,
      {
        id: prevServices.length + 1, // You might need a unique ID generation logic
        ...addServiceData,
      },
    ]);

    // Reset addServiceData and close the form
    setAddServiceData({
      service_name: '',
      description: '',
      amount: '',
      duration: '',
      availability: true,
    });
    setAddServiceFormVisible(false);
  };

  // Handle form submission for editing a service (to be implemented)
  const handleEditServiceSubmit = (e) => {
    e.preventDefault();
    // Check if a service ID is selected
    if (selectedServiceId !== null) {
      // Call your updateService function with the selected service ID
      updateService(selectedServiceId, editServiceData);
    }
    setEditServiceFormVisible(false);
  };

  const handleDeleteServiceClick= async (serviceIdToDelete) => {
    try {
     
      console.log(serviceIdToDelete);
      await deleteService(serviceIdToDelete);
      
      
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  // Render the component
  return (
    <div className="admin-user-manage-container">
      <p style={{ color: '#49274a', fontVariant: 'small-caps', fontSize: '30px' }}>Services Management</p>
      <br />
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="add-user-btn" onClick={handleAddServiceClick}>
          Add Service
        </button>
      </div>
      <br />
      <br />

      {/* Add Service Form */}
      {isAddServiceFormVisible && (
        <div className="form-overlay">
          <div className="add-user-form">
            <h2>Add Service Form</h2>
            <form onSubmit={handleAddServiceSubmit}>
              <label htmlFor="service_name">Service Name:</label>
              <input
                type="text"
                id="service_name"
                name="service_name"
                value={addServiceData.service_name}
                onChange={(e) => handleInputChange(e, setAddServiceData)}
                required
              />

              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={addServiceData.description}
                onChange={(e) => handleInputChange(e, setAddServiceData)}
                required
              />

              <label htmlFor="amount">Amount:</label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={addServiceData.amount}
                onChange={(e) => handleInputChange(e, setAddServiceData)}
                required
              />

              <label htmlFor="duration">Duration:</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={addServiceData.duration}
                onChange={(e) => handleInputChange(e, setAddServiceData)}
                required
              />

              <label htmlFor="availability">Availability:</label>
              <select
                id="availability"
                name="availability"
                value={addServiceData.availability ? 'available' : 'not-available'}
                onChange={(e) => handleInputChange(e, setAddServiceData)}
                required
              >
                <option value="available">Available</option>
                <option value="not-available">Not Available</option>
              </select>

              <div>
                <button type="submit">Add Service</button>
                <button type="button" onClick={handleCloseForm}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Service Form */}
      {isEditServiceFormVisible && (
        <div className="form-overlay">
          <div className="edit-user-form">
            <h2>Edit Service Form</h2>
            <form onSubmit={handleEditServiceSubmit}>
              {/* Service Name */}
              <label htmlFor="edit_service_name">Service Name:</label>
              <input
                type="text"
                id="edit_service_name"
                name="service_name"
                value={editServiceData.service_name}
                onChange={(e) => handleInputChange(e, setEditServiceData)}
                required
              />

              {/* Description */}
              <label htmlFor="edit_description">Description:</label>
              <input
                type="text"
                id="edit_description"
                name="description"
                value={editServiceData.description}
                onChange={(e) => handleInputChange(e, setEditServiceData)}
                required
              />

              {/* Amount */}
              <label htmlFor="edit_amount">Amount:</label>
              <input
                type="text"
                id="edit_amount"
                name="amount"
                value={editServiceData.amount}
                onChange={(e) => handleInputChange(e, setEditServiceData)}
                required
              />

              {/* Duration */}
              <label htmlFor="edit_duration">Duration:</label>
              <input
                type="text"
                id="edit_duration"
                name="duration"
                value={editServiceData.duration}
                onChange={(e) => handleInputChange(e, setEditServiceData)}
                required
              />

              {/* Availability */}
              <label htmlFor="edit_availability">Availability:</label>
              <select
                id="edit_availability"
                name="availability"
                value={editServiceData.availability ? 'available' : 'not-available'}
                onChange={(e) => handleInputChange(e, setEditServiceData)}
                required
              >
                <option value="available">Available</option>
                <option value="not-available">Not Available</option>
              </select>

              <div>
                <button type="submit">Update Service</button>
                <button type="button" onClick={handleCloseForm}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* Table for displaying services */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Service Name</th>
            <th>Service Description</th>
            <th>Amount</th>
            <th>Duration</th>
            <th>Availability</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through servicesData to display each service */}
          {servicesData.map((service) => (
            <tr key={service.service_id}>
              <td>{service.service_id}</td>
              <td>{service.service_name}</td>
              <td>{service.description}</td>
              <td>{service.amount}</td>
              <td>{service.duration}</td>
              <td>{service.availability ? 'Available' : 'Not Available'}</td>
              <td>
                <button onClick={() => handleEditServiceClick(service)}>
                  <FaUserEdit size={30} />
                </button>
              </td>
              <td>
                <button  onClick={() => handleDeleteServiceClick(service.service_id)}>
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

export default AdminServicesManage;
