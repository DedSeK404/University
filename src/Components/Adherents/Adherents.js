import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import AdherentsTable from "./AdherentsTable";
import { motion } from "framer-motion";
import "./Adherents.css";

const Adherents = () => {
  return (
    <div className="Tabcontainer">
      <Tab.Container
        unmountOnExit={true}
        id="left-tabs-example"
        defaultActiveKey="first"
      >
        <Row>
          <Col sm={5}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="linkContainer">
                <Nav.Link className="link" eventKey="first">
                  être adhérent, veut dire quoi?
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  comment adhérer à l'ATGEU?
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  les adhérents, qui sont-ils?
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={7}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <motion.div>
                  <h5
                    style={{
                      fontSize: "1.7rem",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    Tout adhérent de l'ATGEU, peut:
                  </h5>
                  <ul>
                    <motion.li
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      style={{
                        fontSize: "1.5rem",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      béneficier des réductions à la participation aux
                      différentes activités de l'association.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                        delay: 0.2,
                      }}
                      style={{
                        fontSize: "1.5rem",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      avoir la priorité d'etre parmis nos participants aux
                      colloques et excurtions,...
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                        delay: 0.4,
                      }}
                      style={{
                        fontSize: "1.5rem",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      participer au tirage des prix à chaque manifestation.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                        delay: 0.6,
                      }}
                      style={{
                        fontSize: "1.5rem",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      mettre en ligne ses articles.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                        delay: 1,
                      }}
                      style={{
                        fontSize: "1.5rem",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      participer au FORUM.
                    </motion.li>
                  </ul>
                </motion.div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div>
                  <motion.p
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                    style={{
                      textIndent: "20px",
                      fontSize: "1.5rem",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    Pour adhérer à l'ATGEU, chaque membre doit payer une
                    cotisation de dix dinars au début du mois de janvier de
                    chaque année et doit fournir une photo d'identité au
                    trésorier de l'association.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0, 0.71, 0.2, 1.01],
                      delay: 0.5,
                    }}
                    style={{
                      textIndent: "20px",
                      fontSize: "1.5rem",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    Le comité directeur de l'association, peut changer la somme
                    de cotisation, lors d'une assemblée générale, qui ne
                    dépasserait jamais les trente dinars.
                  </motion.p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <AdherentsTable />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Adherents;
