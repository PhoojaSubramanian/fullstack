import { useState } from 'react';
import './../../assets/css/register.css';
import logo from './../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { register } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    con_password: '',
    email: '',
    number: '',
    role:'USER'
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate each form field
    if (!formData.name.trim()) {
      newErrors.name = 'Username is required.';
      valid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
      valid = false;
    } else if (
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])/.test(formData.password)
    ) {
      newErrors.password =
        'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, and 1 number';
      valid = false;
    }

    if (formData.password !== formData.con_password) {
      newErrors.con_password = 'Passwords do not match.';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    }

    if (formData.number.length!==10) {
      newErrors.num = 'Phone must contain 10 digits only.';
      valid = false;
    }

    // Add more validations as needed

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can submit or perform further actions here
      register(formData);
      console.log('Form submitted:', formData);
      navigate('/homecare/login');

    } else {
      // Form is not valid, display error messages
      console.log('Form validation failed');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();

  return (
    <div className='login_container_r'>
      <div className="left_r"></div>
      <div className="right_r"></div>
      <div className="content_wrapper_r">
        <div className="content_left_r">
          <center>
            <br></br>
            <br></br>
            <br></br>
            <img src={logo} alt="Logo"></img>
            <p style={{ color: 'white', fontSize: '40px', fontVariant: 'small-caps' }}>
              Welcome to SeniorNest!!
            </p>
          </center>
        </div>
        <div className="content_right_r">
          <form className='form-container_r' onSubmit={handleSubmit}>
            <br></br>
            <h2>REGISTER</h2>
            <br></br>

            <label htmlFor="name">UserName</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <label htmlFor="con_password">Confirm Password:</label>
            <input
              type="password"
              id="con_password"
              name="con_password"
              value={formData.con_password}
              onChange={handleChange}
              required
            />
            {errors.con_password && <p className="error">{errors.con_password}</p>}

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="number">Phone Number:</label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
            {errors.num && <p className="error">{errors.num}</p>}

            <br></br>
            <button type="submit">Register</button>
            <br></br>
            <br></br>
            <p style={{ fontSize: '18px' }}>
              Already have an account?<Link to="/homecare/login"> Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
