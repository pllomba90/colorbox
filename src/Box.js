import React from "react";

const Box = ({ id, background, height, width, removeBox }) => {
  const boxStyle = {
    height: height,
    width: width,
    background: background,
  };
  const handleRemoveClick = () => {
    removeBox(id);
  };

  return <div className="box" style={boxStyle}>
<button onClick={handleRemoveClick}>X</button>
  </div>;
};

export default Box;
