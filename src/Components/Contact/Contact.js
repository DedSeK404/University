import React from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Logo from "../../LogoOnly.svg";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#0E0E0E" }}>
      <Container>
        <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
          <div>
            <h5 style={{ color: "white" }}>Adresse :</h5>
            <p style={{ color: "white" }}>
              Association Tunisienne des Gestionnaires des Etablissements
              Universitaires B.P 69 Omran Superieur
            </p>
          </div>
          <div>
            <h5 style={{ color: "white" }}>Tél :</h5>
            <p style={{ color: "white" }}>(216) 98 561 717 (216) 98 533 200</p>
          </div>
        </div>
        <Table striped bordered hover variant="light">
          <tbody>
            <tr>
              <td>
                <p>Président</p>
                <h5>Adel Gammoudi :</h5>
              </td>
              <td>
                <a href="adel.gammoudi@univ7nc.rnu.tn">
                  adel.gammoudi@univ7nc.rnu.tn
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Secrétaire Général </p>
                <h5>Chaker Sassi :</h5>
              </td>
              <td>
                <a href="chaker.sassi@yahoo.fr">chaker.sassi@yahoo.fr</a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Trésorier</p>
                <h5>Khemaies Rzig : </h5>
              </td>
              <td>
                <a href="Khemaies.Rzig@utm.rnu.tn">Khemaies.Rzig@utm.rnu.tn</a>
              </td>
            </tr>
          </tbody>
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <img style={{ width: "150px" }} src={Logo} alt="0" />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
