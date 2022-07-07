import React, { useState, useEffect, Component } from "react";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import Link from "next/link";
import { Icon } from "@iconify/react";

const dayHolder = ({}) => {
  const sessionList = useReadLocalStorage("sessionList");
  const [works, setWorks] = useState([]);
  const [currentWorkout,setCurrentWorkout] = useLocalStorage("currentWorkout", []);

  useEffect(() => {
    setWorks(sessionList);
  }, [sessionList]);

  const startSession = (train) =>{
    setCurrentWorkout(train);
  }

  return (
    <div className="library">
      <h2>Library</h2>
      <div className="day-list">
        {works.map((day) => (
          <div onClick={()=>{startSession(day)}} className="day-label" key={day.title}>
            <span>{day.title}</span>
            <Icon className="menu-icon" icon="mdi:dots-vertical" />
          </div>
        ))}
      </div>
      <div className="plus-icon-holder">
        <Link href="/create-workout-session">
          <Icon className="plus-icon" icon="mdi:plus" />
        </Link>
      </div>
    </div>
  );
};

export default dayHolder;
