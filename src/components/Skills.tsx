"use client";

import { Code, Server, Database, Palette, Globe } from 'lucide-react';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const skills = [
  {
    quote: "",
    name: <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
      <Code className='text-[#638ec6] w-10 h-10 shrink-0' />
      <span className="text-[#638ec6] whitespace-nowrap">HTML</span>
    </div>,
    title: "Frontend"
  },
  {
    quote: "",
    name: <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
      <Code className='text-[#a2b7d1] w-10 h-10 shrink-0' />
      <span className="text-[#a2b7d1] whitespace-nowrap">React</span>
    </div>,
    title: "Frontend"
  },
  {
    quote: "",
    name: <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
      <Globe className='text-[#eceff3] w-10 h-10 shrink-0' />
      <span className="text-[#eceff3] whitespace-nowrap">Next.js</span>
    </div>,
    title: "Frontend"
  },
  {
    quote: "",
    name: <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
      <Server className='text-[#a2b7d1] w-10 h-10 shrink-0' />
      <span className="text-[#a2b7d1] whitespace-nowrap">Node.js</span>
    </div>,
    title: "Backend"
  },
  {
    quote: "",
    name: <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
      <Code className='text-[#324f75] w-10 h-10 shrink-0' />
      <span className="text-[#324f75] whitespace-nowrap">TypeScript</span>
    </div>,
    title: "Language"
  },
  {
    quote: "",
    name: <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
      <Palette className='text-[#638ec6] w-10 h-10 shrink-0' />
      <span className="text-[#638ec6] whitespace-nowrap">Tailwind CSS</span>
    </div>,
    title: "Styling"
  },
  {
    quote: "",
    name: <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
      <Database className='text-[#324f75] w-10 h-10 shrink-0' />
      <span className="text-[#324f75] whitespace-nowrap">MySQL</span>
    </div>,
    title: "Database"
  }
];

export function Skills() {
  return (
    <section
      id='skills'
      className='space-y-4'
    >
      <h2 className='text-4xl font-bold text-[#a2b7d1] font-heading'>
        Habilidades
      </h2>
      <div className='h-32 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
        <InfiniteMovingCards
          items={skills}
          direction="right"
          speed="normal"
          pauseOnHover={true}
          className="py-4"
        />
      </div>
    </section>
  );
}
