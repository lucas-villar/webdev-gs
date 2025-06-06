import Nav from "./Navigation";
import Footer from "./Footer";
import bgImage from "../assets/enchentes.png";

export default function Solucao() {
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
        <section class="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative z-10 text-center">
            <div class="max-w-4xl w-full">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 glow text-white">Nosso Pitch</h2>
                <div class="aspect-w-16 aspect-h-9 w-full">
                    <iframe class="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg shadow-lg" src="https://www.youtube.com/embed/aGeye2r75B8?si=Xv2DG2dp3qIZ0PKv" title="Vídeo Pitch BioSentinela X" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
