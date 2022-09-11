import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Signup.css";
import emailImg from '../assets/images/email.png';
import passwordImg from '../assets/images/password.png';

export default function LoginForm(){

    const [formData, setFormData] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const params = useParams();

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
        const myRequest = new Request(`http://localhost:5000/login/${params.type}`,request);
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
            email: email,
            password: password
        });
    }, [email,password]);

    return(
        <div className="login-container">
            <div className="login-form">
                <p className="welcome-text">Signin</p>
                <form onSubmit={(e)=>{handleSubmit(); e.preventDefault();}}>
                    <div className="input-types">
                        <div className="input-field">
                            <img src={emailImg} alt="email"/>
                            <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="input-field">
                            <img src={passwordImg} alt="password"/>
                            <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <button className="submit-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
