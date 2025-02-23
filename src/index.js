import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Maze from "./Maze";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Maze />
  </StrictMode>
);
