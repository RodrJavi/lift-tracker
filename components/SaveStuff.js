import React, { useState, useEffect, Component } from "react";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import Link from "next/link";

const saveStuff = ({}) => {
  const [count, setCount] = useState(0);
  const sessionList = useReadLocalStorage("sessionList");
  // const [works, setWorks] = useState([{ sessionList }]);
  return (
    <div>
      <button
        onClick={() => {
          console.log(sessionList);
        }}
      >
        {count}
      </button>
      {/* {JSON.stringify(sessionList[0].title, 2, null)} */}

      <div>
        {[{ sessionList }].map((day) => (
          <div key={day.title}>{day.title}</div>
        ))}
      </div>

      <button>
        <Link href="/create-workout-session">To create session </Link>
      </button>
    </div>
  );
};

export default saveStuff;
