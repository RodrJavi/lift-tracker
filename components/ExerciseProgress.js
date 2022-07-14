import { useState } from "react";
import { Icon } from "@iconify/react";

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
    <button disabled={current >= max} className="progress-button" onClick={increaseProgress}><Icon className="check-icon" icon='mdi:check'></Icon></button>
  </div>
)
};

export default ExerciseProgress;
