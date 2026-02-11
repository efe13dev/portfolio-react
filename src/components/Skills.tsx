"use client";

import {
    Atom,
    Bolt,
    Box,
    Code2,
    Database,
    FileCode,
    GitBranch,
    Layers,
    Layout,
    Palette,
    Server,
    Smartphone,
    Sparkles,
    Terminal,
    Triangle,
    Workflow,
    Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
  level: number;
  color: string;
  glowColor: string;
  description: string;
  docsUrl: string;
}

const atomIcon = <Atom className="h-8 w-8" />;
const triangleIcon = <Triangle className="h-8 w-8" />;
const fileCodeIcon = <FileCode className="h-8 w-8" />;
const sparklesIcon = <Sparkles className="h-8 w-8" />;
const serverIcon = <Server className="h-8 w-8" />;
const zapIcon = <Zap className="h-8 w-8" />;
const databaseIcon = <Database className="h-8 w-8" />;
const gitBranchIcon = <GitBranch className="h-8 w-8" />;
const boltIcon = <Bolt className="h-8 w-8" />;
const smartphoneIcon = <Smartphone className="h-8 w-8" />;

const skills: Skill[] = [
  {
    name: "React",
    icon: atomIcon,
    category: "Frontend",
    level: 95,
    color: "#61DAFB",
    glowColor: "rgba(97, 218, 251, 0.4)",
    description: "Hooks, Context, Performance",
    docsUrl: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: triangleIcon,
    category: "Framework",
    level: 88,
    color: "#ffffff",
    glowColor: "rgba(255, 255, 255, 0.3)",
    description: "App Router, SSR, RSC",
    docsUrl: "https://nextjs.org/docs",
  },
  {
    name: "TypeScript",
    icon: fileCodeIcon,
    category: "Lenguaje",
    level: 90,
    color: "#3178C6",
    glowColor: "rgba(49, 120, 198, 0.4)",
    description: "Tipado estricto, Genéricos",
    docsUrl: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Tailwind CSS",
    icon: sparklesIcon,
    category: "Styling",
    level: 92,
    color: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.4)",
    description: "Diseño utility-first",
    docsUrl: "https://tailwindcss.com/docs",
  },
  {
    name: "Node.js",
    icon: serverIcon,
    category: "Backend",
    level: 85,
    color: "#339933",
    glowColor: "rgba(51, 153, 51, 0.4)",
    description: "APIs REST, Event Loop",
    docsUrl: "https://nodejs.org/en/docs",
  },
  {
    name: "Astro",
    icon: zapIcon,
    category: "Framework",
    level: 80,
    color: "#FF5D01",
    glowColor: "rgba(255, 93, 1, 0.4)",
    description: "Islas, Content Collections",
    docsUrl: "https://docs.astro.build",
  },
  {
    name: "PostgreSQL",
    icon: databaseIcon,
    category: "Database",
    level: 82,
    color: "#336791",
    glowColor: "rgba(51, 103, 145, 0.4)",
    description: "Queries complejas, Índices",
    docsUrl: "https://www.postgresql.org/docs/",
  },
  {
    name: "Git",
    icon: gitBranchIcon,
    category: "DevOps",
    level: 88,
    color: "#F05032",
    glowColor: "rgba(240, 80, 50, 0.4)",
    description: "Branching, Rebase, CI/CD",
    docsUrl: "https://git-scm.com/doc",
  },
  {
    name: "Supabase",
    icon: boltIcon,
    category: "Backend",
    level: 78,
    color: "#3ECF8E",
    glowColor: "rgba(62, 207, 142, 0.4)",
    description: "Auth, Realtime, Storage",
    docsUrl: "https://supabase.com/docs",
  },
  {
    name: "React Native",
    icon: smartphoneIcon,
    category: "Mobile",
    level: 72,
    color: "#7D70F7",
    glowColor: "rgba(125, 112, 247, 0.4)",
    description: "UI nativa, navegación",
    docsUrl: "https://reactnative.dev/docs/getting-started",
  },
];

const layoutIcon = <Layout className="h-4 w-4" />;
const serverSmIcon = <Server className="h-4 w-4" />;
const databaseSmIcon = <Database className="h-4 w-4" />;
const paletteIcon = <Palette className="h-4 w-4" />;
const workflowIcon = <Workflow className="h-4 w-4" />;
const boxIcon = <Box className="h-4 w-4" />;
const code2Icon = <Code2 className="h-4 w-4" />;
const layersIcon = <Layers className="h-4 w-4" />;

const categories = [
  { name: "Frontend", icon: layoutIcon },
  { name: "Backend", icon: serverSmIcon },
  { name: "Database", icon: databaseSmIcon },
  { name: "Design", icon: paletteIcon },
  { name: "DevOps", icon: workflowIcon },
  { name: "Framework", icon: boxIcon },
  { name: "Lenguaje", icon: code2Icon },
  { name: "Styling", icon: layersIcon },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[#324f75]/30",
        "bg-gradient-to-br from-[#0b1628]/80 to-[#0b0f13]/90",
        "transition-all duration-500 ease-out",
        "hover:border-[#638ec6]/50 hover:shadow-2xl",
        index === 0 && "col-span-2 row-span-2",
        index === 3 && "col-span-2",
        index === 6 && "col-span-2",
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${skill.glowColor}, transparent 40%)`,
        }}
      />

      <div
        className="absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150"
        style={{ backgroundColor: skill.glowColor }}
      />

      <div className="relative z-10 flex h-full flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-white/20"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </div>
          <span className="max-w-[110px] rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium leading-tight text-[#a2b7d1]/70 backdrop-blur-sm sm:max-w-none sm:px-3 sm:text-xs">
            {skill.category}
          </span>
        </div>

        <h3
          className={cn(
            "font-bold text-[#eceff3] transition-all duration-300",
            index === 0 ? "text-3xl" : "text-xl",
          )}
        >
          {skill.name}
        </h3>

        <p className="mt-2 text-sm text-[#a2b7d1]/60">{skill.description}</p>

        <a
          className="mt-3 inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#638ec6] transition-colors duration-300 hover:text-[#a2b7d1]"
          href={skill.docsUrl}
          rel="noreferrer"
          target="_blank"
        >
          Ver documentación
        </a>

        <div className="mt-auto pt-4">
          <div className="flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#1a2942]">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: isHovered ? "100%" : "0%",
                  backgroundColor: skill.color,
                  boxShadow: isHovered ? `0 0 20px ${skill.color}` : "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-[#638ec6]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="group relative flex items-center gap-3 rounded-xl border border-[#324f75]/20 bg-[#0b1628]/40 px-4 py-3 transition-all duration-300 hover:border-[#638ec6]/40 hover:bg-[#0b1628]/60">
      <span style={{ color: skill.color }}>{skill.icon}</span>
      <span className="text-sm font-medium text-[#eceff3]/80">{skill.name}</span>
      <div
        className="absolute inset-0 -z-10 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30"
        style={{ backgroundColor: skill.color }}
      />
    </div>
  );
}

export function Skills() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      grid.style.setProperty("--mouse-x", `${x}px`);
      grid.style.setProperty("--mouse-y", `${y}px`);
    };

    grid.addEventListener("mousemove", handleMouseMove);

    return () => grid.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const featuredSkills = skills.slice(0, 7);
  const otherSkills = skills.slice(7);

  return (
    <section id="skills" className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#324f75] to-[#638ec6]">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <h2 className="font-heading text-4xl font-bold text-[#eceff3] md:text-5xl">
            Habilidades
          </h2>
        </div>
        <p className="max-w-2xl text-lg text-[#a2b7d1]/70">
          Tecnologías y herramientas que domino para crear experiencias web excepcionales. Cada
          proyecto es una oportunidad para profundizar y expandir mis capacidades.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="flex items-center gap-2 rounded-full border border-[#324f75]/30 bg-[#0b1628]/50 px-4 py-2 text-sm text-[#a2b7d1]/70 transition-all duration-300 hover:border-[#638ec6]/50 hover:bg-[#324f75]/20 hover:text-[#eceff3]"
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      <div
        ref={gridRef}
        className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:auto-rows-[200px] sm:grid-cols-2 lg:grid-cols-4"
      >
        {featuredSkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#a2b7d1]">También trabajo con</h3>
        <div className="flex flex-wrap gap-3">
          {otherSkills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-[#324f75]/30 bg-gradient-to-r from-[#0b1628] via-[#0b0f13] to-[#0b1628] p-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iIzMyNGY3NSIgLz48L3N2Zz4=')] opacity-20" />
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <Terminal className="h-8 w-8 text-[#638ec6]" />
          <p className="text-[#eceff3]/80">
            Abierto a incorporar nuevas tecnologías cuando aporten valor real al proyecto.
          </p>
        </div>
      </div>
    </section>
  );
}
