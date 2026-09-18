import { MetadataRow } from '@/types/content';
import styles from './ProjectMetadata.module.css';

/** Renders label/value pairs, e.g. Role / Year / Platform / Status. */
export function ProjectMetadata({ rows }: { rows: MetadataRow[] }) {
  return (
    <dl className={styles.list}>
      {rows.map((row) => (
        <div className={styles.row} key={row.label}>
          <dt className={styles.label}>{row.label}</dt>
          <dd className={styles.value}>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
