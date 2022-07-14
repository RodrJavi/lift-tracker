import { Icon } from "@iconify/react";

const SetList = ({ value, onDelete, createSession }) => {
  return (
    <div className="set-list">
      <h2>Exercises</h2>
      <div>
        {value.map((exercise) => (
          <div className="exercise-list-item" key={exercise.id}>
            <div>
              <h3>{exercise.exerciseName}</h3>{" "}
              <p>
                Sets:{exercise.setsCount} Reps:
                {exercise.repsCount} Weight:{exercise.lbsCount}
              </p>
            </div>
            <Icon
              icon="mdi:trash-can-outline"
              className="trash-icon"
              onClick={() => onDelete(exercise.id)}
            ></Icon>
          </div>
        ))}
      </div>
      <button className="big-button" onClick={createSession}>
        Create Session
      </button>
    </div>
  );
};

export default SetList;
