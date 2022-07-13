import { useState } from "react";

const ExerciseProgress = ({ value = 0, max }) => {
  const increaseProgress = () => {
    setCurrent(current + 1);
  };

  const [current, setCurrent] = useState(value);

  function getBackground(i, current) {
    if (current >= max) return "green";
    if (current > i) return "var(--pink)";
    return "transparent";
  }

  return Array.from({ length: max }).map((e, i) => (
    <span
      key={i}
      className="square"
      style={{
        background: getBackground(i, current),
      }}
      onClick={increaseProgress}
    >
      {i}
    </span>
  ));
};

export default ExerciseProgress;
