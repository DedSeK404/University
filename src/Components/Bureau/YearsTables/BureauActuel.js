import React from "react";
import Table from "react-bootstrap/Table";
import Logo from "../../../LogoOnly.svg";
const BureauActuel = () => {
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
            <span style={{ fontWeight: 700 }}>Le Président :</span> Jaballah
            RAHMOUNI
          </td>
          <td>Sous-Directeur à l'Université de Tunis El Manar .</td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <span style={{ fontWeight: 700 }}>Vice Président :</span> Imène
            BOUASSIDA
          </td>
          <td>
            Sous-Directeur au Ministère de l'Enseignement Supérieur, de la
            Recherche Scientifique et de la Technologie.{" "}
          </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <span style={{ fontWeight: 700 }}>Secretaire genéral :</span>Nadia
            EL AMRI
          </td>
          <td>Sous-Directeur à l'Université de la Manouba.</td>
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
            Imed LAHOUIMEL
          </td>
          <td>Sous-Directeur à l'Université de Sousse.</td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>5</td>
          <td>
            <span style={{ fontWeight: 700 }}>Trésorier :</span>
            Hammouda LIMAM
          </td>
          <td>
            Chef de Service à l'Ecole Supérieure de la Technologie et de
            l'Informatique Charguia.{" "}
          </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <span style={{ fontWeight: 700 }}>Trésorier adjoint :</span>
            Naceur EL BAHRI
          </td>
          <td>Sous-Directeur à l'Ecole des Arts et Métiers de Sfax.</td>
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
            Kamel RABII
          </td>
          <td>
            Chef de service à l'Office des Oeuvres Universitaires pour le Nord
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
            Imène MOUSSA
          </td>
          <td>
            {" "}
            Secrétaire Général de l'Ecole Supérieure de l'Informatique. Ariana{" "}
          </td>
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
            Hatem HADDAD
          </td>
          <td>
            Chef de service au Centre de Calcul El KHAWARISMI. Campus
            Universitaire de La Manouba
          </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>10</td>
          <td>
            <span style={{ fontWeight: 700 }}>Membre :</span>
            Boulbèba GUEFRECHE
          </td>
          <td>Sous-Directeur à l'Université de Gabès.</td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>

        <tr>
          <td>11</td>
          <td>
            <span style={{ fontWeight: 700 }}>Membre :</span>
            Samir ESSID
          </td>
          <td>
            Chef de Service au Ministère de l'Enseignement Supérieur, de la
            Recherche Scientifique et de la Technologie.
          </td>
          <td>
            <img style={{ width: "100px" }} src={Logo} alt="0" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BureauActuel;
