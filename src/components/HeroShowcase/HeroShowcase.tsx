'use client';

import Image from 'next/image';
import { useId, useRef, useState } from 'react';
import styles from './HeroShowcase.module.css';

type Slide = {
  index: string; // '01', '02'
  product: 'lufi' | 'intellishop';
  name: string;
  role: string; // 'AI Companion', 'AI-Assisted Shopping'
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Content given verbatim in the Checkpoint 3.1 brief — not improvised.
const slides: Slide[] = [
  {
    index: '01',
    product: 'lufi',
    name: 'LUFI',
    role: 'AI Companion',
    src: '/assets/lufi/lufi-hero-returning-user.png',
    alt: 'LUFI home screen for a returning user, with a personalised greeting and Chat, You & LUFI, and Profile navigation tiles.',
    width: 780,
    height: 1688,
  },
  {
    index: '02',
    product: 'intellishop',
    name: 'IntelliShop',
    role: 'AI-Assisted Shopping',
    src: '/assets/intellishop/intellishop-hero-compare-stores.png',
    alt: 'IntelliShop Compare Stores view showing four nearby stores ranked by price and availability, with FreshMart recommended as the lowest-total option.',
    width: 780,
    height: 1624,
  },
];

/**
 * Restrained product showcase, not a marketing banner carousel: two
 * slides, user-controlled only (no autoplay), Previous/Next + numbered
 * indicators, keyboard and touch support. Only the current slide's markup
 * is rendered (swapped on state change, not toggled via `hidden`) — the
 * panel is `aria-live="polite"` so screen readers announce the change,
 * which is simpler and more robust here than a full multi-panel ARIA
 * carousel widget for two items.
 */
export function HeroShowcase() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const baseId = useId();

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };
  const next = () => goTo(current + 1);
  const previous = () => goTo(current - 1);

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      next();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      previous();
    }
  }

  function onTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }
  function onTouchEnd(event: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    const SWIPE_THRESHOLD = 40;
    if (delta > SWIPE_THRESHOLD) previous();
    else if (delta < -SWIPE_THRESHOLD) next();
    touchStartX.current = null;
  }

  const slide = slides[current];
  if (!slide) return null;

  return (
    <div
      className={styles.showcase}
      role="region"
      aria-roledescription="carousel"
      aria-label="Product showcase"
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        key={slide.product}
        className={`${styles.slide} ${slide.product === 'lufi' ? styles.slideLufi : styles.slideIntellishop}`}
        role="group"
        aria-roledescription="slide"
        aria-label={`${current + 1} of ${slides.length}`}
        aria-live="polite"
        id={`${baseId}-panel`}
      >
        <p className={styles.slideLabel}>
          <span className={styles.slideIndex}>{slide.index}</span>
          {slide.name}
          <span className={styles.slideRole}> — {slide.role}</span>
        </p>
        <div className={styles.deviceFrame}>
          <Image
            src={slide.src}
            alt={slide.alt}
            width={slide.width}
            height={slide.height}
            sizes="320px"
            priority
            className={styles.deviceImage}
          />
        </div>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.navButton} onClick={previous} aria-label="Previous product">
          ‹
        </button>
        <div className={styles.indicators}>
          {slides.map((s, i) => (
            <button
              key={s.product}
              type="button"
              className={styles.indicator}
              aria-label={`Show ${s.name}`}
              aria-current={i === current ? 'true' : undefined}
              onClick={() => goTo(i)}
            >
              {s.index}
            </button>
          ))}
        </div>
        <button type="button" className={styles.navButton} onClick={next} aria-label="Next product">
          ›
        </button>
      </div>
    </div>
  );
}
