import React from "react";
import { useState } from "react";

const Counter = ({ onChange }) => {
  const [value, setValue] = useState("0");

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(value);
  };

  const subtract = () => {
    if (value > 0 && !Number.isNaN(parseInt(value))) {
      setValue(parseInt(value) - 1);
    } else {
      setValue("0");
    }
    onChange(value);
  };

  const add = () => {
    if (!Number.isNaN(parseInt(value))) {
      setValue(parseInt(value) + 1);
    } else {
      setValue("0");
    }
    onChange(value);
  };

  return (
    <div style={{ display: "flex" }}>
      <button className="counterChange" onClick={subtract}>
        -
      </button>
      <input onChange={handleChange} type="number" value={value}></input>
      <button className="counterChange" onClick={add}>
        +
      </button>
    </div>
  );
};

export default Counter;
