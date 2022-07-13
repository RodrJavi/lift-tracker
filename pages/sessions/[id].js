import { useRouter } from "next/router";
import { useLocalStorage } from "usehooks-ts";
import Header from "components/Header";
import { useState } from "react";
import ExerciseProgress from "components/ExerciseProgress";
import ProgressBar from "components/ProgressBar";

const Session = () => {
  const router = useRouter();
  const { id } = router.query;

  const [sessionList, setSessionList] = useLocalStorage("sessionList", []);

  const currentSession = sessionList.find((session) => session.id == id);

  const percentage = 100 / currentSession?.exerciseObject.length ?? 100;

  const [completed, setCompleted] = useState(0);

  // const [now, setNow] = useState(-1);

  const increaseProgress = () => {
    setCompleted(completed + percentage);
  };

  if (!currentSession) return <div>loading...</div>;

  return (
    <div className="create-session-background">
      <Header completion={completed} text={currentSession.title} />
      <ProgressBar completion={completed} />

      {/* {JSON.stringify(currentSession.exerciseObject.length)} */}
      {/* {increment} */}
      {/* {completed} */}

      {currentSession.exerciseObject.map((exercise) => (
        <div
          className="exercise-list-item"
          key={exercise.id}
          onClick={increaseProgress}
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
