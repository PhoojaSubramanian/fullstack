import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../../assets/css/userhome.css';
import homeback from './../../assets/images/homeback.jpg';
import { viewService } from '../../services/Service';

const UserHome = () => {
  const [quote, setQuote] = useState('Caring for the ones who once cared for us.');
  const [displayedQuote, setDisplayedQuote] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [servicedata , setServicedata] = useState([]);

  useEffect(() => {
      setQuote("Caring for the ones who once cared for us.")
    const quoteWords = quote.split(' ');
    let currentWordIndex = 0;

    const typingInterval = setInterval(() => {
      var wrd = '';
      for (var i = 0; i <= currentWordIndex; i++) {
        wrd += quoteWords[i];
        wrd += ' ';
      }
      setDisplayedQuote(wrd);

      currentWordIndex += 1;

      if (currentWordIndex === quoteWords.length) {
        clearInterval(typingInterval);
      }
    }, 400);

    return () => clearInterval(typingInterval);
  }, [quote]);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await viewService();
        console.log(response);
        setServicedata(response.data.services || []);
      } catch (error) {
        console.error('Error fetching service data:', error);
      }
    };

    fetchServiceData();
  }, []);

  return (
    <div>
      <div className="background-container">
        <div className="overlay"></div>
        <div className="quote-container">
          <p>{displayedQuote}</p>
        </div>
      </div>
      <br></br>
      <center>
      <p className="our_services">Our Services</p>
      <p className="line">_______________________________________</p>
      </center>
      <div>
        <br></br>
        <Link to="/homecare/allservices">
      <button  className="viewallservice">
      
        View All Services</button></Link>
        </div>
        
      <div className='back-container'>
        {servicedata.map((service) => (
          <div
            key={service.service_id}
            className='service_card'
            onMouseEnter={() => setHoveredCard(service.service_id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img src={homeback} alt="Home Background" style={{ height: '140px', width: '350px', position: 'relative',borderTopLeftRadius: '50px' }} />
            {hoveredCard === service.service_id && (
              <Link to="/homecare/service">
                <button className="hover-button">DETAILS</button>
              </Link>
            )}
            <br></br>
            <br></br>
            <center>
            <p style={{fontSize:'25px'}}>{service.service_name}</p>
            </center>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserHome;
