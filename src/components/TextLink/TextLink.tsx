import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './TextLink.module.css';

type TextLinkProps = {
  href: string;
  children: ReactNode;
  /** Show a trailing arrow — used for case-study nav / prototype CTAs. */
  withArrow?: boolean;
};

export function TextLink({ href, children, withArrow = false }: TextLinkProps) {
  const isExternal = href.startsWith('http');
  const content = (
    <>
      {children}
      {withArrow ? (
        <span aria-hidden="true" className={styles.arrow}>
          →
        </span>
      ) : null}
    </>
  );

  if (isExternal) {
    return (
      <a className={styles.link} href={href} target="_blank" rel="noreferrer">
        {content}
        <span className="visually-hidden"> (opens in new tab)</span>
      </a>
    );
  }

  return (
    <Link className={styles.link} href={href}>
      {content}
    </Link>
  );
}
