import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderAct from "./HeaderAct";
import BodyAct from "./BodyAct";
import HeaderImage from "../../Album/f_g15.jpg";
import BodyImage1 from "../../Album/f_g3.jpg";
import BodyImage2 from "../../Album/f_g6.jpg";
import BodyImage3 from "../../Album/f_g12.jpg";
import "./Actualité.css";

const Actualité = () => {
  return (
    <div
      style={{
        backgroundColor: "#0E0E0E",
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <Container>
        <Row>
          <Col>
            <HeaderAct
              img={HeaderImage}
              title={" EXCURSION le 20,21,22 et 23 Mars 2008 "}
              text={
                "Le Comité Directeur de l'ATGEU se concentre sur les préparatifs nécessaires pour l'organisation d'une excursion au profit de ses adhérents et ce le 20,21,22 et 23 Mars 2008.Plus d'informations vous seront communiquées ultérieurement. "
              }
            />
          </Col>
          <Col>
            <BodyAct
              img={BodyImage1}
              title={"Séminaire sur La Qualité dans L'Enseignement Supérieur "}
              text={
                "L'association organisera le 14 Décembre 2007 à l'hôtel ABOU NAWES Tunis un séminaire portant sur  La Qualité dans l'Enseignement Supérieur. Une panoplie d'interventions sera présentée à cette occasion par des intervenants du Premier Ministère, du Ministère des Finances, du Ministère de l'Enseignement Supérieur, de la Recherche Scientifique et de la Technologie et du Conseil National d'Accréditation."
              }
            />
            <BodyAct
              img={BodyImage2}
              title={" Séminaire de l'ATGEU "}
              text={
                "Une page SPECIAL SEMINAIRE sera developpée pour mieux valoriser les travaux de ce séminaire. "
              }
            />
            <BodyAct
              img={BodyImage3}
              title={" EXCURSION le 20,21,22 et 23 Mars 2008 "}
              text={
                "L'organisation d'une excursion au profit de ses adhérents et ce le 20,21,22 et 23 Mars 2008.Plus d'informations vous seront communiquées ultérieurement. "
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Actualité;
