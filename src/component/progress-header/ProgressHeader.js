import React from "react";

const ProgressHeader = ({ capacity, title }) => {
  return (
    <div className="header">
      <div>
        {title}: <span className="progress">{capacity}%</span>
      </div>
      <div className="heading-name">
        <span>Please rate your effort for each of these items</span>
      </div>
    </div>
  );
};

export default ProgressHeader;
