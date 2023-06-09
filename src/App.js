import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import Presentation from "./Components/Presentation/Presentation";
import { useState } from "react";
import Status from "./Components/Status/Status";
import Adherents from "./Components/Adherents/Adherents";
import Bureau from "./Components/Bureau/Bureau";
import MenuModal from "./Components/Menu/MenuModal";
import EspaceAssociation from "./Components/Espace Association/EspaceAssociation";
import Album from "./Components/Album/Album";
import Contact from "./Components/Contact/Contact";
import Actualité from "./Components/Actualité/Actualité";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div style={{ height: "200vh" }}>
      <NavBar handleShow={handleShow} />
      <Presentation />
      <MenuModal show={show} handleClose={handleClose} />
      <Status />
      <Actualité/>
      <Bureau />
      <Adherents />
      <EspaceAssociation/>
      <Album/>
      <Contact/>
    </div>
  );
}

export default App;
