import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils/index.js";
import { Heart, Copy, Check, ShoppingBag, Pill, Home, Bone, Droplet, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import pixQrCode from "/src/assets/images/pix-qrcode.png"

export default function NosAjude() {
    const [pixCopied, setPixCopied] = useState(false);

    const copyPixKey = () => {
        navigator.clipboard.writeText("ajudeprojetoadotar@gmail.com");
        setPixCopied(true);
        setTimeout(() => setPixCopied(false), 2000);
    };

    const helpItems = [
        { icon: ShoppingBag, title: "Ração", color: "from-orange-500 to-orange-600" },
        { icon: Pill, title: "Medicamentos", color: "from-red-500 to-red-600" },
        { icon: Home, title: "Panos e cobertores", color: "from-blue-500 to-blue-600" },
        { icon: Droplet, title: "Tapete higiênico", color: "from-cyan-500 to-cyan-600" },
        { icon: ShoppingBag, title: "Jornal", color: "from-gray-500 to-gray-600" },
        { icon: Sparkles, title: "Castrações", color: "from-purple-500 to-purple-600" },
        { icon: Pill, title: "Vacinas", color: "from-green-500 to-green-600" },
        { icon: Home, title: "Cercadinhos", color: "from-indigo-500 to-indigo-600" },
        { icon: Bone, title: "Brinquedos", color: "from-pink-500 to-pink-600" },
        { icon: Heart, title: "Voluntariado", color: "from-rose-500 to-rose-600" },
        { icon: Home, title: "Lar temporário", color: "from-violet-500 to-violet-600" },
        { icon: Droplet, title: "Produtos de limpeza", color: "from-teal-500 to-teal-600" },
    ];

    const donationUses = [
        { title: "Compra de ração e alimentação especial", icon: ShoppingBag },
        { title: "Consultas veterinárias e exames", icon: Heart },
        { title: "Medicamentos, vacinas e antipulgas", icon: Pill },
        { title: "Manutenção de lares temporários", icon: Home },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?w=1600')] bg-cover bg-center opacity-5"></div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >
                    <motion.div variants={fadeInUp} className="inline-block mb-6">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#692B76] to-[#8B3A8F] rounded-2xl flex items-center justify-center shadow-xl">
                            <Heart className="w-8 h-8 text-white fill-white" />
                        </div>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#692B76] to-[#8B3A8F] bg-clip-text text-transparent">
              Como você pode ajudar
            </span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed">
                        Escolha uma (ou várias!) formas de transformar vidas
                    </motion.p>
                </motion.div>
            </section>

            <motion.section
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="py-20 bg-white"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {helpItems.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                transition={{ duration: 0.35 }}
                                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200 transform hover:-translate-y-1"
                            >
                                <div className={`w-14 h-14 mx-auto bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-center font-semibold text-gray-900 text-sm sm:text-base">
                                    {item.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        variants={fadeInUp}
                        className="mt-12 text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-50 text-[#692B76] rounded-full">
                            <Sparkles className="w-5 h-5" />
                            <span className="font-semibold">Publicamos no nosso Instagram, acompanhe por lá!</span>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="py-20 bg-gradient-to-b from-white to-purple-50"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                            Ajude com PIX
                        </h2>
                        <p className="text-lg text-gray-600">
                            Escaneie o QR Code ou copie nossa chave abaixo
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* QR Code Placeholder */}
                            <div className="flex justify-center">
                                <div className="w-64 sm:w-72 md:w-80 aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg p-3 flex">
                                    <img
                                        src={pixQrCode}
                                        alt="PIX QR Code"
                                        className="w-full h-full object-contain rounded-md"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>

                            {/* PIX Key */}
                            <div>
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Chave PIX:
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value="ajudeprojetoadotar@gmail.com"
                                            readOnly
                                            className="flex-1 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl font-mono text-sm focus:outline-none focus:border-[#692B76]"
                                        />
                                        <button
                                            onClick={copyPixKey}
                                            className="px-6 py-3 bg-gradient-to-r from-[#692B76] to-[#8B3A8F] text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                                        >
                                            {pixCopied ? (
                                                <>
                                                    <Check className="w-5 h-5" />
                                                    Copiado!
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-5 h-5" />
                                                    Copiar
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-[#692B76] bg-purple-50 px-4 py-3 rounded-xl">
                                    <Heart className="w-5 h-5" />
                                    <span className="font-semibold">Cada contribuição faz a diferença 🐶💖</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="py-20 bg-white"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                            Para onde vai sua doação
                        </h2>
                    </motion.div>

                    <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-6">
                        {donationUses.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="flex items-start gap-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-[#692B76] to-[#8B3A8F] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 text-lg">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="py-20 bg-gradient-to-b from-white to-purple-50"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
                        <MessageCircle className="w-16 h-16 text-[#692B76] mx-auto mb-6" />
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                            Quer ajudar? Fale com a gente!
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Seja doando itens, contribuindo em dinheiro, oferecendo voluntariado ou um lar temporário,
                            sua ajuda é essencial. Centralizamos os contatos para organizar retirada/entrega de doações,
                            combinar visitas, e emitir comprovantes. Cada gesto conta e transforma vidas.
                            Obrigado por apoiar o Projeto Adotar!
                        </p>
                        <Link
                            to={createPageUrl("Contato")}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#692B76] to-[#8B3A8F] text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Falar com a gente
                        </Link>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="py-20 bg-gradient-to-br from-[#692B76] to-[#8B3A8F]"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Heart className="w-16 h-16 text-white mx-auto mb-6 fill-white animate-pulse" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Toda ajuda é bem-vinda
                    </h2>
                    <p className="text-xl text-white/90 leading-relaxed">
                        Juntos, salvamos vidas e transformamos histórias 💜
                    </p>
                </div>
            </motion.section>
        </div>
    );
}