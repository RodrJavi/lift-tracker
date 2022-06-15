import Head from "next/head";
import Header from "/components/Header";
import SetCreator from "/components/SetCreator";
import SetList from "/components/SetList";
import { useState } from "react";

export default function CreateWorkoutSession() {
  const [exerciseArray, setExerciseArray] = useState([
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

  const addItem = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newExercise = { id, ...item };
    setExerciseArray([newExercise, ...exerciseArray]);
    console.log(newExercise);
  };

  const deleteItem = (id) => {
    setExerciseArray(exerciseArray.filter((item) => item.id !== id));
  };

  return (
    <div className="create-session-background">
      <Head>
        <title>Create Workout Session</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <div className="create-session">
        <SetCreator onSubmit={addItem}></SetCreator>
      </div>

      {exerciseArray.length > 0 ? (
        <SetList value={exerciseArray} onDelete={deleteItem}></SetList>
      ) : (
        <div className="setList">
          <p>No exercises listed</p>
        </div>
      )}
    </div>
  );
}
