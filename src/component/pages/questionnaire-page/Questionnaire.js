import { useSelector } from "react-redux";
import MQLQuestionnaireUI from "../../maql-questionnaire-uI/MQLQuestionnaireUI";
import MobileMqlUi from "../../mobile-ui/MobileMqlUi";
import useResponsiveDetect from "../../../custom-hook/useResponsiveDetect";
import { useNavigate } from "react-router-dom";

const Questionnaire = () => {
  const isMobile = useResponsiveDetect();
  const navigate = useNavigate();

  const handleSubmitButton = () => {
    navigate("/final");
  };
  return (
    <>
      {!isMobile ? (
        <div>
          <h1 className="heading">Modus Quality of Life (MQL)</h1>
          <MQLQuestionnaireUI compoName={"Physical Capacity"} />
          <MQLQuestionnaireUI compoName={"Mental Capacity"} />
          <div className="btn-container">
            <button className="web-submit-btn" onClick={handleSubmitButton}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <MobileMqlUi />
      )}
    </>
  );
};

export default Questionnaire;
