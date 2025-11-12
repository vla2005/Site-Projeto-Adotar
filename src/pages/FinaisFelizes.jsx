import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils/index.js";
import { Heart, ChevronLeft, ChevronRight, CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

// ---- importação das imagens ----
import tapetinho1 from "../assets/images/tapetinho/tapetinho1.png";
import tapetinho2 from "../assets/images/tapetinho/tapetinho2.jpeg";
import tapetinho3 from "../assets/images/tapetinho/tapetinho3.jpeg";
import mel1 from "../assets/images/mel/mel1.jpeg";
import mel2 from "../assets/images/mel/mel2.jpeg";
import mel3 from "../assets/images/mel/mel3.jpeg";
import patacone1 from "../assets/images/patacone/patacone1.jpeg";
import patacone2 from "../assets/images/patacone/patacone2.jpeg";
import patacone3 from "../assets/images/patacone/patacone3.jpeg";
import merida1 from "../assets/images/merida/merida1.jpeg";
import merida2 from "../assets/images/merida/merida2.jpeg";
import merida3 from "../assets/images/merida/merida3.jpeg";
import raya1 from "../assets/images/raya/raya1.jpeg";
import raya2 from "../assets/images/raya/raya2.png";
import raya3 from "../assets/images/raya/raya3.jpeg";
import leona1 from "../assets/images/leona/leona1.jpeg";
import leona2 from "../assets/images/leona/leona2.jpeg";
import leona3 from "../assets/images/leona/leona3.png";
import sol1 from "../assets/images/sol/sol1.jpeg";
import sol2 from "../assets/images/sol/sol2.jpg";
import sol3 from "../assets/images/sol/sol3.jpeg";

/** Carrossel no estilo do seu Vue (sem transição) */
function ImageCarousel({ images, currentIndex, setIndex }) {
    const prev = () => setIndex((currentIndex - 1 + images.length) % images.length);
    const next = () => setIndex((currentIndex + 1) % images.length);

    return (
        <div className="relative w-full overflow-hidden rounded-3xl shadow-lg">
            {/* mesma estilização do Vue: alturas fixas + object-cover */}
            <img
                src={images[currentIndex]}
                alt={`Foto ${currentIndex + 1}`}
                loading="lazy"
                className="block w-full h-[380px] md:h-[500px] lg:h-[560px] object-cover object-center rounded-3xl"
            />

            {/* Botões */}
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                aria-label="Anterior"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                aria-label="Próxima"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            currentIndex === i
                                ? "bg-white shadow ring-1 ring-black/10"
                                : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Ir para imagem ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

const CheckItem = ({ text }) => (
    <div className="flex items-start gap-3">
        <CheckCircle className="w-5 h-5 text-[#692B76] flex-shrink-0 mt-0.5" />
        <span className="text-gray-700">{text}</span>
    </div>
);

export default function FinaisFelizes() {
    // ---- estados de cada carrossel ----
    const [tapetinhoIndex, setTapetinhoIndex] = useState(0);
    const [melIndex, setMelIndex] = useState(0);
    const [pataconeIndex, setPataconeIndex] = useState(0);
    const [meridaIndex, setMeridaIndex] = useState(0);
    const [rayaIndex, setRayaIndex] = useState(0);
    const [leonaIndex, setLeonaIndex] = useState(0);
    const [solIndex, setSolIndex] = useState(0);

    // ---- arrays de imagens ----
    const tapetinhoImgs = [tapetinho1, tapetinho2, tapetinho3];
    const melImgs = [mel1, mel2, mel3];
    const pataconeImgs = [patacone1, patacone2, patacone3];
    const meridaImgs = [merida1, merida2, merida3];
    const rayaImgs = [raya1, raya2, raya3];
    const leonaImgs = [leona1, leona2, leona3];
    const solImgs = [sol1, sol2, sol3];

    // ---- animações ----
    const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } };
    const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } };
    const fadeInRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
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
                            <Heart className="w-8 h-8 text-white fill-white" />
                        </div>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#692B76] to-[#8B3A8F] bg-clip-text text-transparent">
              Finais Felizes
            </span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                        Cachorros e gatos sentem falta de atenção, afeto e um lar.
                        Depois de cuidados, carinho e segurança, a transformação acontece.
                        Selecionamos histórias reais de animais que passaram pelo abrigo e hoje vivem cercados de amor.
                    </motion.p>
                    <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                            <CheckCircle className="w-5 h-5 text-[#692B76]" />
                            <span className="font-semibold text-gray-700">Resgates que viraram recomeços</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                            <CheckCircle className="w-5 h-5 text-[#692B76]" />
                            <span className="font-semibold text-gray-700">Conexões que mudaram vidas</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                            <CheckCircle className="w-5 h-5 text-[#692B76]" />
                            <span className="font-semibold text-gray-700">Amor, responsabilidade e respeito</span>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <Link
                            to={createPageUrl("Contato")}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#692B76] to-[#8B3A8F] text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Fale com a gente
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stories Section Title */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="py-12 bg-white"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Histórias que inspiram</h2>
                    <p className="text-lg text-gray-600">
                        Cada resgate carrega um recomeço. Conheça alguns dos finais felizes que aquecem o coração
                    </p>
                </div>
            </motion.section>

            {/* Tapetinho */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-3xl font-bold mb-6 text-gray-900">Tapetinho</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                <p>
                                    O Tapetinho era um cachorro que passou mais de 3 anos vivendo nas ruas, completamente ignorado.
                                    Seu pelo estava todo embaraçado, ele era chutado, passava fome, frio, medo e ainda corria risco de ser atropelado a qualquer momento.
                                    Era como se ele fosse invisível para o mundo.
                                </p>
                                <p>
                                    Até que um dia nós o encontramos. Cuidamos dele, demos banho, tosamos e começamos a levá-lo para as feiras de adoção.
                                    Foram várias idas e vindas até que, finalmente, em uma dessas feiras, o olhar dele cruzou com o de uma família especial.
                                </p>
                                <p>
                                    Ele foi adotado, ganhou um novo nome — <strong>Bartolomeu</strong> — e, com ele, uma vida completamente diferente.
                                    Hoje vive como um verdadeiro príncipe: cercado de amor, cuidado e carinho.
                                    Sua tutora é imensamente feliz com ele, e nós somos gratos por ter feito parte dessa transformação.
                                </p>
                            </div>
                            <div className="space-y-3 bg-purple-50 rounded-2xl p-6">
                                <CheckItem text="Resgatado nas ruas" />
                                <CheckItem text="Recebeu tratamento e cuidados veterinários" />
                                <CheckItem text="Ganhou um lar cheio de amor ❤️" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            transition={{ duration: 0.8 }}
                        >
                            <ImageCarousel images={tapetinhoImgs} currentIndex={tapetinhoIndex} setIndex={setTapetinhoIndex} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mel */}
            <section className="py-16 bg-gradient-to-b from-white to-purple-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <ImageCarousel images={melImgs} currentIndex={melIndex} setIndex={setMelIndex} />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <h3 className="text-3xl font-bold mb-6 text-gray-900">Mel</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                <p>
                                    A Mel foi abandonada em um condomínio que estava sendo demolido. Entre escombros e restos de construções,
                                    ela e outras duas cadelas, que acreditamos ser suas irmãs, tentavam sobreviver.
                                    Todas entraram no cio e tiveram filhotes. A Mel, sozinha, teve três.
                                </p>
                                <p>
                                    No total, eram nove cães vivendo naquele lote, debaixo dos destroços, passando fome, frio, sede e convivendo diariamente com o medo.
                                    Era uma luta constante pela sobrevivência.
                                </p>
                                <p>
                                    Quando encontramos a Mel, começamos a cuidar dela e dos outros animais.
                                    Ela foi castrada, ganhou atenção, carinho e finalmente pôde deixar para trás a vida dura que levava.
                                    Mas sua caminhada até a adoção não foi rápida: foram quase dois anos esperando por uma família.
                                </p>
                                <p>
                                    Até que, um dia, sua chance chegou. A Mel foi adotada e hoje vive rodeada de amor, cuidado e toda a atenção que merece.
                                </p>
                            </div>
                            <div className="space-y-3 bg-purple-50 rounded-2xl p-6">
                                <CheckItem text="Um recomeço entre os escombros" />
                                <CheckItem text="Resgate e esperança" />
                                <CheckItem text="Um lar cheio de amor" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Patacone */}
            <section className="py-16 bg-purple-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-3xl font-bold mb-6 text-gray-900">Patacone</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                <p>
                                    O Patacone foi encontrado quase morto, com menos de dois meses de vida, escondido atrás de um lixo.
                                    Desde o início, ele lutou muito para sobreviver. Foi cuidado, amado e adotado ainda pequeno,
                                    mas infelizmente, oito meses depois, foi devolvido sem qualquer compaixão ou consideração pelo que ele já tinha passado.
                                </p>
                                <p>
                                    A partir daí, começou uma nova luta: encontrar uma família que entendesse e amasse o Patacone pelo que ele é.
                                    Um cão adulto, com suas manias, seu jeito carente, mas cheio de amor para dar.
                                    Levamos ele para várias feiras de adoção; muitas pessoas achavam ele bonitinho, mas ninguém se conectava de verdade.
                                </p>
                                <p>
                                    Finalmente, em uma dessas feiras, ele encontrou sua família. Hoje, o Patacone é muito amado, compreendido e celebrado pelo seu jeito único.
                                    Suas manias, suas expressões, sua alegria ao brincar e pular conquistam todos ao redor,
                                    mostrando que todo esforço para salvar uma vida vale a pena.
                                </p>
                            </div>
                            <div className="space-y-3 bg-white rounded-2xl p-6">
                                <CheckItem text="Uma luta pela vida" />
                                <CheckItem text="Rejeição e recomeço" />
                                <CheckItem text="Um final feliz e merecido ❤️" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            transition={{ duration: 0.8 }}
                        >
                            <ImageCarousel images={pataconeImgs} currentIndex={pataconeIndex} setIndex={setPataconeIndex} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Título seção "ainda esperando" */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="py-16 bg-white"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Heart className="w-16 h-16 text-[#692B76] mx-auto mb-6" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Ainda esperando por um lar 🐶💔
                    </h2>
                    <p className="text-lg text-gray-600">
                        Esses peludinhos foram resgatados, receberam todo o cuidado e carinho,
                        mas ainda aguardam o momento de conhecer suas famílias para sempre.
                        Quem sabe o final feliz deles não começa com você?
                    </p>
                </div>
            </motion.section>

            {/* Merida */}
            <section className="py-16 bg-gradient-to-b from-white to-purple-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-3xl font-bold mb-6 text-gray-900">Merida</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                <p>
                                    Merida foi abandonada nas ruas mesmo estando prestes a dar à luz.
                                    Mas a vida lhe deu uma segunda chance: um dia antes dos filhotes nascerem, ela foi resgatada junto com eles!
                                    Graças a isso, seus bebês vieram ao mundo com segurança, cercados de amor e cuidados.
                                </p>
                                <p>
                                    Hoje, Merida tem cerca de dois anos, é uma mãe muito carinhosa e protetora.
                                    Já cumpriu sua missão de criar seus filhotes — agora chegou a vez dela ser cuidada, amada e ter um lar só seu.
                                    Está vacinada, vermifugada e saudável. É de porte grande e tem um coração ainda maior,
                                    esperando por alguém especial para dividir a vida com ela.
                                </p>
                            </div>
                            <div className="space-y-3 bg-purple-50 rounded-2xl p-6 mb-6">
                                <CheckItem text="Foi resgatada grávida, um dia antes dos filhotes nascerem" />
                                <CheckItem text="Todos os filhotes nasceram em segurança" />
                                <CheckItem text="É vacinada, saudável e pronta para adoção ❤️" />
                            </div>
                            <Link
                                to={createPageUrl("Adote")}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#692B76] to-[#8B3A8F] text-white rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                <Heart className="w-5 h-5" />
                                Quero adotar
                            </Link>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            transition={{ duration: 0.8 }}
                        >
                            <ImageCarousel images={meridaImgs} currentIndex={meridaIndex} setIndex={setMeridaIndex} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Raya */}
            <section className="py-16 bg-purple-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <ImageCarousel images={rayaImgs} currentIndex={rayaIndex} setIndex={setRayaIndex} />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <h3 className="text-3xl font-bold mb-6 text-gray-900">Raya</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                <p>
                                    Raya foi encontrada nas ruas com uma grande ferida na cabeça, infestada de bicheiras.
                                    A dor era tanta que ela mal conseguia comer, sentindo fome, frio e medo, andando sem rumo à procura de compaixão.
                                </p>
                                <p>
                                    Até que uma protetora a viu e estendeu a mão. O resgate foi apenas o começo:
                                    Raya ficou mais de um mês internada, fazendo curativos diários e recebendo duas transfusões de sangue para sobreviver.
                                    Muitos acreditaram que ela não resistiria... mas ela venceu.
                                </p>
                                <p>
                                    Hoje, está quase 100% recuperada, cheia de alegria e gratidão.
                                    É uma cachorrinha doce, carinhosa e amorosa — só espera uma chance de ter um lar de verdade, onde nunca mais precise sofrer.
                                </p>
                            </div>
                            <div className="space-y-3 bg-white rounded-2xl p-6 mb-6">
                                <CheckItem text="Resgatada gravemente ferida" />
                                <CheckItem text="Sobreviveu após um mês de tratamento intensivo" />
                                <CheckItem text="Hoje está recuperada e pronta para ser amada 💖" />
                            </div>
                            <Link
                                to={createPageUrl("Adote")}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#692B76] to-[#8B3A8F] text-white rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                <Heart className="w-5 h-5" />
                                Quero adotar
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leona */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-3xl font-bold mb-6 text-gray-900">Leona</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                <p>
                                    Leona é uma verdadeira guerreira! 💜 Ela foi resgatada em uma situação muito delicada, sem forças até mesmo para se manter em pé.
                                    Seu corpo já não respondia como antes, e a vida nas ruas tinha deixado marcas profundas.
                                </p>
                                <p>
                                    Mesmo diante de tantas dificuldades, ela nunca perdeu o brilho no olhar.
                                    Com muito cuidado, carinho e apoio da equipe veterinária, Leona começou a dar seus primeiros sinais de recuperação.
                                    Aos poucos, voltou a se alimentar, a mexer as patinhas e a mostrar a imensa vontade de viver.
                                </p>
                                <p>
                                    Hoje, ela é símbolo de força e superação. Cada passo que dá é motivo de alegria e esperança.
                                    Leona nos ensina todos os dias que, mesmo nas maiores batalhas, o amor e o cuidado podem transformar destinos.
                                    Agora, ela espera por uma família que reconheça toda essa força e a ame como ela merece. 💜
                                </p>
                            </div>
                            <div className="space-y-3 bg-purple-50 rounded-2xl p-6 mb-6">
                                <CheckItem text="Foi resgatada em estado crítico, sem forças para se levantar" />
                                <CheckItem text="Recuperou-se com apoio e muito amor da equipe veterinária" />
                                <CheckItem text="Símbolo de força e superação, pronta para um novo começo 💜" />
                            </div>
                            <Link
                                to={createPageUrl("Adote")}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#692B76] to-[#8B3A8F] text-white rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                <Heart className="w-5 h-5" />
                                Quero adotar
                            </Link>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            transition={{ duration: 0.8 }}
                        >
                            <ImageCarousel images={leonaImgs} currentIndex={leonaIndex} setIndex={setLeonaIndex} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sol */}
            <section className="py-16 bg-gradient-to-b from-white to-purple-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <ImageCarousel images={solImgs} currentIndex={solIndex} setIndex={setSolIndex} />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <h3 className="text-3xl font-bold mb-6 text-gray-900">Sol</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                <p>
                                    Sol viveu boa parte da vida em uma empresa, precisando se virar nas ruas para encontrar comida e abrigo.
                                    Assustada e vulnerável, enfrentava diariamente o medo e os perigos da rua.
                                    Durante um de seus cios, foi atacada por outros cães e ficou machucada — mas, felizmente, foi resgatada a tempo.
                                </p>
                                <p>
                                    Depois do resgate, Sol passou por cuidados veterinários, foi castrada, vacinada e vermifugada.
                                    Aos poucos, deixou para trás o medo e começou a descobrir o carinho humano.
                                </p>
                                <p>
                                    Hoje, é uma cadelinha doce, de olhar sereno e cheio de esperança, que só deseja uma família para amar e ser amada.
                                </p>
                            </div>
                            <div className="space-y-3 bg-white rounded-2xl p-6 mb-6">
                                <CheckItem text="Foi resgatada após sofrer ataques durante o cio" />
                                <CheckItem text="Hoje é castrada, vacinada e vermifugada" />
                                <CheckItem text="Doce e tranquila, pronta para encontrar sua família ☀️" />
                            </div>
                            <Link
                                to={createPageUrl("Adote")}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#692B76] to-[#8B3A8F] text-white rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                <Heart className="w-5 h-5" />
                                Quero adotar
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

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
                        Quer fazer parte de uma história de amor?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Cada adoção é um novo começo. Transforme a vida de um animal hoje mesmo.
                    </p>
                    <Link
                        to={createPageUrl("Adote")}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#692B76] rounded-full font-bold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                        <Heart className="w-5 h-5" />
                        Iniciar Processo de Adoção
                    </Link>
                </div>
            </motion.section>
        </div>
    );
}
