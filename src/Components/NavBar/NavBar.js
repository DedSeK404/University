import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import MenuIcon from "../../bars-solid.svg";
import Search from "../../magnifying-glass-solid.svg";
import Logo from "../../LogoOnly.svg";

const NavBar = ({handleShow}) => {
  const [style, setStyle] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setStyle("NavBarT");
      } else {
        setStyle("NavBar");
      }
    });
  }, []);

  return (
    <>
      <Navbar style={{ marginBottom: "-9px" }} sticky="top" variant="dark">
        <div
          style={
            style === "NavBarT"
              ? {
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  width: "100vw",
                  marginTop: "-8px",
                 
                  transition: "1s",
                }
              : {
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100vw",
                  marginTop: "-8px",
                  
                  transition: "1s",
                  backgroundColor: "#0e0e0e",
                }
          }
        >
          <img
            style={{ width: "110px", marginLeft: "2%", padding:"10px", }}
            src={Logo}
            alt="0"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                color: "#6c87ba",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              الجمعية التونسية لمتصرفي المؤسسات الجامعية
            </h3>
            <h3 style={{ color: "#6c87ba", fontSize: "1.5rem" }}>
              Association Tunisienne des Gestionnaires des Etablissements
              Universitaires
            </h3>
          </div>
          <Nav>
            <button className="NavButton">
              <img
                style={{ width: "20px", fill: "white" }}
                src={Search}
                alt="0"
              />
              <Nav.Link
                href="#Search"
                style={{ fontWeight: 600, color: "white" }}
              >
                Search
              </Nav.Link>
            </button>
            <button className="NavButton" onClick={handleShow}>
              <img
                style={{ width: "20px", fill: "white" }}
                src={MenuIcon}
                alt="0"
              />
              <Nav.Link
                href="#Menu"
                style={{ fontWeight: 600, color: "white" }}
              >
                Menu
              </Nav.Link>
            </button>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
