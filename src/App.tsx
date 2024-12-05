import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Vortex } from './components/ui/vortex';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

function AnimatedSection({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial='initial'
      animate={controls}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function App() {
  return (
    <div className='min-h-screen h-screen bg-[#0a0a0a] text-gray-200 relative'>
      {/* Background grid */}
      <div className='fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none opacity-30'>
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
              'radial-gradient(circle at center, black, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(circle at center, black, transparent 80%)'
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

        <main className='container mx-auto px-6 pt-20 pb-16 space-y-16'>
          <AnimatedSection className='pt-4'>
            <Hero />
          </AnimatedSection>

          <AnimatedSection>
            <Projects />
          </AnimatedSection>

          <AnimatedSection>
            <Skills />
          </AnimatedSection>

          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
