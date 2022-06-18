import React, { useState } from "react";
import Counter from "./Counter";
import { Icon } from "@iconify/react";

const SetCreator = ({ onSubmit, dayName }) => {
  //Pulling values from each counter
  const [setsCount, setSetsCount] = useState(4);
  const [repsCount, setRepsCount] = useState(8);
  const [lbsCount, setLbsCount] = useState(1);
  const [exerciseName, setExerciseName] = useState("");
  const exerciseList = [
    "Bench press",
    "Barbell back squat",
    "Dumbbell bench press",
    "Triceps pressdown",
    "Leg extensions",
  ];

  const sets = (f) => {
    setSetsCount(f);
  };
  const reps = (f) => {
    setRepsCount(f);
  };

  let canSubmit = setsCount + repsCount + lbsCount;

  return (
    <div className="set-creator">
      <div>
        <label htmlFor="title">Title</label>
        <input
          className="name-input"
          type="text"
          name="title"
          onBlur={(e) => {
            dayName(e.target.value);
          }}
        />

        {/* <pre>{title}</pre> */}

        <hr></hr>

        <div>
          <label htmlFor="exercise">Exercise</label>
          <input
            className="dropdown"
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

      <div className="counter-container">
        <span className="spans">Number of sets</span>
        <Counter onChange={sets} placeHolder={4} />
      </div>

      <div className="counter-container">
        <span className="spans">Number of reps</span>
        <Counter onChange={reps} placeHolder={8} />
      </div>

      <div className="counter-container">
        <span>Weight(lbs)</span>
        <input
          type="number"
          defaultValue={1}
          min="1"
          onBlur={(e) => {
            setLbsCount(e.target.value);
          }}
          style={{ width: 95, height: 25, textAlign: "right" }}
        ></input>
      </div>

      <button
        className="big-button"
        onClick={() => {
          if (canSubmit >= 3 && exerciseName != "") {
            onSubmit({ exerciseName, setsCount, repsCount, lbsCount });
          }
        }}
      >
        Add Exercise
      </button>
    </div>
  );
};

export default SetCreator;
