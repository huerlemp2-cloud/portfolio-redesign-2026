import { ReactNode } from 'react';
import styles from './EditorialText.module.css';

/**
 * Wraps long-form case-study prose with editorial reading rhythm
 * (measure, paragraph spacing). Content is supplied by the page —
 * this component carries no copy of its own.
 */
export function EditorialText({ children }: { children: ReactNode }) {
  return <div className={`${styles.prose} editorial-prose`}>{children}</div>;
}
