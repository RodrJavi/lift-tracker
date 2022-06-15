import { Icon } from "@iconify/react";

const SetList = ({ value, onDelete }) => {
  return (
    <div className="set-list">
      <h2>Exercises</h2>
      <div className="exerciseContainer">
        {value.map((exercise) => (
          <div className="exercise-list" key={exercise.id}>
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
      <button className="big-button">Create Session</button>
    </div>
  );
};

export default SetList;
