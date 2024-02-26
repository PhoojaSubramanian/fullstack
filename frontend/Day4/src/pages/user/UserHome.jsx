import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../../assets/css/userhome.css';
import homeback from './../../assets/images/homeback.jpg';

const UserHome = () => {
  const [quote, setQuote] = useState('Caring for the ones who once cared for us.');
  const [displayedQuote, setDisplayedQuote] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);
  const serviceData = [
    {
      id: 1,
      image: homeback,
      title: 'Transactional Services',
      content: 'Efficient transactions for seamless elder care.',
    },{
      id: 2,
      image: homeback,
      title: 'Transactional Services',
      content: 'Efficient transactions for seamless elder care.',
    },{
      id: 3,
      image: homeback,
      title: 'Transactional Services',
      content: 'Efficient transactions for seamless elder care.',
    },
    {
      id: 4,
      image: homeback,
      title: 'Transactional Services',
      content: 'Efficient transactions for seamless elder care.',
    },
    {
      id: 5,
      image: homeback,
      title: 'Transactional Services',
      content: 'Efficient transactions for seamless elder care.',
    },
    {
      id: 6,
      image: homeback,
      title: 'Transactional Services',
      content: 'Efficient transactions for seamless elder care.',
    },
    {
      id: 7,
      image: homeback,
      title: 'Transactional Services',
      content: 'Efficient transactions for seamless elder care.',
    },
    {
      id: 8,
      image: homeback,
      title: 'Transactional Services',
      content: 'Efficient transactions for seamless elder care.',
    },
    {
      id: 9,
      image: homeback,
      title: 'Transactional Services',
      content: 'Efficient transactions for seamless elder care.',
    },
    {
      id: 10,
      image: homeback,
      title: 'Transactional Services',
      content: 'Efficient transactions for seamless elder care.',
    }
  ];

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
      <p style={{fontSize:'35px', fontVariant:'small-caps',color:'#49274a'}}>Our Services</p>
      <p style={{color:'#49274a'}}>_______________________________________</p>
      </center>
      <div>
        <br></br>
        <Link to="/homecare/allservices">
      <button  className="viewallservice">
      
        View All Services</button></Link>
        </div>
        
      <div className='back-container'>
        {serviceData.map((service) => (
          <div
            key={service.id}
            className='service_card'
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img src={service.image} alt="Home Background" style={{ height: '140px', width: '350px', position: 'relative',borderTopLeftRadius: '50px' }} />
            {hoveredCard === service.id && (
              <Link to="/homecare/service">
                <button className="hover-button">DETAILS</button>
              </Link>
            )}
            <br></br>
            <br></br>
            <center>
            <p style={{fontSize:'25px'}}>{service.title}</p>
            </center>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserHome;
