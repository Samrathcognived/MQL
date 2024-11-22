import { useDispatch, useSelector } from "react-redux";
import LeftBackArrow from "../../static/svg/LeftBackArrow";
import Dropdown from "./Dropdown";
import {
  setMentalActivityIndex,
  setPhysicalActivityIndex,
  setSelectedDifficulty,
} from "../../redux/slice/Slice";

const CategoryQuestion = () => {
  const {
    physicalActivityAnswer,
    mentalActivityAnswer,
    physicalActivityIndex,
    mentalActivityIndex,
    mobileCompoType,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handlePreviousIndex = () => {
    if (mobileCompoType === 1 && physicalActivityIndex > 0) {
      dispatch(setPhysicalActivityIndex(physicalActivityIndex - 1));
      dispatch(
        setSelectedDifficulty(physicalActivityAnswer[physicalActivityIndex - 1])
      );
    } else if (mobileCompoType === 2 && mentalActivityIndex > 0) {
      dispatch(setMentalActivityIndex(mentalActivityIndex - 1));
      dispatch(
        setSelectedDifficulty(mentalActivityAnswer[mentalActivityIndex - 1])
      );
    }
  };
  const handleBackButtonDisable = () => {
    return mobileCompoType === 1
      ? physicalActivityIndex === 0
      : mentalActivityIndex === 0;
  };

  const showCounts = () => {
    if (mobileCompoType === 1) {
      return physicalActivityIndex + 1;
    }
    return mentalActivityIndex + 1;
  };

  return (
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
      <Dropdown />
      <span className="question-count">{showCounts()} of 4</span>
    </div>
  );
};

export default CategoryQuestion;
