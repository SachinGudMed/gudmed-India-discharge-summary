import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Compliance from "./pages/Compliance";
import ROI from "./pages/ROI";
import Integration from "./pages/Integration";
import ScribbleSection from "./components/ScribbleSection";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/roi" element={<ROI />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/scribble" element={<ScribbleSection />} />
      </Route>
    </Routes>
  );
}

export default App;