import { useState } from 'react';
import './../../assets/css/servicebookform.css';
import { addBookings } from '../../services/bookings';

const ServiceBookingForm = () => {
  const [formData, setFormData] = useState({
  patientname: "",
  dateofbirth: "",
  gender: "",
  address: "",
  mobilenumber: "",
  emergencycontact: "",
  medicalcondition: "",
  servicename: "",
  frequency: "",
  timing: "",
  language: "",
  bookingstatus: "",
  email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    addBookings(formData);
  };

  return (
    <div className="service-form-container">
      <h2 className="form-heading">Service Booking Form</h2>
      <br />
      <form onSubmit={handleSubmit} className="bookform">
        <input
          type="text"
          name="patientname"
          value={formData.patientname}
          onChange={handleChange}
          placeholder="Patient Name"
          required
          className="form-input"
        />
        <br />
        <br />

        <input
          type="text"
          name="dateofbirth"
          value={formData.dateofbirth}
          onChange={handleChange}
          placeholder="Date of Birth"
          required
          className="form-input"
        />
        <br />
        <br />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="form-input"
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />

        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="form-input"
        />
        <br />
        <br />
        <input
          type="text"
          name="mobilenumber"
          value={formData.mobilenumber}
          onChange={handleChange}
          placeholder="Contact Number"
          required
          className="form-input"
        />
        <br />
        <br />
        <input
          type="text"
          name="emergencycontact"
          value={formData.emergencycontact}
          onChange={handleChange}
          placeholder="Emergency Contact"
          required
          className="form-input"
        />
        <br />
        <br />

        <input
          type="text"
          name="medicalcondition"
          value={formData.medicalcondition}
          onChange={handleChange}
          placeholder="Medical Conditions"
          required
          className="form-input"
        />
        <br />
        <br />

        <input
          type="text"
          name="servicename"
          value={formData.servicename}
          onChange={handleChange}
          placeholder="Service Name"
          required
          className="form-input"
        />
        <br />
        <br />

        <input
          type="text"
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
          placeholder="Frequency"
          required
          className="form-input"
        />
        <br />
        <br />

        <input
          type="text"
          name="timing"
          value={formData.timing}
          onChange={handleChange}
          placeholder="Timing"
          required
          className="form-input"
        />
        <br />
        <br />

        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
          placeholder="Language"
          required
          className="form-input"
        />
        <br />
        <br />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="form-input"
        />
        <br />
        <br />

        {/* Submit Button */}
        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ServiceBookingForm;
