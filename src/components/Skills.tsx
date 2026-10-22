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
        icon: <SiTypescript className="h-5 w-5" />,
        color: "#3178C6",
        description: "Tipado estático y genéricos",
        docsUrl: "https://www.typescriptlang.org/docs/",
        featured: true,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="h-5 w-5" />,
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
        icon: <SiReact className="h-5 w-5" />,
        color: "#61DAFB",
        description: "Hooks, Context y RSC",
        docsUrl: "https://react.dev/",
        featured: true,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="h-5 w-5" />,
        color: "#F4F0EA",
        description: "App Router, SSR, ISR",
        docsUrl: "https://nextjs.org/docs",
      },
      {
        name: "Astro",
        icon: <SiAstro className="h-5 w-5" />,
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
        icon: <SiTailwindcss className="h-5 w-5" />,
        color: "#38BDF8",
        description: "Utility-first y design tokens",
        docsUrl: "https://tailwindcss.com/docs",
        featured: true,
      },
      {
        name: "CSS",
        icon: <SiCss3 className="h-5 w-5" />,
        color: "#1572B6",
        description: "Grid, Flexbox y variables",
        docsUrl: "https://developer.mozilla.org/es/docs/Web/CSS",
      },
      {
        name: "shadcn/ui",
        icon: <SiShadcnui className="h-5 w-5" />,
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
        icon: <SiNodedotjs className="h-5 w-5" />,
        color: "#5FA04E",
        description: "Event Loop y Streams",
        docsUrl: "https://nodejs.org/en/docs",
      },
      {
        name: "Hono",
        icon: <SiHono className="h-5 w-5" />,
        color: "#E36002",
        description: "Framework web ultraligero",
        docsUrl: "https://hono.dev/docs/",
      },
      {
        name: "Supabase",
        icon: <SiSupabase className="h-5 w-5" />,
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
        icon: <SiPostgresql className="h-5 w-5" />,
        color: "#4DA8DA",
        description: "JSONB, CTEs y triggers",
        docsUrl: "https://www.postgresql.org/docs/",
        featured: true,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="h-5 w-5" />,
        color: "#4479A1",
        description: "Relacional e índices",
        docsUrl: "https://dev.mysql.com/doc/",
      },
      {
        name: "SQLite",
        icon: <SiSqlite className="h-5 w-5" />,
        color: "#00A8E1",
        description: "Embebida, sin servidor",
        docsUrl: "https://www.sqlite.org/docs.html",
      },
      {
        name: "Drizzle ORM",
        icon: <SiDrizzle className="h-5 w-5" />,
        color: "#C5F74E",
        description: "ORM TypeScript type-safe",
        docsUrl: "https://orm.drizzle.team/docs/overview",
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Móvil",
    icon: <Workflow className="h-4 w-4" />,
    skills: [
      {
        name: "Git",
        icon: <SiGit className="h-5 w-5" />,
        color: "#F05032",
        description: "Branching, Rebase y CI/CD",
        docsUrl: "https://git-scm.com/doc",
        featured: true,
      },
      {
        name: "React Native",
        icon: <Smartphone className="h-5 w-5" />,
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
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }
      }
      style={{ "--skill": skill.color } as React.CSSProperties}
      className={cn(
        "group relative flex items-center gap-3 overflow-hidden rounded-xl border border-[#3d352e]/45 bg-gradient-to-br from-[#161412]/80 to-[#0c0b0a]/95 p-3.5",
        "hover:border-[color:var(--skill)]/55 transition-all duration-200 hover:-translate-y-0.5",
      )}
    >
      {skill.featured ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
          }}
        />
      ) : null}

      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] transition-transform duration-200 group-hover:scale-105"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-semibold text-[#f4f0ea]">{skill.name}</p>
          {skill.featured ? (
            <span className="rounded bg-[#e56b38]/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#e56b38]">
              Core
            </span>
          ) : null}
        </div>
        <p className="truncate text-xs text-[#b8aea2]/70">{skill.description}</p>
      </div>

      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#b8aea2]/35 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--skill)]" />
    </motion.a>
  );
}

function CategoryBlock({
  category,
  index,
  reduceMotion,
}: {
  category: SkillCategory;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <div className="grid gap-4 border-t border-[#3d352e]/35 pt-5 lg:grid-cols-[220px_1fr] lg:gap-8">
      <div className="flex items-start justify-between lg:flex-col lg:justify-start lg:gap-1">
        <div className="flex items-center gap-2 font-mono text-xs text-[#e56b38]">
          <span>03.{index + 1}</span>
          <span className="text-[#3d352e]">/</span>
          <span className="text-[#b8aea2]/60">{category.icon}</span>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-[#f4f0ea]">{category.name}</h3>
          <p className="font-mono text-[11px] text-[#b8aea2]/55">
            {category.skills.length} {category.skills.length === 1 ? "herramienta" : "herramientas"}
          </p>
        </div>
      </div>

      <motion.div
        variants={reduceMotion ? undefined : { show: { transition: { staggerChildren: 0.05 } } }}
        initial={reduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3"
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
    <section className="relative space-y-10">
      <div className="flex flex-col justify-between gap-4 border-b border-[#3d352e]/35 pb-6 md:flex-row md:items-end">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e56b38]">
            03 // STACK & HERRAMIENTAS
          </p>
          <h2 className="font-heading text-4xl font-bold text-[#f4f0ea] md:text-5xl">
            Habilidades técnicas
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-[#b8aea2]/80">
          El stack con el que construyo a diario, organizado por capa técnica. Cada tarjeta enlaza a
          su documentación oficial.
        </p>
      </div>

      <div className="space-y-6">
        {categories.map((category, index) => (
          <CategoryBlock
            key={category.id}
            category={category}
            index={index}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
    </section>
  );
}
