"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  FileCode,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import {
  SiAstro,
  SiCss3,
  SiDrizzle,
  SiGit,
  SiHono,
  SiJavascript,
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
  featured?: boolean;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    id: "lenguajes",
    name: "Lenguajes",
    icon: <FileCode className="h-4 w-4" />,
    skills: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="h-6 w-6" />,
        color: "#3178C6",
        description: "Tipado estático y genéricos",
        docsUrl: "https://www.typescriptlang.org/docs/",
        featured: true,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="h-6 w-6" />,
        color: "#F7DF1E",
        description: "ES2023+, Async/Await",
        docsUrl: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      },
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks",
    icon: <Sparkles className="h-4 w-4" />,
    skills: [
      {
        name: "React",
        icon: <SiReact className="h-6 w-6" />,
        color: "#61DAFB",
        description: "Hooks, Context y RSC",
        docsUrl: "https://react.dev/",
        featured: true,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="h-6 w-6" />,
        color: "#ECEFF3",
        description: "App Router, SSR, ISR",
        docsUrl: "https://nextjs.org/docs",
      },
      {
        name: "Astro",
        icon: <SiAstro className="h-6 w-6" />,
        color: "#FF5D01",
        description: "Islas y Content Collections",
        docsUrl: "https://docs.astro.build",
      },
    ],
  },
  {
    id: "estilos",
    name: "Estilos",
    icon: <Palette className="h-4 w-4" />,
    skills: [
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="h-6 w-6" />,
        color: "#38BDF8",
        description: "Utility-first y design tokens",
        docsUrl: "https://tailwindcss.com/docs",
        featured: true,
      },
      {
        name: "CSS",
        icon: <SiCss3 className="h-6 w-6" />,
        color: "#1572B6",
        description: "Grid, Flexbox y variables",
        docsUrl: "https://developer.mozilla.org/es/docs/Web/CSS",
      },
      {
        name: "shadcn/ui",
        icon: <SiShadcnui className="h-6 w-6" />,
        color: "#E4E4E7",
        description: "Componentes accesibles",
        docsUrl: "https://ui.shadcn.com/",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Server className="h-4 w-4" />,
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="h-6 w-6" />,
        color: "#5FA04E",
        description: "Event Loop y Streams",
        docsUrl: "https://nodejs.org/en/docs",
      },
      {
        name: "Hono",
        icon: <SiHono className="h-6 w-6" />,
        color: "#E36002",
        description: "Framework web ultraligero",
        docsUrl: "https://hono.dev/docs/",
      },
      {
        name: "Supabase",
        icon: <SiSupabase className="h-6 w-6" />,
        color: "#3ECF8E",
        description: "Auth, Realtime y Storage",
        docsUrl: "https://supabase.com/docs",
        featured: true,
      },
    ],
  },
  {
    id: "bases-de-datos",
    name: "Bases de datos",
    icon: <Database className="h-4 w-4" />,
    skills: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="h-6 w-6" />,
        color: "#4DA8DA",
        description: "JSONB, CTEs y triggers",
        docsUrl: "https://www.postgresql.org/docs/",
        featured: true,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="h-6 w-6" />,
        color: "#4479A1",
        description: "Relacional e índices",
        docsUrl: "https://dev.mysql.com/doc/",
      },
      {
        name: "SQLite",
        icon: <SiSqlite className="h-6 w-6" />,
        color: "#00A8E1",
        description: "Embebida, sin servidor",
        docsUrl: "https://www.sqlite.org/docs.html",
      },
      {
        name: "Drizzle ORM",
        icon: <SiDrizzle className="h-6 w-6" />,
        color: "#C5F74E",
        description: "ORM TypeScript type-safe",
        docsUrl: "https://orm.drizzle.team/docs/overview",
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Tooling",
    icon: <Workflow className="h-4 w-4" />,
    skills: [
      {
        name: "Git",
        icon: <SiGit className="h-6 w-6" />,
        color: "#F05032",
        description: "Branching, Rebase y CI/CD",
        docsUrl: "https://git-scm.com/doc",
        featured: true,
      },
      {
        name: "React Native",
        icon: <Smartphone className="h-6 w-6" />,
        color: "#61DAFB",
        description: "Móvil multiplataforma",
        docsUrl: "https://reactnative.dev/docs/getting-started",
      },
    ],
  },
];

function SkillCard({ skill, reduceMotion }: { skill: Skill; reduceMotion: boolean }) {
  return (
    <motion.a
      href={skill.docsUrl}
      target="_blank"
      rel="noreferrer"
      variants={
        reduceMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }
      }
      style={{ "--skill": skill.color } as React.CSSProperties}
      className={cn(
        "group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#324f75]/30 bg-gradient-to-br from-[#0b1628]/60 to-[#0b0f13]/80 p-5",
        "hover:border-[color:var(--skill)]/50 transition-all duration-300 hover:-translate-y-1",
        "hover:shadow-[0_10px_40px_-12px_var(--skill)]",
      )}
    >
      {/* Acento superior en las tecnologías principales */}
      {skill.featured && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-0.5"
          style={{
            background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
          }}
        />
      )}

      {/* Glow de color al hacer hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ backgroundColor: skill.color }}
      />

      <div className="flex items-start justify-between">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] transition-transform duration-300 group-hover:scale-110"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>
        <ArrowUpRight className="h-4 w-4 -translate-y-1 translate-x-1 text-[#a2b7d1]/40 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[color:var(--skill)] group-hover:opacity-100" />
      </div>

      <div className="min-w-0">
        <p className="truncate text-base font-semibold text-[#eceff3]">{skill.name}</p>
        <p className="mt-0.5 truncate text-xs text-[#a2b7d1]/60">{skill.description}</p>
      </div>
    </motion.a>
  );
}

function CategoryBlock({
  category,
  reduceMotion,
}: {
  category: SkillCategory;
  reduceMotion: boolean;
}) {
  return (
    <div className="grid gap-5 border-t border-[#324f75]/20 pt-8 lg:grid-cols-[220px_1fr] lg:gap-10">
      <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#324f75] to-[#638ec6] text-white shadow-lg shadow-[#324f75]/20">
          {category.icon}
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold text-[#eceff3]">{category.name}</h3>
          <p className="text-sm text-[#a2b7d1]/50">
            {category.skills.length} {category.skills.length === 1 ? "tecnología" : "tecnologías"}
          </p>
        </div>
      </div>

      <motion.div
        variants={reduceMotion ? undefined : { show: { transition: { staggerChildren: 0.06 } } }}
        initial={reduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3"
      >
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} reduceMotion={reduceMotion} />
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="skills" className="relative space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#324f75] to-[#638ec6]">
            <Wrench className="h-5 w-5 text-white" />
          </div>
          <h2 className="font-heading text-4xl font-bold text-[#eceff3] md:text-5xl">
            Habilidades
          </h2>
        </div>
        <p className="max-w-2xl text-lg text-[#a2b7d1]/70">
          El stack con el que construyo, organizado por disciplina. Cada tecnología enlaza a su
          documentación oficial.
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <CategoryBlock key={category.id} category={category} reduceMotion={reduceMotion} />
        ))}
      </div>

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
                animate={reduceMotion ? undefined : { opacity: [1, 0.15, 1] }}
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
