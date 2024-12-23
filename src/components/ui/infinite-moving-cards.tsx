'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',

  className
}: {
  items: {
    quote: string;
    name: React.ReactNode;
    title: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
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
        containerElement.style.removeProperty('--animation-duration');
        containerElement.style.removeProperty('--animation-direction');
      }
    };
  }, [direction, speed]);
  const [start, setStart] = useState(false);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '30s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 w-max flex-nowrap gap-4',
          start && 'animate-scroll '
        )}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            className='w-[300px] max-w-full relative flex-shrink-0 flex items-center justify-center md:w-[300px]'
            style={{
              background:
                'linear-gradient(180deg, var(--slate-800), var(--slate-900)'
            }}
            key={idx + '-' + item.name}
          >
            <blockquote>
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
              ></div>
              <span className=' relative z-20 text-sm leading-[1.6] text-gray-100 font-normal'>
                {item.quote}
              </span>
              <div className='relative z-20 flex flex-row items-center'>
                <span className='flex flex-col gap-1'>
                  <span className='text-gray-400 font-normal'>{item.name}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
