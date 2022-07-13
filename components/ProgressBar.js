import React from "react";

const ProgressBar = ({ completion }) => {
  const remaining = {
    width: "100%",
    backgroundColor: "gray",
    height: "10px",
  };

  const completed = {
    width: `${completion}%`,
    maxWidth: "100%",
    backgroundColor: "var(--pink)",
    height: "10px",
    transition: "all 0.2s ease-in-out",
  };

  return (
    <div style={remaining}>
      <div style={completed}></div>
    </div>
  );
};

export default ProgressBar;
