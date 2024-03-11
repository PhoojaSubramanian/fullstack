
import { useState ,useEffect} from 'react';
import './../../assets/css/allservices.css';
// import vaccine from './../../assets/images/vaccination.jpg';
// import nurse from './../../assets/images/nursing.jpg';
import counselling from './../../assets/images/counselling.jpg';
// import physio from './../../assets/images/physio.jpg';
// import transaction from './../../assets/images/transaction.jpg';
import { Link } from 'react-router-dom';
import { viewService } from '../../services/Service';


const AllServices = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [serviceData , setServicedata] = useState([]);

useEffect(() => {
  const fetchServiceData = async () => {
    try {
      const response = await viewService();
      setServicedata(response.data.services || []);
    } catch (error) {
      console.error('Error fetching service data:', error);
    }
  };

  fetchServiceData();
}, []);

  const filteredServices = serviceData.filter(service =>
    service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
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
          <div key={service.service_id} className='servicecardmain'>
            <img src={counselling} className='serimg' alt={`Service ${service.service_id}`} />
            <br />
            <br />
            <center>
              <p style={{ color: '#49274a', fontSize: '22px' }}>{service.service_name}</p>
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
