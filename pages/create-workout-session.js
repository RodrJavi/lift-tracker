import Head from "next/head";
import Header from "/components/Header";
import SetCreator from "/components/SetCreator";
import SetList from "/components/SetList";
import { useState } from "react";

export default function CreateWorkoutSession() {
  const [exerciseArray, setExerciseArray] = useState([
    { exerciseName: "Bench press", setsCount: 4, repsCount: 8, lbsCount: 135 },
    {
      exerciseName: "Shoulder press",
      setsCount: 3,
      repsCount: 12,
      lbsCount: 55,
    },
    {
      exerciseName: "Tricep Pressdown",
      setsCount: 2,
      repsCount: 15,
      lbsCount: 50,
    },
  ]);

  const addItem = (item) => {
    console.log(item);
    setExerciseArray([item, ...exerciseArray]);
  };

  const deleteItem = (name) => {
    setExerciseArray(
      exerciseArray.filter((item) => item.exerciseName !== name)
    );
  };

  return (
    <div className='setCreator'>
      <Head>
        <title>Create Workout Session</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <SetCreator onSubmit={addItem}></SetCreator>
      <SetList value={exerciseArray} onDelete={deleteItem}></SetList>
    </div>
  );
}
