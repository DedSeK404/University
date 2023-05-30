import React from "react";
import Bureau03 from "./YearsTables/Bureau03";
import Bureau05 from "./YearsTables/Bureau05";
import BureauActuel from "./YearsTables/BureauActuel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/esm/Container";
import "./Bureau.css";

const Bureau = () => {
  return (
    <Container>
      <h1 className="Thover-underline-animation" style={{ letterSpacing: "3px",marginBottom:"5%" }}> Bureau</h1>
      <Tabs
        defaultActiveKey="Bureau Actuel"
        className="mb-3"
        fill
        variant="tabs"
      >
        <Tab eventKey="Bureau 2001/2003" title="Bureau 2001/2003">
          <Bureau03 />
        </Tab>
        <Tab eventKey="Bureau 2003/2005" title="Bureau 2003/2005">
          <Bureau05 />
        </Tab>
        <Tab eventKey="Bureau Actuel" title="Bureau Actuel">
          <BureauActuel />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Bureau;
