import { useDispatch, useSelector } from "react-redux";
import LeftBackArrow from "../../static/svg/LeftBackArrow";
import {
  setSelectedDifficulty,
  updateQuestionIndex,
} from "../../redux/slice/Slice";

const CategoryQuestion = () => {
  const { questionIndex, allAnswers } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handlePreviousIndex = () => {
    // if (mobileCompoType === 1 && physicalActivityIndex > 0) {
    //   dispatch(setPhysicalActivityIndex(physicalActivityIndex - 1));
    //   dispatch(
    //     setSelectedDifficulty(physicalActivityAnswer[physicalActivityIndex - 1])
    //   );
    // } else if (mobileCompoType === 2 && mentalActivityIndex > 0) {
    //   dispatch(setMentalActivityIndex(mentalActivityIndex - 1));
    //   dispatch(
    //     setSelectedDifficulty(mentalActivityAnswer[mentalActivityIndex - 1])
    //   );
    // }
    if (questionIndex > 0) {
      dispatch(updateQuestionIndex(questionIndex - 1));
      dispatch(setSelectedDifficulty(allAnswers[questionIndex] - 1));
    }
  };
  const handleBackButtonDisable = () => {
    return questionIndex === 0;
  };
  return (
    <div className="category-question-container">
      <div className="category-question">
        <div
          className={handleBackButtonDisable() ? "disable" : "back-btn"}
          onClick={handlePreviousIndex}
        >
          <span>
            {" "}
            <LeftBackArrow disabled={handleBackButtonDisable()} />
          </span>
          <button>Back</button>
        </div>
        <span className="question-count">{questionIndex + 1} of 8</span>
      </div>
      <span className="mql-heading">Modus Quality of Life (MQL)</span>
      <span className="category-name">
        {questionIndex + 1 <= 4 ? "Physical Effort" : "Mental Effort"}
      </span>
    </div>
  );
};

export default CategoryQuestion;
