import Nav from "./Navigation";
import Footer from "./Footer";
import bgImage from "../assets/enchentes.png";

export default function Home() {
  return (
    <>
      {/* Nav fixada no topo */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav />
      </div>

      {/* Espaço para o Nav fixo */}
      <div className="h-16" />

      {/* Fundo com bgImage e overlay escuro */}
      <div className="relative w-full min-h-screen">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${bgImage})`, backgroundAttachment: 'fixed' }}
        />
        <div className="absolute inset-0 bg-black/70 z-10" />

        <div className="relative z-10 text-[#f1f8f9] font-orbitron">
          {/* Primeira seção centralizada, full height */}
          <section className="h-screen flex items-center justify-center text-center px-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-cyan-400 glow">
                Monitoramento Inteligente Contra Enchentes
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8">
                Tecnologia preditiva e em tempo real para salvar vidas e preservar comunidades.
              </p>
              <a
                href="#problema"
                className="inline-block bg-cyan-400 text-gray-900 rounded-full px-6 py-3 text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_#00cfff]"
              >
                Explorar
              </a>
            </div>
          </section>

          {/* Seções seguintes com padding responsivo */}
          <section
            id="problema"
            className="section text-center max-w-5xl mx-auto px-4 py-16 md:py-24"
          >
            <h3 className="text-2xl sm:text-3xl mb-4 text-cyan-400 glow">O Desafio</h3>
            <p className="text-base sm:text-lg">
              Enchentes continuam sendo um dos desastres naturais mais destrutivos no Brasil, causando prejuízos humanos, sociais e econômicos. A ausência de sistemas de alerta eficientes e integrados agrava a resposta emergencial e limita a prevenção.
            </p>
          </section>

          <section
            id="solucao"
            className="section text-center max-w-6xl mx-auto px-4 py-16 md:py-24"
          >
            <h3 className="text-2xl sm:text-3xl mb-4 text-cyan-400 glow">A Solução BioSentinela X</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                ["Sensor de Nível da Água", "Monitoramento contínuo do aumento de rios e córregos em áreas críticas."],
                ["Sensor de Umidade do Solo", "Avaliação da saturação do solo para prever riscos de alagamento e deslizamento."],
                ["Análise Climática Avançada", "Integração com dados meteorológicos em tempo real para respostas proativas."]
              ].map(([title, desc], i) => (
                <div
                  key={i}
                  className="relative rounded-md bg-black/70 p-6 shadow-[0_4px_10px_rgba(0,207,255,0.1)] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_#00cfff,0_0_30px_#00cfff,0_0_40px_#00cfff] cursor-pointer overflow-hidden"
                >
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 text-cyan-400">{title}</h4>
                  <p>{desc}</p>
                  {/* efeito glow pulse usando pseudo ::before precisa CSS extra (ver abaixo) */}
                  
                </div>
              ))}
            </div>
          </section>

          <section
            id="tecnologia"
            className="section text-center max-w-4xl mx-auto px-4 py-16 md:py-24"
          >
            <h3 className="text-2xl sm:text-3xl mb-4 text-cyan-400 glow">Tecnologia de Ponta</h3>
            <p className="text-base sm:text-lg mb-6">
              Utilizamos dispositivos IoT de alta precisão, conectividade em tempo real e painéis de visualização com inteligência analítica para uma gestão eficaz de riscos ambientais.
            </p>
            <div className="flex justify-center gap-4 sm:gap-6 flex-wrap mt-6 text-cyan-400">
              <span>IoT</span>
              <span>Inteligência Artificial</span>
              <span>Sensores Ambientais</span>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
