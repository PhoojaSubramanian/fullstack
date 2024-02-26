import { useState } from 'react';
import './../../assets/css/servicebookform.css';

const ServiceBookingForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    contactNumber: '',
    emergencyContact: '',
    medicalConditions: '',
    medication: '',
    serviceType: '',
    serviceFrequency: '',
    specificTasks: '',
    preferredTiming: '',
    languagePreference: '',
    insuranceDetails: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., API call or further processing
    console.log('Form submitted:', formData);
  };

  return (
    <div className="service-form-container">
      <h2 className="form-heading">Service Booking Form</h2>
      <br />
      <form onSubmit={handleSubmit} className='bookform'>

        <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} placeholder="Patient Name" required className="form-input" />
        <br />
        <br />

        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" className="form-input" />
        <br />
        <br />

        <select name="gender" value={formData.gender} onChange={handleChange} className="form-input">
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />

        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="form-input" />
        <br />
        <br />
        <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required className="form-input" />
        <br />
        <br />
        <input type="tel" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} placeholder="Emergency Contact" className="form-input" />
        <br />
        <br />

        <input type="text" name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} placeholder="Medical Conditions" className="form-input" />
        <br />
        <br />

        <input type="text" name="medication" value={formData.medication} onChange={handleChange} placeholder="Medication" className="form-input" />
        <br />
        <br />

        <input type="text" name="serviceType" value={formData.serviceType} onChange={handleChange} placeholder="Service Type" className="form-input" />
        <br />
        <br />

        <input type="text" name="serviceFrequency" value={formData.serviceFrequency} onChange={handleChange} placeholder="Service Frequency" className="form-input" />
        <br />
        <br />

        <input type="text" name="specificTasks" value={formData.specificTasks} onChange={handleChange} placeholder="Specific Tasks" className="form-input" />
        <br />
        <br />

        <input type="text" name="preferredTiming" value={formData.preferredTiming} onChange={handleChange} placeholder="Preferred Timing" className="form-input" />
        <br />
        <br />

        <input type="text" name="languagePreference" value={formData.languagePreference} onChange={handleChange} placeholder="Language Preference" className="form-input" />
        <br />
        <br />

        <input type="text" name="insuranceDetails" value={formData.insuranceDetails} onChange={handleChange} placeholder="Insurance Details" className="form-input" />
        <br />
        <br />

        {/* Submit Button */}
        <button type="submit" className="form-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ServiceBookingForm;
