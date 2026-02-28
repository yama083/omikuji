import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import OmikujiApp from "./OmikujiApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OmikujiApp />
  </StrictMode>,
);
