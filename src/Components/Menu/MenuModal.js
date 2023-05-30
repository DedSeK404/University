import React from "react";
import "../Menu/MenuModal.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../LogoOnly.svg";

const MenuModal = ({ show, handleClose }) => {
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        scroll={false}
        backdrop={false}
        style={{ height: "100vh", backgroundColor: "#0e0e0e" }}
      >
        <Offcanvas.Header style={{ color: "white" }}>
          <Offcanvas.Title>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "95vw",
              }}
            >
              <img
                style={{ width: "110px", marginLeft: "2%", padding: "10px" }}
                src={Logo}
                alt="0"
              />
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <p
                  style={{ cursor: "pointer", marginTop: "10px" }}
                  onClick={handleClose}
                >
                  Close
                </p>
                <button className="Btn" onClick={handleClose}>
                  X
                </button>
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            class="overflow-auto p-3 "
            className="poem"
            style={{
              listStyle: "none",
              color: "white",
              display: "flex",
              flexDirection: "column",
              maxHeight: "400px",
              maxWidth: "350px",
            }}
          >
            <p className="hover-underline-animation">Presentation</p>
            <p className="hover-underline-animation">Status</p>
            <p className="hover-underline-animation">Bureau</p>
            <p className="hover-underline-animation">Adherents</p>
            <p className="hover-underline-animation">Actualités</p>
            <p className="hover-underline-animation">Espace Association</p>
            <p className="hover-underline-animation">Contact</p>
            <p className="hover-underline-animation">Forum</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MenuModal;
