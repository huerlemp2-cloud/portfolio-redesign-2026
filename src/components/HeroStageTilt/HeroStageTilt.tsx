'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';
import styles from './HeroStageTilt.module.css';

const MAX_DEGREES = 1.2;

/**
 * Optional, near-subconscious pointer-response tilt for the hero device
 * stage — desktop pointer only. Disabled entirely (no listener effect) for
 * touch input and prefers-reduced-motion, checked live on every move
 * rather than once, so a settings change mid-session is respected.
 */
export function HeroStageTilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return;
    }
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${relX * MAX_DEGREES * 2}deg) rotateX(${-relY * MAX_DEGREES * 2}deg)`;
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.transform = '';
  }

  return (
    <div
      ref={ref}
      className={styles.tilt}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
