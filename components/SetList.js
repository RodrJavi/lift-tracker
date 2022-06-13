const SetList = ({ value, onDelete }) => {
  return (
    <div className="setList">
      <h2>Exercises</h2>
      <div className="exerciseContainer">
        {value.map((exercise) => (
          <div className="exerciseList" key={exercise.id}>
            <div>
              <h3>{exercise.exerciseName}</h3>{" "}
              <p>
                Sets:{exercise.setsCount} Reps:
                {exercise.repsCount} Weight:{exercise.lbsCount}
              </p>
            </div>
            <button onClick={() => onDelete(exercise.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button className="bigButton">Create Session</button>
    </div>
  );
};

export default SetList;
