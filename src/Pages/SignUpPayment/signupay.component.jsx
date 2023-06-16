import React, { useState } from "react";
import ezralogo from "../../assests/ezralogo.svg";
import bg1 from "../../assests/onboarding.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignGrp from "../../assests/SignGrp.svg";
import paypal from "../../assests/paypal-logo.svg";
import Payment from "../../assests/icon.svg";

function SignupPay() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission or validation logic here
    };
    return (
        <>
            <div className="register-photo">
                <div className="form-container">
                    <div className="image-holder">
                        <div
                            id="carouselExampleIndicators"
                            class="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div class="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="0"
                                    class="active rounded-pill rounded-button"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                    style={{ height: "10px", width: "10px" }}
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="1"
                                    class="rounded-pill rounded-button"
                                    aria-label="Slide 2"
                                    style={{ height: "10px", width: "10px", borderRadius: "50%" }}
                                ></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img
                                        src={bg1}
                                        class="d-block w-100"
                                        alt="..."
                                        className="sliderimg"
                                    />
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                                        class="d-block w-100"
                                        alt="..."
                                        className="sliderimg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="alignbtn-ezra">
                            <div className="ezra-logo">
                                <img src={ezralogo} alt="Ezra Logo" />
                            </div>
                            <button className="ezra-btn">Contact us</button>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="main-form">
                            <form onSubmit={handleSubmit}>
                                <p className="signupPay-para">Pay with Paypal</p>
                                <div className="yellow-container">
                                    <img src={paypal} alt="" />
                                </div>

                                <h6 className="hr-lines">
                                    <span>PEACE</span>
                                </h6>

                                <div className="form-group">
                                    <label htmlFor="name" className="login-label">
                                        Name on Card:
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Name on Card"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="login-label">
                                        Credit Card Number:
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        placeholder="xxxx xxxx xxxx"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <img src={Payment} alt="" />
                                </div>

                                <div className="form-group input-fields-container">
                                    <div className="expiry-date-input">
                                        <label htmlFor="expiryDate" className="login-label">
                                            Expiry Date:
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="expiryDate"
                                            placeholder="MM/YY"
                                        // value={expiryDate}
                                        // onChange={(e) => setExpiryDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="cvv-input">
                                        <label htmlFor="cvv" className="login-label">
                                            CVV:
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="cvv"
                                            placeholder="CVV"
                                        // value={cvv}
                                        // onChange={(e) => setCvv(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary btn-block" type="submit">
                                        Next Step
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignupPay