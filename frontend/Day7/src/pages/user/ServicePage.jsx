import "./../../assets/css/servicepage.css"
import { Link } from "react-router-dom"
const ServicePage = () => {
  return (
    <div>
        <div className="service-container">
        <div className="overlay1"></div>
        <div className="q-container">
          <p>Transactional Services</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="contents">
        <Link to="/homecare/bookservice">
        <button 
        className="book_but"
        style={{height:'40px',width:'200px',color:'#49274a',backgroundColor:'white','border':'1px solid #49274a',borderRadius:'7px' ,float:'right'}}>
        
        Book Now </button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <center>
      <p>
      Our Home Visit Program is aimed at providing comfort to patients that may not require extensive and regular 
      medical intervention, but may need medical assistance from time-to-time. Patients and their Family members 
      can avail the services of our home health care providers for specific, individual one-time purposes as well.
       Our doctors, nurses and expert physiotherapists are available on-call for timely intervention and for your
        general medical needs.
      </p>
      </center>
      <br></br>
        <b>
        Visits
        </b>
        <br></br>
        <p>
        Our home health care doctor, nurse, and physiotherapist can be called home for specific one-time healthcare. Whether its a routine check-up or a specific health concern, our team is ready to assist you. We focus on providing personalized and compassionate care to ensure your well-being.
        </p>
        <br></br>
        <b>
        Medical Procedures
        </b>
        <br></br>
        <p>
        Critical medical procedures like wound dressing, urinary catheterization, and more can now be done in the comfort of your home. We prioritize your well-being and convenience. Our experienced medical professionals use advanced techniques and equipment to deliver safe and effective in-home medical procedures.
        </p>
        <br></br>
        <b>
        Investigations
        </b>
        <br></br>
        <p>
        Our healthcare specialists and technicians conduct thorough investigations, including blood tests and other diagnostic procedures, collecting lab samples from patients within the comfort of their homes. With state-of-the-art equipment and a commitment to accuracy, we strive to provide reliable diagnostic services to support your health.
        </p>
        <br></br>
        <b>
        Vaccinations at Home
        </b>
        <br></br>
        <p>
        Our HomeCare specialists provide various immunization and comprehensive vaccination services at your home. Stay up-to-date with vaccinations without leaving the comfort of your living space. We offer a range of vaccines to protect you and your loved ones, ensuring a proactive approach to health and wellness.
        </p>
        <br></br>
      </div>
    </div>
  )
}

export default ServicePage