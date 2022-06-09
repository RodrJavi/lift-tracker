import React, { useState } from 'react'
import Counter from './Counter'

const SetCreator = ({onSubmit}) => {


  //Pulling values from each counter
  const [setsCount, setSetsCount] = useState(0)
  const [repsCount, setRepsCount] = useState(0)
  const [lbsCount, setLbsCount] = useState(0)
  const [exerciseName, setExerciseName] = useState('')
  const exerciseList = [
    "Bench press",
    "Barbell back squat",
    "Dumbbell bench press",
    "Triceps pressdown",
    "Leg extensions"
  ]

  const sets = (f) => {
    setSetsCount(f + 1)
  }
  const reps = (f) => {
    setRepsCount(f + 1)
  }




  return (

    <div>
      <div>
        <input type="text"/>
      </div>
      <div>
        <input value={exerciseName} onChange={(e) => { setExerciseName(e.target.value) }} type="text" list="exercises" placeholder="Select Exercise"></input>
        <datalist id="exercises">
          {exerciseList.map((exercise) => <option key={exercise} value={exercise}></option>)}
        </datalist>
      </div>
      <div style={{ display: 'flex' }}>
        <span>Number of sets</span>
        <Counter onChange={sets} />
      </div>
      <div style={{ display: 'flex' }}>
        <span>Number of reps</span>
        <Counter onChange={reps} />
      </div>
      <div>
        <span>Weight(lbs)</span>
        <input type='number' value={lbsCount} onChange={(e) => { setLbsCount(e.target.valueAsNumber) }}></input>
      </div>
      <button onClick={()=>{onSubmit({exerciseName, setsCount, repsCount, lbsCount})}}>Add Exercise</button>
    </div>
  )
}

export default SetCreator