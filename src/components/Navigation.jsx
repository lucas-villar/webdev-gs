import { Link } from "react-router"
import { useState, useEffect } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu quando redimensionar janela
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black bg-opacity-70 z-50">
      <Link to="/" className="text-2xl font-bold text-cyan-400">
                    BioSentinela X
        </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-cyan-400 focus:outline-none text-3xl"
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav
        className={`
          ${menuOpen ? 'flex' : 'hidden'}
          md:flex
          flex-col md:flex-row md:items-center md:space-x-6
          absolute md:static top-20 left-0 w-full md:w-auto
          bg-black md:bg-transparent bg-opacity-90 md:bg-opacity-0
          p-4 md:p-0 z-50
          space-y-4 md:space-y-0
        `}
      >
        <Link to="/" className="relative text-[#f1f8f9] hover:text-cyan-400 nav-link">
                    Home
        </Link>
        <Link to="/Sobre" className="relative text-[#f1f8f9] hover:text-cyan-400 nav-link">
                    Sobre
        </Link>
        <Link to="/Solucao" className="relative text-[#f1f8f9] hover:text-cyan-400 nav-link">
                    Solução
        </Link>
        <Link to="/Login" className="relative text-[#f1f8f9] hover:text-cyan-400 nav-link">
                    Login
        </Link>
        <Link to="/Cadastrar" className="relative text-[#f1f8f9] hover:text-cyan-400 nav-link">
                    Cadastrar
        </Link>
      </nav>

      <style jsx>{`
        .nav-link {
          text-decoration: none;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -3px;
          left: 0;
          background-color: #00cfff;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
}

export function Nave() {
    return (
        <header class="flex justify-between items-center p-4 bg-black bg-opacity-70 fixed w-full z-50">
            <Link to="/" className="text-2xl font-bold text-cyan-400">
                    BioSentinela X
            </Link>
            <button id="menu-btn" class="md:hidden text-cyan-400 focus:outline-none text-3xl">☰</button>
            <nav id="menu" class="hidden flex-col md:flex md:flex-row md:items-center absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent bg-opacity-90 md:bg-opacity-0 p-4 md:p-0 z-50 space-y-4 md:space-y-0 md:space-x-6">
            
            <Link to="/Sobre" className="bg-red-50">
                    Sobre
            </Link>

            <Link to="/Solucao" className="bg-red-50">
                    Solução
            </Link>
            
            <a href="./problema.html"></a>
            <a href="./alertas.html">Alertas</a>
            <a href="./monitoramento.html">Monitoramento</a>
            <a href="./solucao.html">Solução</a>
            <a href="./tecnologia.html">Tecnologia</a>
            <a href="./contato.html">Contato</a>
            </nav>
        </header>  
    )
}