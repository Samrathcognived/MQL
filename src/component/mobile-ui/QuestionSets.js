import { useEffect, useState } from "react";
import data from "../../json-data/data.json";
import { useDispatch, useSelector } from "react-redux";
import {
  setMentalActivityAnswer,
  setMentalActivityIndex,
  setPhysicalActivityAnswer,
  setPhysicalActivityIndex,
  setSelectedDifficulty,
} from "../../redux/slice/Slice";
import { useNavigate } from "react-router-dom";

const QuestionSet = ({ type }) => {
  const [dataToRender, setDataToRender] = useState([]);

  const {
    physicalActivityAnswer,
    mentalActivityAnswer,
    physicalActivityIndex,
    mentalActivityIndex,
    selectedDifficulty,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = [
    "No Difficulty",
    "Mild Difficulty",
    "Moderate Difficulty",
    "Severe Difficulty",
    "Unable",
  ];

  const handleQuestionsTypes = (type) => {
    if (!data.item || !Array.isArray(data.item)) {
      console.error("Invalid data structure");
      return [];
    }
    return type === 1 ? data.item.slice(0, 4) : data.item.slice(4, 8);
  };

  const handleFinalPage = () => {
    const currentIndex =
      type === 1 ? physicalActivityIndex : mentalActivityIndex;

    if (currentIndex >= dataToRender.length && dataToRender.length !== 0) {
      navigate("/results");
    }
  };

  useEffect(() => {
    setDataToRender(handleQuestionsTypes(type));
  }, [type]);

  useEffect(() => {
    handleFinalPage();
  }, [physicalActivityIndex, mentalActivityIndex]);

  const handleNextIndex = () => {
    if (type === 1) {
      const newAnswers = [...physicalActivityAnswer];
      newAnswers[physicalActivityIndex] = selectedDifficulty;
      dispatch(setPhysicalActivityAnswer(newAnswers));
      dispatch(setPhysicalActivityIndex(physicalActivityIndex + 1));
    } else {
      const newAnswers = [...mentalActivityAnswer];
      newAnswers[mentalActivityIndex] = selectedDifficulty;
      dispatch(setMentalActivityAnswer(newAnswers));
      dispatch(setMentalActivityIndex(mentalActivityIndex + 1));
    }
    dispatch(setSelectedDifficulty(""));
  };

  const handleQuestionRender = () => {
    const currentIndex =
      type === 1 ? physicalActivityIndex : mentalActivityIndex;
    return dataToRender[currentIndex]?.text || "";
  };

  return (
    <>
      <div>
        <h3 className="static-question">
          {type === 1
            ? "How much physical difficulty do you have in managing the following"
            : "How much mental difficulty do you have in managing the following ?"}
        </h3>
        <p className="dynamic-question">{handleQuestionRender()}</p>
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
