import { useSelector } from "react-redux";
import MQLQuestionnaireUI from "../../maql-questionnaire-uI/MQLQuestionnaireUI";
import MobileMqlUi from "../../mobile-ui/MobileMqlUi";
import useResponsiveDetect from "../../../custom-hook/useResponsiveDetect";

const Questionnaire = () => {
  const { physicalScore, mentalScore } = useSelector((state) => state.user);
  const isMobile = useResponsiveDetect();
  return (
    <>
      {!isMobile ? (
        <div>
          <h1 className="heading">
            MQL score: <span>{Math.ceil(physicalScore + mentalScore)}</span>
          </h1>
          <MQLQuestionnaireUI compoName={"Physical Capacity"} />
          <MQLQuestionnaireUI compoName={"Mental Capacity"} />
        </div>
      ) : (
        <MobileMqlUi />
      )}
    </>
  );
};

export default Questionnaire;
