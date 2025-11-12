import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils/index.js";
import { Heart, Users, Home, Sparkles, ChevronDown, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import team from "/src/assets/images/team.webp"

export default function Inicio() {
    const [rescuesCount, setRescuesCount] = useState(0);
    const [adoptionsCount, setAdoptionsCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    animateNumbers();
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateNumbers = () => {
        const rescuesDuration = 2000;
        const adoptionsDuration = 2000;
        const rescuesTarget = 60;
        const adoptionsTarget = 50;
        const rescuesIncrement = rescuesTarget / (rescuesDuration / 16);
        const adoptionsIncrement = adoptionsTarget / (adoptionsDuration / 16);

        let rescuesValue = 0;
        let adoptionsValue = 0;

        const rescuesInterval = setInterval(() => {
            rescuesValue += rescuesIncrement;
            if (rescuesValue >= rescuesTarget) {
                setRescuesCount(rescuesTarget);
                clearInterval(rescuesInterval);
            } else {
                setRescuesCount(Math.floor(rescuesValue));
            }
        }, 16);

        const adoptionsInterval = setInterval(() => {
            adoptionsValue += adoptionsIncrement;
            if (adoptionsValue >= adoptionsTarget) {
                setAdoptionsCount(adoptionsTarget);
                clearInterval(adoptionsInterval);
            } else {
                setAdoptionsCount(Math.floor(adoptionsValue));
            }
        }, 16);
    };

    const faqs = [
        {
            question: "Como funciona o processo de adoção?",
            answer:
                "O interessado preenche um formulário, passa por uma entrevista e assina um termo de responsabilidade. Além disso, nós acompanhamos depois da adoção, mantendo contato com os adotantes (semanal ou mensal, dependendo do caso) para garantir que o animal esteja bem e adaptado.",
        },
        {
            question: "Posso ajudar sem adotar?",
            answer:
                "Sim, como lar temporário, com doações, PIX ou como voluntário nas feirinhas.",
        },
        {
            question: "Como posso doar?",
            answer: "Entre em contato conosco que vamos passar os dados.",
        },
        {
            question: "Preciso pagar alguma taxa?",
            answer:
                "Não, mas aceitamos contribuições voluntárias para castração, vacinas ou ração.",
        },
        {
            question: "Os animais já estão vacinados e castrados?",
            answer:
                "Sempre que possível sim, mas alguns precisam de apoio após a adoção.",
        },
        {
            question: "Como sei quais animais estão disponíveis para adoção?",
            answer:
                "Acompanhe nosso Instagram @projetoadotar_ onde divulgamos todos os animais disponíveis.",
        },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
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
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600')] bg-cover bg-center opacity-10"></div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
                >
                    <motion.div variants={fadeInUp} className="mb-8 inline-block">
                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#692B76] to-[#8B3A8F] rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                            <Heart className="w-10 h-10 text-white fill-white animate-pulse" />
                        </div>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                     <span className="bg-gradient-to-r from-[#692B76] to-[#8B3A8F] bg-clip-text text-transparent">
                        Cada vida que salvamos
                     </span>
                        <br />
                        <span className="text-gray-800">nos devolve uma parte</span>
                        <br />
                        <span className="text-gray-800">da nossa</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                        Em cada olhar que salvamos, há um reflexo da nossa própria humanidade.
                        Proteger os animais é lembrar que também precisamos de afeto, abrigo e esperança.
                        Cuidar do outro, mesmo que de outra espécie, é cuidar de nós mesmos.
                    </motion.p>
                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to={createPageUrl("Adote")}
                            className="px-8 py-4 bg-gradient-to-r from-[#692B76] to-[#8B3A8F] text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <Heart className="w-5 h-5" />
                            Adote um anjinho
                        </Link>
                        <Link
                            to={createPageUrl("NosAjude")}
                            className="px-8 py-4 bg-white text-[#692B76] rounded-full font-semibold text-lg border-2 border-[#692B76] hover:bg-[#692B76] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            Doe agora
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="order-2 lg:order-1"
                        >
                            <motion.div variants={fadeInUp} className="inline-block mb-4">
                <span className="px-4 py-2 bg-purple-100 text-[#692B76] rounded-full text-sm font-semibold">
                  Nossa História
                </span>
                            </motion.div>
                            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                                Sobre nós
                            </motion.h2>
                            <motion.div variants={fadeInUp} className="prose prose-lg text-gray-600 space-y-4">
                                <p className="leading-relaxed">
                                    O Projeto Adotar foi fundado oficialmente em maio de 2024, mas nossa atuação na causa vem desde 2017.
                                    Antes mesmo do projeto nascer, já fazíamos resgates pontuais, cuidávamos e conseguíamos lares através da internet ou participando de feiras de outros grupos.
                                </p>
                                <p className="leading-relaxed">
                                    O Projeto Adotar não é ONG, não é abrigo e não tem nenhuma ajuda do governo.
                                    Somos apenas pessoas comuns tentando ajudar os animais que vivem em situações de abandono, maus-tratos ou vindos de acumuladores.
                                </p>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="mt-8 space-y-3">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <Heart className="w-4 h-4 text-[#692B76]" />
                                    </div>
                                    <span>Resgate e acolhimento de animais em risco</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <Sparkles className="w-4 h-4 text-[#692B76]" />
                                    </div>
                                    <span>Cuidados veterinários, vacinação e castração</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <Home className="w-4 h-4 text-[#692B76]" />
                                    </div>
                                    <span>Busca de lares responsáveis e adoções conscientes</span>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeInUp} ref={statsRef} className="mt-12 grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                                    <div className="text-5xl font-bold text-[#692B76] mb-2">
                                        {rescuesCount}+
                                    </div>
                                    <div className="text-gray-600 font-medium">Resgates</div>
                                </div>
                                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                                    <div className="text-5xl font-bold text-[#692B76] mb-2">
                                        {adoptionsCount}+
                                    </div>
                                    <div className="text-gray-600 font-medium">Adoções</div>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="mt-8">
                                <a
                                    href="https://www.instagram.com/projetoadotar_/?hl=pt-br"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <Instagram className="w-5 h-5" />
                                    Conheça nosso trabalho no Instagram
                                </a>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl
                                    h-[420px] sm:h-[520px] md:h-[600px] lg:h-[700px]">
                                <img
                                    src={team}
                                    alt="Nosso time"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#692B76]/20 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="py-20 bg-gradient-to-b from-white to-purple-50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                            O Que Fazemos
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            No Projeto Adotar, acreditamos que cada vida importa. Atuamos com amor e dedicação para resgatar,
                            acolher e dar visibilidade aos animais que precisam de uma nova chance.
                            Nosso propósito é transformar histórias de abandono em histórias de esperança.
                        </p>
                    </motion.div>

                    <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Heart,
                                title: "Resgate e Divulgação",
                                description: "Ajudamos animais em situação de abandono, maus-tratos ou vindos de acumuladores. Após o resgate, divulgamos suas histórias nas redes sociais para alcançar mais pessoas e aumentar as chances de adoção."
                            },
                            {
                                icon: Home,
                                title: "Acolhimento Temporário e Adoção",
                                description: "Buscamos lares temporários solidários para garantir que os animais fiquem em segurança até encontrarem uma família definitiva. Também participamos de feirinhas e eventos de adoção para ampliar essas oportunidades."
                            },
                            {
                                icon: Sparkles,
                                title: "Campanhas de Castração e Cuidados",
                                description: "Promovemos e incentivamos a castração como forma de prevenir o abandono. Realizamos rifas e vaquinhas para custear consultas, exames e cirurgias, garantindo mais saúde e qualidade de vida aos animais."
                            },
                            {
                                icon: Users,
                                title: "Conscientização e Apoio Comunitário",
                                description: "Nosso propósito é ser uma ponte entre quem resgata e quem quer ajudar. Damos visibilidade, mostramos a realidade e incentivamos a empatia. Acreditamos que, juntos, podemos transformar a vida de muitos animais."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-[#692B76] to-[#8B3A8F] rounded-2xl flex items-center justify-center mb-6">
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="py-20 bg-white"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                            Perguntas Frequentes
                        </h2>
                    </motion.div>

                    <motion.div variants={staggerContainer} className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-purple-200 transition-colors duration-300"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-50 transition-colors duration-300"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#692B76] flex-shrink-0 transition-transform duration-300 ${
                                            openFaq === index ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                {openFaq === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-5 text-gray-600 leading-relaxed"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
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
                    <Heart className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Pronto para fazer a diferença?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Cada pequeno gesto transforma vidas. Adote, doe ou seja voluntário.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to={createPageUrl("Adote")}
                            className="px-8 py-4 bg-white text-[#692B76] rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            Quero Adotar
                        </Link>
                        <Link
                            to={createPageUrl("Contato")}
                            className="px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-[#692B76] transform hover:scale-105 transition-all duration-300"
                        >
                            Fale Conosco
                        </Link>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}