
import { useState } from 'react';
import './../../assets/css/allservices.css';
import vaccine from './../../assets/images/vaccination.jpg';
import nurse from './../../assets/images/nursing.jpg';
import counselling from './../../assets/images/counselling.jpg';
import physio from './../../assets/images/physio.jpg';
import transaction from './../../assets/images/transaction.jpg';
import { Link } from 'react-router-dom';

const serviceData = [
  {
    id: 1,
    image: vaccine,
    title: 'Vaccination at Home',
    description: 'Comprehensive vaccination services provided by us, safeguarding health and promoting a secure future for all.',
  },
  {
    id: 2,
    image: nurse,
    title: 'Nursing Care',
    description: 'Professional nursing care services tailored to meet individual needs, ensuring comfort and well-being.',
  },
  {
    id: 3,
    image: counselling,
    title: 'Counseling Services',
    description: 'Expert counseling services offering emotional support and guidance for individuals and families.',
  },
  {
    id: 4,
    image: transaction,
    title: 'Transactional Assistance',
    description: 'Efficient transactional services for seamless coordination and management of essential tasks.',
  },
  {
    id: 5,
    image: physio,
    title: 'Physiotherapy',
    description: 'Personalized physiotherapy sessions to enhance mobility, alleviate pain, and improve overall health.',
  },
];

const AllServices = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = serviceData.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="allservice-container">
        <div className="overlay4"></div>
        <p className='allservicetext'>Elevating home care with warmth, expertise, and genuine care.</p>
      </div>
      <br />
      <br />
      <center>
        <input
          id='search'
          placeholder='Search For Services...'
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </center>
      <br />
      <div className='allservice-cont'>
        {filteredServices.map(service => (
          <div key={service.id} className='servicecardmain'>
            <img src={service.image} className='serimg' alt={`Service ${service.id}`} />
            <br />
            <br />
            <center>
              <p style={{ color: '#49274a', fontSize: '22px' }}>{service.title}</p>
              <br />
              <p style={{ color: '#49274a', fontSize: '17px' }}>{service.description}</p>
              <br />
              <Link to="/homecare/service">
              <button id="readmore">Read More..</button>
              </Link>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
