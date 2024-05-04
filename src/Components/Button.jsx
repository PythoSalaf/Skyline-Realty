import React from "react";

const Button = ({ btnName, btnStyle }) => {
  return <button className={btnStyle}>{btnName}</button>;
};

export default Button;
