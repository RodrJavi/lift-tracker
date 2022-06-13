import React, { useState } from "react";
import Counter from "./Counter";

const SetCreator = ({ onSubmit }) => {
  //Pulling values from each counter
  const [setsCount, setSetsCount] = useState(0);
  const [repsCount, setRepsCount] = useState(0);
  const [lbsCount, setLbsCount] = useState(0);
  const [exerciseName, setExerciseName] = useState("");
  const exerciseList = [
    "Bench press",
    "Barbell back squat",
    "Dumbbell bench press",
    "Triceps pressdown",
    "Leg extensions",
  ];

  const sets = (f) => {
    setSetsCount(f + 1);
  };
  const reps = (f) => {
    setRepsCount(f + 1);
  };

  return (
    <div className="setCreator">
      <div>
        <div className="nameInput">
          <input type="text" />
        </div>

        <hr></hr>

        <div>
          <label htmlFor="exercise">Exercise</label>
          <input
            className="nameInput"
            value={exerciseName}
            onChange={(e) => {
              setExerciseName(e.target.value);
            }}
            type="text"
            name="exercise"
            list="exercises"
            placeholder="Select Exercise"
          ></input>
          <datalist id="exercises">
            {exerciseList.map((exercise) => (
              <option key={exercise} value={exercise}></option>
            ))}
          </datalist>
        </div>
      </div>

      <div className="counterContainer">
        <span className="spans">Number of sets</span>
        <Counter onChange={sets} />
      </div>

      <div className="counterContainer">
        <span className="spans">Number of reps</span>
        <Counter onChange={reps} />
      </div>

      <div className="counterContainer">
        <span>Weight(lbs)</span>
        <input
          type="number"
          defaultValue={0}
          onBlur={(e) => {
            setLbsCount(e.target.value);
          }}
        ></input>
      </div>

      <button
        className="bigButton"
        onClick={() => {
          onSubmit({ exerciseName, setsCount, repsCount, lbsCount });
        }}
      >
        Add Exercise
      </button>
    </div>
  );
};

export default SetCreator;
