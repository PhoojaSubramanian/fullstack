import "./../../assets/css/login.css"
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div  className='login_container'>
      <div className="top_div"></div>
        <div className="in_div">
        <form>
          <h2><Link to="/homecare/login">LOGIN</Link>  |  REGISTER</h2>
         <br></br>
          
         <input
               id="form_but"
              type="email"
              name="email"
              placeholder="   Enter your Username"
              required
            />
          <br></br><br></br>
            <input
               id="form_but"
              type="email"
              name="email"
              placeholder="   Enter your email"
              required
            />
          <br></br><br></br>
          
            <input
               id="form_but"
              type="password"
              name="pass"
              placeholder="    Enter your password"
              required
            />
            <br></br><br></br>
            <input
               id="form_but"
              type="password"
              name="pass"
              placeholder="    Confirm password"
              required
            />
            <br></br><br></br>
            <input
               id="form_but"
              type="password"
              name="pass"
              placeholder="    Enter Mobile number"
              required
            />
          

          <br></br>
          
          <p>___________________________________________</p>
          <br></br>
          <center>
          <button type="submit" id ="log_but">
            SignUp
          </button>
          </center>
          
        </form>
      </div>
    </div>
  )
}
export default Register;