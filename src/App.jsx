import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Tema from "./pages/Tema";
import Experiencia from "./pages/Experiencia";
import Patrocinadores from "./pages/Patrocinadores";
import FaqPage from "./pages/FaqPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/tema" element={<Tema />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/patrocinadores" element={<Patrocinadores />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
