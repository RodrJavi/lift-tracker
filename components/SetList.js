const SetList = ({ value, onDelete }) => {
  return (
    <div>
      <h2>Exercises</h2>
      <div>
        {value.map((exercise) => (
          <div key={exercise}>
            <h3>{exercise.exerciseName}</h3> Sets:{exercise.setsCount} Reps:
            {exercise.repsCount} Weight:{exercise.lbsCount}{" "}
            <button onClick={() => onDelete(exercise.exerciseName)}>Delete</button>
          </div>
        ))}
      </div>
      <button>CREATE SESSION</button>
    </div>
  );
};

export default SetList;
