import { ReactNode } from 'react';
import styles from './Caption.module.css';

export function Caption({ children }: { children: ReactNode }) {
  return <span className={styles.caption}>{children}</span>;
}
