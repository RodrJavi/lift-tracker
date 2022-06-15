import React from "react";
import { useState } from "react";

const Counter = ({ onChange, placeHolder }) => {
  const [value, setValue] = useState(placeHolder);

  const subtract = () => {
    if (value > 1) {
      setValue(value - 1);
    }
    onChange(value - 1);
  };

  const add = () => {
    setValue(value + 1);
    onChange(value + 1);
  };

  return (
    <div className="counter">
      <button className="counter-change" onClick={subtract}>
        -
      </button>
      <span>{value}</span>
      <button className="counter-change" onClick={add}>
        +
      </button>
    </div>
  );
};

export default Counter;
