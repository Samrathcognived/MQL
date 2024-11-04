import "./MQLQuestionnaireUI.css";

import React from "react";
import RatingTable from "../rating-tabel/RatingTable";
import ProgressHeader from "../progress-header/ProgressHeader";
import { useSelector } from "react-redux";

const MQLQuestionnaireUI = ({ compoName }) => {
  const { physicalScore, mentalScore } = useSelector((state) => state.user);
  let score = compoName === "Physical Capacity" ? physicalScore : mentalScore;
  return (
    <div className="container">
      <ProgressHeader capacity={score} title={compoName} />
      <RatingTable title={compoName} />
    </div>
  );
};

export default MQLQuestionnaireUI;
