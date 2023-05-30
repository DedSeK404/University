import React from "react";
import "./Presentation.css";
import { motion } from "framer-motion";
import Pic from "../../Pic.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Presentation = () => {
  return (
    <div className="Box">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1 }}
      >
        <Container fluid="md">
          <Row style={{ display: "flex", padding: "5%", alignItems: "center" }}>
            <Col sm={6}>
              <h1 style={{ color: "white", letterSpacing: "3px" }}>
                Presentation
              </h1>
              <p style={{ color: "white", letterSpacing: "2px" }}>
                L’Association Tunisienne des Gestionnaires des établissements
                Universitaires a été crée le 28 Août 2000, visa n°427 paru dans
                le Journal Officiel de la République Tunisienne le 17 janvier
                2001. Elle regroupe les diplômés du cycle de formation des
                administrateurs conseillers appelés à exercer auprès des
                universités, des établissements d’enseignement supérieur et de
                recherche et des établissements des œuvres universitaires. Elle
                a pour but essentiel de consolider les liens d’amitié entre les
                administrateurs conseillers et de veiller à maintenir le contact
                entre eux. Pour cela, l’Association organise des manifestations
                à caractère scientifique et culturel, des ateliers de formation,
                des excursions et des activités sportives.{" "}
              </p>
            </Col>
            <Col sm={6}>
              <img src={Pic} alt="0" />
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default Presentation;
