import { TextLink } from '@/components/TextLink';
import styles from './CaseStudyNavigation.module.css';

type CaseStudyNavigationProps = {
  previous?: { label: string; href: string };
  next?: { label: string; href: string };
};

/** Prev/next links between case studies — order follows the LUFI → IntelliShop → Storyteller hierarchy. */
export function CaseStudyNavigation({ previous, next }: CaseStudyNavigationProps) {
  if (!previous && !next) return null;

  return (
    <nav className={styles.nav} aria-label="Case study navigation">
      <div>
        {previous ? (
          <TextLink href={previous.href} withArrow>
            ← {previous.label}
          </TextLink>
        ) : null}
      </div>
      <div>
        {next ? (
          <TextLink href={next.href} withArrow>
            {next.label} →
          </TextLink>
        ) : null}
      </div>
    </nav>
  );
}
