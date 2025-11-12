import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Faz o scroll da página para o topo sempre que a rota mudar.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant", // pode trocar por "smooth" se quiser animação
        });
    }, [pathname]);

    return null;
}
