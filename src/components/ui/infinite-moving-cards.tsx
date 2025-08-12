"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "fast",

  className,
}: {
  items: {
    quote: string;
    name: React.ReactNode;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    const scrollerElement = scrollerRef.current;
    const containerElement = containerRef.current;

    if (!scrollerElement || !containerElement) return;

    getDirection();
    getSpeed();

    const observer = new ResizeObserver((entries) => {
      setStart(entries[0].target.scrollWidth > entries[0].contentRect.width);
    });

    observer.observe(scrollerElement);

    return () => {
      observer.disconnect();
      if (containerElement) {
        containerElement.style.removeProperty("--animation-duration");
        containerElement.style.removeProperty("--animation-direction");
      }
    };
  }, [direction, speed]);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "backwards",
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s",
      );
    }
  };

  const [start, setStart] = useState(false);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4",
          start && "animate-scroll",
        )}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            className="relative flex w-[300px] max-w-full flex-shrink-0 items-center justify-center md:w-[300px]"
            style={{
              background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={idx + "-" + item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm font-normal leading-[1.6] text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="font-normal text-gray-400">{item.name}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
