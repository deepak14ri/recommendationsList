import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchWithRecommendations from "./SearchWithRecommendations"; // Path to your component file

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SearchWithRecommendations />
  </StrictMode>
);
