"use client";

import { Code, Database, Globe, Palette, Server } from "lucide-react";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const skills = [
  {
    quote: "",
    name: (
      <div className="flex w-[250px] min-w-[250px] items-center justify-center gap-3 text-2xl">
        <Code className="h-10 w-10 shrink-0 text-[#b87163]" />
        <span className="whitespace-nowrap text-[#b87163]">HTML</span>
      </div>
    ),
    title: "Frontend",
  },
  {
    quote: "",
    name: (
      <div className="flex w-[250px] min-w-[250px] items-center justify-center gap-3 text-2xl">
        <Palette className="h-10 w-10 shrink-0 text-[#2FB4D9]" />
        <span className="whitespace-nowrap text-[#2FB4D9]">Tailwind CSS</span>
      </div>
    ),
    title: "Styling",
  },
  {
    quote: "",
    name: (
      <div className="flex w-[250px] min-w-[250px] items-center justify-center gap-3 text-2xl">
        <Code className="h-10 w-10 shrink-0 text-[#4FB3D9]" />
        <span className="whitespace-nowrap text-[#4FB3D9]">React</span>
      </div>
    ),
    title: "Frontend",
  },
  {
    quote: "",
    name: (
      <div className="flex w-[250px] min-w-[250px] items-center justify-center gap-3 text-2xl">
        <Globe className="h-10 w-10 shrink-0 text-[#d1d1d1]" />
        <span className="whitespace-nowrap text-[#d1d1d1]">Next.js</span>
      </div>
    ),
    title: "Frontend",
  },
  {
    quote: "",
    name: (
      <div className="flex w-[250px] min-w-[250px] items-center justify-center gap-3 text-2xl">
        <Code className="h-10 w-10 shrink-0 text-[#4A7BB7]" />
        <span className="whitespace-nowrap text-[#4A7BB7]">TypeScript</span>
      </div>
    ),
    title: "Language",
  },
  {
    quote: "",
    name: (
      <div className="flex w-[250px] min-w-[250px] items-center justify-center gap-3 text-2xl">
        <Server className="h-10 w-10 shrink-0 text-[#8ba88a]" />
        <span className="whitespace-nowrap text-[#8ba88a]">Node.js</span>
      </div>
    ),
    title: "Backend",
  },
  {
    quote: "",
    name: (
      <div className="flex w-[250px] min-w-[250px] items-center justify-center gap-3 text-2xl">
        <Database className="h-10 w-10 shrink-0 text-[#2B5C8E]" />
        <span className="whitespace-nowrap text-[#2B5C8E]">MySQL</span>
      </div>
    ),
    title: "Database",
  },
  {
    quote: "",
    name: (
      <div className="flex w-[250px] min-w-[250px] items-center justify-center gap-3 text-2xl">
        <Globe className="h-10 w-10 shrink-0 text-[#d1d1d1]" />
        <span className="whitespace-nowrap text-[#d1d1d1]">Astro</span>
      </div>
    ),
    title: "Frontend",
  },
];

export function Skills() {
  return (
    <section id="skills" className="space-y-4">
      <h2 className="font-heading text-4xl font-bold text-[#a2b7d1]">Habilidades</h2>
      <div className="relative flex h-32 flex-col items-center justify-center overflow-hidden rounded-md antialiased">
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
