import React from "react";
import Table from "react-bootstrap/Table";
import Logo from "../../../LogoOnly.svg";
const Bureau05 = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom et Prénom</th>
          <th>Fonction</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <span style={{ fontWeight: 700 }}>Le Président :</span> Adel
            Gammoudi
          </td>
          <td>
            {" "}
            Secretaire principal à l'université du 7 novembre à carthage{" "}
          </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <span style={{ fontWeight: 700 }}>Vice Président :</span> Salem Ben
            Salma
          </td>
          <td>Secretaire d'université à l'université de Gafsa </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <span style={{ fontWeight: 700 }}>Secretaire genéral :</span>{" "}
            MChaker Sassi
          </td>
          <td>
            {" "}
            Secretaire d'etablissement à la faculté des lettres, des arts et des
            humanités-manouba{" "}
          </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>4</td>
          <td>
            <span style={{ fontWeight: 700 }}>
              Secretaire genéral adjoint :
            </span>
            Abdelmajid Laaraiedh
          </td>
          <td>
            Secretaire d'etablissement à la faculté des sciences economiques et
            de gestion de tunis
          </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>5</td>
          <td>
            <span style={{ fontWeight: 700 }}>Trésorier :</span>
            Khemaies Rzig
          </td>
          <td>Secretaire principal à l'université de tunis elmanar </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <span style={{ fontWeight: 700 }}>Trésorier adjoint :</span>
            Abdelkarim Ben Meftehh
          </td>
          <td>
            Secretaire principal d'etablissemant à la faculté des sciences
            economiques et de gestion de tunis
          </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>7</td>
          <td>
            <span style={{ fontWeight: 700 }}>
              Membre Chargé de la communication :
            </span>
            Samir Essid
          </td>
          <td>
            Chef de service au ministère de l'enseignement superieur, de
            recherche scientifique et de technologie
          </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>8</td>
          <td>
            <span style={{ fontWeight: 700 }}>
              Membre Chargé des Relations avec l'exterieur :
            </span>
            Hatem Hadded
          </td>
          <td> Secretaire d'etablissement à la l'université de kairouan </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>9</td>
          <td>
            <span style={{ fontWeight: 700 }}>
              Membre Chargé des activités culturelles :
            </span>
            Abdelkader Alimi
          </td>
          <td>
            {" "}
            Chef de service au ministère de l'enseignement superieur, de
            recherche scientifique et de technologie{" "}
          </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>10</td>
          <td>
            <span style={{ fontWeight: 700 }}>Membre :</span>
            Mohamed Dahmoul
          </td>
          <td>
            {" "}
            Secretaire General à l'Institut Supérieur du Transport et de la
            Logistique de Sousse{" "}
          </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>11</td>
          <td>
            <span style={{ fontWeight: 700 }}>Membre :</span>
            Mounir Ghali
          </td>
          <td>Secretaire principal à l'université de sfax</td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Bureau05;
