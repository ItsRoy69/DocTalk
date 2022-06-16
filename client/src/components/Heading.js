import headingPhoto from '../assets/images/heading.png';
import '../styles/Heading.css';

const Heading = () => {
  return (
    <section className="heading">
        <div className="heading__info">
            <div className="heading__info__title">DocTalk</div>
            <div className="heading__info__subtitle">MedHelp just a click away...</div>
            <button className="heading__info__cta">Get In Touch</button>
        </div>
        <div className="heading__lcp">
            <img src={headingPhoto} alt="heading" width="600" height="600" />
        </div>
    </section>
  )
}

export default Heading