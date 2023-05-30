import React from "react";
import Col from "react-bootstrap/Col";
const BodyAct = ({ img, title, text }) => {
  return (
    <Col>
      <div
        style={{ borderBottom: "1px white solid" }}
        className="headerContainerBody"
      >
        <div style={{ display: "flex", justifyContent: "space-around", alignItems:"center",padding:"10px" }}>
          <div style={{width:"50%"}}>
            <h6 className="Achover-underline-animationBody">{title}</h6>
            <p className="Parag">{text}</p>
          </div>
          <div className="imageBoxBody">
            <img className="imageBody" src={img} alt="0" />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BodyAct;
