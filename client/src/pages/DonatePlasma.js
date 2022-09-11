import React,{ useState, useEffect} from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/DonatePlasma.css";
import user from '../assets/images/user.png';
import emailImg from '../assets/images/email.png';
import passwordImg from '../assets/images/password.png';
import cityImg from '../assets/images/city.png';
import phoneImg from '../assets/images/phone.png';
import addressImg from '../assets/images/address.png';
import bloodImg from '../assets/images/blood.png';
import pincodeImg from '../assets/images/zip-code.png';

function DonatePlasma() {

    const [formData, setFormData] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();
    const [bloodGroup, setBloodGroup] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [pincode, setPincode] = useState();

    function handleSubmit(){
        const request = {
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            redirect:'follow',
            referrerPolicy:'no-referrer',
            body: JSON.stringify({formData})
        };

        const myRequest = new Request("http://localhost:5000/plasma",request);
        fetch(myRequest).then(function (response) {
            return response;
        }).then(function (response) {
            console.log(response);
        }).catch(function (e) {
            console.log(e);
        });
    };

    useEffect(()=>{
        setFormData({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phone: phone,
            bloodGroup: bloodGroup,
            address: address,
            city: city,
            pincode: pincode
        });
    },[firstName, lastName, email, password,phone,bloodGroup,address,city,pincode]);

    return (
    <>
        <Navbar/>
        <div className='donors-registration'>
            <h2 className='heading'>Add Yourself as Plasma Donor</h2>
            <form onSubmit={(e)=>{handleSubmit(); e.preventDefault();}} className='registration-body'>
                <div className="donors-registration-form">
                    <div className="input-field">
                        <img src={user} alt="first-name"/>
                        <input value={firstName} type="text" onChange={(e)=>{setFirstName(e.target.value)}} placeholder='First Name'/>
                    </div>
                    <div className="input-field">
                        <img src={user} alt="last-name"/>
                        <input value={lastName} type="text" onChange={(e)=>{setLastName(e.target.value)}} placeholder='Last Name'/>
                    </div>
                    <div className="input-field">
                        <img src={emailImg} alt="email"/>
                        <input value={email} type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                    </div>
                    <div className="input-field">
                    <img src={passwordImg} alt="password"/>
                        <input value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
                    </div>
                    <div className="input-field">
                        <img src={phoneImg} alt="phone"/>
                        <input value={phone} type="text" onChange={(e)=>{setPhone(e.target.value)}} placeholder='Phone'/>
                    </div>
                    <div className="input-field">
                        <img src={cityImg} alt="city"/>
                        <input value={city} type="text" onChange={(e)=>{setCity(e.target.value)}} placeholder='City'/>
                    </div>
                    <div className="input-field">
                        <img src={addressImg} alt="address"/>
                        <input value={address} type="text" onChange={(e)=>{setAddress(e.target.value)}} placeholder='Address'/>
                    </div>
                    <div className="input-field">
                        <img src={bloodImg} alt="blood"/>
                        <input value={bloodGroup} type="text" onChange={(e)=>{setBloodGroup(e.target.value)}} placeholder='Blood Group'/>
                    </div>
                    <div className="input-field">
                        <img src={pincodeImg} alt="pincode"/>
                        <input value={pincode} type="text" onChange={(e)=>{setPincode(e.target.value)}} placeholder='Pincode'/>
                    </div>
                </div>
                <div className="btn-field">
                    <button type="submit" className="register-button">Register</button>
                </div>
            </form>
        </div>
        <Footer/>
    </>
)
};

export default DonatePlasma;