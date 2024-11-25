import { useSelector } from "react-redux";
import CategoryQuestion from "./CategoryQuestion";
import "./mobile-ui.css";
import QuestionSet from "./QuestionSets";
import { useEffect, useRef } from "react";

const MobileMqlUi = () => {
  const { mobileCompoType, questionIndex } = useSelector((state) => state.user);
  const topRef = useRef(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [questionIndex]);

  return (
    <div className="mobile-ui-container" ref={topRef}>
      <CategoryQuestion />
      <QuestionSet type={mobileCompoType} />
    </div>
  );
};

export default MobileMqlUi;
