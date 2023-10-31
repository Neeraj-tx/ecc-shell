import Navbar from "./components/navbar";

import { Routes, Route } from "react-router-dom";
import RRC from "./rrc.jsx";
import IRN from "./irn";
import DD from "./dd";
import Home from "./home";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rrc" element={<RRC />} />
        <Route path="/irn" element={<IRN />} />
        <Route path="/dd" element={<DD />} />
      </Routes>
    </>
  );
};

export default App;
