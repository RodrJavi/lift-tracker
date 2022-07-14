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

  const increaseProgress = (small) => {
    setCompleted(completed + percentage);
  };

  if (!currentSession) return <div>loading...</div>;

  return (
    <div className="current-workout-background">
      <Header completion={completed} text={currentSession.title} />
      <ProgressBar completion={completed} />

      {/* {JSON.stringify(currentSession.exerciseObject.length)} */}
      {/* {increment} */}
      {/* {completed} */}

      <div className="current-workout-list">
        {currentSession.exerciseObject.map((exercise) => (
          <div
            className="in-progress-item"
            key={exercise.id}
          >
            <div className="workout-label">
            <h3>{exercise.exerciseName}</h3>{" "}
              <span>
                Reps:
                {exercise.repsCount} Weight:{exercise.lbsCount}lbs
              </span>
            </div>
            <ExerciseProgress
                  max={exercise.setsCount}
                  overall={increaseProgress}
                />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Session;
