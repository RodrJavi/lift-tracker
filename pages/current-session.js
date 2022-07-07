import {useEffect, useState } from 'react'
import { useReadLocalStorage } from 'usehooks-ts'



const currentSession = () => {
    const activeSession = useReadLocalStorage("currentWorkout");
    const [workout, setWorkout] = useState([{}]);
    
    useEffect(()=>{delete activeSession.title; setWorkout([activeSession])}, [activeSession]);

    const [exerciseObject, setexerciseObject] = useState([
        {
          id: 1,
          exerciseName: "Bench press",
          setsCount: 4,
          repsCount: 8,
          lbsCount: 135,
        },
        {
          id: 2,
          exerciseName: "Shoulder press",
          setsCount: 3,
          repsCount: 12,
          lbsCount: 55,
        },
        {
          id: 3,
          exerciseName: "Tricep Pressdown",
          setsCount: 2,
          repsCount: 15,
          lbsCount: 50,
        },
      ]);

  return (
    <div><div>
        {exerciseObject.map((exercise) => (
            <div key={exercise.id}>
              <div>
                <h3>{exercise.exerciseName}</h3>{" "}
                <p>
                  Sets:{exercise.setsCount} Reps:
                  {exercise.repsCount} Weight:{exercise.lbsCount}
                </p>
              </div>
            </div>
          ))}
    </div>{JSON.stringify(workout)}{JSON.stringify(exerciseObject)}</div>
    
  )
}

export default currentSession