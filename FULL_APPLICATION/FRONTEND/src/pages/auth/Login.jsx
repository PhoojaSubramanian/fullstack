import './../../assets/css/login.css';
import logo from './../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {setAuthentication , setToken,setUser} from './../../redux/authSlice';
import {  useDispatch } from 'react-redux';
import { login } from '../../services/auth';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email:'',
    password:''
  });

  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(loginForm).then((res) => {
      if (res?.data?.accessToken) {
           sessionStorage.setItem('token', res?.data?.accessToken);
           sessionStorage.setItem('email', loginForm.email);

          dispatch(setAuthentication(true))
          dispatch(setToken(res?.data?.accessToken));
          dispatch(setUser(jwtDecode(res?.data?.accessToken).role));
          navigate((jwtDecode(res?.data?.accessToken).role === 'USER') ? '/homecare/home' : '/homecare/adminhome');
      }
  }).catch((err) => console.log(err));
    
    
  };
  return (
    <div className='login_container'>
      <div className="left"></div>
      <div className="right"></div>
      <div className="content_wrapper">
        <div className="content_left">
          <center>
            <br></br>
            <br></br>
            <br></br>
            <img src={logo}></img>
            <p style={{color:'white',fontSize:'25px',fontVariant:'small-caps'}}>SeniorNest</p>
            <p style={{color:'white',fontSize:'30px',fontVariant:'small-caps'}}>Welcome Back :)</p>
          </center>
        </div>
        <div className="content_right">
        <form className='form-container' onSubmit={handleLoginSubmit}>
          <br></br>
          <br></br>
          <h2>LOGIN</h2>
          <br></br>
          <br></br>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"value={loginForm.email} onChange={handleLoginChange} required/>
          <br></br>
          <br></br>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={loginForm.password} onChange={handleLoginChange} required />
          <br></br>
          <br></br>

          <p style={{float:'right'}}>Forgot Password?</p>
          <br></br>
          <br></br>
          <button type="submit">Login</button>
          <br></br>
          <br></br>
          <p style={{fontSize:'18px'}}>Create new Account?<Link to="/homecare/register"> Sign up</Link></p>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
