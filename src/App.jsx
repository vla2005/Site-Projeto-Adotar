import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx"; // ⬅️ importa aqui

import Inicio from "./pages/Inicio.jsx";
import Adote from "./pages/Adote.jsx";
import NosAjude from "./pages/NosAjude.jsx";
import FinaisFelizes from "./pages/FinaisFelizes.jsx";
import Contato from "./pages/Contato.jsx";

export default function App() {
    return (
        <Layout>
            {/* 🔹 Componente que força scroll para o topo sempre que muda de página */}
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Adote" element={<Adote />} />
                <Route path="/NosAjude" element={<NosAjude />} />
                <Route path="/FinaisFelizes" element={<FinaisFelizes />} />
                <Route path="/Contato" element={<Contato />} />
                {/* 404 simples */}
                <Route path="*" element={<Navigate to="/Inicio" replace />} />
            </Routes>
        </Layout>
    );
}
