import React, { useState } from "react";
import RatingRow from "../rating-row/RatingRow";
import data from "../../json-data/data.json";
import { useDispatch } from "react-redux";
import {
  updatePhysicalScore,
  updateMentalScore,
} from "../../redux/slice/Slice";

const RatingTable = ({ title }) => {
  const dispatch = useDispatch();
  const [activityScores, setActivityScores] = useState({});

  const physicalActivities = data.item.slice(0, 4);
  const mentalActivities = data.item.slice(4);

  const handleScoreChange = (activityId, difficulty, category) => {
    const score = optionScore(difficulty);
    setActivityScores((prevScores) => {
      const updatedScores = { ...prevScores, [activityId]: score };

      const physicalTotal = physicalActivities.reduce(
        (sum, activity) => sum + (updatedScores[activity.linkId] || 0),
        0
      );
      const mentalTotal = mentalActivities.reduce(
        (sum, activity) => sum + (updatedScores[activity.linkId] || 0),
        0
      );

      dispatch(updatePhysicalScore(physicalTotal));
      dispatch(updateMentalScore(mentalTotal));

      return updatedScores;
    });
  };

  const optionScore = (type) => {
    if (type === "no-difficulty") return 12.5;
    if (type === "mild-difficulty") return 9.375;
    if (type === "moderate-difficulty") return 8.5;
    if (type === "severe-difficulty") return 6.25;
    return 3.125;
  };

  const handleDataBasedOnTitle = () => {
    if (title === "Physical Capacity") {
      return data.item.slice(0, 4);
    }
    return data.item.slice(4);
  };

  return (
    <table>
      <thead>
        <tr>
          <th className="heading">
            {title === "Physical Capapcity"
              ? "Currently how much physical effort do you exert doing the following activities"
              : "During the past week, how much have you had in managing the following ?"}
          </th>
          <th>No Difficulty</th>
          <th>Mild Difficulty</th>
          <th>Moderate Difficulty</th>
          <th>Severe Difficulty</th>
          <th>Unable</th>
        </tr>
      </thead>
      <tbody>
        {handleDataBasedOnTitle().map((activity) => (
          <RatingRow
            key={activity.linkId}
            label={activity.text}
            name={`activity-${activity.linkId}`}
            title={title}
            onScoreChange={(difficulty) =>
              handleScoreChange(activity.linkId, difficulty, activity.title)
            }
          />
        ))}
      </tbody>
    </table>
  );
};

export default RatingTable;
