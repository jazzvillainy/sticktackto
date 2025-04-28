import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <div className="flex max-lg:flex-col max-lg:align-middle lg:flex lg:justify-center "> */}
      <App />
    {/* </div> */}
  </StrictMode>
);
