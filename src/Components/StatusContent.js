import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const StatusContent = ({ shortContent, longContent }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="content">
      {shortContent}
      <span className={`longText ${collapse ? "expanded" : ""}`}>
        {longContent}
      </span>
      <Button
        variant="outline-light"
        onClick={() => setCollapse((prev) => !prev)}
      >
        {!collapse ? "Read more" : "Read less"}
      </Button>
    </div>
  );
};

export default StatusContent;
