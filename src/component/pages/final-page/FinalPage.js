import modusLogo from "../../../static/logo-img/modus-logo.png";
import "./final-page.css";

const FinalPage = () => {
  return (
    <div className="final-page-container">
      <div className="final-page-header">
        <img src={modusLogo} alt="Modus Logo" className="logo" />
      </div>
      <h1>Thank you for completing the survey!</h1>
    </div>
  );
};

export default FinalPage;
