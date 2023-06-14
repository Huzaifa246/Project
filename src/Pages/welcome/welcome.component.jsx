import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bg from "../../assests/welcome-bg.svg";
import check from "../../assests/check-circle-fill.svg";

function Welcome() {
  return (
    <div class="top-container">
      <div class="image-overlay">
        <img src={bg} />
      </div>
      <div class="content">
        <div class="logo">
          <img src={check} />
        </div>
        <div class="text">
          <p class="title">Welcome to ezra</p>
          <p class="description">
            Congratulations! Your account has been successfully created. Enjoy
            exploring all that awaits you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
