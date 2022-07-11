
const ExerciseProgress = ({current, max}) => {
  return (
    [...Array(current)].map((i) => <span key={i} className="square"></span>)
  )
}

export default ExerciseProgress