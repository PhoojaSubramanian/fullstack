import "./../../assets/css/login.css"
import { Link } from "react-router-dom"
 const Login = () => {
  return (
    <div  className='login_container'>
      <div className="top_div"></div>
        <div className="in_div">
        <form>
          <h2>LOGIN  | <Link to="/homecare/register"> REGISTER</Link></h2>
         <br></br><br></br>
          
            <input
               id="form_but"
              type="email"
              name="email"
              placeholder="   Enter your email"
              required
            />
          <br></br><br></br><br></br>
          
            <input
               id="form_but"
              type="password"
              name="pass"
              placeholder="    Enter your password"
              required
            />
          

          <br></br>
          <br></br>
          <br></br>
          <p>___________________________________________</p>
          <br></br>
          <center>
            <Link to="/homecare/home">
          <button type="submit" id ="log_but">
            LOGIN
          </button>
          </Link>

          </center>
          <div id="last">
          <p id="for_pass">Forgot Password?</p>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login