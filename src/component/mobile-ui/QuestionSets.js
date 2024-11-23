import { useEffect } from "react";
import data from "../../json-data/data.json";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedDifficulty,
  updateAllAnswer,
  updateQuestionIndex,
} from "../../redux/slice/Slice";
import { useNavigate } from "react-router-dom";

const QuestionSet = ({ type }) => {
  const { selectedDifficulty, questionIndex, allAnswers } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = [
    "No Difficulty",
    "Mild Difficulty",
    "Moderate Difficulty",
    "Severe Difficulty",
    "Unable",
  ];

  const handleFinalPage = () => {
    if (questionIndex + 1 > 8) {
      navigate("/final");
    }
  };

  useEffect(() => {
    handleFinalPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionIndex]);

  const handleNextIndex = () => {
    // if (type === 1) {
    //   const newAnswers = [...physicalActivityAnswer];
    //   newAnswers[physicalActivityIndex] = selectedDifficulty;
    //   dispatch(setPhysicalActivityAnswer(newAnswers));
    //   dispatch(setPhysicalActivityIndex(physicalActivityIndex + 1));
    // } else {
    //   const newAnswers = [...mentalActivityAnswer];
    //   newAnswers[mentalActivityIndex] = selectedDifficulty;
    //   dispatch(setMentalActivityAnswer(newAnswers));
    //   dispatch(setMentalActivityIndex(mentalActivityIndex + 1));
    // }
    const newAnswers = [...allAnswers];
    newAnswers[questionIndex] = selectedDifficulty;
    dispatch(updateAllAnswer(newAnswers));
    dispatch(updateQuestionIndex(questionIndex + 1));
    dispatch(setSelectedDifficulty(""));
  };

  const handleQuestionRender = () => {
    return data.item[questionIndex]?.text || "";
  };

  return (
    <>
      <div>
        <h3 className="static-question">{handleQuestionRender()}</h3>
        <div className="mobile-options">
          {options.map((option, index) => (
            <label key={index} className="mobile-option-label">
              <input
                type="radio"
                value={option}
                checked={selectedDifficulty === option}
                onChange={() => dispatch(setSelectedDifficulty(option))}
                style={{ marginRight: "10px" }}
              />
              {option}
            </label>
          ))}
        </div>
        <div className="button-group">
          <button
            className="m-button"
            onClick={handleNextIndex}
            disabled={!selectedDifficulty}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionSet;
