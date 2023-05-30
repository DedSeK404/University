import React from "react";
import Table from "react-bootstrap/Table";
import Logo from "../../../LogoOnly.svg";
const Bureau03 = () => {
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
            <span style={{ fontWeight: 700 }}>Le Président :</span> Imed Hidri
          </td>
          <td> Secretaire principal à l'université de la Manouba</td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <span style={{ fontWeight: 700 }}>Vice Président :</span> Rachid
            Gary
          </td>
          <td>Secretaire principal à l'université de Zitouna </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <span style={{ fontWeight: 700 }}>Secretaire genéral :</span> Mounir
            Ben Hassine{" "}
          </td>
          <td> Secretaire principal à l'université de Tunis </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>4</td>
          <td>
            <span style={{ fontWeight: 700 }}>
              Secretaire genéral adjoint :
            </span>{" "}
            Sihem Wesleti
          </td>
          <td>
            {" "}
            Secretaire general d'etablissement à l'institut préparatoire de
            Tunis{" "}
          </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>5</td>
          <td>
            <span style={{ fontWeight: 700 }}>Trésorier :</span>
            Abdennacer Jghobbi
          </td>
          <td>Secretaire d'université à l'université de la Manouba</td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <span style={{ fontWeight: 700 }}>Trésorier adjoint :</span>
            Sondes Khmiri
          </td>
          <td>
            {" "}
            Secretaire d'université à l'université du 7 novembre à carthage{" "}
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
            Hassan Fray
          </td>
          <td>
            {" "}
            Sous-Directeur au Ministere de l'enseignement supérieur de la
            recherche scientifique et de la technologie{" "}
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
            Sami Guesmi
          </td>
          <td> Secretaire principal à l'institut supérieur de musique </td>
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
            Makhlouf Ben Hafsia
          </td>
          <td> Secretaire Principal à l'université de Tunis Elmanar </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>10</td>
          <td>
            <span style={{ fontWeight: 700 }}>Membre :</span>
            Nacer Bahri
          </td>
          <td> Secretaire principal à l'Institut des beaux arts de sfax </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>11</td>
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
      </tbody>
    </Table>
  );
};

export default Bureau03;
