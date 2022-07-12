import React from "react";

const ProgressBar = ({ completion }) => {
  const remaining = {
    width: "100%",
    backgroundColor: "gray",
    height: "50px",
  };

  const completed = {
    width: `${completion}%`,
    maxWidth: "100%",
    backgroundColor: "blue",
    height: "50px",
  };
  return (
    <div style={remaining}>
      <div style={completed}></div>
    </div>
  );
};

export default ProgressBar;
