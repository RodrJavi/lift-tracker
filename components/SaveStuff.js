import React, { useState, useEffect } from "react";

const saveStuff = () => {
  const [count, setCount] = useState(0);
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
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
};

export default saveStuff;
