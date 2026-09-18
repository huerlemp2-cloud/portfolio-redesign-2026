import { Button } from '@/components/Button';
import styles from './PrototypeCTA.module.css';

type PrototypeCTAProps = {
  href: string;
  /** Use the brief's approved CTA vocabulary: "View interactive prototype",
   *  "Explore product prototype", "View design evidence" — do not invent new phrasing. */
  label: 'View interactive prototype' | 'Explore product prototype' | 'View design evidence';
  description?: string;
};

export function PrototypeCTA({ href, label, description }: PrototypeCTAProps) {
  return (
    <div className={styles.block}>
      {description ? <p className={styles.description}>{description}</p> : null}
      <Button href={href} variant="secondary">
        {label}
      </Button>
    </div>
  );
}
