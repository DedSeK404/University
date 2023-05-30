import React from "react";

const AdherentsTablePlaceholder = ({ name, email }) => {
  return (
    <div>
      <h5>{name}</h5>
      <div>
        <span style={{ fontWeight: 700, marginRight: "10px" }}>Email :</span>
        <a href={email}>{email}</a>
      </div>
    </div>
  );
};

export default AdherentsTablePlaceholder;
