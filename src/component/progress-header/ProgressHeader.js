import React from "react";

const ProgressHeader = ({ capacity, title }) => {
  const handleSubHeading = () => {
    if (title === "Physical Capacity") {
      return "How much physical difficulty do you have in managing the following:";
    }
    return "How much mental difficulty do you have in managing the following:";
  };

  return (
    <div className="header">
      <p className="title-name">
        {title === "Physical Capacity"
          ? "Physical Activity"
          : "Mental Activity"}{" "}
      </p>
      <div className="heading-name">
        <span>{handleSubHeading()}</span>
      </div>
    </div>
  );
};

export default ProgressHeader;
