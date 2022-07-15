import React, { useState, useEffect, Component } from "react";
import { useLocalStorage } from "usehooks-ts";
import Link from "next/link";
import { Icon } from "@iconify/react";

const DayHolder = ({}) => {
  const [localStorageSessions, setLocalStorageSessions] = useLocalStorage(
    "sessionList",
    []
  );
  const [sessionList, setSessionList] = useState([]);

  useEffect(() => {
    setSessionList(localStorageSessions);
  }, [localStorageSessions]);

  return (
    <div className="library">
      <h2>Library</h2>

      {sessionList.length >0 ?(
      <div className="day-list">
        {sessionList.map((session) => (
          <Link key={session.id} href={`/sessions/${session.id}`}>
            <a className="day-label">
              <span>{session.title}</span>
              <Icon className="menu-icon" icon="mdi:dots-vertical" />
            </a>
          </Link>
        ))}
      </div>) : 
      (<div className="empty-library"><span>No Sessions created</span></div>)}

      <div className="plus-icon-holder">
        <Link href="/create-workout-session">
          <a>
            <Icon className="plus-icon" icon="mdi:plus" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DayHolder;
