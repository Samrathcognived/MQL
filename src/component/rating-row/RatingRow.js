import React from "react";

const RatingRow = ({ label, name, title, onScoreChange }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>
        <RadioButton
          name={name}
          value="no-difficulty"
          title={title}
          onScoreChange={onScoreChange}
        />
      </td>
      <td>
        <RadioButton
          name={name}
          value="mild-difficulty"
          title={title}
          onScoreChange={onScoreChange}
        />
      </td>
      <td>
        <RadioButton
          name={name}
          value="moderate-difficulty"
          title={title}
          onScoreChange={onScoreChange}
        />
      </td>
      <td>
        <RadioButton
          name={name}
          value="severe-difficulty"
          title={title}
          onScoreChange={onScoreChange}
        />
      </td>
      <td>
        <RadioButton
          name={name}
          value="unable"
          title={title}
          onScoreChange={onScoreChange}
        />
      </td>
    </tr>
  );
};

const RadioButton = ({ name, value, title, onScoreChange }) => {
  const handleChange = (e) => {
    onScoreChange(e.target.value);
  };

  return (
    <div className="radio-group">
      <input
        type="radio"
        id={`${name}-${value}`}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={`${name}-${value}`}></label>
    </div>
  );
};

export default RatingRow;
