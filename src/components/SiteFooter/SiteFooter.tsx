import { Container } from '@/components/Container';
import { TextLink } from '@/components/TextLink';
import { siteConfig } from '@/lib/site-config';
import styles from './SiteFooter.module.css';

// Restrained footer per Checkpoint 2 brief (section 4): name, positioning
// line, email, LinkedIn, and GitHub (a confirmed existing professional
// link — see site-config.ts comment). No site-map nav duplication, no
// filler/inspirational copy.
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div>
            <p className={styles.name}>{siteConfig.name}</p>
            <p className={styles.positioning}>{siteConfig.positioningShort}</p>
          </div>

          <div className={styles.links}>
            <TextLink href={`mailto:${siteConfig.email}`}>{siteConfig.email}</TextLink>
            <TextLink href={siteConfig.social.linkedin}>LinkedIn</TextLink>
            <TextLink href={siteConfig.social.github}>GitHub</TextLink>
          </div>
        </div>

        <p className={styles.meta}>
          © {year} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
