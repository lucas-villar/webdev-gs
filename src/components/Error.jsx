import Nav from "./Navigation";
import Footer from "./Footer";
import bgImage from "../assets/enchentes.png";

export default function ErrorPage() {
  return (
    <>
      {/* Nav fixa */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav />
      </div>

      {/* Espaço compensando a Nav fixa */}
      <div className="h-16" />

      {/* Fundo com imagem e overlay escuro */}
      <div className="relative w-full min-h-screen">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: url(${bgImage}), backgroundAttachment: 'fixed' }}
        />
        <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Conteúdo da página */}
        <div className="relative z-10 text-[#f1f8f9] font-orbitron">
          <section className="h-screen flex items-center justify-center text-center px-4">
            <div className="max-w-xl">
              <h1 className="text-6xl sm:text-7xl font-bold text-cyan-400 glow mb-6">404</h1>
              <h2 className="text-2xl sm:text-3xl mb-4">Página não encontrada</h2>
              <p className="text-base sm:text-lg mb-8">
                A página que você está procurando não existe ou foi movida.
              </p>
              <a
                href="/"
                className="inline-block bg-cyan-400 text-gray-900 rounded-full px-6 py-3 text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_#00cfff]"
              >
                Voltar para o Início
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
