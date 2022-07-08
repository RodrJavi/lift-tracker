import { useRouter } from "next/router";
import { useLocalStorage } from "usehooks-ts";

const Session = () => {
  const router = useRouter();
  const { id } = router.query;

  const [sessionList, setSessionList] = useLocalStorage("sessionList", []);

  const currentSession = sessionList.find((session) => session.id == id);

  return (
    <>
      <p>Session: {id}</p>
      <pre>{JSON.stringify(currentSession, null, 2)}</pre>
      <div>
        {currentSession.exerciseObject.map((exercise) => (
          <div className="exercise-list" key={exercise.id}>
            <h3>{exercise.exerciseName}</h3>{" "}
            <p>
              Sets:{exercise.setsCount} Reps:
              {exercise.repsCount} Weight:{exercise.lbsCount}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Session;
