import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectMetadata } from '@/components/ProjectMetadata';
import { MediaContainer } from '@/components/MediaContainer';
import { EditorialText } from '@/components/EditorialText';
import { Quote } from '@/components/Quote';
import { Tag } from '@/components/Tag';
import { Button } from '@/components/Button';
import { TextLink } from '@/components/TextLink';
import { CaseStudyContents } from '@/components/CaseStudyContents';
import { CaseStudyNavigation } from '@/components/CaseStudyNavigation';
import { buildMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'AI Bedtime Story — Client Product',
  path: '/work/storyteller',
  description:
    'AI Bedtime Story is a client project case study covering parent/child UX, AI-assisted storytelling, team leadership and backend development.',
});

const contentsItems = [
  { number: '01', label: 'Client Brief & Product Context', href: '#client-brief' },
  { number: '02', label: 'Understanding Two User Experiences', href: '#two-user-experiences' },
  { number: '03', label: 'Structuring the Experience', href: '#experience-structure' },
  { number: '04', label: 'From Flows to Interface', href: '#flows-to-interface' },
  { number: '05', label: 'Designing the Product Experience', href: '#product-experience' },
  { number: '06', label: 'Development & Delivery', href: '#development-delivery' },
  { number: '07', label: 'Outcome & Reflection', href: '#outcome-reflection' },
];

export default function StorytellerPage() {
  return (
    <>
      <Container>
        <CaseStudyContents items={contentsItems} />
      </Container>

      {/* Hero */}
      <Section spacing="lg">
        <Container>
          <SectionHeader
            as="h1"
            eyebrow="Client Product"
            title="AI Bedtime Story"
            description="Designing an AI-assisted storytelling experience for parents and children."
            size="project"
          />
          <EditorialText>
            <p>
              AI Bedtime Story was an anonymous client project exploring how artificial
              intelligence could support parents in creating personalised bedtime stories while
              giving children a simpler, age-appropriate way to access and enjoy them.
            </p>
            <p>
              I worked across product design, team leadership and backend development,
              translating client requirements into a structured web experience.
            </p>
          </EditorialText>
          <div className={styles.metadataBlock}>
            <ProjectMetadata
              rows={[
                { label: 'Role', value: 'Team Lead · Product Designer · Developer' },
                { label: 'Project type', value: 'Client Product' },
                { label: 'Platform', value: 'Responsive Web Application' },
                {
                  label: 'Focus',
                  value:
                    'AI-assisted storytelling · Parent/child UX · Information architecture · Interaction design',
                },
                { label: 'Status', value: 'Completed and presented to client' },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* 01 — Client Brief & Product Context */}
      <Section id="client-brief" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="01 — Client Brief & Product Context"
            title="Turning a client idea into a product structure."
          />
          <EditorialText>
            <p>
              The client wanted a web application that could help maintain the bedtime-story
              experience when a parent was away from home or too tired to create or tell a story
              themselves. The documented product brief translated this into an AI-assisted
              experience where parents could create or generate stories, edit them, convert them
              to audio and save them for later playback, while children received a more
              restricted experience focused on finding and listening to saved stories.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>The product challenge</h3>
          <EditorialText>
            <p>
              How could an AI-assisted storytelling product give parents meaningful control while
              keeping the child&rsquo;s experience simple, engaging and appropriately separated?
              This is the design question derived from the project context, not a verbatim client
              quote.
            </p>
            <p>
              The challenge was broader than generating text with AI. The system needed to
              account for accounts, parent/child roles, profiles, story creation, story editing,
              saved stories, playback, permissions, and the relationship between parent and child
              experiences.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Role &amp; responsibilities</h3>
          <div className={styles.stackList}>
            <div>
              <p className={styles.stackLabel}>Team leadership</p>
              <p className={styles.stackBody}>
                Task organisation, coordination and progress supervision.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Product design</p>
              <p className={styles.stackBody}>
                Personas, journey mapping, user flows, wireframes, Figma, interface design.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Development</p>
              <p className={styles.stackBody}>Backend development.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 — Understanding Two User Experiences */}
      <Section id="two-user-experiences" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="02 — Understanding Two User Experiences"
            title="One product, two very different contexts of use."
          />
          <EditorialText>
            <p>The experience could not be designed around one generic user.</p>
          </EditorialText>
          <div className={styles.evidencePairGrid}>
            <div className={styles.calloutBlock}>
              <p className={styles.stackLabel}>Parents / caregivers</p>
              <ul className={styles.plainList}>
                <li>Profiles</li>
                <li>Story creation</li>
                <li>Story management</li>
                <li>Access</li>
                <li>Configuration</li>
              </ul>
            </div>
            <div className={styles.calloutBlock}>
              <p className={styles.stackLabel}>Children</p>
              <ul className={styles.plainList}>
                <li>Their profile</li>
                <li>Protected access</li>
                <li>Their story library</li>
                <li>Playback</li>
                <li>Favourites / returning to content</li>
              </ul>
            </div>
          </div>
          <EditorialText>
            <p>
              The child was not designed to inherit the parent interface&rsquo;s complexity.
              Using the project requirements and available research as inputs, I developed
              personas and journey artefacts to make the different parent and child contexts
              explicit — I did not conduct the original project research myself.
            </p>
          </EditorialText>

          <div className={styles.evidencePairGrid}>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>Design artefact</Tag>
              </div>
              <MediaContainer
                src="/assets/storyteller/story-ana-persona.png"
                alt="Persona card for Ana Silva, a 35-year-old caregiver in Brazil, with her bio and personality sliders."
                width={2048}
                height={1158}
                sizes="(min-width: 640px) 400px, 100vw"
                caption="One representative caregiver persona — used to make the parent context concrete, not to catalogue every user type."
              />
            </div>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>Design artefact</Tag>
              </div>
              <MediaContainer
                src="/assets/storyteller/story-journey-map.png"
                alt="Journey map for Ana Silva across Awareness, Consideration, Acquisition, Service and Loyalty stages, noting actions, goals, feelings, pain points and opportunities at each stage."
                width={2048}
                height={884}
                sizes="(min-width: 640px) 400px, 100vw"
                caption="Journey mapping across five stages, from first hearing about the product through ongoing use."
              />
            </div>
          </div>
          <EditorialText>
            <p>
              The objective was not to make the two experiences identical — it was to understand
              what each user needed to see, control and accomplish.
            </p>
          </EditorialText>
        </Container>
      </Section>

      {/* 03 — Structuring the Experience */}
      <Section id="experience-structure" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="03 — Structuring the Experience"
            title="Designing the relationship between parent and child flows."
          />
          <EditorialText>
            <p>
              Before visual design, the product was decomposed into tasks and flows. A
              hierarchical task analysis made larger goals — registration, story creation, library
              management, listening, settings — actionable. User flows then established where
              parent and child experiences connected, and where they needed to remain deliberately
              separate.
            </p>
          </EditorialText>
        </Container>

        <Container>
          <div className={styles.evidenceTagRow}>
            <Tag>Design artefact</Tag>
          </div>
          <div className={styles.evidenceWide}>
            <MediaContainer
              src="/assets/storyteller/story-task-analysis.png"
              alt="Hierarchical task analysis breaking the product into Register/Login, Create Stories, Managing Library, Listening to a Story, and Manage Settings, each expanded into sub-tasks."
              width={2048}
              height={557}
              sizes="(min-width: 1024px) 960px, 100vw"
              caption="Hierarchical task analysis — not every branch shown here reached the delivered product; it maps the full space of goals considered."
            />
          </div>
        </Container>

        <Container narrow>
          <EditorialText>
            <p>
              The child flow is a concrete example of that separation, following the product&rsquo;s
              own terminology: Children&rsquo;s Home Screen → Profiles Screen (select a profile) →
              a simple, child-friendly PIN → Children&rsquo;s Dashboard → Story Library / Featured
              / Favourites → Story Preview → Playback Options → Story Player → Story End, with
              Favourite, Replay, New Story or Exit as the next action.
            </p>
          </EditorialText>
          <div className={styles.evidenceTagRow}>
            <Tag>Design artefact</Tag>
          </div>
          <div className={styles.evidenceWide}>
            <MediaContainer
              src="/assets/storyteller/story-child-flow.png"
              alt="Child flow diagram from the Children's Home Screen through profile selection, PIN entry, the Children's Dashboard, story library and favourites, story preview, playback options, and story end with favourite, replay, new story or exit actions."
              width={1681}
              height={1461}
              sizes="(min-width: 1024px) 900px, 100vw"
              caption="The child flow — a simplified, self-contained path with its own security step (a simple PIN, not a full login) and no route back into parent-level controls."
            />
          </div>

          <Quote>
            Complexity should live where control is needed — not automatically follow the user
            into every part of the product.
          </Quote>
        </Container>
      </Section>

      {/* 04 — From Flows to Interface */}
      <Section id="flows-to-interface" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="04 — From Flows to Interface"
            title="Testing the structure before visual polish."
          />
          <EditorialText>
            <p>
              Paper wireframes covered login, the parent&rsquo;s dashboard, story creation, the
              child&rsquo;s dashboard, the story library and configuration. This was early
              structural exploration — not usability validation, and no participant count is
              claimed for it. Low fidelity helped focus on hierarchy, navigation, task sequence,
              parent/child responsibility separation, configuration placement, and the
              relationship between story creation and the wider product.
            </p>
          </EditorialText>
        </Container>

        <Container>
          <div className={styles.evidenceTagRow}>
            <Tag>Early structural exploration</Tag>
          </div>
          <div className={styles.evidenceWide}>
            <MediaContainer
              src="/assets/storyteller/story-wireframe-overview.png"
              alt="Paper wireframe sheet covering a login screen, the parent's dashboard, story creation, a story-created confirmation, the child's dashboard, the story library, and a configuration screen."
              width={1027}
              height={654}
              sizes="(min-width: 1024px) 900px, 100vw"
              caption="Paper wireframes across login, parent dashboard, story creation, child dashboard, library and configuration."
            />
          </div>
        </Container>
      </Section>

      {/* 05 — Designing the Product Experience */}
      <Section id="product-experience" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="05 — Designing the Product Experience"
            title="Turning a complex system into an approachable experience."
          />
          <div className={styles.stackList}>
            <div>
              <p className={styles.stackLabel}>Discovery</p>
              <p className={styles.stackBody}>Understanding what the product does.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Management</p>
              <p className={styles.stackBody}>Profiles, stories and account-level actions.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Creation</p>
              <p className={styles.stackBody}>
                Turning a storytelling intention into generated content.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Consumption</p>
              <p className={styles.stackBody}>
                Giving the child a focused way to access and enjoy resulting stories.
              </p>
            </div>
          </div>
          <EditorialText>
            <p>
              The interface acts as a bridge between technically complex capabilities — AI story
              generation, text-to-speech, saved playback — and a simpler user-facing experience.
              AI is not visual decoration here: the capability exists to help create the story
              experience itself.
            </p>
          </EditorialText>
        </Container>

        <Container>
          <div className={styles.evidencePairGrid}>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>Delivered product</Tag>
              </div>
              <MediaContainer
                src="/assets/storyteller/story-website-home.png"
                alt="Public Home page for AI Bedtime Story, with a headline, Start Creating Stories and Learn More actions, and example story cards."
                width={1900}
                height={879}
                sizes="(min-width: 640px) 460px, 100vw"
                caption="Discovery — the public Home page, explaining what the product does before sign-up."
              />
            </div>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>Delivered product</Tag>
              </div>
              <MediaContainer
                src="/assets/storyteller/story-website-dashboard.png"
                alt="Parent dashboard with Quick Actions to create a story or view stories, a list of child accounts each with a Kid Mode button, family stats, and story tips."
                width={1883}
                height={868}
                sizes="(min-width: 640px) 460px, 100vw"
                caption="Management — the parent dashboard, with per-child accounts and a Kid Mode switch into the restricted child experience."
              />
            </div>
          </div>
        </Container>

        <Container narrow>
          <h3 className={styles.subsectionHeading}>Extending the storytelling experience</h3>
          <EditorialText>
            <p>
              During development, I proposed extending the experience beyond AI-generated text and
              audio by creating an accompanying image for each story — to give each generated
              story its own visual identity, make saved stories easier to recognise, enrich the
              child&rsquo;s return-to-library experience, and make generated content feel more
              complete as a storytelling object.
            </p>
            <p>
              This was my product contribution during development, not the original client
              requirement — the source brief mentions optional imagery, but that alone doesn&rsquo;t
              establish automatic per-story image generation as a core requirement. I proposed
              this direction; the available project evidence supports the proposal, not a claim
              that it shipped as described.
            </p>
          </EditorialText>
        </Container>
      </Section>

      {/* 06 — Development & Delivery */}
      <Section id="development-delivery" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="06 — Development & Delivery"
            title="Design decisions had to survive implementation."
          />
          <EditorialText>
            <p>
              The documented project architecture referenced React and Next.js on the frontend,
              Firebase for authentication, Firestore and hosting, an AI API for story generation,
              and a text-to-speech service for audio. That is the documented project architecture
              — it is not a claim that I personally implemented every one of those technologies.
              My confirmed hands-on development responsibility was backend development.
            </p>
            <p>
              Because I was involved in both design and backend development, I had to consider not
              only what the experience should communicate, but how product decisions would
              translate into a working system. This strengthened the relationship between
              requirements, experience structure, interface, technical constraints and delivery.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Leading while contributing hands-on</h3>
          <EditorialText>
            <p>
              Alongside hands-on design and development work, I acted as team lead — organising
              project tasks, coordinating the team&rsquo;s work, monitoring progress and
              supervising delivery, while contributing directly to design and backend work myself.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Client delivery</h3>
          <EditorialText>
            <p>
              The project was completed and presented to the client. After presentation, I had no
              further involvement and do not know whether the client continued development or
              commercialised the product. This case study intentionally makes no claim about
              launch, adoption, commercial performance or post-delivery usage — that&rsquo;s a
              delivery boundary, not an apology.
            </p>
          </EditorialText>
        </Container>
      </Section>

      {/* 07 — Outcome & Reflection */}
      <Section id="outcome-reflection" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="07 — Outcome & Reflection"
            title="Client work changed how I think about product decisions."
          />

          <h3 className={styles.subsectionHeading}>Outcome</h3>
          <ul className={styles.plainList}>
            <li>A completed client project</li>
            <li>Parent and child experience structures</li>
            <li>Personas and journey artefacts</li>
            <li>User/task flows</li>
            <li>Wireframes</li>
            <li>Interface design</li>
            <li>Backend contribution</li>
            <li>Final product presentation to the client</li>
          </ul>

          <h3 className={styles.subsectionHeading}>What I learned</h3>
          <EditorialText>
            <p>
              Unlike a self-directed project, client work required translating someone else&rsquo;s
              idea and constraints into a coherent product.
            </p>
            <p>
              The parent and child experiences showed me that one product can require different
              levels of control, complexity and navigation for different users.
            </p>
            <p>
              Working across design and backend development made technical feasibility part of
              the design conversation.
            </p>
            <p>
              Leading the team while contributing hands-on required balancing my own tasks with
              organisation, coordination and progress supervision.
            </p>
            <p>
              The story-image proposal showed that delivering client requirements doesn&rsquo;t
              prevent identifying opportunities to improve the product.
            </p>
            <p>
              And looking back, there are aspects I&rsquo;d approach differently with my current
              Product Design practice — not because the earlier work was wrong, but because it&rsquo;s
              evidence of how much my practice has developed since.
            </p>
          </EditorialText>

          <Quote>
            The project taught me that delivering a product isn&rsquo;t about designing the most
            elaborate solution. It&rsquo;s about understanding the requirement, structuring the
            right experience around it, coordinating the work required to deliver it, and making
            decisions that can survive implementation.
          </Quote>

          <div className={styles.ctaGroup}>
            <Button href="/#work">Back to Selected Work</Button>
            <TextLink href="/contact" withArrow>
              Work with me
            </TextLink>
          </div>

          <CaseStudyNavigation previous={{ label: 'IntelliShop', href: '/work/intellishop' }} />
        </Container>
      </Section>
    </>
  );
}
