"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Database, FileCode, Palette, Server, Smartphone, Sparkles, Workflow, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  SiAstro,
  SiCss3,
  SiGit,
  SiJavascript,
  SiMariadb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiShadcnui,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  docsUrl: string;
}

interface SkillCategory {
  name: string;
  tagline: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    name: "Lenguajes",
    tagline: "Las bases sobre las que construyo",
    icon: <FileCode className="h-5 w-5" />,
    skills: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="h-7 w-7" />,
        color: "#3178C6",
        description: "Tipado estático, Genéricos",
        docsUrl: "https://www.typescriptlang.org/docs/",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="h-7 w-7" />,
        color: "#F7DF1E",
        description: "ES2023+, Async/Await",
        docsUrl: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      },
    ],
  },
  {
    name: "Frameworks",
    tagline: "Donde estructuro las aplicaciones",
    icon: <Sparkles className="h-5 w-5" />,
    skills: [
      {
        name: "React",
        icon: <SiReact className="h-7 w-7" />,
        color: "#61DAFB",
        description: "Hooks, Context, RSC",
        docsUrl: "https://react.dev/",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="h-7 w-7" />,
        color: "#ECEFF3",
        description: "App Router, SSR, ISR",
        docsUrl: "https://nextjs.org/docs",
      },
      {
        name: "Astro",
        icon: <SiAstro className="h-7 w-7" />,
        color: "#FF5D01",
        description: "Islas, Content Collections",
        docsUrl: "https://docs.astro.build",
      },
    ],
  },
  {
    name: "Estilos",
    tagline: "La capa visual de cada producto",
    icon: <Palette className="h-5 w-5" />,
    skills: [
      {
        name: "CSS",
        icon: <SiCss3 className="h-7 w-7" />,
        color: "#1572B6",
        description: "Grid, Flexbox, Variables",
        docsUrl: "https://developer.mozilla.org/es/docs/Web/CSS",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="h-7 w-7" />,
        color: "#38BDF8",
        description: "Utility-first, Design tokens",
        docsUrl: "https://tailwindcss.com/docs",
      },
      {
        name: "shadcn/ui",
        icon: <SiShadcnui className="h-7 w-7" />,
        color: "#E4E4E7",
        description: "Componentes accesibles",
        docsUrl: "https://ui.shadcn.com/",
      },
    ],
  },
  {
    name: "Backend",
    tagline: "Lógica de servidor y APIs",
    icon: <Server className="h-5 w-5" />,
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="h-7 w-7" />,
        color: "#5FA04E",
        description: "Event Loop, Streams",
        docsUrl: "https://nodejs.org/en/docs",
      },
      {
        name: "Supabase",
        icon: <SiSupabase className="h-7 w-7" />,
        color: "#3ECF8E",
        description: "Auth, Realtime, Storage",
        docsUrl: "https://supabase.com/docs",
      },
    ],
  },
  {
    name: "Bases de datos",
    tagline: "Persistencia y consultas",
    icon: <Database className="h-5 w-5" />,
    skills: [
      {
        name: "MySQL",
        icon: <SiMysql className="h-7 w-7" />,
        color: "#4479A1",
        description: "Relacional, Índices",
        docsUrl: "https://dev.mysql.com/doc/",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="h-7 w-7" />,
        color: "#4DA8DA",
        description: "JSONB, CTEs, Triggers",
        docsUrl: "https://www.postgresql.org/docs/",
      },
      {
        name: "MariaDB",
        icon: <SiMariadb className="h-7 w-7" />,
        color: "#C0765A",
        description: "Compatible MySQL",
        docsUrl: "https://mariadb.com/kb/en/documentation/",
      },
      {
        name: "SQLite",
        icon: <SiSqlite className="h-7 w-7" />,
        color: "#00A8E1",
        description: "Embebida, Sin servidor",
        docsUrl: "https://www.sqlite.org/docs.html",
      },
    ],
  },
  {
    name: "DevOps & Herramientas",
    tagline: "Flujo de trabajo y tooling",
    icon: <Workflow className="h-5 w-5" />,
    skills: [
      {
        name: "Git",
        icon: <SiGit className="h-7 w-7" />,
        color: "#F05032",
        description: "Branching, Rebase, CI/CD",
        docsUrl: "https://git-scm.com/doc",
      },
      {
        name: "React Native",
        icon: <Smartphone className="h-7 w-7" />,
        color: "#61DAFB",
        description: "Móvil multiplataforma",
        docsUrl: "https://reactnative.dev/docs/getting-started",
      },
    ],
  },
];

const gridFor = (count: number) =>
  count <= 2
    ? "grid-cols-2"
    : count === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : count === 4
        ? "grid-cols-2 lg:grid-cols-4"
        : "grid-cols-2 lg:grid-cols-3";

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <a
      href={skill.docsUrl}
      target="_blank"
      rel="noreferrer"
      className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-[#324f75]/30 bg-[#0b0f13]/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#638ec6]/50"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ backgroundColor: skill.color }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
        }}
      />
      <div
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] transition-transform duration-300 group-hover:scale-110"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>
      <div className="relative min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[#eceff3]">{skill.name}</p>
        <p className="truncate text-xs text-[#a2b7d1]/60">{skill.description}</p>
      </div>
    </a>
  );
}

function CategoryTile({
  category,
  isOpen,
  onToggle,
}: {
  category: SkillCategory;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } }}
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[#0b1628]/60 via-[#0b0f13]/80 to-[#0b0f13]/90 transition-colors duration-300",
        isOpen ? "border-[#638ec6]/50" : "border-[#324f75]/30 hover:border-[#324f75]/60",
        isOpen ? "col-span-2 lg:col-span-4" : "col-span-1 lg:col-span-2",
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#638ec6] opacity-[0.07] blur-3xl transition-opacity duration-500" />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group/header relative flex w-full items-center gap-3 p-4 text-left md:p-5"
      >
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#324f75] to-[#638ec6] text-white shadow-lg shadow-[#324f75]/30 transition-transform duration-300",
            isOpen && "scale-105",
          )}
        >
          {category.icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-base font-bold leading-tight text-[#eceff3] md:text-lg">
            {category.name}
          </h3>
          <p className="truncate text-xs text-[#a2b7d1]/50">
            {category.skills.length} tecnologías
          </p>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-[#a2b7d1] transition-transform duration-300",
            isOpen && "rotate-180 text-[#638ec6]",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, delay: isOpen ? 0.15 : 0 }}
            className="px-4 pb-4 md:px-5 md:pb-5"
          >
            <div className={cn("grid gap-3", gridFor(category.skills.length))}>
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      section.style.setProperty("--mouse-x", `${x}px`);
      section.style.setProperty("--mouse-y", `${y}px`);
    };

    section.addEventListener("mousemove", handleMouseMove);

    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative space-y-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 142, 198, 0.08), transparent 70%)",
        }}
      />

      <div className="relative space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#324f75] to-[#638ec6]">
            <Wrench className="h-5 w-5 text-white" />
          </div>
          <h2 className="font-heading text-4xl font-bold text-[#eceff3] md:text-5xl">
            Habilidades
          </h2>
        </div>
        <p className="max-w-2xl text-lg text-[#a2b7d1]/70">
          Tecnologías agrupadas por disciplina. Pulsa una categoría para expandirla — el bento se
          reorganiza y revela las herramientas de su interior.
        </p>
      </div>

      <motion.div
        layout
        className="relative grid grid-cols-2 items-start gap-4 lg:grid-cols-6"
      >
        {categories.map((category, index) => (
          <CategoryTile
            key={category.name}
            category={category}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </motion.div>

      <div className="relative overflow-hidden rounded-2xl border border-[#324f75]/30 bg-gradient-to-r from-[#0b1628] via-[#0b0f13] to-[#0b1628] p-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iIzMyNGY3NSIgLz48L3N2Zz4=')] opacity-20" />
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <div>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-[#638ec6]"
            >
              <polyline points="4 17 10 11 4 5" />
              <motion.line
                x1="12"
                y1="19"
                x2="20"
                y2="19"
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
          <p className="text-[#eceff3]/80">
            Abierto a incorporar nuevas tecnologías cuando aporten valor real al proyecto.
          </p>
        </div>
      </div>
    </section>
  );
}
