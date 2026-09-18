import { ReactNode } from 'react';
import styles from './SectionHeader.module.css';

type SectionHeaderProps = {
  /** Small label above the heading, e.g. "Work", "Case Study". Structural — content supplied per page. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional trailing slot, e.g. a link to "View all work". */
  action?: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  /**
   * Visual size, independent of heading tag (semantic level) — the
   * confirmed hierarchy has two different 'h2' roles: 'project' (28px,
   * e.g. LUFI/IntelliShop titles) and 'section' (18px, e.g. About/Contact
   * entry headings). Defaults to 'section'.
   */
  size?: 'section' | 'project';
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  as: Heading = 'h2',
  size = 'section',
}: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <Heading className={`${styles.title} ${styles[size]}`}>{title}</Heading>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  );
}
