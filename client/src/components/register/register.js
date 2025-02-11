import { Header } from "../header/header";
import Referral from "../referral/referral";
import Aboutus from "../aboutusfooter/aboutus";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../register/register.css";
import { useState } from "react";
import { baseUrl } from "../../utility/utility";
const Register = () => {
    const [registerState, setregisterState] = useState({});
    const [Terms, setTerms] = useState(false)
    const navigate = useNavigate();
    const gotosignin = () => {
        navigate("/");
    }
    const handleLogin = (event) => {
        event.preventDefault();
        if (Terms) {
            axios.post(`${baseUrl}/user/register`, registerState)
                .then((res) => {
                    alert("successfully registered")
                    navigate("/")
                }).catch((err) => {
                    console.log(err)
                    if (err.response.status === 404) {
                        alert("please enter all the details")
                    } else {
                        alert(err.response.data)
                    }
                })
        }
        else {
            alert("Please agree terms and conditons")
        }

    }
    return (
        <>
            <div className="register-container">
                <Header />
                <section className="left-register-container">
                    <div>
                        <p className="register-core-test">Laundry Service</p>
                        <p className="register-slogan">Doorstep Wash & Dryclean Service</p>
                    </div>
                    <div className="da-2">
                        <p className="da-21">Don't have An Account?</p>
                    </div>
                    <div className="register-button-sontainer">
                        <button className="register-signin-button" onClick={gotosignin}>Sign In</button>
                    </div>
                </section>
                <section className="right-register-container">
                    <div className="register-text">
                        <p className="register-core-title-text">Register</p>
                    </div>
                    <div className="vl1"></div>
                    <form>
                        <div className="register-name-input-section">
                            <input id="name1" type="text" placeholder="Name" className="register-name-input-section-name" onChange={(e) => { setregisterState({ ...registerState, name: e.target.value }) }} />
                            <hr className="hr3"></hr>
                        </div>
                        <div className="register-email-input-section">
                            <input id="email1" type="email" placeholder="Email" className="register-email-input-section-email" onChange={(e) => { setregisterState({ ...registerState, email: e.target.value }) }} />
                            <hr className="hr4"></hr>
                        </div>
                        <div className="register-phone-input-section">
                            <input id="phone1" type="number" placeholder="Phone" className="register-phone-input-section-section-phone" onChange={(e) => { setregisterState({ ...registerState, phone: e.target.value }) }} />
                            <hr className="hr5"></hr>
                        </div>
                        <div className="register-state-input-section">
                            <input id="state" type="text" placeholder="State" className="register-state-input-section-state" onChange={(e) => { setregisterState({ ...registerState, state: e.target.value }) }} />
                            <hr className="hr6"></hr>
                        </div>
                        <div className="register-district-input-section">
                            <input id="district" type="text" placeholder="District" className="register-state-input-section-district" onChange={(e) => { setregisterState({ ...registerState, district: e.target.value }) }} />
                            <hr className="hr7"></hr>
                        </div>
                        <div className="register-address-input-section">
                            <input id="address" type="text" placeholder="Address" className="register-address-input-section-address" onChange={(e) => { setregisterState({ ...registerState, address: e.target.value }) }} />
                            <hr className="hr8"></hr>
                        </div>
                        <div className="register-pincode-input-section">
                            <input id="pincode" type="number" placeholder="Pincode" className="register-pincode-input-section-pincode" onChange={(e) => { setregisterState({ ...registerState, pincode: e.target.value }) }} />
                            <hr className="hr9"></hr>
                        </div>
                        <div className="register-password-input-section-base">
                            <input id="password1" type="password" className="register-password-input-section-password" placeholder="Password" onChange={(e) => { setregisterState({ ...registerState, password: e.target.value }) }} />
                            <hr className="hr10"></hr>
                        </div>
                        <div className="register-checkbox-input-section">
                            <input id="checkbox-register" type="checkbox" onClick={() => { setTerms(!(Terms)) }} />
                            <label htmlFor="checkbox-register" className="checkbox-text"  >I agree to Terms & Condition receiving marketing and promotional materials</label>
                        </div>
                    </form>
                    <div className="register-button-container">

                        <button type="submit" className="register-button-input-section" onClick={handleLogin}>Register</button>
                    </div>
                </section>
                <Referral />
                <Aboutus />
                <Footer />
            </div>
        </>
    )
}

export default Register;