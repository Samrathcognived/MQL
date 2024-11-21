import { useEffect, useState } from "react";
import data from "../../json-data/data.json";

const QuestionSet = ({ type }) => {
  // type 1 is for physical activity , type 2 is for mental health

  const [physicalActivityAnswer, setPhysicalActivityAnswer] = useState([]);
  const [mentalActivityAnswer, setMentalActivityAnswer] = useState([]);
  const [physicalActivityIndex, setPhysicalActivityIndex] = useState(0);
  const [mentalActivityIndex, setMentalActivityIndex] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [dataToRender, setDataRender] = useState(data.item.slice(0, 4));

  const options = [
    "No Difficulty",
    "Mild Difficulty",
    "Moderate Difficulty",
    "Severe Difficulty",
    "Unable",
  ];
  const handleQuestionsTypes = (type) => {
    if (type === 1) {
      return data.item.slice(0, 4);
    }
    return data.item.slice(4, 8);
  };

  useEffect(() => {
    setDataRender(handleQuestionsTypes(type));
  }, [type]);

  const handleNextIndex = (type) => {
    if (type === 1) {
      setPhysicalActivityAnswer((prev) => {
        const newAnswers = [...prev];
        newAnswers[physicalActivityIndex] = selectedDifficulty;
        return newAnswers;
      });
      setPhysicalActivityIndex((prev) => prev + 1);
      setSelectedDifficulty("");
    } else {
      setMentalActivityAnswer((prev) => {
        const newAnswers = [...prev];
        newAnswers[mentalActivityIndex] = selectedDifficulty;
        return newAnswers;
      });
      setMentalActivityIndex((prev) => prev + 1);
      setSelectedDifficulty("");
    }
  };
  const handlePreviousIndex = (type) => {
    if (type === 1) {
      if (physicalActivityIndex > 0) {
        setPhysicalActivityIndex((prev) => prev - 1);
        setSelectedDifficulty(
          physicalActivityAnswer[physicalActivityIndex - 1]
        );
      }
    } else {
      if (mentalActivityIndex > 0) {
        setMentalActivityIndex((prev) => prev - 1);
        setSelectedDifficulty(mentalActivityAnswer[mentalActivityIndex - 1]);
      }
    }
  };

  const handleFinalPage = (type) => {
    if (type === 1) {
      return physicalActivityIndex >= dataToRender.length;
    }
    if (type === 2) {
      return mentalActivityIndex >= dataToRender.length;
    }
    return false;
  };

  const handleBackButtonDisable = (type) => {
    if (type === 1) {
      return physicalActivityIndex === 0;
    }
    if (type === 2) {
      return mentalActivityIndex === 0;
    }
    return true;
  };

  const handleQuestionRender = (type) => {
    if (type === 1 && physicalActivityIndex <= 3) {
      return dataToRender[physicalActivityIndex].text;
    }

    if (type === 2 && mentalActivityIndex <= 3) {
      return dataToRender[mentalActivityIndex].text;
    }
  };

  return (
    <>
      {handleFinalPage(type) ? (
        <div>
          <p className="final-msg">Thank you for completing the survey</p>
        </div>
      ) : (
        <div>
          <h3 className="static-question">
            {type === 1
              ? "How much physical difficulty do you have in managing the following"
              : "How much mental difficulty do you have in managing the following ?"}
          </h3>
          <p className="dynamic-question">{handleQuestionRender(type)}</p>
          <div className="mobile-options">
            {options.map((option) => (
              <label key={option} className="mobile-option-label">
                <input
                  type="radio"
                  value={option}
                  checked={selectedDifficulty === option}
                  onChange={() => setSelectedDifficulty(option)}
                  style={{ marginRight: "10px" }}
                />
                {option}
              </label>
            ))}
          </div>
          <div className="button-group">
            <button
              className="m-button"
              onClick={() => handlePreviousIndex(type)}
              disabled={handleBackButtonDisable(type)}
            >
              Back
            </button>
            <button
              className="m-button"
              onClick={() => handleNextIndex(type)}
              disabled={!selectedDifficulty}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionSet;
