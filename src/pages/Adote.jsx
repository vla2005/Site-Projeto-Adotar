import React from "react";
import { Heart, CheckCircle, FileText, MessageCircle, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Adote() {
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
            <section className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1600')] bg-cover bg-center opacity-5"></div>
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
              Como Adotar?
            </span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed">
                        Um lar cheio de amor começa com um gesto consciente
                    </motion.p>
                </motion.div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="mb-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 sm:p-12"
                    >
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                            Para adotar, você precisará <strong>preencher um formulário</strong> com algumas informações sobre o seu perfil e o ambiente onde o animal irá viver.
                            Em seguida, realizaremos uma <strong>entrevista</strong> para conhecer melhor você, entender suas expectativas e garantir que o bichinho será acolhido com carinho e segurança.
                        </p>
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                            Após essa etapa, será necessário <strong>assinar um termo de responsabilidade</strong>, confirmando seu compromisso com os cuidados, a alimentação, a saúde e o bem-estar do animal.
                            Nosso objetivo é garantir que cada adoção seja um ato consciente e duradouro.
                        </p>
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                            Caso seja aprovado e realize a adoção, <strong>continuaremos em contato</strong> para acompanhar a adaptação do novo integrante da família e oferecer suporte sempre que precisar.
                            Acreditamos que adotar é um gesto de amor e responsabilidade, e queremos que essa experiência seja especial tanto para você quanto para o animal.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8 mb-16"
                    >
                        {[
                            { icon: FileText, number: "01", title: "Preencha o Formulário", description: "Conte-nos sobre você e o ambiente que preparou para receber o animal" },
                            { icon: MessageCircle, number: "02", title: "Entrevista", description: "Conheceremos melhor suas expectativas e garantiremos o match perfeito" },
                            { icon: CheckCircle, number: "03", title: "Termo e Acompanhamento", description: "Assine o termo de responsabilidade e receba suporte contínuo" }
                        ].map((step, index) => (
                            <motion.div key={index} variants={fadeInUp} className="text-center">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#692B76] to-[#8B3A8F] rounded-full flex items-center justify-center mb-6 shadow-xl transform hover:scale-110 transition-transform duration-300">
                                    <step.icon className="w-10 h-10 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-[#692B76] mb-3">{step.number}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfuEXWkzT8w6pzu4mFQAS7AB3DcwoT5IrJAqnzvYM8qqae3aQ/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#692B76] to-[#8B3A8F] text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                        >
                            <FileText className="w-6 h-6" />
                            Clique aqui para preencher o formulário
                        </a>
                    </motion.div>
                </div>
            </section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="py-20 bg-gradient-to-b from-white to-purple-50"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                            Por que adotar?
                        </h2>
                    </motion.div>

                    <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Heart, title: "Você salva uma vida", description: "Cada adoção é uma segunda chance para um animal que merece amor e cuidado" },
                            { icon: Users, title: "Ganha um companheiro", description: "Animais adotados são eternamente gratos e se tornam membros leais da família" },
                            { icon: CheckCircle, title: "Acompanhamento completo", description: "Oferecemos suporte durante todo o processo de adaptação do seu novo amigo" }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-purple-100"
                            >
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                    <benefit.icon className="w-6 h-6 text-[#692B76]" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
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
                    <Heart className="w-16 h-16 text-white mx-auto mb-6 fill-white animate-pulse" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Pronto para mudar uma vida?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        O amor de um animal resgatado é incomparável. Dê o primeiro passo hoje.
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfuEXWkzT8w6pzu4mFQAS7AB3DcwoT5IrJAqnzvYM8qqae3aQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#692B76] rounded-full font-bold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                        <FileText className="w-5 h-5" />
                        Iniciar Processo de Adoção
                    </a>
                </div>
            </motion.section>
        </div>
    );
}