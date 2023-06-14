import BuyerSignupForm from "./Pages/buyer-signup/buyer-signup.components";
import CreateAccount from "./Pages/creating-account/creating-account.compenent";
import LoginForm from "./Pages/login";
// import "./Pages/login.styles.css";
// import "./Pages/buyer-signup/buyer-signup.styles.css";
import "./Pages/welcome/welcome.styles.css";
import "./Pages/creating-account/creating-account.styles.css"
import Welcome from "./Pages/welcome/welcome.component";
// import "./App.css";
import Stepper from './Pages/Stepper/stepper';
import SignupPay from './Pages/SignUpPayment/signupPay';


function App() {
  return (
    <>
      {/* <CreateAccount /> */}
      {/* <Welcome /> */}
      {/* <Stepper /> */}
      <SignupPay />
    </>
  );
}

export default App;
