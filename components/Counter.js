import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Counter = ({ onChange, placeHolder }) => {
  const [value, setValue] = useState(placeHolder);

  const subtract = () => {
    if (value > 1) {
      setValue(value - 1);
      onChange(value - 1);
    }
  };

  const add = () => {
    setValue(value + 1);
    onChange(value + 1);
  };

  return (
    <div className="counter">
      <button className="counter-change" onClick={subtract}>
        <Icon className="counter-icon" icon="mdi:minus"/>
      </button>
      <span>{value}</span>
      <button className="counter-change" onClick={add}>
      <Icon className="counter-icon" icon="mdi:plus"/>
      </button>
    </div>
  );
};

export default Counter;
