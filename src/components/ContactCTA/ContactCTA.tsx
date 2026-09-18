import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site-config';
import styles from './ContactCTA.module.css';

type ContactCTAProps = {
  title: string;
  description?: string;
  cvHref?: string;
};

export function ContactCTA({ title, description, cvHref }: ContactCTAProps) {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
      <div className={styles.actions}>
        <Button href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Button>
        <Button href={siteConfig.social.linkedin} variant="secondary">
          LinkedIn
        </Button>
        <Button href={siteConfig.social.github} variant="secondary">
          GitHub
        </Button>
        {cvHref ? (
          <Button href={cvHref} variant="secondary" download>
            Download CV
          </Button>
        ) : null}
      </div>
    </div>
  );
}
