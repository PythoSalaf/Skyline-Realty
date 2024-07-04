import React from "react";

const Button = ({ btnName, btnStyle, btnHandle }) => {
  return (
    <button className={btnStyle} onClick={btnHandle}>
      {btnName}
    </button>
  );
};

export default Button;
