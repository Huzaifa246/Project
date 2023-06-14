import React, { useState } from "react";
import ezralogo from "../../assests/ezralogo.svg";
import bg1 from "../../assests/onboarding.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function CreateAccount() {
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
          <div class="content">
            <p class="title">Creating your account</p>
            <div class="spacer"></div>
            <p class="description">
              We're in the process of creating your account. Please hang tight
              and bear with us for a moment. We appreciate your patience!
            </p>
            <div class="spacer"></div>
            <div class="progress">
              <div class="progress-bar bg-danger"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
