'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { Container } from '@/components/Container';
import { primaryNav } from '@/lib/site-config';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Escape closes the menu and returns focus to the trigger button.
  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // Move focus to the first link when the panel opens.
  useEffect(() => {
    if (isOpen) {
      panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    }
  }, [isOpen]);

  function isActive(href: string): boolean {
    // Hash-based nav items (currently only Work → '/#work') are not real
    // routes and don't get a pathname-derived active state yet — being on
    // '/' at all (e.g. the Hero) must not mark Work as current. Revisit
    // intentionally if/when section-aware nav is implemented.
    if (href.includes('#')) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} onClick={() => setIsOpen(false)}>
            <Image
              src="/icon.png"
              alt=""
              width={28}
              height={28}
              className={styles.monogram}
              priority
            />
            <span className={styles.brandName}>Huerlem Peters</span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.navLink}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className={styles.positioningDetail}>
            <span className={styles.positioningDot} aria-hidden="true" />
            Design × AI × Engineering
          </p>

          <button
            ref={triggerRef}
            type="button"
            className={styles.trigger}
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className={styles.triggerLabel}>Menu</span>
            <span className={styles.triggerIcon} data-open={isOpen} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </Container>

      {/* Simple show/hide disclosure panel — no animation, so there is
          nothing for prefers-reduced-motion to need to disable. */}
      <div id={menuId} ref={panelRef} className={styles.mobilePanel} hidden={!isOpen}>
        <Container>
          <nav aria-label="Mobile">
            <ul className={styles.mobileList}>
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
