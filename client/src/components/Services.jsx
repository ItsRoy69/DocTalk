import { Link } from 'react-router-dom';
import Services1 from '../assets/images/service1.png';
import Services2 from '../assets/images/service2.png';
import Services3 from '../assets/images/service3.png';
import Services4 from '../assets/images/service4.png';
import Services5 from '../assets/images/service5.png';
import Services6 from '../assets/images/service6.png';

export const seviceCardData = [
  {
    title: 'Plasma Donor',
    image: Services1,
    link: 'plasmadonor',
  },
  {
    title: 'Hospital Bed',
    image: Services2,
    link: 'hospitalbed',
  },
  {
    title: 'Oxygen Supplier',
    image: Services3,
    link: 'osupplier',
  },
  {
    title: 'Ambulances',
    image: Services4,
    link: 'ambulances',
  },
  {
    title: 'Medicines',
    image: Services5,
    link: 'medicines',
  },
  {
    title: 'Doctors',
    image: Services6,
    link: 'doctors',
  },
];

const ServiceCard = ({ title, image, link }) => {
  return (
    <div className="service-box" style={{ backgroundImage: `url(${image})` }}>
      <h3 style={{ color: '#FFFFFF', fontWeight: '500', zIndex: '2' }}>
        {title}
      </h3>
      <div className="overlay" />
      <Link className="view-btn" to={`/${link}`}>
        View
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services" style={{ paddingTop: 10 }}>
      <h4>Services</h4>
      <div className="services-container">
        {seviceCardData.map((service, idx) => {
          const { image, link, title } = service;
          return (
            <ServiceCard image={image} link={link} title={title} key={idx} />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
