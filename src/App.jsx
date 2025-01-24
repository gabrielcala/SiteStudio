import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";

import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="w-full min-h-screen h-auto bg-[#353434]">
      <Navbar />
      <Home />
    </div>
  );
}
