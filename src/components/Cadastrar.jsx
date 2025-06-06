import Nav from "./Navigation";
import Footer from "./Footer";
import bgImage from "../assets/enchentes.png";

export default function Cadastro() {
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
          style={{ backgroundImage: url(${bgImage}), backgroundAttachment: "fixed" }}
        />
        <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Conteúdo da página */}
        <div className="relative z-10 text-[#f1f8f9] font-orbitron flex items-center justify-center min-h-screen px-4">
          <div className="max-w-md w-full bg-black/70 p-8 rounded-md shadow-[0_4px_15px_rgba(0,207,255,0.2)]">
            <h2 className="text-cyan-400 glow text-4xl font-bold mb-6 text-center">
              Criar Conta
            </h2>
            <form className="space-y-6">
              <label className="block">
                <span className="text-cyan-400 mb-1 block font-semibold">Nome Completo</span>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-2 rounded-md bg-black/60 border border-cyan-400 text-[#f1f8f9] placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
              </label>

              <label className="block">
                <span className="text-cyan-400 mb-1 block font-semibold">Email</span>
                <input
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-4 py-2 rounded-md bg-black/60 border border-cyan-400 text-[#f1f8f9] placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
              </label>

              <label className="block">
                <span className="text-cyan-400 mb-1 block font-semibold">Senha</span>
                <input
                  type="password"
                  placeholder=""
                  className="w-full px-4 py-2 rounded-md bg-black/60 border border-cyan-400 text-[#f1f8f9] placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
              </label>

              <label className="block">
                <span className="text-cyan-400 mb-1 block font-semibold">Confirmar Senha</span>
                <input
                  type="password"
                  placeholder=""
                  className="w-full px-4 py-2 rounded-md bg-black/60 border border-cyan-400 text-[#f1f8f9] placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
              </label>

              <button
                type="submit"
                className="btn-primary w-full py-3 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_#00cfff]"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
