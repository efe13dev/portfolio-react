import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <main className="relative min-h-screen bg-background text-text selection:bg-[#e56b38] selection:text-[#0c0b0a]">
      {/* Atmósfera cálida carbón & terracota: luz radial + retícula arquitectónica */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-48 left-1/2 h-[680px] w-[1100px] -translate-x-1/2 rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(229, 107, 56, 0.18) 0%, rgba(245, 158, 11, 0.06) 45%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3d352e 1px, transparent 1px),
              linear-gradient(to bottom, #3d352e 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 20%, black 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 20%, black 20%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="container mx-auto max-w-6xl space-y-28 px-6 pb-24 pt-24 md:space-y-36">
          <div id="about">
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
