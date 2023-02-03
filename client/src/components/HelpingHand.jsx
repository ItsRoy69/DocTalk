import { Link } from 'react-router-dom';
import helpingHand1 from '../assets/images/helpingHand1.png';
import helpingHand2 from '../assets/images/helpingHand2.png';
import helpingHand3 from '../assets/images/helpingHand3.png';
import helpingHand4 from '../assets/images/helpingHand4.png';
import helpingHand5 from '../assets/images/helpingHand5.png';
import helpingHand6 from '../assets/images/helpingHand6.png';

import Services1 from '../assets/images/service1.png';
import Services2 from '../assets/images/service2.png';
import Services3 from '../assets/images/service3.png';
import Services4 from '../assets/images/service4.png';
import Services5 from '../assets/images/service5.png';
import Services6 from '../assets/images/service6.png';

export const helpingHandData = [
  {
    title: 'Ambulance',
    image: helpingHand1,
    hover: Services4,
    desc: 'Sometimes booking an ambulance might be a very hectic task as ambulances might not be available while you are in an emergency. To make matters a bit better for everyone list an ambulance provider down below.',
    link: 'regambulances',
  },
  {
    title: 'Oxygen',
    image: helpingHand2,
    hover: Services3,
    desc: 'In the era of the pandemic of Covid-19, the world has seen a shortage of oxygen supply. To put an end to it we request you to click the button below to list an oxygen supplier you know of.',
    link: 'regoxygensuppliers',
  },
  {
    title: 'Plasma',
    image: helpingHand3,
    hover: Services1,
    desc: 'Every drop off the plasma you donate can help a person to come back from doom’s door. So, for the sake of a human life, a life which you will be able to save only if you just step up and donate. click on the button below to add yourself or someone you know who is willing to donate plasma onto our list of plasma donors.',
    link: 'donateplasma',
  },
  {
    title: 'Medicines',
    image: helpingHand4,
    hover: Services5,
    desc: 'In there of everything being online why will one have to go to the pharmacy to pick up the medicines? Add yourself by clicking the button below, or someone you know of as a medicine supplier so that the ones in need can get their medicines supplied to them.',
    link: 'regmedicines',
  },
  {
    title: 'Doctor',
    image: helpingHand5,
    hover: Services6,
    desc: 'In this 21st Century, you can also register yourself as a doctor if you are licensed. You can help millions of people through consultation by registering under this website.',
    link: 'doctorsregistration',
  },
  {
    title: 'Hospital Beds',
    image: helpingHand6,
    hover: Services2,
    desc: 'For the sake of a human life, a life which you will be able to save only if you just step up and donate. click on the button below to add yourself or someone you know who is willing to donate plasma onto our list of plasma donors.',
    link: 'reghospitalbed',
  },
];

const HelpingCard = ({ title, image, hover, desc, link }) => {
  return (
    <div className="helping-box">
      <div className="image-container">
        <img className="bottom" src={image} alt={title} />
        <img className="top" src={hover} alt={title} />
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
      <Link className="view-btn" to={`/${link}`}>
        Contact
      </Link>
    </div>
  );
};

const HelpingHand = () => {
  return (
    <div className="helping-hand">
      <h4>Helping Hand</h4>
      <div className="helping-container">
        {helpingHandData.map((helpingHand, idx) => {
          const { desc, hover, image, link, title } = helpingHand;
          return (
            <HelpingCard
              title={title}
              image={image}
              hover={hover}
              desc={desc}
              link={link}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HelpingHand;
