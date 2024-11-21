import { useState } from "react";
import "./otp-page.css";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRedirectPage = () => {
    navigate("/token");
  };

  return (
    <div className="otp-container">
      <p>
        Enter OTP to Begin. <br />
        OTP was sent your mobile number 93*****34
      </p>

      <div className="otp-input-field">
        <input
          type="text"
          className="otp-input"
          placeholder="Enter OTP here"
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
      {inputValue.length >= 5 && (
        <button className="submit-button" onClick={handleRedirectPage}>
          Submit
        </button>
      )}
    </div>
  );
};

export default OtpPage;
