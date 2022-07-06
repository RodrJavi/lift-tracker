import React, { useState, useEffect, Component } from "react";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import Link from "next/link";
import { Icon } from "@iconify/react";

const dayHolder = ({}) => {
  const [count, setCount] = useState(0);
  const sessionList = useReadLocalStorage("sessionList");
  const [works, setWorks] = useState([]);

  useEffect(() => {
    setWorks(sessionList);
  }, [sessionList]);

  return (
    <div className="library">
      <h2>Library</h2>
      <div className="day-list">
        {works.map((day) => (
          <div className="day-label" key={day.title}>
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
