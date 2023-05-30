import React from "react";

const HeaderAct = ({ img, title, text }) => {
  return (
    <div className="headerContainer">
      <div className="imageBox">
        <img className="image" src={img} alt="0" />
      </div>
      <h4 className="Achover-underline-animation">{title}</h4>
      <p style={{ color: "white" }}>{text}</p>
    </div>
  );
};

export default HeaderAct;
