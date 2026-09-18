import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { EditorialText } from '@/components/EditorialText';
import { Button } from '@/components/Button';
import { TextLink } from '@/components/TextLink';
import { buildMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'About',
  path: '/about',
  description:
    'Huerlem Peters — Product Designer working across AI & intelligent experiences, with a technical foundation in software engineering.',
});

// Real content as of Checkpoint 7 (portfolio-wide QA), synced with the
// current approved CV at CP9.1 (project-paragraph wording + role titles
// — LUFI: Founder · Product Designer · Developer; IntelliShop: Product
// Designer; AI Bedtime Story: Group Leader · Product Designer ·
// Developer). Every fact below is drawn directly from the approved CV —
// nothing invented. "AI Bedtime Story" (not "...Storyteller") is used
// throughout to match the project's established name everywhere else on
// the site (page title, metadata, Selected Work, nav) — the CV's own
// wording uses "Storyteller"; this is a deliberate one-word consistency
// substitution, not a content deviation, see the CP9.1 report. Hospitality
// work history is deliberately not featured here (leadership is already
// demonstrated through LUFI and AI Bedtime Story).
export default function AboutPage() {
  return (
    <Section spacing="lg">
      <Container narrow>
        <SectionHeader as="h1" eyebrow="About" title="Product Designer, with a technical foundation" />
        <EditorialText>
          <p className={styles.lead}>
            I work at the intersection of Product Design, AI and Software Engineering.
          </p>
          <p>
            I&rsquo;m a Product Designer with a BSc (Hons) in Computing, specialising in AI and
            intelligent digital experiences. I work across product strategy, UX architecture,
            interaction design, prototyping and implementation — with particular experience in
            conversational UX, user-controlled memory, voice and mobile products.
          </p>
          <p>
            My technical background in React Native, React, JavaScript, Firebase, REST APIs and
            SQL helps me collaborate across design and engineering, and turn complex systems into
            experiences that feel clear, useful and human. LUFI, my flagship project, is designed
            and built end to end — from product strategy through to working mobile
            implementation. IntelliShop shows the same product thinking applied to critically
            reassessing and redesigning an earlier product. AI Bedtime Story is a client product
            where I served as Group Leader, coordinating product design and development decisions
            while contributing hands-on to user journeys, accessible interfaces, front-end and
            backend implementation, parent controls, child access, AI-assisted story creation and
            text-to-speech.
          </p>
        </EditorialText>

        <h2 className={styles.subsectionHeading}>Where I work</h2>
        <div className={styles.chipList}>
          <span className={styles.chipItem}>Product Design</span>
          <span className={styles.chipItem}>UX/UI Design</span>
          <span className={styles.chipItem}>Interaction Design</span>
          <span className={styles.chipItem}>Conversational UX</span>
          <span className={styles.chipItem}>Information Architecture</span>
          <span className={styles.chipItem}>Interactive Prototyping</span>
          <span className={styles.chipItem}>Design Systems</span>
          <span className={styles.chipItem}>AI Product Design</span>
          <span className={styles.chipItem}>React Native</span>
          <span className={styles.chipItem}>React</span>
          <span className={styles.chipItem}>Firebase</span>
        </div>

        <h2 className={styles.subsectionHeading}>Education</h2>
        <EditorialText>
          <p>BSc (Hons) Computing, Upper Second-Class Honours (2:1) — Solent University, 2022–2025.</p>
        </EditorialText>

        <div className={styles.ctaGroup}>
          <Button href="/contact">Get in touch</Button>
          <Button href="/assets/cv/Huerlem-Peters-Product-Designer-CV.pdf" variant="secondary" download>
            Download CV
          </Button>
          <TextLink href="/#work" withArrow>
            View the work
          </TextLink>
        </div>
      </Container>
    </Section>
  );
}
