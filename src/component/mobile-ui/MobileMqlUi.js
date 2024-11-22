import { useSelector } from "react-redux";
import CategoryQuestion from "./CategoryQuestion";
import "./mobile-ui.css";
import QuestionSet from "./QuestionSets";

const MobileMqlUi = () => {
  const { mobileCompoType } = useSelector((state) => state.user);
  return (
    <div className="mobile-ui-container">
      <CategoryQuestion />
      <QuestionSet type={mobileCompoType} />
    </div>
  );
};

export default MobileMqlUi;
