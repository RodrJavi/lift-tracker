import { useRouter } from "next/router";
import { useLocalStorage } from "usehooks-ts";
import Header from "components/Header";
import { useState } from "react";
import ExerciseProgress from "components/ExerciseProgress";

const Session = () => {
  const router = useRouter();
  const { id } = router.query;

  const [sessionList, setSessionList] = useLocalStorage("sessionList", []);

  const currentSession = sessionList.find((session) => session.id == id);

  const increment = 100 / currentSession.exerciseObject.length;

  const [completed, setCompleted] = useState(0);

  // const [now, setNow] = useState(-1);

  const increaseProgress = () => {
    // setCompleted(completed + increment);
    setNow(now + 1);
  };

  return (
    <div className="create-session-background">
      <Header completion={completed} text={currentSession.title} />

      {/* {JSON.stringify(currentSession.exerciseObject.length)} */}
      {/* {increment} */}
      {/* {completed} */}

      {currentSession.exerciseObject.map((exercise) => (
        <div
          // onClick={increaseProgress}
          className="exercise-list"
          key={exercise.id}
        >
          <h3>{exercise.exerciseName}</h3>{" "}
          <p>
            Sets:{exercise.setsCount} Reps:
            {exercise.repsCount} Weight:{exercise.lbsCount}
          </p>
          <ExerciseProgress
            // current={now}
            max={exercise.setsCount}
          ></ExerciseProgress>
        </div>
      ))}
    </div>
  );
};

export default Session;
