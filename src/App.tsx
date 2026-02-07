import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Vortex } from "./components/ui/vortex";

function App() {
  return (
    <main className="min-h-screen bg-background text-text">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden opacity-30">
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, #638ec6 1px, transparent 0),
              radial-gradient(circle at 1px 1px, #324f75 1px, transparent 0)
            `,
            backgroundSize: "50px 50px",
            backgroundPosition: "0 0, 25px 25px",
            maskImage: "radial-gradient(circle at center, black, transparent 90%)",
            WebkitMaskImage: "radial-gradient(circle at center, black, transparent 90%)",
          }}
        />
      </div>

      {/* Vortex background */}
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden">
        <Vortex
          particleCount={50}
          baseSpeed={0.01}
          rangeSpeed={1}
          baseRadius={1}
          rangeRadius={1.5}
          baseHue={120}
          rangeY={window.innerHeight}
          backgroundColor="transparent"
        />
      </div>

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="container mx-auto space-y-24 px-6 pb-20 pt-20 md:space-y-32">
          <div className="pt-4" id="about">
            <Hero />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="skills">
            <Skills />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default App;
