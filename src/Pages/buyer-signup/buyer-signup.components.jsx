import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ezralogo from "../../assests/ezralogo.svg";
import bg1 from "../../assests/onboarding.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function PasswordInput({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-input-wrapper">
      <input
        className="form-control password-input"
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={value}
        onChange={onChange}
      />
      <div className="password-toggle" onClick={handleTogglePassword}>
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </div>
    </div>
  );
}

function BuyerSignupForm() {
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
              <h2>Sign up to your account</h2>
              <p className="login-para">
                Welcome back! Please enter your details.
              </p>
              <div className="form-group">
                <label htmlFor="name" className="login-label">
                  Name:
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="login-label">
                  Email:
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="login-label">
                  Password:
                </label>
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  Next Step
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="already">
          <div className="row">
            <p className="already-text">Already have an account?</p>
            <p className="clickable-text">Log In</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerSignupForm;
