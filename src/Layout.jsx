import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl} from "./utils/index.js";
import { Menu, X, Heart, Instagram, MessageCircle } from "lucide-react";
import logo from "./assets/images/logo.png"

export default function Layout({ children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: "Início", path: "/" },
        { name: "Adote", path: "Adote" },
        { name: "Nos Ajude", path: "NosAjude" },
        { name: "Finais Felizes", path: "FinaisFelizes" },
        { name: "Contato", path: "Contato" },
    ];

    const isActive = (path) => {
        return location.pathname === createPageUrl(path);
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to={createPageUrl("/")} className="flex items-center gap-3 group">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-auto h-20 object-cover rounded-3xl"
                            />
                            <span className="text-2xl font-bold bg-gradient-to-r from-[#692B76] to-[#8B3A8F] bg-clip-text text-transparent">
                                Projeto Adotar
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={createPageUrl(item.path)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                        isActive(item.path)
                                            ? "bg-[#692B76] text-white shadow-lg"
                                            : "text-gray-700 hover:bg-purple-50 hover:text-[#692B76]"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-[#692B76]" />
                            ) : (
                                <Menu className="w-6 h-6 text-[#692B76]" />
                            )}
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-100">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={createPageUrl(item.path)}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 mb-1 ${
                                        isActive(item.path)
                                            ? "bg-[#692B76] text-white"
                                            : "text-gray-700 hover:bg-purple-50 hover:text-[#692B76]"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </nav>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="bg-gradient-to-br from-[#692B76] to-[#8B3A8F] text-white mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-white fill-white" />
                                </div>
                                <h3 className="text-xl font-bold">Projeto Adotar</h3>
                            </div>
                            <p className="text-white/80 leading-relaxed">
                                Desde 2017 resgatando, cuidando e encontrando lares para animais em situação de vulnerabilidade.
                                Cada vida salva é uma história de amor.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
                            <div className="space-y-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={createPageUrl(item.path)}
                                        className="block text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300"
                                    >
                                        → {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Fale Conosco</h3>
                            <div className="space-y-3">
                                <a
                                    href="https://api.whatsapp.com/message/Y4N5CPZIXNLZE1?autoload=1&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <span>WhatsApp</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/projetoadotar_/?hl=pt-br"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </div>
                                    <span>@projetoadotar_</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/20 pt-8 text-center">
                        <p className="text-white/60 text-sm">
                            © 2025 Projeto Adotar. Todos os direitos reservados. Feito com 💜 para os animais.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}