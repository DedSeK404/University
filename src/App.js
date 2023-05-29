import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Presentation from "./Components/Presentation";
import { useState } from "react";
import MenuModal from "./Components/MenuModal";
import Status from "./Components/Status";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div style={{ height: "200vh" }}>
      <NavBar handleShow={handleShow} />
      <Presentation />
      <MenuModal show={show} handleClose={handleClose}/>
      <Status/>
    </div>
  );
}

export default App;
