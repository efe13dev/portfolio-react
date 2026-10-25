"use client";

import { useInView, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  FileCode,
  Palette,
  Server,
  Shuffle,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
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

interface FlatSkill extends Skill {
  categoryId: string;
  categoryName: string;
}

interface PhysicsBody {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  va: number;
  w: number;
  h: number;
}

const categories: SkillCategory[] = [
  {
    id: "lenguajes",
    name: "Lenguajes",
    icon: <FileCode className="h-3.5 w-3.5" />,
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
    icon: <Sparkles className="h-3.5 w-3.5" />,
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
    icon: <Palette className="h-3.5 w-3.5" />,
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
    icon: <Server className="h-3.5 w-3.5" />,
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
    icon: <Database className="h-3.5 w-3.5" />,
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
    icon: <Workflow className="h-3.5 w-3.5" />,
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

const allSkills: FlatSkill[] = categories.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    categoryId: category.id,
    categoryName: category.name,
  })),
);

function getChipDimensions(skill: FlatSkill, compact: boolean) {
  if (compact) {
    const w = skill.featured ? 172 : 154;
    const h = 58;

    return { w, h };
  }

  const w = skill.featured ? 224 : 198;
  const h = skill.featured ? 74 : 68;

  return { w, h };
}

const CLICK_DISTANCE_LIMIT = 6;
const MIN_SPEED = 0.12;
const CRUISE_SPEED = 0.22;
const MAX_SPEED = 7;

function PhysicsSkillArena({ activeCategory }: { activeCategory: string | null }) {
  const arenaRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bodiesRef = useRef<PhysicsBody[]>([]);
  const hoveredIndexRef = useRef<number>(-1);
  const dragRef = useRef<{
    index: number;
    offsetX: number;
    offsetY: number;
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
    lastTime: number;
  } | null>(null);

  const isInView = useInView(arenaRef, { amount: 0.1 });

  const shakeBodies = useCallback(() => {
    bodiesRef.current.forEach((body) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.8 + Math.random() * 1.6;

      body.vx = Math.cos(angle) * speed;
      body.vy = Math.sin(angle) * speed;
      body.va = 0;
    });
  }, []);

  useEffect(() => {
    const arena = arenaRef.current;

    if (!arena) return;

    const initBodies = () => {
      const width = arena.clientWidth;
      const height = arena.clientHeight;
      const compact = width < 640;
      const cols = compact ? 2 : width < 960 ? 3 : 4;
      const rows = Math.ceil(allSkills.length / cols);
      const cellW = width / cols;
      const cellH = height / rows;

      bodiesRef.current = allSkills.map((skill, i) => {
        const { w, h } = getChipDimensions(skill, compact);
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cx = cellW * (col + 0.5) + (Math.random() - 0.5) * 18;
        const cy = cellH * (row + 0.5) + (Math.random() - 0.5) * 14;
        const pad = 10;
        const x = Math.min(Math.max(cx, w / 2 + pad), width - w / 2 - pad);
        const y = Math.min(Math.max(cy, h / 2 + pad), height - h / 2 - pad);
        const dir = (i * 2.39996 + Math.random() * 0.4) % (Math.PI * 2);
        const speed = 0.15 + (i % 3) * 0.05;

        return {
          x,
          y,
          vx: Math.cos(dir) * speed,
          vy: Math.sin(dir) * speed,
          angle: 0,
          va: 0,
          w,
          h,
        };
      });
    };

    initBodies();

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (!entry) return;

      const width = entry.contentRect.width;
      const height = entry.contentRect.height;

      if (!width || !height) return;

      const compact = width < 640;
      const pad = 10;

      bodiesRef.current.forEach((body, i) => {
        const { w, h } = getChipDimensions(allSkills[i], compact);

        body.w = w;
        body.h = h;
        body.x = Math.min(Math.max(body.x, w / 2 + pad), width - w / 2 - pad);
        body.y = Math.min(Math.max(body.y, h / 2 + pad), height - h / 2 - pad);
      });
    });

    resizeObserver.observe(arena);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const arena = arenaRef.current;

    if (!arena || !isInView) return;

    let rafId = 0;
    let prevTime = performance.now();

    // shortcut: O(n^2) pairwise collision check for 17 chips, upgrade to spatial grid if >80 items
    const step = (now: number) => {
      const dtScale = Math.min(2, (now - prevTime) / 16.667);

      prevTime = now;

      const width = arena.clientWidth;
      const height = arena.clientHeight;
      const bodies = bodiesRef.current;
      const draggedIndex = dragRef.current?.index ?? -1;
      const hoveredIndex = hoveredIndexRef.current;
      const pad = 8;
      const gap = 6;

      for (let i = 0; i < bodies.length; i++) {
        const b = bodies[i];

        if (i === draggedIndex || i === hoveredIndex) {
          b.angle *= 0.85;
          continue;
        }

        b.x += b.vx * dtScale;
        b.y += b.vy * dtScale;
        b.angle = 0;

        // Mantener deriva muy lenta y suave (amortigua lanzamientos y evita que se paren)
        const speed = Math.hypot(b.vx, b.vy);

        if (speed > CRUISE_SPEED) {
          const decay = Math.pow(0.965, dtScale);

          b.vx *= decay;
          b.vy *= decay;
        } else if (speed < MIN_SPEED) {
          const boost = speed > 0.005 ? MIN_SPEED / speed : 1;

          b.vx = speed > 0.005 ? b.vx * boost : CRUISE_SPEED;
          b.vy = speed > 0.005 ? b.vy * boost : CRUISE_SPEED;
        }

        // Rebote contra las paredes del contenedor
        const minX = b.w / 2 + pad;
        const maxX = width - b.w / 2 - pad;
        const minY = b.h / 2 + pad;
        const maxY = height - b.h / 2 - pad;

        if (b.x < minX) {
          b.x = minX;
          b.vx = Math.abs(b.vx);
        } else if (b.x > maxX) {
          b.x = maxX;
          b.vx = -Math.abs(b.vx);
        }

        if (b.y < minY) {
          b.y = minY;
          b.vy = Math.abs(b.vy);
        } else if (b.y > maxY) {
          b.y = maxY;
          b.vy = -Math.abs(b.vy);
        }
      }

      // Colisiones elásticas entre tarjetas
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const a = bodies[i];
          const b = bodies[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const overlapX = (a.w + b.w) / 2 + gap - Math.abs(dx);
          const overlapY = (a.h + b.h) / 2 + gap - Math.abs(dy);

          if (overlapX > 0 && overlapY > 0) {
            const nx = overlapX < overlapY ? (dx >= 0 ? 1 : -1) : 0;
            const ny = overlapX < overlapY ? 0 : dy >= 0 ? 1 : -1;
            const overlap = Math.min(overlapX, overlapY);

            if (i === draggedIndex || i === hoveredIndex) {
              b.x += nx * overlap;
              b.y += ny * overlap;
              b.vx = a.vx * 0.8 + nx * 0.45;
              b.vy = a.vy * 0.8 + ny * 0.45;
            } else if (j === draggedIndex || j === hoveredIndex) {
              a.x -= nx * overlap;
              a.y -= ny * overlap;
              a.vx = b.vx * 0.8 - nx * 0.45;
              a.vy = b.vy * 0.8 - ny * 0.45;
            } else {
              a.x -= nx * (overlap * 0.5);
              a.y -= ny * (overlap * 0.5);
              b.x += nx * (overlap * 0.5);
              b.y += ny * (overlap * 0.5);

              const rvx = b.vx - a.vx;
              const rvy = b.vy - a.vy;
              const velAlongNormal = rvx * nx + rvy * ny;

              if (velAlongNormal < 0) {
                const restitution = 0.85;
                const impulse = (-(1 + restitution) * velAlongNormal) / 2;

                a.vx -= impulse * nx;
                a.vy -= impulse * ny;
                b.vx += impulse * nx;
                b.vy += impulse * ny;
              }
            }
          }
        }
      }

      // Sincronizar DOM directamente sin re-render de React
      for (let i = 0; i < bodies.length; i++) {
        const el = chipRefs.current[i];

        if (!el) continue;

        const b = bodies[i];

        el.style.width = `${b.w}px`;
        el.style.height = `${b.h}px`;
        el.style.transform = `translate3d(${b.x - b.w / 2}px, ${b.y - b.h / 2}px, 0) rotate(${b.angle}rad)`;
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [isInView]);

  const handlePointerDown = (index: number, e: React.PointerEvent<HTMLDivElement>) => {
    const arena = arenaRef.current;
    const body = bodiesRef.current[index];

    if (!arena || !body) return;

    e.currentTarget.setPointerCapture(e.pointerId);
    const rect = arena.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    dragRef.current = {
      index,
      offsetX: px - body.x,
      offsetY: py - body.y,
      startX: px,
      startY: py,
      lastX: px,
      lastY: py,
      lastTime: performance.now(),
    };

    body.vx = 0;
    body.vy = 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const arena = arenaRef.current;

    if (!drag || !arena) return;

    const body = bodiesRef.current[drag.index];

    if (!body) return;

    const rect = arena.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const now = performance.now();
    const dt = Math.max(8, now - drag.lastTime);
    const pad = 8;

    const nextX = Math.min(
      Math.max(px - drag.offsetX, body.w / 2 + pad),
      arena.clientWidth - body.w / 2 - pad,
    );
    const nextY = Math.min(
      Math.max(py - drag.offsetY, body.h / 2 + pad),
      arena.clientHeight - body.h / 2 - pad,
    );

    body.vx = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, ((px - drag.lastX) / dt) * 14));
    body.vy = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, ((py - drag.lastY) / dt) * 14));
    body.x = nextX;
    body.y = nextY;

    drag.lastX = px;
    drag.lastY = py;
    drag.lastTime = now;
  };

  const handlePointerUp = (index: number, e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const arena = arenaRef.current;

    if (!drag || !arena) return;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    const rect = arena.getBoundingClientRect();
    const travel = Math.hypot(
      e.clientX - rect.left - drag.startX,
      e.clientY - rect.top - drag.startY,
    );

    dragRef.current = null;

    if (travel < CLICK_DISTANCE_LIMIT) {
      window.open(allSkills[index].docsUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#3d352e]/60 bg-gradient-to-b from-[#161412]/90 to-[#0c0b0a]">
      {/* Barra superior tipo consola */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#3d352e]/40 bg-[#090807] px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#b8aea2]/70">
          <span className="h-2 w-2 rounded-full bg-[#e56b38]" />
          <span>ARENA FÍSICA 2D // ARRASTRA Y LANZA LAS TARJETAS · CLIC PARA DOCS</span>
        </div>

        <button
          type="button"
          onClick={shakeBodies}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#3d352e]/70 bg-[#161412] px-3 py-1 font-mono text-xs text-[#f4f0ea] transition-colors hover:border-[#e56b38] hover:text-[#e56b38]"
        >
          <Shuffle className="h-3 w-3" />
          <span>Impulsar</span>
        </button>
      </div>

      {/* Contenedor fijo con física en vivo */}
      <div ref={arenaRef} className="relative h-[540px] w-full overflow-hidden sm:h-[500px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, #3d352e 1px, transparent 0)
            `,
            backgroundSize: "28px 28px",
          }}
        />

        {allSkills.map((skill, index) => {
          const isDimmed = activeCategory !== null && skill.categoryId !== activeCategory;

          return (
            <div
              key={skill.name}
              ref={(el) => {
                chipRefs.current[index] = el;
              }}
              onPointerEnter={() => {
                hoveredIndexRef.current = index;
              }}
              onPointerLeave={() => {
                if (hoveredIndexRef.current === index) hoveredIndexRef.current = -1;
              }}
              onPointerDown={(e) => handlePointerDown(index, e)}
              onPointerMove={handlePointerMove}
              onPointerUp={(e) => handlePointerUp(index, e)}
              onPointerCancel={(e) => handlePointerUp(index, e)}
              style={{ "--skill": skill.color, willChange: "transform" } as React.CSSProperties}
              className={cn(
                "group absolute left-0 top-0 cursor-grab touch-none select-none active:z-30 active:cursor-grabbing",
                "transition-opacity duration-300",
                isDimmed ? "opacity-25" : "opacity-100",
              )}
            >
              <div
                className={cn(
                  "relative flex h-full w-full items-center gap-3 overflow-hidden rounded-2xl border bg-[#161412]/95 px-3.5 shadow-xl shadow-black/40 transition-colors duration-200",
                  skill.featured
                    ? "border-[#e56b38]/55 hover:border-[#f59e0b]"
                    : "hover:border-[color:var(--skill)]/65 border-[#3d352e]/70",
                )}
              >
                {skill.featured ? (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-0.5"
                    style={{
                      background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
                    }}
                  />
                ) : null}

                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-[#0c0b0a]/80"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate text-xs font-semibold text-[#f4f0ea] sm:text-sm">
                      {skill.name}
                    </p>
                    {skill.featured ? (
                      <span className="hidden rounded bg-[#e56b38]/20 px-1.5 py-0.5 font-mono text-[9px] uppercase text-[#e56b38] sm:inline">
                        Core
                      </span>
                    ) : null}
                  </div>
                  <p className="truncate text-[11px] text-[#b8aea2]/75">{skill.description}</p>
                </div>

                <ArrowUpRight className="hidden h-3.5 w-3.5 shrink-0 text-[#b8aea2]/35 transition-colors group-hover:text-[#e56b38] sm:block" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Skills() {
  const reduceMotion = useReducedMotion() ?? false;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="relative space-y-8">
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
          Arrastra y lanza las tarjetas dentro de la caja o filtra por disciplina para resaltar cada
          bloque del stack.
        </p>
      </div>

      {/* Filtro rápido que resalta tarjetas dentro de la misma caja sin romper la física */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={cn(
            "rounded-lg border px-3 py-1.5 font-mono text-xs transition-colors",
            activeCategory === null
              ? "border-[#e56b38] bg-[#e56b38] font-semibold text-[#0c0b0a]"
              : "border-[#3d352e]/60 bg-[#161412]/70 text-[#b8aea2] hover:border-[#e56b38]/60 hover:text-[#f4f0ea]",
          )}
        >
          Todas ({allSkills.length})
        </button>

        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(isActive ? null : category.id)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-xs transition-colors",
                isActive
                  ? "border-[#e56b38] bg-[#e56b38] font-semibold text-[#0c0b0a]"
                  : "border-[#3d352e]/60 bg-[#161412]/70 text-[#b8aea2] hover:border-[#e56b38]/60 hover:text-[#f4f0ea]",
              )}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>

      {reduceMotion ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {allSkills.map((skill) => (
            <a
              key={skill.name}
              href={skill.docsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[#3d352e]/50 bg-[#161412]/80 p-3.5"
            >
              <div style={{ color: skill.color }}>{skill.icon}</div>
              <div>
                <p className="text-sm font-semibold text-[#f4f0ea]">{skill.name}</p>
                <p className="text-xs text-[#b8aea2]/70">{skill.description}</p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <PhysicsSkillArena activeCategory={activeCategory} />
      )}
    </section>
  );
}
