import { useState } from "react";

const ExerciseProgress = ({ value = 0 , max, overall }) => {
  const increaseProgress = () => {
    setCurrent(current + 1);
    current >= (max-1) && overall();
  };

  const [current, setCurrent] = useState(value);

  function getBackground(i, current) {
    if (current >= max) return "var(--lightgreen)";
    if (current > i) return "var(--pink)";
    return "transparent";
  }

  function getButton(current) {
    if (current >= max) return "#ababab"
    return "var(--pink)";
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
    <button disabled={current >= max} className="progress-button" style={{
            background: getButton(current),
          }} onClick={increaseProgress}></button>
  </div>
)
};

export default ExerciseProgress;
