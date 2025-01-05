import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Hours from "../src/components/pages/Hours.jsx";
import Capoeira from "./components/pages/Capeirainfo.jsx";
import About from "./components/pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hours",
    element: <Hours />,
  },
  {
    path: "/capoeira",
    element: <Capoeira />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
