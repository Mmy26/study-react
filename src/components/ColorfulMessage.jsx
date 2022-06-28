import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  // props : {color: “red",message: "元気です！}
  const contentStyle = {
    color: color,
    fontSize: "18px",
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
