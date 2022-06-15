import React from "react";
import { Icon } from "@iconify/react";

const Header = ({ onClick }) => {
  // const onClick=()=>{
  //   console.log('click')
  // }

  return (
    <div className="top-banner">
      <Icon className="left-icon" icon="mdi:arrow-left"></Icon>
      <h1>Create session</h1>
    </div>
  );
};

export default Header;
