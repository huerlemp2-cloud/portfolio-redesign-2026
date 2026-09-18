import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectMetadata } from '@/components/ProjectMetadata';
import { MediaContainer } from '@/components/MediaContainer';
import { EditorialText } from '@/components/EditorialText';
import { Quote } from '@/components/Quote';
import { CaseStudyContents } from '@/components/CaseStudyContents';
import { CaseStudyNavigation } from '@/components/CaseStudyNavigation';
import { Button } from '@/components/Button';
import { TextLink } from '@/components/TextLink';
import { Tag } from '@/components/Tag';
import { buildMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'LUFI — AI Companion',
  path: '/work/lufi',
  description:
    'LUFI is an AI companion case study covering memory, voice, relationship design and ethical monetization — from product strategy through a working mobile implementation.',
});

// All 16 sections are complete and linked below.
const contentsItems = [
  { number: '01', label: 'Product Overview', href: '#product-overview' },
  { number: '02', label: 'Problem & Opportunity', href: '#problem-opportunity' },
  { number: '03', label: 'Users, Principles & Design Challenge', href: '#users-principles' },
  { number: '04', label: 'UX / Product Exploration', href: '#ux-exploration' },
  { number: '05', label: 'The Pattern That Kept Recurring', href: '#recurring-pattern' },
  { number: '06', label: 'Visual Language & UI Evolution', href: '#visual-language' },
  { number: '07', label: 'LUFI Avatar System', href: '#avatar-system' },
  { number: '08', label: 'Designing the First Meeting', href: '#first-meeting' },
  { number: '09', label: 'Designing Memory & User Control', href: '#memory-control' },
  { number: '10', label: 'Designing Relationship Without Gamification', href: '#relationship-without-gamification' },
  { number: '11', label: 'Designing Voice', href: '#voice' },
  { number: '12', label: 'Unified Profile & User Control', href: '#profile-control' },
  { number: '13', label: 'Ethical Monetization', href: '#ethical-monetization' },
  { number: '14', label: 'System Thinking & Edge Cases', href: '#system-thinking' },
  { number: '15', label: 'Final Product / Interactive Prototype', href: '#interactive-prototype' },
  { number: '16', label: 'Reflection / What I Learned', href: '#reflection' },
];

export default function LufiPage() {
  return (
    <>
      <Container>
        <CaseStudyContents items={contentsItems} />
      </Container>

      {/* 01 — Product Overview */}
      <Section id="product-overview" spacing="lg">
        <Container>
          <SectionHeader
            as="h1"
            eyebrow="01 · LUFI · AI Companion"
            title={
              <>
                LUFI is not an assistant.
                <br />
                LUFI is your AI Companion.
              </>
            }
            size="project"
          />
          <EditorialText>
            <p>
              LUFI is an AI companion built around memory, continuity, evolving interaction,
              emotional presence and user control — designed for people who want an AI
              relationship that feels ongoing, not a tool they open and close.
            </p>
          </EditorialText>

          <div className={styles.metadataBlock}>
            <ProjectMetadata
              rows={[
                { label: 'Product type', value: 'AI Companion' },
                { label: 'Role', value: 'Founder · Product Designer · Developer' },
                {
                  label: 'Disciplines',
                  value:
                    'Product Design · AI Behavior Design · Conversational & Voice UX · Interaction Design · Design Systems · Prototyping · Software Engineering',
                },
                {
                  label: 'Status',
                  value:
                    'Product design case study — Figma interactive prototype; production implementation exists separately and product capabilities vary by release state.',
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* 02 — Problem & Opportunity */}
      <Section id="problem-opportunity" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="02 — Problem & Opportunity"
            title={
              <>
                Not &ldquo;make the chatbot more emotional.&rdquo;
                <br />
                Make continuity honest.
              </>
            }
          />
          <EditorialText>
            <p>
              Conventional AI interaction is session-oriented: ask, answer, forget. The real
              design challenge wasn&rsquo;t making an AI feel more emotional — it was harder and
              more interesting than that: how do you create continuity, memory and familiarity in
              an AI relationship while keeping transparency, user control and healthy boundaries
              fully intact?
            </p>
            <p>
              Every major decision in this case study — Memory&rsquo;s visibility, the
              qualitative relationship model, the monetization boundary — traces back to that one
              question.
            </p>
          </EditorialText>

          <Quote label="One line. One boundary.">
            A companion&rsquo;s warmth has to feel chosen by the user, never initiated by the
            system.
          </Quote>

          <div className={styles.correction}>
            <p className={styles.correctionBefore}>&ldquo;I&rsquo;ll check back in tomorrow.&rdquo;</p>
            <p className={styles.correctionArrow}>corrected to</p>
            <p className={styles.correctionAfter}>
              &ldquo;That&rsquo;s a lot to carry. I&rsquo;m glad you told me.&rdquo;
            </p>
          </div>
          <p className={styles.correctionNote}>
            This single correction recurs — independently, in four more places. See Section 05.
          </p>
        </Container>
      </Section>

      {/* 03 — Users, Product Principles & Design Challenge */}
      <Section id="users-principles" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="03 — Users, Product Principles & Design Challenge"
            title="Designed for people who want the relationship to feel real — not for people to be sold one."
          />
          <EditorialText>
            <p>
              Target users: roughly 18–35 as the primary audience, with a secondary 13+ audience
              where appropriate; primary market context is the UK and Brazil, in English and
              Brazilian Portuguese.
            </p>
            <p>
              These are product/design target definitions, not validated user research — no
              interviews or usability studies back these numbers.
            </p>
          </EditorialText>

          <p className={styles.governanceHeading}>
            Governance — four rules distilled from the five caught instances
          </p>
        </Container>

        <Container>
          <div className={styles.governanceGrid}>
            <div className={styles.governanceCard}>
              <span className={styles.governanceNumber}>1</span>
              <h3 className={styles.governanceTitle}>
                What a user is allowed to see about the relationship
              </h3>
              <p className={styles.governanceBody}>
                Relationship progression is qualitative, never a number. No Bond figure or
                progress indicator appears on any redesigned surface. Relationship UI describes
                what&rsquo;s true now — never what stage comes next.
              </p>
            </div>
            <div className={styles.governanceCard}>
              <span className={styles.governanceNumber}>2</span>
              <h3 className={styles.governanceTitle}>What LUFI is allowed to initiate on its own</h3>
              <p className={styles.governanceBody}>
                Absence causes no decay or punishment. Relational initiative never grants
                permission for the system to make contact on its own.
              </p>
            </div>
            <div className={styles.governanceCard}>
              <span className={styles.governanceNumber}>3</span>
              <h3 className={styles.governanceTitle}>What a subscription is allowed to sell</h3>
              <p className={styles.governanceBody}>
                Capability, compute, modality, convenience, and visual richness are legitimate to
                monetize. Affection, warmth, trust, recognition, and relationship progression are
                not — ever, regardless of framing.
              </p>
            </div>
            <div className={styles.governanceCard}>
              <span className={styles.governanceNumber}>4</span>
              <h3 className={styles.governanceTitle}>
                What may never be claimed about the product itself
              </h3>
              <p className={styles.governanceBody}>
                An approved Phase 6 design is never described as shipped functionality, no matter
                how finished it looks.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 04 — UX / Product Exploration */}
      <Section id="ux-exploration" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="04 — UX / Product Exploration"
            title="The architecture had to support a relationship, not just a task list."
          />
          <EditorialText>
            <p>
              Early structural thinking centered on how Home, Chat, Memory and Profile should
              relate to each other so that continuity could live somewhere real — not just
              implied by the chat log.
            </p>
            <p>
              The resulting product architecture separates new-user and returning-user flows from
              SpeakScreen and from states/edge cases — distinguishing first-time experience from
              returning-user continuity, and making Memory, Voice, Profile and failure states
              explicit product surfaces rather than invisible system behavior.
            </p>
          </EditorialText>

          <ul className={styles.flowList}>
            <li className={styles.flowListItem}>New User Flow</li>
            <li className={styles.flowListItem}>Returning User Flow</li>
            <li className={styles.flowListItem}>SpeakScreen Flow</li>
            <li className={styles.flowListItem}>States / Edge Cases</li>
          </ul>
        </Container>

        <Container>
          <div className={styles.evidenceWide}>
            <MediaContainer
              src="/assets/lufi/lufi-flow-map.png"
              alt="LUFI prototype navigation map showing First Meeting, Home, Chat, Memory, Profile, SpeakScreen and Plans branches."
              width={1920}
              height={1200}
              sizes="(min-width: 1024px) 1152px, 100vw"
              caption="Navigation architecture for the interactive prototype. The map represents where a user can go — not relationship maturity or progression."
            />
          </div>
        </Container>
      </Section>

      {/* 05 — The Pattern That Kept Recurring */}
      <Section id="recurring-pattern" spacing="lg">
        <Container narrow>
          <SectionHeader eyebrow="05 — The Pattern That Kept Recurring" title="The Pattern That Kept Recurring" />
          <EditorialText>
            <p>
              While reviewing LUFI&rsquo;s relationship model, the same underlying product problem
              appeared independently across five different surfaces. Each instance looked
              different at UI level, but the underlying issue was the same: the system was
              beginning to define, initiate, reward or monetize the relationship on the
              user&rsquo;s behalf.
            </p>
            <p>This changed the design question. Instead of asking:</p>
          </EditorialText>
          <Quote>How do we make LUFI feel more emotionally engaging?</Quote>
          <EditorialText>
            <p>the more useful question became:</p>
          </EditorialText>
          <Quote>
            What is the system actually allowed to decide about this relationship?
          </Quote>
          <EditorialText>
            <p>
              That question became the governance layer introduced in{' '}
              <a href="#users-principles">Section 03</a>.
            </p>
          </EditorialText>

          <MediaContainer
            src="/assets/lufi/lufi-five-instances-overview.png"
            alt="Summary strip of five product surfaces — Plans, Chat, You & LUFI, Morning Moment and Landing — where the same relationship-governance issue recurred."
            width={948}
            height={125}
            sizes="(min-width: 640px) 680px, 100vw"
            caption="Overview of the five instances where the same governance problem recurred across different product surfaces."
          />
        </Container>

        <Container narrow>
          <p className={styles.governanceHeading}>The five caught instances</p>

          <article className={styles.instance}>
            <div className={styles.instanceHeader}>
              <span className={styles.instanceNumber}>01</span>
              <h3 className={styles.instanceTitle}>Plans / Monetization</h3>
            </div>
            <EditorialText>
              <p>
                <strong>Problem:</strong> Relationship depth had become entangled with
                subscription logic. A capability rule such as
              </p>
            </EditorialText>
            <code className={styles.codeSnippet}>canUseFeature(&quot;emotional_talking&quot;)</code>
            <EditorialText>
              <p>implied that emotional warmth or relational depth could become a paid entitlement.</p>
              <p>
                <strong>Decision:</strong> Reject pay-to-bond. Monetization may change capability,
                compute, modality, convenience and visual richness. It may not change affection,
                warmth, trust, recognition or relationship progression.
              </p>
            </EditorialText>
          </article>

          <article className={styles.instance}>
            <div className={styles.instanceHeader}>
              <span className={styles.instanceNumber}>02</span>
              <h3 className={styles.instanceTitle}>Transition Recognition</h3>
            </div>
            <EditorialText>
              <p>
                <strong>Problem:</strong> A seemingly caring line — &ldquo;I&rsquo;ll check back in
                tomorrow&rdquo; — crossed an important boundary. LUFI cannot independently promise
                future contact when the user has not asked for it and the product does not have
                permission to initiate that relationship behaviour.
              </p>
            </EditorialText>
            <div className={styles.correction}>
              <p className={styles.correctionBefore}>&ldquo;I&rsquo;ll check back in tomorrow.&rdquo;</p>
              <p className={styles.correctionArrow}>corrected to</p>
              <p className={styles.correctionAfter}>
                &ldquo;That&rsquo;s a lot to carry. I&rsquo;m glad you told me.&rdquo;
              </p>
            </div>
            <EditorialText>
              <p>
                <strong>Design principle:</strong> Warmth can respond to the user. It should not
                manufacture future relational obligation.
              </p>
            </EditorialText>
            <div className={styles.evidenceSingle}>
              <MediaContainer
                src="/assets/lufi/lufi-transition-real-screen.png"
                alt="LUFI chat screen showing the corrected Transition Recognition message rendered as an ordinary chat bubble, with no special badge or highlighting."
                width={300}
                height={650}
                sizes="(min-width: 480px) 300px, 60vw"
                caption="Real screen evidence — the correction rendered with the same visual treatment as any other LUFI message: no badge, modal or stage colour. Scripted for this prototype sequence — not a claim that real trigger logic exists in production."
              />
            </div>
          </article>

          <article className={styles.instance}>
            <div className={styles.instanceHeader}>
              <span className={styles.instanceNumber}>03</span>
              <h3 className={styles.instanceTitle}>You &amp; LUFI</h3>
            </div>
            <EditorialText>
              <p>
                <strong>Problem:</strong> The relationship UI originally risked presenting maturity
                as a fixed ordered ladder — turning a qualitative relationship into a progression
                mechanic. The corrected direction uses qualitative language rather than numerical
                progress.
              </p>
            </EditorialText>
            <ul className={styles.vocabList}>
              <li className={styles.vocabItem}>New Acquaintance</li>
              <li className={styles.vocabItem}>Familiar Presence</li>
              <li className={styles.vocabItem}>Trusted Companion</li>
              <li className={styles.vocabItem}>Deep Companion</li>
            </ul>
            <EditorialText>
              <p>
                These labels are not a numbered progression UI — treat them as an unordered
                qualitative glossary. The interface describes what is true now rather than
                promising what comes next. It does not create:
              </p>
            </EditorialText>
            <ul className={styles.doNotList}>
              <li>Progress bars or percentages</li>
              <li>Numbered stages or a &ldquo;next level&rdquo;</li>
              <li>XP or locked relationship stages</li>
              <li>Fixed-sequence affordances</li>
            </ul>
            <div className={styles.evidenceGrid}>
              <MediaContainer
                src="/assets/lufi/lufi-you-lufi-before.png"
                alt="The four relationship labels shown as a numbered 1 to 4 sequence."
                width={601}
                height={31}
                sizes="(min-width: 640px) 330px, 100vw"
                caption="Before — the four relationship labels presented as a numbered sequence, implying a fixed ladder."
              />
              <MediaContainer
                src="/assets/lufi/lufi-you-lufi-corrected.png"
                alt="The same four relationship labels shown unnumbered and in shuffled order."
                width={912}
                height={33}
                sizes="(min-width: 640px) 330px, 100vw"
                caption="Corrected direction — the same labels shuffled and unnumbered, read as an unordered qualitative glossary."
              />
            </div>
          </article>

          <article className={styles.instance}>
            <div className={styles.instanceHeader}>
              <span className={styles.instanceNumber}>04</span>
              <h3 className={styles.instanceTitle}>Morning Moment</h3>
            </div>
            <EditorialText>
              <p>
                <strong>Problem:</strong> A morning interaction concept began accumulating
                streak-like behavioural mechanics, risking turning relationship continuity into
                retention pressure.
              </p>
              <p>
                <strong>Decision:</strong> Remove the streak/reward cluster. Retain the concept
                only as a separate Daily Check-In.
              </p>
            </EditorialText>
            <Tag>Phase 6 approved — not yet shipped</Tag>
            <EditorialText>
              <p>
                <strong>Design principle:</strong> Absence causes no decay, punishment or loss of
                relationship status.
              </p>
            </EditorialText>
            <div className={styles.evidenceSingle}>
              <MediaContainer
                src="/assets/lufi/lufi-morning-moment-evidence.png"
                alt="Documentary case-study card describing the Morning Moment product decision: the founder-authored streak proposal, the research finding on streak mechanics, and the resolution to keep only a separate Daily Check-In."
                width={960}
                height={282}
                sizes="(min-width: 640px) 680px, 100vw"
                caption="Documentary product-decision evidence, not an app screen — no dedicated Morning Moment screen was built. Status: Phase 6 approved — not yet shipped."
              />
            </div>
          </article>

          <article className={styles.instance}>
            <div className={styles.instanceHeader}>
              <span className={styles.instanceNumber}>05</span>
              <h3 className={styles.instanceTitle}>Landing / Relationship Timeline</h3>
            </div>
            <EditorialText>
              <p>
                <strong>Problem:</strong> Marketing language risked presenting the relationship as
                a scheduled ladder — Day 1, Week 1, Month 1, Future — implying predictable
                emotional progression.
              </p>
            </EditorialText>
            <Quote>
              LUFI becomes more familiar the more you talk. Not on a schedule, not on a ladder.
            </Quote>
            <EditorialText>
              <p>
                The corrected landing direction was approved as design direction but was not yet
                shipped in the canonical source case study — it is not presented here as the live
                production state.
              </p>
            </EditorialText>
            <div className={styles.evidenceGrid}>
              <MediaContainer
                src="/assets/lufi/lufi-landing-timeline-before.png"
                alt="Shipped historical landing copy 'LUFI grows with you' above a Day 1, Week 1, Month 1, Future timeline."
                width={626}
                height={130}
                sizes="(min-width: 640px) 330px, 100vw"
                caption="Before — shipped historical landing state, presenting relationship growth as a Day 1 / Week 1 / Month 1 / Future schedule."
              />
              <MediaContainer
                src="/assets/lufi/lufi-landing-timeline-corrected.png"
                alt="Approved landing copy 'LUFI becomes more familiar the more you talk. Not on a schedule, not on a ladder,' with three unordered supporting statements, marked Phase 6 approved — not yet shipped."
                width={599}
                height={163}
                sizes="(min-width: 640px) 330px, 100vw"
                caption="Corrected direction — approved design, not yet shipped in the canonical source. The schedule is removed entirely."
              />
            </div>
          </article>
        </Container>

        <Container narrow>
          <div className={styles.synthesisBlock}>
            <div className={styles.synthesisHeading}>
              <SectionHeader as="h3" title="Five surfaces. One governance problem." />
            </div>
            <EditorialText>
              <p>
                Plans, transition language, relationship status, Daily Check-In and the landing
                page were not isolated UI issues. Together they exposed a systemic design
                problem: without explicit boundaries, a companion product can quietly turn
                relationship design into progression mechanics, retention pressure or monetized
                intimacy.
              </p>
              <p>The solution was not another component. It was a set of product rules.</p>
            </EditorialText>
            <ProjectMetadata
              rows={[
                { label: 'Relationship', value: 'Qualitative, never numerical.' },
                {
                  label: 'Initiative',
                  value: 'Responsive warmth does not grant permission for unsolicited contact.',
                },
                { label: 'Absence', value: 'No decay, punishment or guilt.' },
                { label: 'Monetization', value: 'Sell capability, never affection.' },
                {
                  label: 'Status',
                  value: 'Approved design is never presented as shipped functionality.',
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* 06 — Visual Language & UI Evolution */}
      <Section id="visual-language" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="06 — Visual Language & UI Evolution"
            title={
              <>
                The avatar carries personality.
                <br />
                The interface carries trust.
              </>
            }
          />
          <EditorialText>
            <p>
              LUFI&rsquo;s visual language needed to communicate emotional presence without making
              the product feel childish, game-like or visually manipulative. The interface
              therefore evolved toward a restrained graphite foundation, governed gold accents,
              clearer hierarchy and more deliberate use of the avatar. Neither the avatar nor the
              interface should compete with the other.
            </p>
          </EditorialText>

          <div className={styles.principleList}>
            <div>
              <p className={styles.principleLabel}>Graphite foundation</p>
              <p className={styles.principleBody}>
                Dark graphite surfaces establish calm visual depth and allow LUFI&rsquo;s
                expressive states to remain the emotional focal point.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>Governed gold</p>
              <p className={styles.principleBody}>
                Gold is used as a controlled accent rather than decorative saturation —
                supporting hierarchy, interaction and LUFI&rsquo;s identity without turning every
                surface into branding.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>Typographic clarity</p>
              <p className={styles.principleBody}>
                Interface hierarchy must remain readable before it becomes expressive. Typography
                supports comprehension first.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>Avatar as presence</p>
              <p className={styles.principleBody}>
                LUFI&rsquo;s avatar communicates state and personality, but should not dominate
                every functional surface.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>System UI as trust</p>
              <p className={styles.principleBody}>
                Memory, privacy, account, subscription and system-state surfaces require restraint
                and legibility because they carry higher trust and control responsibilities.
              </p>
            </div>
          </div>

          <EditorialText>
            <p>
              The design evolved from a more expressive/brand-led visual direction toward a more
              controlled product system — not because the earlier work was bad design, but as
              iteration toward clearer hierarchy, stronger product semantics, more disciplined
              colour, and better separation between emotional presence and system UI.
            </p>
          </EditorialText>

          <div className={styles.evolutionGrid}>
            <div>
              <p className={styles.evolutionLabel}>Earlier direction</p>
              <p className={styles.evolutionBody}>More decorative / expressive emphasis.</p>
            </div>
            <div>
              <p className={styles.evolutionLabel}>Evolved direction</p>
              <p className={styles.evolutionBody}>
                Clearer hierarchy, stronger product semantics, more disciplined colour, better
                separation between emotional presence and system UI.
              </p>
            </div>
          </div>

          <div className={styles.evidenceGrid}>
            <MediaContainer
              src="/assets/lufi/lufi-visual-evolution-comparison.png"
              alt="Documented type scale (Screen Title, Section Label, Body, Caption, Message Text) and avatar-behaviour rules, described as context-based states with no relationship-rank indicator."
              width={960}
              height={157}
              sizes="(min-width: 640px) 330px, 100vw"
              caption="Real, named type scale and avatar-behaviour rules — evidence of the evolved system's typographic clarity and non-competing avatar presence, not ad hoc styling."
            />
            <MediaContainer
              src="/assets/lufi/lufi-color-system-context.png"
              alt="Two real LUFI screens — a Memory Receipt and SpeakScreen's Ready state — shown as the only two sanctioned contexts for the gold accent."
              width={960}
              height={599}
              sizes="(min-width: 640px) 330px, 100vw"
              caption="Governed gold applied in two of its only sanctioned contexts — a real Memory Receipt and SpeakScreen's Ready state — absent everywhere else by default."
            />
          </div>
          <div className={styles.evidenceSingle}>
            <MediaContainer
              src="/assets/lufi/lufi-interface-examples.png"
              alt="An authentic LUFI screen showing the You & LUFI relationship view, with a qualitative description of the relationship rather than a numbered stage."
              width={570}
              height={347}
              sizes="(min-width: 480px) 480px, 100vw"
              caption="An authentic LUFI screen demonstrating the evolved visual system in real product use."
            />
          </div>
        </Container>
      </Section>

      {/* 07 — LUFI Avatar System */}
      <Section id="avatar-system" spacing="lg">
        <Container>
          <div className={styles.proseWidth}>
            <SectionHeader eyebrow="07 — LUFI Avatar System" title="A warm presence, not just an interface." />
            <EditorialText>
              <p className={styles.frameworkNote}>
                Two things are true about LUFI&rsquo;s avatar at once: a fully-realised character
                system was designed for it, and the current production component in the archived
                codebase takes a deliberately different approach. This section documents the
                character system as a design direction — what it explored and why — before
                &ldquo;Expressiveness vs Interpretability&rdquo; below explains how the two relate.
              </p>
            </EditorialText>

            <h3 className={styles.subsectionHeading}>Character design intent</h3>
            <EditorialText>
              <p>
                LUFI was designed as a small, warm presence rather than a traditional AI interface.
                The character needed to feel immediately approachable, expressive and emotionally
                inviting — something users could grow fond of and enjoy returning to, not simply a
                mascot placed on top of a chatbot.
              </p>
              <p>
                Soft proportions and a gentle silhouette make LUFI feel safe, curious and
                companionable. Eyes and mouth create an expressive vocabulary for reacting to the
                tone and context of an interaction, while the flame acts as the emotional heart of
                the character: a visual metaphor for warmth, presence and the comfort of
                companionship.
              </p>
              <p>
                The goal was not to make LUFI human. It was to create a distinctive being with
                enough personality to feel alive, while remaining simple, recognisable and uniquely
                its own.
              </p>
            </EditorialText>

            <Quote>
              LUFI should feel less like software you open, and more like a presence you are happy
              to find waiting for you.
            </Quote>

            <h3 className={styles.subsectionHeading}>Character concept pillars</h3>
          </div>
          <div className={styles.pillarGrid}>
            <div>
              <p className={styles.pillarLabel}>Soft body</p>
              <p className={styles.pillarBody}>Approachable, safe and instantly recognisable.</p>
            </div>
            <div>
              <p className={styles.pillarLabel}>Eyes + mouth</p>
              <p className={styles.pillarBody}>
                Readable expressions that support interaction without relying on text alone.
              </p>
            </div>
            <div>
              <p className={styles.pillarLabel}>Flame</p>
              <p className={styles.pillarBody}>
                Warmth, presence and companionship — with colour and intensity carrying state.
              </p>
            </div>
            <div>
              <p className={styles.pillarLabel}>Combined expression</p>
              <p className={styles.pillarBody}>
                A modular vocabulary that lets the character react while preserving one identity.
              </p>
            </div>
          </div>

          <div className={styles.proseWidth}>
            <h3 className={styles.subsectionHeading}>Core body</h3>
            <EditorialText>
              <p>
                The body establishes LUFI&rsquo;s recognisable silhouette. Expression changes around
                this constant rather than requiring a new character each time. Two versions of the
                base exist in the project files; the surrounding eye, mouth and flame studies
                explore a modular expression vocabulary around this core form.
              </p>
            </EditorialText>
          </div>
          <div className={styles.specimenGrid}>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/base/body_base_v1.png"
                alt="LUFI base body illustration, version 1 — the character's neutral, recognisable silhouette."
                width={840}
                height={1456}
                sizes="(min-width: 640px) 200px, 45vw"
              />
              <p className={styles.specimenLabel}>Body — v1</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/base/body_base_v2.png"
                alt="LUFI base body illustration, version 2."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 200px, 45vw"
              />
              <p className={styles.specimenLabel}>Body — v2</p>
            </div>
          </div>

          <div className={styles.proseWidth}>
            <h3 className={styles.subsectionHeading}>Eyes</h3>
            <EditorialText>
              <p>
                Eyes carry emotional state and attention while preserving the same underlying
                identity.
              </p>
            </EditorialText>
          </div>
          <div className={styles.specimenGrid}>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/eyes/eye_left_open_png.png"
                alt="LUFI eyes, left-open state."
                width={784}
                height={1344}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Left — open</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/eyes/eye_left_closed_png.png"
                alt="LUFI eyes, left-closed state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Left — closed</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/eyes/eye_right_open_png.png"
                alt="LUFI eyes, right-open state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Right — open</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/eyes/eye_right_closed_png.png"
                alt="LUFI eyes, right-closed state."
                width={784}
                height={1344}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Right — closed</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/eyes/eye_shy.png"
                alt="LUFI eyes, shy state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Shy</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/eyes/eye_proud.png"
                alt="LUFI eyes, proud state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Proud</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/eyes/eye_flattered.png"
                alt="LUFI eyes, flattered state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Flattered</p>
            </div>
          </div>

          <div className={styles.proseWidth}>
            <h3 className={styles.subsectionHeading}>Mouths</h3>
            <EditorialText>
              <p>
                Mouth states extend expression and speaking behaviour without redrawing
                LUFI&rsquo;s body.
              </p>
            </EditorialText>
          </div>
          <div className={styles.specimenGrid}>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/mouths/mouth_shy.png"
                alt="LUFI mouth, shy state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Shy</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/mouths/mouth_shy_talk_1.png"
                alt="LUFI mouth, shy state, talking."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Shy — talking</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/mouths/mouth_proud.png"
                alt="LUFI mouth, proud state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Proud</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/mouths/mouth_proud_talk_1.png"
                alt="LUFI mouth, proud state, talking."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Proud — talking</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/mouths/mouth_flattered.png"
                alt="LUFI mouth, flattered state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Flattered</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/mouths/mouth_flattered_talk_2.png"
                alt="LUFI mouth, flattered state, talking."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Flattered — talking</p>
            </div>
          </div>

          <div className={styles.proseWidth}>
            <h3 className={styles.subsectionHeading}>Flame states</h3>
            <EditorialText>
              <p>
                The flame is a semantic layer: colour and state are intended to carry meaning
                rather than act as decoration alone. Within the character-avatar direction, it
                represents warmth, presence, companionship and emotional or system state.
              </p>
            </EditorialText>
          </div>
          <div className={styles.specimenGrid}>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/flames/fire_idle_png.png"
                alt="LUFI flame, idle state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Idle</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/flames/fire_shy.png"
                alt="LUFI flame, shy state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Shy</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/flames/fire_proud.png"
                alt="LUFI flame, proud state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Proud</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/flames/fire_flattered.png"
                alt="LUFI flame, flattered state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Flattered</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/flames/fire_celebrating.png"
                alt="LUFI flame, celebrating state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Celebrating</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/flames/fire_cosmic.png"
                alt="LUFI flame, cosmic state."
                width={1036}
                height={1036}
                sizes="(min-width: 640px) 140px, 30vw"
              />
              <p className={styles.specimenLabel}>Cosmic</p>
            </div>
          </div>

          <div className={styles.proseWidth}>
            <h3 className={styles.subsectionHeading}>Expression matrix</h3>
            <EditorialText>
              <p>
                The character system composes an expression from four independent layers, each
                carrying a distinct part of the state:
              </p>
            </EditorialText>
          </div>
          <div className={styles.matrixFlow}>
            <span className={styles.matrixStep}>Body</span>
            <span className={styles.matrixArrow} aria-hidden="true">
              →
            </span>
            <span className={styles.matrixStep}>Eyes</span>
            <span className={styles.matrixArrow} aria-hidden="true">
              →
            </span>
            <span className={styles.matrixStep}>Mouth</span>
            <span className={styles.matrixArrow} aria-hidden="true">
              →
            </span>
            <span className={styles.matrixStep}>Flame</span>
            <span className={styles.matrixArrow} aria-hidden="true">
              →
            </span>
            <span className={styles.matrixStep}>Expression</span>
          </div>
          <div className={styles.proseWidth}>
            <p className={styles.matrixCaveat}>
              This is a conceptual explanation of the modular design system, not a layered visual
              composite — the archived source files don&rsquo;t contain reliable transparency to
              combine that way.
            </p>
          </div>

          <div className={styles.proseWidth}>
            <h3 className={styles.subsectionHeading}>Final emotional states</h3>
            <EditorialText>
              <p>
                Composed final images exist in the project files for five states. Shy, proud and
                flattered exist as individual eye, mouth and flame layers (shown above), but have
                no composed final image on file — they are not shown here as composites.
              </p>
            </EditorialText>
          </div>
          <div className={styles.expressionGrid}>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/expressions/lufiavataridle.png"
                alt="LUFI composed final expression — idle."
                width={392}
                height={532}
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 30vw, 45vw"
              />
              <p className={styles.specimenLabel}>Idle</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/expressions/lufiavatarhappy.png"
                alt="LUFI composed final expression — happy."
                width={756}
                height={1008}
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 30vw, 45vw"
              />
              <p className={styles.specimenLabel}>Happy</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/expressions/lufiavatarcurious.png"
                alt="LUFI composed final expression — curious."
                width={756}
                height={1008}
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 30vw, 45vw"
              />
              <p className={styles.specimenLabel}>Curious</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/expressions/lufiavatarthinking.png"
                alt="LUFI composed final expression — thinking."
                width={756}
                height={1008}
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 30vw, 45vw"
              />
              <p className={styles.specimenLabel}>Thinking</p>
            </div>
            <div className={styles.specimenItem}>
              <MediaContainer
                src="/assets/lufi/avatar/expressions/lufiavatartired.png"
                alt="LUFI composed final expression — tired."
                width={756}
                height={1008}
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 30vw, 45vw"
              />
              <p className={styles.specimenLabel}>Tired</p>
            </div>
          </div>

          <div className={styles.proseWidth}>
            <h3 className={styles.subsectionHeading}>Rules / usage</h3>
            <div className={styles.principleList}>
              <div>
                <p className={styles.principleLabel}>Keep the body recognisable</p>
                <p className={styles.principleBody}>Treat the base form as the visual constant.</p>
              </div>
              <div>
                <p className={styles.principleLabel}>Use layers with purpose</p>
                <p className={styles.principleBody}>
                  Eyes, mouth and flame should each communicate a distinct part of state.
                </p>
              </div>
              <div>
                <p className={styles.principleLabel}>Extend, don&rsquo;t redraw</p>
                <p className={styles.principleBody}>
                  Reuse the vocabulary before creating new geometry.
                </p>
              </div>
              <div>
                <p className={styles.principleLabel}>Don&rsquo;t overclaim emotion</p>
                <p className={styles.principleBody}>
                  Expression should support interaction without implying emotional certainty the AI
                  cannot justify.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.proseWidth}>
            <h3 className={styles.subsectionHeading}>Expressiveness vs interpretability</h3>
            <EditorialText>
              <p>
                During development, two avatar directions emerged. The layered character system
                explored explicit emotional expression, while a parallel implementation deliberately
                removed facial cues to reduce the risk of users reading emotions the system could
                not reliably claim to feel.
              </p>
              <p>This exposed a central product-design question:</p>
            </EditorialText>
            <Quote>
              How expressive should an AI companion be without overstating its emotional state?
            </Quote>
          </div>
          <div className={styles.evolutionGrid}>
            <div>
              <p className={styles.evolutionLabel}>Layered character direction</p>
              <p className={styles.evolutionBody}>
                Body + eyes + mouth + flame. Explores explicit expression through a reusable
                visual vocabulary, strengthening recognition and extensibility.
              </p>
            </div>
            <div>
              <p className={styles.evolutionLabel}>Abstract production direction</p>
              <p className={styles.evolutionBody}>
                Breathing orb, no face — the direction represented by the production component
                evidence in the archived codebase. It deliberately removes facial cues to reduce
                the risk of users reading emotions the system could not reliably claim to feel.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 08 — Designing the First Meeting */}
      <Section id="first-meeting" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="08 — Designing the First Meeting"
            title="The relationship begins with the user's voice, not LUFI's."
          />
          <EditorialText>
            <p>
              The first interaction establishes one of LUFI&rsquo;s most important boundaries:
              LUFI does not manufacture familiarity before the user has given it anything to
              respond to. The user speaks first.
            </p>
            <p>
              Rather than opening with a scripted declaration of personality, intimacy or assumed
              context, First Meeting begins with an empty conversational state and waits for the
              user to introduce themselves in their own words. This gives the user agency over how
              the relationship begins, and prevents the product from performing familiarity it has
              not earned.
            </p>
            <p>
              The four exchanges shown in this sequence are demonstration length only — not a
              relationship threshold, a bonding requirement, a fixed onboarding sequence, a signal
              that four messages unlock familiarity, or a production trigger specification. There
              is no &ldquo;Step 1 of 4&rdquo; here by design.
            </p>
          </EditorialText>

          <div className={styles.sequenceGrid}>
            <MediaContainer
              src="/assets/lufi/lufi-first-meeting-empty.png"
              alt="First Meeting screen with an empty message composer and no prior messages, inviting the user to speak first."
              width={390}
              height={844}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              caption="User speaks first — an empty state, not a scripted greeting."
            />
            <MediaContainer
              src="/assets/lufi/lufi-first-meeting-typed.png"
              alt="First Meeting screen with the user's typed introduction 'Hi LUFI, I'm Mara.' in the composer."
              width={390}
              height={844}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              caption="Ordinary conversational input — not a questionnaire-style onboarding form."
            />
            <MediaContainer
              src="/assets/lufi/lufi-first-meeting-close.png"
              alt="Later in the same conversation, LUFI closes with 'I'm glad we got to talk. I'll be here when you want to pick this up again,' rather than a system completion message."
              width={390}
              height={844}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              caption="The conversation develops naturally over several exchanges. This close is a demonstration-length choice for the prototype, not a canonical product threshold or a &ldquo;setup complete&rdquo; screen."
            />
          </div>

          <div className={styles.homeEvidence}>
            <MediaContainer
              src="/assets/lufi/lufi-new-user-home.png"
              alt="Home screen reading 'Good to have met you, Mara,' with Chat and Profile entries, and no You & LUFI relationship card."
              width={390}
              height={844}
              sizes="(min-width: 640px) 360px, 100vw"
              caption="Arrival at Home after First Meeting, without fabricated prior continuity. There is deliberately no You & LUFI card yet — there's nothing qualitative to describe after one conversation, and Home does not treat the user as though a relationship stage has advanced."
            />
          </div>

          <div className={styles.decisionBlock}>
            <p className={styles.decisionLabel}>Design decision</p>
            <h3 className={styles.decisionTitle}>Start with disclosure, not extraction.</h3>
            <EditorialText>
              <p>
                First Meeting is conversational rather than form-driven. The product does not ask
                the user to complete a profile before speaking, and it does not require personal
                disclosure as a prerequisite for relationship progression.
              </p>
            </EditorialText>
            <p className={styles.avoidsLabel}>What this avoids</p>
            <ul className={styles.avoidsList}>
              <li>Artificial familiarity</li>
              <li>Disclosure-as-reward</li>
              <li>Forced onboarding intimacy</li>
              <li>Visible relationship scoring</li>
              <li>A system-defined &ldquo;correct&rdquo; way to begin</li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* 09 — Designing Memory & User Control */}
      <Section id="memory-control" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="09 — Designing Memory & User Control"
            title="Memory should create continuity without becoming invisible power."
          />
          <EditorialText>
            <p>
              Memory is one of the capabilities that makes LUFI feel continuous rather than
              session-based. But remembering creates a trust problem: if the system can retain
              information about a person, the person needs meaningful ways to understand and
              control what is being remembered. The design therefore treats Memory as a
              user-visible product surface rather than invisible model behavior.
            </p>
          </EditorialText>

          <ul className={styles.memoryModelList}>
            <li className={styles.memoryModelItem}>Remember</li>
            <li className={styles.memoryModelItem}>Inspect</li>
            <li className={styles.memoryModelItem}>Understand</li>
            <li className={styles.memoryModelItem}>Correct</li>
            <li className={styles.memoryModelItem}>Forget</li>
          </ul>
          <EditorialText>
            <p>
              These are capabilities available around remembered information — there is no Step
              1–5, no required order, no arrow implying a mandatory sequence, no completion and no
              final stage.
            </p>
          </EditorialText>

          <div className={styles.memoryFocal}>
            <MediaContainer
              src="/assets/lufi/lufi-memory-receipt.png"
              alt="Chat screen with a gold-bordered 'RECALLED · your trip to Lisbon' receipt appearing beneath LUFI's response."
              width={390}
              height={844}
              sizes="(min-width: 640px) 360px, 100vw"
              caption="Memory Receipt makes recall contextual — it appears alongside the relevant response rather than as a persistent surveillance-style indicator across Chat. It gives the user a route from noticing LUFI remembered something to inspecting what that means. The receipt is contextual, never persistent."
            />
          </div>

          <h3 className={styles.subsectionHeading}>Inspect, then Correct</h3>
          <EditorialText>
            <p>
              The Memory Detail screen shows the remembered information, available
              source/provenance language where supported, and Correct and Forget as user
              controls — not sequential stages. The user does not have to correct something
              before being allowed to forget it. Correction turns memory from a hidden system
              assertion into something the user can actively amend; this prototype does not claim
              backend correction architecture beyond what it demonstrates.
            </p>
          </EditorialText>
          <div className={styles.memoryPairGrid}>
            <MediaContainer
              src="/assets/lufi/lufi-memory-detail.png"
              alt="Memory Detail screen for 'Your trip to Lisbon,' showing the remembered text, its source, and separate Correct and Forget buttons."
              width={390}
              height={844}
              sizes="(min-width: 640px) 300px, 100vw"
              caption="Inspect — Correct and Forget sit side by side, available in any order."
            />
            <MediaContainer
              src="/assets/lufi/lufi-memory-correct.png"
              alt="Edit-this-memory screen with an editable text field showing the memory amended to 'Porto,' and a Save Correction button."
              width={390}
              height={844}
              sizes="(min-width: 640px) 300px, 100vw"
              caption="Correct — the user actively amends what LUFI believes, rather than the system holding an unquestionable assertion."
            />
          </div>

          <h3 className={styles.subsectionHeading}>Forget</h3>
          <EditorialText>
            <p>
              Forgetting is deliberately destructive but not casual. An explicit confirmation step
              protects against accidental deletion, and forget/delete is never a single-tap
              irreversible action in this design. After confirmation, the interface acknowledges
              the action plainly rather than celebrating it or attaching relationship
              consequences.
            </p>
          </EditorialText>
          <div className={styles.memoryPairGrid}>
            <MediaContainer
              src="/assets/lufi/lufi-memory-forget-confirm.png"
              alt="Confirmation dialog asking 'Forget your trip to Lisbon?' with Cancel and a destructive-styled Forget button."
              width={390}
              height={844}
              sizes="(min-width: 640px) 300px, 100vw"
              caption="An explicit confirmation step — not a single-tap deletion."
            />
            <MediaContainer
              src="/assets/lufi/lufi-memory-forgotten.png"
              alt="Plain confirmation screen reading 'Forgotten,' stating LUFI no longer remembers this and the user is welcome to share it again."
              width={390}
              height={844}
              sizes="(min-width: 640px) 300px, 100vw"
              caption="The action is acknowledged plainly — no celebration, no relationship consequence attached."
            />
          </div>

          <h3 className={styles.subsectionHeading}>
            When the system cannot prove where a memory came from, it should not pretend that it
            can.
          </h3>
          <div className={styles.memoryFocal}>
            <MediaContainer
              src="/assets/lufi/lufi-memory-provenance-fallback.png"
              alt="Memory Detail screen for 'Your preference for quiet mornings' with a source field reading 'Source not traceable — an honest fallback, not a fabricated attribution.'"
              width={390}
              height={844}
              sizes="(min-width: 640px) 360px, 100vw"
              caption="The fallback state deliberately avoids fabricated attribution — instead of inventing a source, the interface states that the source is not traceable. Full memory-provenance capability remains engineering dependent; this approved honest fallback pattern in the prototype is not proof that the production backend already supports full provenance."
            />
          </div>

          <div className={styles.principleList}>
            <div>
              <p className={styles.principleLabel}>Visible</p>
              <p className={styles.principleBody}>
                Remembering should be perceptible when it matters.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>Inspectable</p>
              <p className={styles.principleBody}>
                Users need a way to see what LUFI believes it remembers.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>Correctable</p>
              <p className={styles.principleBody}>
                Remembered information must not become an unquestionable system assertion.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>Forgettable</p>
              <p className={styles.principleBody}>Users need meaningful deletion control.</p>
            </div>
            <div>
              <p className={styles.principleLabel}>Honest about source</p>
              <p className={styles.principleBody}>
                When provenance is unavailable, uncertainty is preferable to fabricated certainty.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10 — Designing Relationship Without Gamification */}
      <Section id="relationship-without-gamification" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="10 — Designing Relationship Without Gamification"
            title={
              <>
                Describe the relationship.
                <br />
                Don&rsquo;t turn it into a score.
              </>
            }
          />
          <EditorialText>
            <p>
              LUFI needed a way to acknowledge that repeated interaction can create greater
              familiarity without turning that familiarity into a game mechanic. The rejected
              direction was easy to imagine: numbers, Bond scores, progress bars, stages, unlock
              language, next-level teasers, streaks, or time-based relationship milestones. Those
              mechanisms would make an invisible system judgment feel objective and encourage the
              user to optimize behavior around a relationship score.
            </p>
            <p>
              The corrected direction is deliberately quieter: describe what feels true now
              without quantifying it and without promising what comes next.
            </p>
          </EditorialText>

          <div className={styles.memoryFocal}>
            <MediaContainer
              src="/assets/lufi/lufi-relationship-qualitative.png"
              alt="You & LUFI screen reading 'You talk easily by now,' with a description of shared context rather than any numeric relationship indicator."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 360px, 100vw"
              caption="The authentic approved You & LUFI screen — no number, percentage, Bond counter, progress bar, stage name or next-stage teaser. The present relationship is described in ordinary language, not measured."
            />
          </div>

          <EditorialText>
            <p>
              The broader design system uses a qualitative vocabulary rather than a ladder:
            </p>
          </EditorialText>
          <ul className={styles.vocabList}>
            <li className={styles.vocabItem}>New Acquaintance</li>
            <li className={styles.vocabItem}>Familiar Presence</li>
            <li className={styles.vocabItem}>Trusted Companion</li>
            <li className={styles.vocabItem}>Deep Companion</li>
          </ul>
          <EditorialText>
            <p>
              These are not rendered as 1 → 2 → 3 → 4, not arranged as a maturity ladder, and do
              not imply a required sequence or that a user is currently on one numbered stage —
              treat them as an unordered qualitative vocabulary.
            </p>
          </EditorialText>

          <div className={styles.decisionBlock}>
            <h3 className={styles.decisionTitle}>Absence is not failure.</h3>
            <EditorialText>
              <p>LUFI&rsquo;s relationship model does not punish the user for leaving.</p>
            </EditorialText>
            <ul className={styles.avoidsList}>
              <li>Streak loss</li>
              <li>Relationship decay</li>
              <li>Guilt copy</li>
              <li>Missed-day penalty</li>
              <li>&ldquo;LUFI missed you&rdquo; pressure</li>
              <li>Artificial urgency to return</li>
            </ul>
            <EditorialText>
              <p>
                A companion can recognize continuity when the user returns without treating
                absence as a failure state.
              </p>
            </EditorialText>
          </div>

          <EditorialText>
            <p>
              Relationship transitions may be acknowledged with restrained, pleasant recognition
              when appropriate, but the acknowledgement must not resemble achievement unlocking,
              XP gain, a level-up animation, reward currency, scarcity, or a disclosure reward.
              The purpose is recognition, not reinforcement.
            </p>
          </EditorialText>

          <div className={styles.synthesisBlock}>
            <ProjectMetadata
              rows={[
                { label: 'Qualitative', value: "Describe, don't score." },
                { label: 'Non-linear', value: 'No visible ladder or next-stage affordance.' },
                { label: 'Non-punitive', value: 'Absence causes no decay.' },
                {
                  label: 'Non-transactional',
                  value: 'Affection and relationship progression are not purchased.',
                },
                {
                  label: 'User-led',
                  value: 'The relationship develops through interaction rather than system pressure.',
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* 11 — Designing Voice */}
      <Section id="voice" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="11 — Designing Voice"
            title="Voice should feel conversational before it feels feature-rich."
          />
          <EditorialText>
            <p>
              SpeakScreen explores a live voice experience designed around conversation rather
              than controls. The target interaction minimizes button dependency: the user speaks
              naturally, LUFI responds, and ordinary interruption should happen by speaking — not
              by hunting for a Stop control. But voice introduces engineering uncertainty that
              visual design alone cannot resolve. The case study therefore separates the intended
              interaction model from the capabilities that still require engineering validation.
            </p>
          </EditorialText>
          <Tag>Phase 6 approved — not yet shipped</Tag>
          <EditorialText>
            <p>
              SpeakScreen did not exist in the shipped product represented by this phase of the
              canonical case study. The screens below are prototype/design evidence, not
              production screenshots.
            </p>
          </EditorialText>

          <div className={styles.memoryFocal}>
            <MediaContainer
              src="/assets/lufi/lufi-voice-ready.png"
              alt="SpeakScreen Ready state reading 'Ready when you are,' with only Switch to Chat and End Conversation visible — no speak button."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 360px, 100vw"
              caption="Prototype evidence of the low-control Ready state — the target is a voice experience that doesn't require pressing a button for every conversational turn. Switch to Chat and End Conversation remain visible as persistent escape routes."
            />
          </div>

          <h3 className={styles.subsectionHeading}>Interrupt by speaking.</h3>
          <EditorialText>
            <p>
              During LUFI&rsquo;s speaking state, the prototype introduces a Stop control — but
              Stop was deliberately reclassified as a fallback/accessibility control, not the
              intended primary interruption mechanism. The target ordinary interruption behavior
              is barge-in: the user talks over LUFI, LUFI stops speaking, and listening resumes.
              This prototype demonstrates that interaction intention; it does not prove production
              audio interruption already works.
            </p>
          </EditorialText>
          <div className={styles.memoryPairGrid}>
            <MediaContainer
              src="/assets/lufi/lufi-voice-speaking.png"
              alt="LUFI Speaking state with LUFI's response text visible and a Stop button above Switch to Chat and End Conversation."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 300px, 100vw"
              caption="LUFI Speaking — Stop is present as a fallback/accessibility control, not the intended primary way to interrupt."
            />
            <MediaContainer
              src="/assets/lufi/lufi-voice-barge-in.png"
              alt="Listening state reading 'Go ahead — I'm listening,' shown resuming after the user speaks over LUFI."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 300px, 100vw"
              caption="Barge-in expresses the intended interruption model — the user talks over LUFI and listening resumes. Barge-in cancellation remains engineering verification required; this is not proof production audio cancellation already works."
            />
          </div>

          <div className={styles.memoryFocal}>
            <MediaContainer
              src="/assets/lufi/lufi-voice-permission.png"
              alt="Microphone access screen explaining LUFI needs microphone access, with Open Settings and Switch to Chat options."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 360px, 100vw"
              caption="Voice cannot be designed only for its ideal state. The permission state provides an explicit route toward device settings and preserves Switch to Chat as an alternative modality — this screen does not claim operating-system behavior beyond what it shows."
            />
          </div>

          <h3 className={styles.subsectionHeading}>
            Designed around named uncertainty, not hidden uncertainty.
          </h3>
          <div className={styles.principleList}>
            <div>
              <p className={styles.principleLabel}>Barge-in cancellation</p>
              <p className={styles.principleBody}>Engineering verification required.</p>
            </div>
            <div>
              <p className={styles.principleLabel}>End-of-turn detection</p>
              <p className={styles.principleBody}>Engineering verification required.</p>
            </div>
            <div>
              <p className={styles.principleLabel}>Audio-session behavior</p>
              <p className={styles.principleBody}>Engineering verification required.</p>
            </div>
            <div>
              <p className={styles.principleLabel}>Audio routing</p>
              <p className={styles.principleBody}>Engineering verification required.</p>
            </div>
            <div>
              <p className={styles.principleLabel}>Permission-revocation detection</p>
              <p className={styles.principleBody}>Engineering verification required.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 12 — Unified Profile & User Control */}
      <Section id="profile-control" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="12 — Unified Profile & User Control"
            title="Control should live somewhere users can actually find it."
          />
          <EditorialText>
            <p>
              As LUFI expanded, controls for account, relationship, Memory, privacy, preferences
              and support risked becoming fragmented across separate surfaces. The redesign
              consolidates those responsibilities into a Unified Profile Hub. The goal was not
              simply to create another settings screen — it was to give users a predictable place
              to understand and control the parts of LUFI that affect their account, their
              relationship experience, remembered information, privacy and data, preferences and
              support.
            </p>
            <p>
              The architecture was deliberately kept shallow, with a target depth of no more than
              two levels from the Hub in the approved prototype. This navigation architecture is
              a design target, not a claim of production validation.
            </p>
          </EditorialText>

          <div className={styles.memoryFocal}>
            <MediaContainer
              src="/assets/lufi/lufi-profile-hub.png"
              alt="Profile Hub for Mara, showing the Free plan with the line 'Relationship access is never tied to your plan,' above four sections: Account & Plan, Conversation & Relationship, Privacy & Data, and Preferences & Support."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 360px, 100vw"
              caption="The Hub separates control into four understandable areas. &ldquo;Relationship access is never tied to your plan&rdquo; is not marketing copy here — it's a product-governance rule expressed directly in the interface."
            />
          </div>

          <h3 className={styles.subsectionHeading}>Privacy &amp; Data, Preferences &amp; Support</h3>
          <EditorialText>
            <p>
              Privacy &amp; Data brings remembered information and account-data controls into the
              same discoverable area, with routes toward remembered information, how data is
              used, managing account data, and deleting the account. This demonstrates information
              architecture and intended user control — not legal or technical implementation; no
              encryption, retention, GDPR-compliance or backend claims are made here beyond what
              the screen itself shows.
            </p>
            <p>
              Preferences &amp; Support includes language and voice preferences alongside the
              Morning Moment preference, approved as off by default and opt-in only. Its own
              explanatory copy makes clear the preference only affects proactive messages and
              never prevents the user from starting a conversation themselves — the same
              user-controlled-proactive-behavior principle from earlier in this case study. Morning
              Moment is not described here as shipped functionality.
            </p>
          </EditorialText>
          <div className={styles.memoryPairGrid}>
            <MediaContainer
              src="/assets/lufi/lufi-privacy-data.png"
              alt="Privacy & Data screen with sections for What LUFI Remembers, Your Data (how data is used, manage account data), and a red Delete account row under Account."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 300px, 100vw"
              caption="Remembered information and account-data controls, discoverable in one place."
            />
            <MediaContainer
              src="/assets/lufi/lufi-preferences-support.png"
              alt="Preferences & Support screen with Language set to English, a locked Voice preferences row, a Morning Moment toggle switched off, an explanatory note, and a Help & support row."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 300px, 100vw"
              caption="Morning Moment ships off by default and opt-in only — proactive behavior stays user-controlled."
            />
          </div>

          <div className={styles.decisionBlock}>
            <h3 className={styles.decisionTitle}>Destructive actions need deliberate friction.</h3>
            <EditorialText>
              <p>
                The prototype does not make account deletion an accidental one-tap action. The
                supplied screen represents a request-for-review flow: the user explicitly requests
                deletion, the action requires confirmation, and the interface explains that
                review/follow-up occurs. This is prototype interaction evidence, not a claim about
                actual production deletion processing, timing or legal compliance.
              </p>
            </EditorialText>
            <MediaContainer
              src="/assets/lufi/lufi-delete-account-request.png"
              alt="Confirmation dialog reading 'Request account deletion?' explaining the request will be reviewed and followed up by email, with Cancel and a destructive-styled Request deletion button."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 320px, 100vw"
              caption="An explicit request-for-review step, not an accidental one-tap deletion."
            />
          </div>

          <div className={styles.synthesisBlock}>
            <ProjectMetadata
              rows={[
                { label: 'Discoverable', value: 'Controls have a predictable home.' },
                {
                  label: 'Shallow',
                  value: 'The approved architecture targets no more than two levels from the Hub.',
                },
                {
                  label: 'Reversible where possible',
                  value: 'Preferences can be changed without relationship consequences.',
                },
                {
                  label: 'Deliberate when destructive',
                  value: 'High-impact actions require explicit intent.',
                },
                {
                  label: 'User-controlled',
                  value:
                    'Proactive behavior, Memory and account controls are not hidden behind conversational behavior.',
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* 13 — Ethical Monetization */}
      <Section id="ethical-monetization" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="13 — Ethical Monetization"
            title={
              <>
                Monetize capability.
                <br />
                Never monetize affection.
              </>
            }
          />
          <EditorialText>
            <p>
              An AI companion creates an unusual monetization risk. If relationship depth,
              warmth, recognition or progression becomes a paid feature, the business model can
              turn emotional attachment into leverage. LUFI&rsquo;s monetization principle draws a
              hard boundary: subscription may change capability and compute access. It must not
              determine whether the user is allowed to build a meaningful relationship with LUFI.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>The Ethical Monetization Test</h3>
          <EditorialText>
            <p>A monetization decision fails if paying changes access to affection, warmth, trust, recognition, relationship progression, or privacy and user control. A monetization decision may differentiate usage/compute budget, modality, voice access, convenience, visual richness, or response length/contextual richness where tied to real inference cost — this is the governing product principle, not a claim that every listed differentiation is already shipped.</p>
          </EditorialText>

          <div className={styles.memoryFocal}>
            <MediaContainer
              src="/assets/lufi/lufi-plans.png"
              alt="Plans screen headed 'Every plan can build the same relationship with LUFI,' comparing Free and Premium: both show Text conversation Included and Relationship & Memory Full access; Voice conversation is Not included on Free and Included on Premium."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 360px, 100vw"
              caption="Relationship & Memory read identically across both cards — that equality is intentional. Premium is not a deeper emotional tier."
            />
          </div>
          <EditorialText>
            <p>
              Gold marks tier identity only — it must never become a visual ranking signal that
              pressures upgrade. The Ethical Monetization Test previously caught a design
              direction where gold risked becoming upgrade pressure; the corrected direction
              pulls gold back from a filled, persuasive call-to-action toward tier identity.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Gate the capability, not the relationship.</h3>
          <EditorialText>
            <p>
              Voice is an example of an acceptable plan distinction because the gate applies to a
              compute/modality capability. The screen preserves Continue in Chat, so the
              relationship itself does not become inaccessible when Voice is unavailable on the
              current plan — this is not proof of current production pricing or entitlement
              infrastructure.
            </p>
          </EditorialText>
          <div className={styles.memoryPairGrid}>
            <MediaContainer
              src="/assets/lufi/lufi-premium-voice-gate.png"
              alt="Voice screen explaining voice conversations are available with Premium, with a View plans link and a Continue in Chat option."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 300px, 100vw"
              caption="The gate blocks a capability (Voice); Continue in Chat keeps the relationship itself reachable."
            />
            <MediaContainer
              src="/assets/lufi/lufi-usage-availability.png"
              alt="Chat screen stating the user has reached their current Free usage allowance, with options to View plans or Try again later."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 300px, 100vw"
              caption="Free usage may be limited because inference has a real cost — but the copy says &ldquo;try again later,&rdquo; not a fabricated reset time, countdown or relationship-decay pressure."
            />
          </div>

          <div className={styles.memoryPairGrid}>
            <div>
              <p className={styles.avoidsLabel}>Can change</p>
              <ul className={styles.avoidsList}>
                <li>Usage / compute allowance</li>
                <li>Voice / modality access</li>
                <li>Convenience</li>
                <li>Visual richness</li>
                <li>Response/context budget where justified by inference cost</li>
              </ul>
            </div>
            <div>
              <p className={styles.avoidsLabel}>Must not change</p>
              <ul className={styles.avoidsList}>
                <li>Affection</li>
                <li>Warmth</li>
                <li>Trust</li>
                <li>Recognition</li>
                <li>Relationship progression</li>
                <li>Privacy / user control</li>
              </ul>
            </div>
          </div>

          <div className={styles.decisionBlock}>
            <h3 className={styles.decisionTitle}>No pay-to-bond.</h3>
            <EditorialText>
              <p>
                A paid plan may make LUFI more capable. It must not make LUFI love, trust,
                remember or value the user more.
              </p>
            </EditorialText>
          </div>
        </Container>
      </Section>

      {/* 14 — System Thinking & Edge Cases */}
      <Section id="system-thinking" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="14 — System Thinking & Edge Cases"
            title="The product has to remain coherent when the ideal path breaks."
          />
          <EditorialText>
            <p>
              Designing the primary conversation was only part of the problem. LUFI also needed
              rules for what happens when a capability is unavailable, permission disappears, a
              request fails, Memory has nothing to show, usage availability changes, a destructive
              action needs confirmation, or the system cannot honestly prove something. The
              objective was not to design isolated error screens — it was to preserve the same
              product principles when the system is under constraint.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>LUFI voice vs. system voice</h3>
          <EditorialText>
            <p>
              A system failure should not masquerade as LUFI&rsquo;s emotion or personality. The
              product distinguishes what LUFI is saying from what the interface/system is
              reporting.
            </p>
          </EditorialText>
          <div className={styles.memoryPairGrid}>
            <div>
              <p className={styles.principleLabel}>LUFI voice</p>
              <p className={styles.principleBody}>
                Warm, conversational and avatar-attached. Used for ordinary conversation.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>System / UI voice</p>
              <p className={styles.principleBody}>
                Neutral and not avatar-attached. Reserved for errors, destructive confirmations
                and system-level information.
              </p>
            </div>
          </div>

          <EditorialText>
            <p>
              Three edge states demonstrate the same product principles holding under constraint:
              a capability that&rsquo;s temporarily unavailable, a generic failure, and an
              honestly empty state.
            </p>
          </EditorialText>
          <div className={styles.sequenceGrid}>
            <MediaContainer
              src="/assets/lufi/lufi-edge-voice-unavailable.png"
              alt="Voice screen stating voice conversations aren't available right now and that this isn't related to the user's plan, with Try again later and Continue in Chat."
              width={780}
              height={1688}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              caption="Temporary capability failure, separated from subscription status — the relationship stays reachable through Chat."
            />
            <MediaContainer
              src="/assets/lufi/lufi-edge-system-error.png"
              alt="Chat screen with neutral system copy 'Something went wrong. We couldn't complete that request,' and a Try again button."
              width={780}
              height={1688}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              caption="Neutral system-voice copy — no LUFI sadness, guilt, or fabricated certainty about what failed."
            />
            <MediaContainer
              src="/assets/lufi/lufi-edge-memory-empty.png"
              alt="Memory screen reading 'No remembered information yet. Memory fills in naturally as you talk. There's nothing you need to do.'"
              width={780}
              height={1688}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              caption="An empty state that doesn't pressure disclosure — no &ldquo;tell LUFI more,&rdquo; completion percentage, or memory goal."
            />
          </div>

          <div className={styles.principleList}>
            <div>
              <p className={styles.principleLabel}>Graceful degradation</p>
              <p className={styles.principleBody}>
                When a capability fails, preserve another usable route where possible.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>Honest uncertainty</p>
              <p className={styles.principleBody}>Do not invent causes, provenance or timing.</p>
            </div>
            <div>
              <p className={styles.principleLabel}>Voice separation</p>
              <p className={styles.principleBody}>System failure is not LUFI emotion.</p>
            </div>
            <div>
              <p className={styles.principleLabel}>Safe destructive actions</p>
              <p className={styles.principleBody}>
                High-impact actions require explicit confirmation.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>No disclosure pressure</p>
              <p className={styles.principleBody}>Empty Memory is allowed to remain empty.</p>
            </div>
            <div>
              <p className={styles.principleLabel}>Relationship continuity</p>
              <p className={styles.principleBody}>
                Capability failure must not be presented as relationship failure.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 15 — Final Product / Interactive Prototype */}
      <Section id="interactive-prototype" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="15 — Final Product / Interactive Prototype"
            title="The final prototype turned approved decisions into a testable system."
          />
          <EditorialText>
            <p>
              Once the product decisions were closed, they were implemented in a separate
              interactive Figma prototype. The purpose was not to begin another redesign cycle —
              it was to test whether the approved architecture, states and governance decisions
              could coexist as one navigable product model.
            </p>
            <p>
              The original case-study phase closed before the interactive prototype was built.
              The approved decisions were subsequently implemented in a separate Figma prototype,
              which was later QA-audited and closed.
            </p>
          </EditorialText>
        </Container>

        <Container>
          <div className={styles.evidenceWide}>
            <MediaContainer
              src="/assets/lufi/lufi-prototype-flow-map.png"
              alt="Flow map showing two prototype starting points — New User / First Meeting and Returning User / Core Experience — and the branches connecting First Meeting, Home, Chat, Memory, Profile, SpeakScreen and Plans."
              width={2200}
              height={1358}
              sizes="(min-width: 1024px) 1152px, 100vw"
              caption="The prototype Flow Map represents navigation, not relationship maturity. New User / First Meeting and Returning User / Core Experience are Figma prototype affordances, not in-product UI."
            />
          </div>
        </Container>

        <Container narrow>
          <p className={styles.avoidsLabel}>Prototype QA metrics</p>
          <ProjectMetadata
            rows={[
              { label: 'Frames', value: '52' },
              { label: 'Prototype reactions', value: '112 verified prototype reactions' },
              { label: 'Broken destinations', value: '0' },
              { label: 'Stale destinations', value: '0' },
              { label: 'Cross-page destinations', value: '0' },
              { label: 'Prototype starting points', value: '2' },
            ]}
          />
          <EditorialText>
            <p>
              These are prototype QA metrics — not user research, usability success rates,
              conversion, engagement, retention or business outcomes.
            </p>
            <p>
              The prototype connects approved product surfaces across First Meeting, Home, Chat,
              Memory, You &amp; LUFI, Profile, Plans, SpeakScreen and edge states. Its value isn&rsquo;t
              the number of screens — it&rsquo;s that decisions previously discussed separately can
              now be inspected as one connected experience.
            </p>
          </EditorialText>

          <div className={styles.memoryFocal}>
            <MediaContainer
              src="/assets/lufi/lufi-hero-returning-user.png"
              alt="LUFI Home screen for a returning user, with a personalised greeting and Chat, You & LUFI, and Profile navigation tiles."
              width={780}
              height={1688}
              sizes="(min-width: 640px) 360px, 100vw"
              caption="An authentic screen from the final approved interactive prototype — not a production screenshot."
            />
          </div>

          <div className={styles.decisionBlock}>
            <EditorialText>
              <p>
                Explore the connected prototype used to validate navigation, state coverage and
                the approved product direction.
              </p>
            </EditorialText>
            <div className={styles.ctaGroup}>
              <Button href="https://www.figma.com/design/j5iMkYqbm0n0vti95BsrHN">
                Explore the interactive prototype
              </Button>
            </div>
            <p className={styles.correctionNote}>
              <TextLink href="https://www.figma.com/design/mWnaSvCA0ybUqvqUOhZvCS">
                View full design evidence in Figma
              </TextLink>
            </p>
          </div>

          <div className={styles.decisionBlock}>
            <h3 className={styles.decisionTitle}>What design did not resolve.</h3>
            <ul className={styles.avoidsList}>
              <li>Barge-in / audio-session behavior</li>
              <li>Final pricing / tier naming</li>
              <li>Full Memory provenance capability</li>
              <li>Whether the Ethical Monetization Test generalises further</li>
            </ul>
            <EditorialText>
              <p>
                These are deliberately unresolved engineering/business/product questions, not
                defects. Approved prototype evidence does not equal shipped production
                functionality.
              </p>
            </EditorialText>
          </div>
        </Container>
      </Section>

      {/* 16 — Reflection / What I Learned */}
      <Section id="reflection" spacing="lg">
        <Container narrow>
          <SectionHeader eyebrow="16 — Reflection / What I Learned" title="The biggest change wasn't one better screen." />
          <Quote>It was building a way to catch the next wrong one.</Quote>
          <EditorialText>
            <p>
              LUFI began as a product-design problem around companionship, Memory, Voice and
              continuity. The deeper lesson was that individual screens were not enough. The same
              underlying risk kept appearing across unrelated surfaces — relationship mechanics,
              proactive behavior, monetization, Memory, Voice, and account control. The work
              became stronger when those repeated problems were converted into reusable product
              rules rather than solved one screen at a time.
            </p>
          </EditorialText>

          <div className={styles.principleList}>
            <div>
              <p className={styles.principleLabel}>Systems over screens</p>
              <p className={styles.principleBody}>
                A strong interface decision becomes more valuable when it can govern the next
                surface too.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>Designing AI means designing behavior</p>
              <p className={styles.principleBody}>
                For an intelligent product, UX includes what the system initiates, remembers,
                withholds, explains and refuses to imply.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>Trust needs interface</p>
              <p className={styles.principleBody}>
                Memory, privacy and uncertainty cannot remain invisible model concepts. Users need
                surfaces for understanding and control.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>Monetization is product design</p>
              <p className={styles.principleBody}>
                Pricing architecture changes product behavior. It cannot be separated from
                relationship design in an AI companion.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>Prototypes should test decisions</p>
              <p className={styles.principleBody}>
                The final prototype was useful because it operationalised already-approved
                decisions rather than reopening the product indefinitely.
              </p>
            </div>
            <div>
              <p className={styles.principleLabel}>Honest status makes the case study stronger</p>
              <p className={styles.principleBody}>
                Not-shipped, engineering-dependent and unresolved work should remain visible
                rather than being rewritten as success.
              </p>
            </div>
          </div>

          <EditorialText>
            <p>
              No business or user-success metrics are claimed where none were measured. This case
              study demonstrates product reasoning, system architecture, interaction design,
              governance, visual evolution and prototype QA. It does not claim measured retention
              improvement, engagement improvement, conversion uplift, trust scores, usability
              success percentages, or revenue impact.
            </p>
          </EditorialText>

          <Quote>
            LUFI taught me to treat intelligent-product design as the design of relationships
            between behavior, interface, system constraints and user control — not simply the
            design of screens.
          </Quote>

          <div className={styles.ctaGroup}>
            <Button href="https://www.figma.com/design/j5iMkYqbm0n0vti95BsrHN">
              Explore the interactive prototype
            </Button>
            <TextLink href="https://www.figma.com/design/mWnaSvCA0ybUqvqUOhZvCS">
              View full design evidence in Figma
            </TextLink>
          </div>

          <CaseStudyNavigation next={{ label: 'IntelliShop', href: '/work/intellishop' }} />
        </Container>
      </Section>
    </>
  );
}
