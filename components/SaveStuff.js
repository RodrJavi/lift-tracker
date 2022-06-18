import React, { useState, useEffect, Component } from "react";


const saveStuff = () => {
  const [count, setCount] = useState(0);
  const [sessions, setSessions] = useState([]);
  //const [sessions, setSessions] = useState(localStorage.getItem("sessionList"))
  // const [sessions, setSessions] = useState(()=> {
  //   let value;
  //   try {
  //     value = JSON.parse(window.localStorage.getItem("sessionList"));  
  //   } catch(e) {
  //     value=0;
  //   }
  //   return value;
  // })
  //
  // const [count, setCount] = useState(() => {
  //   let value;
  //   try {
  //     value = JSON.parse(window.localStorage.getItem("buttonCount") || "0");
  //   } catch (e) {
  //     value = 0;
  //   }
  //   return value;
  // });
  // useEffect(() => {
  //   window.localStorage.setItem("buttonCount", count);
  // }, [count]);
  return (
    <div>
    <button
      onClick={() => {
        const works = JSON.parse((localStorage.getItem("sessionList")));
        console.log(works);
        setSessions(works);
      }}
    >
      {count}
    </button>
      {/* {JSON.stringify(sessions[0].title, 2, null)} */}

      <div>
        {sessions.map((day) => (
          <div key={day.title}>
            {day.title}
          </div>
        )
        )}
      </div>



    </div>
  );
};

export default saveStuff;
