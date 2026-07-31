import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Films from "./Films.jsx";
import Characters from "./Characters.jsx";
import Planets from "./Planets.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Films />
    <Characters />
    <Planets />
  </StrictMode>,
);
