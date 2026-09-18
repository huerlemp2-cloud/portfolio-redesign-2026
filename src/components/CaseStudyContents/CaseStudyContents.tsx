import styles from './CaseStudyContents.module.css';

export type ContentsItem = {
  number: string; // '01', '02', ...
  label: string;
  /** Omit for a section not yet implemented — renders as disabled, non-interactive text rather than a broken link. */
  href?: string;
};

/**
 * In-page contents/jump list for a case study, distinct from
 * CaseStudyNavigation (which links BETWEEN case studies, not within one).
 * Items without an href render as plain disabled text — never a link to
 * a section that doesn't exist yet.
 */
export function CaseStudyContents({ items }: { items: ContentsItem[] }) {
  return (
    <nav className={styles.nav} aria-label="Case study contents">
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item.number}>
            {item.href ? (
              <a href={item.href} className={styles.link}>
                <span className={styles.number}>{item.number}</span>
                {item.label}
              </a>
            ) : (
              <span className={styles.disabled} aria-disabled="true">
                <span className={styles.number}>{item.number}</span>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
