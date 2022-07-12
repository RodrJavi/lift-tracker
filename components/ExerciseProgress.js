import { useState } from "react";

const ExerciseProgress = ({onClick, current, max }) => {
  

  const increaseProgress = () => {
    // setCompleted(completed + increment);
    setNow(now + 1);
  };

  const [now, setNow] = useState(0);

  return [...Array(max)].map((e, i) => (
    <span key={i} className={`${(now <= i ? "square" : "purple")} ${(now >= max && "green")} square`} onClick={increaseProgress}>
      {max}
    </span>
  ));
};

export default ExerciseProgress;
