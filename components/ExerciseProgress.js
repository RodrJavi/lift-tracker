import { useState } from "react";

const ExerciseProgress = ({ value = 0 , max, overall }) => {
  const increaseProgress = () => {
    setCurrent(current + 1);
    current >= (max-1) && overall();
  };

  const [current, setCurrent] = useState(value);

  function getBackground(i, current) {
    if (current >= max) return "green";
    if (current > i) return "var(--pink)";
    return "transparent";
  }
  return (
  <div className="combo">
    <div className="progress-blocks">
      {Array.from({ length: max }).map((e, i) => (
        <span
          key={i}
          className="square"
          style={{
            background: getBackground(i, current),
          }}
          onClick={increaseProgress}
        >
        </span>
      ))}
    </div>
    <button className="progress-button" onClick={increaseProgress}></button>
  </div>
)
};

export default ExerciseProgress;
