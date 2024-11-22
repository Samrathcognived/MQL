import { useNavigate } from "react-router-dom";
import "./result-page.css";
import LeftBackArrow from "../../../static/svg/LeftBackArrow";
import { useDispatch, useSelector } from "react-redux";
import {
  setMentalActivityAnswer,
  setMentalActivityIndex,
  setPhysicalActivityAnswer,
  setPhysicalActivityIndex,
} from "../../../redux/slice/Slice";

const ResultPage = () => {
  const { physicalActivityAnswer, mentalActivityAnswer, mobileCompoType } =
    useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePreviousIndex = () => {
    navigate("/questionnaire");
    dispatch(setPhysicalActivityAnswer([]));
    dispatch(setMentalActivityAnswer([]));
    dispatch(setMentalActivityIndex(0));
    dispatch(setPhysicalActivityIndex(0));
  };

  const handleButton = () => {
    navigate("/final");
  };
  const calculateScore = (data) => {
    let score = 0;
    data.forEach((item) => {
      if (item === "Mild Difficulty") {
        score += 9.375;
      } else if (item === "Moderate Difficulty") {
        score += 6.25;
      } else if (item === "Severe Difficulty") {
        score += 3.125;
      } else {
        score += 12.5;
      }
    });
    return Math.ceil(score);
  };

  const handleScore = (type) => {
    if (type === 1) {
      return calculateScore(physicalActivityAnswer);
    }
    return calculateScore(mentalActivityAnswer);
  };

  return (
    <div>
      <div className="header-container">
        <button className="back-button" onClick={handlePreviousIndex}>
          <LeftBackArrow /> Back
        </button>
        <h1 className="header-title">Results</h1>
      </div>
      <div className="main-score">
        <p className="total-score">
          {mobileCompoType === 1 ? `Physical Capacity` : `Mental Capacity`}
        </p>
        <span>{handleScore(mobileCompoType)}%</span>
      </div>
      <div className="btn">
        <button className="done-btn" onClick={handleButton}>
          Done
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
