import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import "./EspaceAssociation.css";

const EspaceAssociation = () => {
  
  return (
    <div style={{ marginBottom: "5%" }}>
      <Container>
        <h1
          className="Ahover-underline-animation"
          style={{ letterSpacing: "3px", marginTop: "5%", marginBottom: "5%" }}
        >
          Espace Association
        </h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th style={{ padding: "20px" }}>
                Mot de Monsieur Youssef Alouane, Président d'Honneur:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th style={{ padding: "20px" }}>
                Chers Amis, Chers Administrateurs Conseillers
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "50px" }}>
                <p style={{ textIndent: "30px" }}>
                  Notre Association compte aujourd’hui plus de 200 adhérents.
                  Elle est de ce fait très importante comme association.
                </p>
                <p style={{ textIndent: "30px" }}>
                  Son but est de réunir les administrateurs conseillers
                  ressortissant du cycle de formation à l'iscae depuis 1998, en
                  une association commune, forte et représentative dans le
                  secteur de l'enseignement supérieur.
                </p>
                <p style={{ textIndent: "30px" }}>
                  Ma fonction de Président de L'Association, consiste à
                  m’engager toujours plus à travers elle, au service de mes
                  collègues.
                </p>
                <p style={{ textIndent: "30px" }}>
                  Pour remplir au mieux le mandat qui nous a été donné, nous
                  nous fixé pour objectif d’accroître son rayonnement et, par
                  là, de valoriser notre formation en développant nos
                  compétences à travers les colloques et les séminaires.
                </p>
                <p style={{ textIndent: "30px" }}>
                  Je veux aussi stimuler le sentiment d’appartenance afin de
                  promouvoir une plus grande solidarité entre nos membres pour
                  qu’ils « s’épaulent » toujours davantage.
                </p>
                <p style={{ textIndent: "30px" }}>
                  Pour renforcer les liens qui nous unissent, nous multiplions
                  les occasions de rencontre et nous mettons en place des outils
                  de communication toujours plus performants tel que ce site
                  web.
                </p>
                <p style={{ textIndent: "30px" }}>
                  Notre démarche est ambitieuse et nécessite la participation de
                  tous afin que notre structure gagne autant en efficacité qu’en
                  convivialité.
                </p>
                <p> Notre réussite dépend de vous. </p>
                <p> Très amicalement,</p>
                <p style={{ textIndent: "30px" }}>
                  Gammoudi Adel, Président de l'Associations Tunisienne des
                  Gestionnaires des Etablissements Universitaire Administrateurs
                  Conseiller,
                </p>
                <p>
                  Secrétaire Principal à L'Université du 7 Novembre à Carthage
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default EspaceAssociation;
