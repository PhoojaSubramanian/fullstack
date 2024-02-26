import "./../../../assets/css/footer.css"
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
  return (
    <div className="foot_cont">
    <div className="footer_container">
        <div>
        <p>Transactional Services</p>
        <br></br>
        <p>Subscription Program</p>
        <br></br>
        <p>Long Term Care</p>
        <br></br>
        <p>Vaccinations at Home</p>
        <br></br></div>

        <div>
        <p>Medicines Delivery at Home</p>
        <br></br>
        <p>Counseling Services</p>
        <br></br>
        <p>Physiotherapy services</p>
        <br></br>
        <p>Nursing Services</p>
        <br></br></div>
        
        <div>
        <p> Home Care Pvt. Ltd.</p>
        <br></br>
        <p>  No : 10 , Nehru Street,</p>
        <br></br>
        <p> Lakshmi Nagar, Sholinganallur,</p>
        <br></br>
        <p>Chennai 600119</p>
        <br></br>
        <p>Contact Us On : 7676433333   </p> 
        <br></br>
        <p>Email Us On :   info@ihhc.in</p>
        </div>
    </div>
    <br></br>
    <br></br>
        <div id="social">
              <SocialIcon  url="https://twitter.com/jaketrent"/>
              <SocialIcon url="https://linkedin.com/jaketrent"/>
              <SocialIcon url="https://instagram.com/jaketrent"/>
              <SocialIcon url="https://facebook.com/jaketrent"/>
              <SocialIcon url="https://youtube.com/jaketrent"/>
        </div>
        <br></br>
        <center>
              Copyright © 2023 India Home Healthcare | Privacy Policy | Terms and Conditions | Refund Policies
              </center>
    </div>
  )
}
export default Footer;