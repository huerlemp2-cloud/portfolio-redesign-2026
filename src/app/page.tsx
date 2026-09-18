import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { DeviceFrame } from '@/components/DeviceFrame';
import { HeroStageTilt } from '@/components/HeroStageTilt';
import styles from './page.module.css';

// Checkpoint 8A — Home Visual Master (dark cinematic / quiet luxury).
// Copy below is restricted to already-approved positioning statements and
// previously-approved project descriptions — nothing new is claimed. See
// the Checkpoint 8A report for exactly which asset/copy choices were made
// and why, including differences from the approved visual reference.
export default function HomePage() {
  return (
    <>
      {/* Hero — one unified photographic scene, not separate text/product panels */}
      <Section spacing="lg" className={styles.hero}>
        <Image
          src="/assets/portfolio/hero-lufi-environment.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroEnvironment}
        />
        <div className={styles.heroEnvironmentOverlay} aria-hidden="true" />
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={`${styles.eyebrowRow} ${styles.reveal}`}>
                <p className={styles.eyebrow}>Product Designer</p>
                <span className={`${styles.eyebrowLine} ${styles.revealLine}`} aria-hidden="true" />
              </div>

              <h1
                className={`${styles.headline} ${styles.reveal}`}
                style={{ animationDelay: '80ms' }}
              >
                Designing intelligent experiences.
              </h1>

              <p
                className={`${styles.disciplineLine} ${styles.reveal}`}
                style={{ animationDelay: '180ms' }}
              >
                AI · Product Design · Software Engineering
              </p>

              <p
                className={`${styles.supportingStatement} ${styles.reveal}`}
                style={{ animationDelay: '240ms' }}
              >
                Designing intelligent products that make complex systems feel clear, useful and
                human.
              </p>

              <div className={`${styles.heroActions} ${styles.reveal}`} style={{ animationDelay: '320ms' }}>
                <Link href="/#work" className={styles.exploreLink}>
                  <span className={styles.exploreArrow} aria-hidden="true">
                    →
                  </span>
                  Explore my work
                </Link>
              </div>

              <p className={`${styles.scrollHint} ${styles.reveal}`} style={{ animationDelay: '400ms' }}>
                Scroll
              </p>
            </div>

            <div className={styles.heroProduct}>
              <div
                className={`${styles.productStage} ${styles.productStageHero} ${styles.revealImage}`}
                style={{ animationDelay: '200ms' }}
              >
                <HeroStageTilt>
                  <div className={styles.heroDevice}>
                    <DeviceFrame
                      variant="phone-dark"
                      src="/assets/lufi/lufi-hero-returning-user.png"
                      alt="LUFI home screen for a returning user, with a personalised greeting and Chat, You & LUFI, and Profile navigation tiles."
                      width={780}
                      height={1688}
                      sizes="(min-width: 1024px) 320px, 70vw"
                    />
                  </div>
                </HeroStageTilt>
              </div>

              <div className={`${styles.productMeta} ${styles.reveal}`} style={{ animationDelay: '360ms' }}>
                <div>
                  <p className={styles.productLabel}>
                    <span className={styles.productIndex}>01 —</span>LUFI
                  </p>
                  <p className={styles.productRole}>AI Companion</p>
                </div>
                <p className={styles.productDescription}>
                  An AI companion built around memory, continuity and user control — not a
                  chatbot with infinite recall.
                </p>
                <Link href="/work/lufi" className={styles.productLink}>
                  View case study
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Selected Work */}
      <Section id="work" spacing="lg" className={styles.selectedWork}>
        <Container>
          <div className={styles.selectedWorkHeader}>
            <div>
              <div className={styles.eyebrowRow}>
                <p className={styles.eyebrow}>Selected Work</p>
                <span className={styles.eyebrowLine} aria-hidden="true" />
              </div>
              <h2 className={styles.selectedWorkTitle}>
                From complex challenges to intuitive products.
              </h2>
            </div>
            <p className={styles.selectedWorkIntro}>
              A selection of product experiences, from early concept to delivered case studies.
            </p>
          </div>

          <div className={styles.workGrid}>
            <Link href="/work/lufi" className={styles.workCard}>
              <div className={`${styles.workCardMedia} ${styles.workStageLufi}`}>
                <span className={styles.workCardNumber}>01</span>
                <div className={styles.workDeviceLufi}>
                  <DeviceFrame
                    variant="phone-dark"
                    src="/assets/lufi/lufi-memory-receipt.png"
                    alt="LUFI chat screen showing a recalled memory receipt alongside the conversation."
                    width={390}
                    height={844}
                    sizes="(min-width: 768px) 220px, 60vw"
                  />
                </div>
              </div>
              <div className={styles.workCardBody}>
                <p className={styles.workCardTitle}>
                  LUFI <span>— AI Companion</span>
                </p>
                <p className={styles.workCardDescription}>
                  Memory, continuity and voice, designed around user control rather than
                  invisible recall.
                </p>
                <div className={styles.workCardFooter}>
                  <span className={styles.workCardArrow} aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/work/intellishop" className={styles.workCard}>
              <div className={`${styles.workCardMedia} ${styles.workStageIntelliShop}`}>
                <span className={styles.workCardNumber}>02</span>
                <div className={styles.workDeviceIntelliShop}>
                  <DeviceFrame
                    variant="phone-light"
                    src="/assets/intellishop/intellishop-hero-compare-stores.png"
                    alt="IntelliShop Compare Stores screen ranking nearby stores by price and availability."
                    width={780}
                    height={1624}
                    sizes="(min-width: 768px) 220px, 60vw"
                  />
                </div>
              </div>
              <div className={styles.workCardBody}>
                <p className={styles.workCardTitle}>
                  IntelliShop <span>— AI-Assisted Shopping</span>
                </p>
                <p className={styles.workCardDescription}>
                  A 2025 academic project critically reassessed and rebuilt around information
                  architecture and task flows.
                </p>
                <div className={styles.workCardFooter}>
                  <span className={styles.workCardArrow} aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/work/storyteller" className={styles.workCard}>
              <div className={`${styles.workCardMedia} ${styles.workStageStoryteller}`}>
                <span className={styles.workCardNumber}>03</span>
                <div className={styles.workDeviceStoryteller}>
                  <DeviceFrame
                    variant="laptop"
                    src="/assets/storyteller/story-website-home.png"
                    alt="AI Bedtime Story public Home page, with a hero headline, example story cards and a Start Creating Stories action."
                    width={1900}
                    height={879}
                    sizes="(min-width: 768px) 260px, 80vw"
                  />
                </div>
              </div>
              <div className={styles.workCardBody}>
                <p className={styles.workCardTitle}>
                  AI Bedtime Story <span>— Client Product</span>
                </p>
                <p className={styles.workCardDescription}>
                  A client project connecting parent control, child access and AI-assisted story
                  creation — design, leadership and backend development.
                </p>
                <div className={styles.workCardFooter}>
                  <span className={styles.workCardArrow} aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Closing editorial statement */}
      <Section spacing="lg" className={styles.closing}>
        <Container>
          <div className={styles.closingGrid}>
            <div className={styles.closingQuoteBlock}>
              <span className={styles.closingMark} aria-hidden="true">
                &ldquo;
              </span>
              <p className={styles.closingQuote}>
                Technology is more powerful when it feels human.
              </p>
            </div>
            <div className={styles.closingSide}>
              <p className={styles.closingSupporting}>
                The same principle runs through every project here — intelligent systems,
                designed to feel clear, useful and human.
              </p>
              <Link href="/about" className={styles.closingLink}>
                About me
                <span className={styles.closingArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
