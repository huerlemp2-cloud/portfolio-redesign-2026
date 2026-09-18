import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { EditorialText } from '@/components/EditorialText';
import { PrototypeCTA } from '@/components/PrototypeCTA';
import { TextLink } from '@/components/TextLink';
import { buildMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'Prototypes',
  path: '/prototypes',
  description:
    'Interactive prototypes and design evidence for LUFI and IntelliShop — deeper evidence beyond the website case studies.',
});

// Real content as of Checkpoint 7, IntelliShop prototype wording corrected
// at CP11. Only verified URLs are used — nothing fabricated. LUFI has a
// separate prototype file; IntelliShop's interactive prototype lives
// inside its main Figma project alongside the design evidence, so one
// link serves both. AI Bedtime Story has no verified interactive
// prototype or design-evidence URL, so it claims neither.
export default function PrototypesPage() {
  return (
    <Section spacing="lg">
      <Container narrow>
        <SectionHeader
          as="h1"
          eyebrow="Evidence"
          title="Prototypes & design evidence"
          description="Each case study is understandable on its own. These are optional, deeper links for anyone who wants to go further — the interactive prototype first, full design evidence beyond that."
        />

        <div className={styles.projectBlock}>
          <h2 className={styles.projectHeading}>LUFI</h2>
          <p className={styles.projectRole}>AI Companion — flagship case study</p>
          <EditorialText>
            <p>
              <TextLink href="/work/lufi">View case study</TextLink>
            </p>
          </EditorialText>
          <div className={styles.ctaRow}>
            <PrototypeCTA
              href="https://www.figma.com/design/j5iMkYqbm0n0vti95BsrHN"
              label="View interactive prototype"
            />
            <PrototypeCTA
              href="https://www.figma.com/design/mWnaSvCA0ybUqvqUOhZvCS"
              label="View design evidence"
            />
          </div>
        </div>

        <div className={styles.projectBlock}>
          <h2 className={styles.projectHeading}>IntelliShop</h2>
          <p className={styles.projectRole}>AI-Assisted Shopping Experience — supporting case study</p>
          <EditorialText>
            <p>
              <TextLink href="/work/intellishop">View case study</TextLink>
            </p>
          </EditorialText>
          <div className={styles.ctaRow}>
            <PrototypeCTA
              href="https://www.figma.com/design/VZj2AU8kOJqYvyjp8AvWQa/IntelliShop-%E2%80%94-Product-Redesign-2026"
              label="View interactive prototype"
            />
          </div>
          <p className={styles.note}>
            The interactive prototype is contained within the main IntelliShop Figma project,
            alongside the broader design evidence — unlike LUFI, it isn&rsquo;t maintained as a
            separate prototype file, so one link above covers both.
          </p>
        </div>

        <div className={styles.projectBlock}>
          <h2 className={styles.projectHeading}>AI Bedtime Story</h2>
          <p className={styles.projectRole}>Client Product — supporting case study</p>
          <EditorialText>
            <p>
              <TextLink href="/work/storyteller">View case study</TextLink>
            </p>
          </EditorialText>
          <p className={styles.note}>
            No interactive prototype or design-evidence link is verified for this project — the
            case study itself covers the available evidence.
          </p>
        </div>
      </Container>
    </Section>
  );
}
