const ExerciseProgress = ({ current, max }) => {
  const green = {
    backgroundColor: "green",
  };

  const purple = {
    backgroundColor: "#BB17F4",
  };

  const square = {
    height: "15px",
    width: "15px",
    border: "1px solid black",
  };

  return [...Array(max)].map((e, i) => (
    <span key={i} style={square}>
      {i}
    </span>
  ));
};

export default ExerciseProgress;
