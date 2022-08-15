import React from "react";

const UncheckButton = () => {
  return (
    <button className="App__uncheckButton">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        fill="#526d28"
        className="App__uncheckButton-svg"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      </svg>
    </button>
  );
};

export default UncheckButton;
