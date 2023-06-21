import { useState } from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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

    const [modalVisible, setModalVisible] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setModalVisible(true);
        // Perform form submission or validation logic here
    };

    const modalStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "550px",
          padding: "20px",
        },
      };
    return (
        <>
<Modal
  isOpen={modalVisible}
  onRequestClose={() => setModalVisible(false)}
  style={modalStyles}
>
  <div className="modal-header">
    <div className="info-icon">
      <i className="fa fa-info-circle"></i>
    </div>
    <h4>Save Payment Method for Future Use</h4>
    <div className="close-button" onClick={() => setModalVisible(false)}>
      <i className="fa fa-times"></i>
    </div>
  </div>
  <div className="modal-content">
    <p>
      This is the modal content.
      <br />
      <br />
      By saving your payment method, you can enjoy a faster checkout experience for future transactions. Your payment details will be securely stored using industry-standard encryption and will only be used to process your transactions on this platform. We do not store or have access to your full credit card number; only the necessary information for secure and convenient transactions will be stored.
      <br />
      <br />
      <b>
      Please note that you can manage and update your saved payment methods in your account settings at any time. Your privacy and data security are of utmost importance to us.
      </b>
    </p>
    <div className="modal-buttons">
      <button className="save-button">Save Payment</button>
      <button className="cancel-button" onClick={() => setModalVisible(false)}>
        Cancel
      </button>
    </div>
  </div>
</Modal>

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
                                <button
    className="btn btn-primary btn-block"
    type="submit"
    onClick={() => setModalVisible(true)}
>
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