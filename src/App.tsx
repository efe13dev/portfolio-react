import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Vortex } from './components/ui/vortex';

function App() {
  return (
    <main className='min-h-screen bg-background text-text'>
      {/* Background grid */}
      <div className='fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none opacity-40'>
        <div
          className='absolute inset-0 w-full h-full'
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0),
              radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
            maskImage:
              'radial-gradient(circle at center, black, transparent 85%)',
            WebkitMaskImage:
              'radial-gradient(circle at center, black, transparent 100%)'
          }}
        />
      </div>

      {/* Vortex background */}

      <div className='fixed  w-full h-full z-0 overflow-hidden pointer-events-none'>
        <Vortex
          particleCount={400}
          baseSpeed={0.05}
          rangeSpeed={0.5}
          baseRadius={1}
          rangeRadius={1.5}
          baseHue={220}
          backgroundColor='transparent'
        />
      </div>

      <div className='relative z-10 min-h-screen'>
        <Header />

        <div className='container mx-auto px-6 pt-20 pb-16 space-y-16'>
          <div className='pt-4'>
            <Hero />
          </div>

          <div>
            <Projects />
          </div>

          <div>
            <Skills />
          </div>

          <div>
            <Contact />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default App;
