import React from "react";
import { MessageCircle, Instagram, Heart, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contato() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600')] bg-cover bg-center opacity-5"></div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >
                    <motion.div variants={fadeInUp} className="inline-block mb-6">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#692B76] to-[#8B3A8F] rounded-2xl flex items-center justify-center shadow-xl">
                            <MessageCircle className="w-8 h-8 text-white" />
                        </div>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#692B76] to-[#8B3A8F] bg-clip-text text-transparent">
              Entre em Contato
            </span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Tem alguma dúvida, quer fazer uma doação ou saber mais sobre o Projeto Adotar?
                        Fale com a gente pelos canais abaixo
                    </motion.p>
                </motion.div>
            </section>

            {/* Contact Cards */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="py-20 bg-white"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* WhatsApp Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <MessageCircle className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">WhatsApp</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Fale conosco diretamente pelo WhatsApp. Nossa equipe responderá o mais rápido possível 🐾
                            </p>
                            <a
                                href="https://api.whatsapp.com/message/Y4N5CPZIXNLZE1?autoload=1&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                <Send className="w-5 h-5" />
                                Conversar no WhatsApp
                            </a>
                        </motion.div>

                        {/* Instagram Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <Instagram className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Instagram</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Acompanhe nossos resgates, adoções e histórias de amor pelo Instagram 💖
                            </p>
                            <a
                                href="https://www.instagram.com/projetoadotar_/?hl=pt-br"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5" />
                                Visitar Instagram
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Info Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="py-20 bg-gradient-to-b from-white to-purple-50"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
                        <div className="text-center mb-8">
                            <Heart className="w-16 h-16 text-[#692B76] mx-auto mb-6" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Estamos aqui para ajudar
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Seja para tirar dúvidas sobre adoção, fazer doações ou se tornar voluntário,
                                nossa equipe está pronta para te atender com todo carinho e atenção que você merece.
                            </p>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid sm:grid-cols-2 gap-6 mt-12"
                        >
                            {[
                                { title: "Dúvidas sobre Adoção?", description: "Entre em contato e te explicaremos todo o processo de forma clara e transparente" },
                                { title: "Quer Fazer Doações?", description: "Fale conosco para combinar retirada ou entrega de itens, ou fazer doações via PIX" },
                                { title: "Ser Voluntário?", description: "Adoraríamos contar com sua ajuda nas feiras de adoção e eventos" },
                                { title: "Lar Temporário?", description: "Converse conosco sobre como pode acolher um animal enquanto busca um lar definitivo" }
                            ].map((item, index) => (
                                <motion.div key={index} variants={fadeInUp} className="bg-purple-50 rounded-2xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Final CTA */}
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
                        Cada mensagem é uma esperança
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Não deixe sua dúvida sem resposta. Estamos aqui para te ajudar a transformar vidas 💜
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://api.whatsapp.com/message/Y4N5CPZIXNLZE1?autoload=1&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#692B76] rounded-full font-bold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </a>
                        <a
                            href="https://www.instagram.com/projetoadotar_/?hl=pt-br"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-[#692B76] transform hover:scale-105 transition-all duration-300"
                        >
                            <Instagram className="w-5 h-5" />
                            Instagram
                        </a>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}