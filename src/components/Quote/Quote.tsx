import { ReactNode } from 'react';
import styles from './Quote.module.css';

type QuoteProps = {
  children: ReactNode;
  /** Small label above the quote, e.g. "Design principle", "Insight". */
  label?: string;
};

export function Quote({ children, label }: QuoteProps) {
  return (
    <blockquote className={styles.quote}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <p className={styles.text}>{children}</p>
    </blockquote>
  );
}
