import React,{ useState, useEffect} from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/DonatePlasma.css";
import { BsPersonSquare,BsTelephoneFill,BsGlobe,BsBuilding,BsFillHouseFill,BsDropletHalf,BsEnvelopeFill } from 'react-icons/bs';

function DonatePlasma() {

    const [formData, setFormData] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [bloodGroup, setBloodGroup] = useState();
    const [cDate, setCDate] = useState();
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
            name: name,
            phone: phone,
            bloodGroup: bloodGroup,
            cDate: cDate,
            address: address,
            city: city,
            pincode: pincode
        });
    },[name,phone,bloodGroup,cDate,address,city,pincode]);

    return (
    <>
        <Navbar/>
        <div className='donate-plasma'>
            <h2 className='heading'>Add Yourself as Plasma Donor</h2>
            <form onSubmit={(e)=>{handleSubmit(); e.preventDefault();}} className='donate-plasma-form'>
                <div className="input-field">
                    <div className="input-image">
                    <BsPersonSquare size={60} color="#0603E6"/>
                    </div>
                    <input value={name} type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Name'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsTelephoneFill size={60} color="#0603E6"/>
                    </div>
                    <input value={phone} type="text" onChange={(e)=>{setPhone(e.target.value)}} placeholder='Phone'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsBuilding size={60} color="#0603E6"/>
                    </div>
                    <input value={city} type="text" onChange={(e)=>{setCity(e.target.value)}} placeholder='City'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsFillHouseFill size={60} color="#0603E6"/>
                    </div>
                    <input value={address} type="text" onChange={(e)=>{setAddress(e.target.value)}} placeholder='Address'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsDropletHalf size={60} color="#0603E6"/>
                    </div>
                    <input value={bloodGroup} type="text" onChange={(e)=>{setBloodGroup(e.target.value)}} placeholder='Blood Group'/>
                </div>
                <div className="input-field">
                    <input value={cDate} type="text" onChange={(e)=>{setCDate(e.target.value)}} placeholder='C_Date'/>
                </div>
                <div className="input-field">
                    <input value={pincode} type="text" onChange={(e)=>{setPincode(e.target.value)}} placeholder='Pincode'/>
                </div>
                <div className="btn-field">
                    <button>Register</button>
                </div>
            </form>
        </div>
        <Footer/>
    </>
)
};

export default DonatePlasma
