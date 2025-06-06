import Nav from "./Navigation";
import Footer from "./Footer";
import bgImage from "../assets/enchentes.png";

export default function Sobre() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav />
      </div>

      <div className="h-16" /> 

      <div className="relative w-full min-h-screen">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: url(${bgImage}) }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", zIndex: 10 }}
        />
        <div className="relative z-10 text-white p-8">
          <main>
            <section className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 glow">
                Tecnologia de Ponta do BioSentinela X
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                Sensores avançados, IoT e inteligência artificial trabalhando
                juntos para monitoramento ambiental em tempo real e prevenção
                de desastres naturais.
              </p>
            </section>

            <section className="space-y-8 px-6 md:px-24 lg:px-48">
                <article className="relative mb-6 p-4 rounded-md bg-black/70 shadow-[0_4px_10px_rgba(0,207,255,0.1)] transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_15px_#00cfff,0_0_30px_#00cfff,0_0_40px_#00cfff] card-glow">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                    Sensores Inteligentes
                    </h3>
                    <p>
                    Capturam dados precisos de nível da água, umidade do solo,
                    temperatura e gases, garantindo monitoramento contínuo e
                    confiável das condições ambientais críticas.
                    </p>
                </article>

                <article className="relative mb-6 p-4 rounded-md bg-black/70 shadow-[0_4px_10px_rgba(0,207,255,0.1)] transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_15px_#00cfff,0_0_30px_#00cfff,0_0_40px_#00cfff] card-glow">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                    Internet das Coisas (IoT)
                    </h3>
                    <p>
                    Dispositivos conectados enviam dados automaticamente para a
                    nuvem, permitindo monitoramento remoto em tempo real e
                    integração com painéis inteligentes.
                    </p>
                </article>

                <article className="relative mb-6 p-4 rounded-md bg-black/70 shadow-[0_4px_10px_rgba(0,207,255,0.1)] transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_15px_#00cfff,0_0_30px_#00cfff,0_0_40px_#00cfff] card-glow">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                    Painéis Interativos
                    </h3>
                    <p>
                    Dashboards intuitivos exibem os dados coletados de forma clara
                    e acessível, facilitando decisões rápidas para equipes de
                    resposta e gestores.
                    </p>
                </article>

                <article className="relative mb-6 p-4 rounded-md bg-black/70 shadow-[0_4px_10px_rgba(0,207,255,0.1)] transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_15px_#00cfff,0_0_30px_#00cfff,0_0_40px_#00cfff] card-glow">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                    IA e Machine Learning
                    </h3>
                    <p>
                    Modelos preditivos analisam em tempo real os dados ambientais
                    para antecipar riscos e emitir alertas antes que desastres
                    aconteçam.
                    </p>
                </article>
                </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
