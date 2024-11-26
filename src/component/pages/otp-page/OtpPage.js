import { useState } from "react";
import "./otp-page.css";
import { useNavigate } from "react-router-dom";
import modusLogo from "../../../static/logo-img/modus-logo.png";

const OtpPage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRedirectPage = () => {
    navigate("/questionnaire");
  };

  return (
    <div className="otp-container">
      <div className="otp-header">
        <img src={modusLogo} alt="Modus Logo" className="logo" />
      </div>
      <p className="otp-para">Modus Quality of Life  </p>
      <p className="otp-para"> MQL Survey</p>
      <span className="otp-span">
        A code was sent to your mobile number 93*****34
      </span>

      <div className="otp-input-field">
        <input
          type="text"
          className="otp-input"
          placeholder="Enter code here"
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>

      <button className="submit-button" onClick={handleRedirectPage}>
        Send
      </button>
    </div>
  );
};

export default OtpPage;
