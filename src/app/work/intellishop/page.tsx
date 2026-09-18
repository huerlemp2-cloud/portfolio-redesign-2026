import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectMetadata } from '@/components/ProjectMetadata';
import { MediaContainer } from '@/components/MediaContainer';
import { EditorialText } from '@/components/EditorialText';
import { Quote } from '@/components/Quote';
import { Tag } from '@/components/Tag';
import { CaseStudyContents } from '@/components/CaseStudyContents';
import { CaseStudyNavigation } from '@/components/CaseStudyNavigation';
import { TextLink } from '@/components/TextLink';
import { buildMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'IntelliShop — AI-Assisted Shopping Experience',
  path: '/work/intellishop',
  description:
    'IntelliShop is a critical redesign case study — an academic shopping app reassessed and rebuilt around information architecture, task flows and a V1 to V2 visual-system evolution.',
});

// All 14 sections are implemented as of Checkpoint 5D.
const contentsItems = [
  { number: '01', label: 'Product Overview', href: '#product-overview' },
  { number: '02', label: 'Why I Revisited It', href: '#why-revisited' },
  { number: '03', label: 'V1 Evidence', href: '#v1-evidence' },
  { number: '04', label: 'V1 Audit & Learning', href: '#v1-audit' },
  { number: '05', label: 'Product Reframing', href: '#product-reframing' },
  { number: '06', label: 'Information Architecture Transformation', href: '#information-architecture' },
  { number: '07', label: 'Core Flow Decisions', href: '#core-flow-decisions' },
  { number: '08', label: 'Low-Fi Validation', href: '#low-fi-validation' },
  { number: '09', label: 'Visual System Evolution', href: '#visual-system-evolution' },
  { number: '10', label: 'V1 → V2 Comparison', href: '#v1-v2-comparison' },
  { number: '11', label: 'High-Fidelity Experience', href: '#high-fidelity-experience' },
  { number: '12', label: 'Responsive Validation', href: '#responsive-validation' },
  { number: '13', label: 'Key Design Decisions', href: '#key-design-decisions' },
  { number: '14', label: 'Outcome & Reflection', href: '#outcome-reflection' },
];

export default function IntelliShopPage() {
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
            eyebrow="01 — Product Overview"
            title="IntelliShop"
            description="AI-Assisted Shopping Experience"
            size="project"
          />
          <EditorialText>
            <p>
              IntelliShop began as my 2025 BSc Computing university project: an AI-assisted
              mobile shopping-list concept exploring shopping lists, household inventory,
              budget-aware suggestions, price comparison and recipe support.
            </p>
            <p>
              In 2026, I returned to the project with a different question. Not &ldquo;How can I
              make the old interface look better?&rdquo; but &ldquo;What would I design
              differently now, after another year of product, UX and implementation
              experience?&rdquo;
            </p>
            <p>
              The redesign preserves the original work as evidence and uses it as the baseline
              for a critical product reassessment.
            </p>
          </EditorialText>

          <div className={styles.metadataBlock}>
            <ProjectMetadata
              rows={[
                { label: 'Project type', value: 'Academic product revisited as professional redesign' },
                { label: 'Original project', value: '2025 BSc Computing project' },
                { label: 'Redesign', value: '2026' },
                { label: 'Role', value: 'Product Designer' },
                {
                  label: 'Focus',
                  value:
                    'Product reassessment · Information Architecture · Interaction Design · AI-assisted shopping · Mobile UX',
                },
              ]}
            />
          </div>

          <div className={styles.roleQuote}>
            <Quote>
              This case study is about evolution. The original project is not hidden. It is the
              evidence that makes the redesign meaningful.
            </Quote>
          </div>
        </Container>
      </Section>

      {/* 02 — Why I Revisited It */}
      <Section id="why-revisited" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="02 — Why I Revisited It"
            title={
              <>
                The original project solved many features.
                <br />
                It did not yet behave like one coherent product.
              </>
            }
          />
          <EditorialText>
            <p>
              The original project already included real process: competitor review, personas,
              paper wireframes, user flows and a hierarchical task analysis, a Figma prototype,
              prototype testing, a React Native build, and functional testing.
            </p>
          </EditorialText>
          <ul className={styles.chipList}>
            <li className={styles.chipItem}>Competitor review</li>
            <li className={styles.chipItem}>Personas</li>
            <li className={styles.chipItem}>Paper wireframes</li>
            <li className={styles.chipItem}>User flows &amp; HTA</li>
            <li className={styles.chipItem}>Figma prototype</li>
            <li className={styles.chipItem}>Prototype testing</li>
            <li className={styles.chipItem}>React Native build</li>
            <li className={styles.chipItem}>Functional testing</li>
          </ul>
          <EditorialText>
            <p>
              So the 2026 redesign is not a story of bad student work becoming professional work.
              It is a story of an earlier process being critically reassessed and systematised
              with stronger product/UX judgment.
            </p>
          </EditorialText>
          <Quote>
            I was not replacing an absence of process. I was learning to question the product
            decisions that process had produced.
          </Quote>

          <h3 className={styles.subsectionHeading}>Original product scope</h3>
          <EditorialText>
            <p>Grounded in the canonical V1 evidence, the original scope included:</p>
          </EditorialText>
          <ul className={styles.chipList}>
            <li className={styles.chipItem}>Authentication</li>
            <li className={styles.chipItem}>Shopping lists</li>
            <li className={styles.chipItem}>AI budget suggestions</li>
            <li className={styles.chipItem}>Local price comparison</li>
            <li className={styles.chipItem}>Inventory / restock</li>
            <li className={styles.chipItem}>Recipe suggestions</li>
            <li className={styles.chipItem}>Firebase</li>
            <li className={styles.chipItem}>External APIs</li>
          </ul>
          <EditorialText>
            <p>
              The breadth of functionality was ambitious. The later problem was not lack of
              features — the redesign question became how these capabilities should be organised
              around what the user is actually trying to accomplish. That question belongs to
              later sections.
            </p>
          </EditorialText>
        </Container>
      </Section>

      {/* 03 — V1 Evidence */}
      <Section id="v1-evidence" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="03 — V1 Evidence"
            title="Before redesigning it, I preserved what actually existed."
          />
          <EditorialText>
            <p>
              The V1 baseline was reconstructed from the dissertation, original Figma/prototype
              material, original screenshots, wireframes, flow/task artefacts, personas and
              journey material, and original evaluation evidence. The original files are
              preserved as historical evidence rather than redesigned in place.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Authentic V1 UI</h3>
          <div className={styles.evidencePairGrid}>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>Original 2025 artefact</Tag>
              </div>
              <MediaContainer
                src="/assets/intellishop/intellishop-v1-menu-hub.png"
                alt="2025 IntelliShop menu hub screen with a decorative logo banner and four equal-weight feature buttons: To Do a Shopping List, Go to Your Stock, Personalise List, Recipe Suggestion."
                width={336}
                height={732}
                sizes="(min-width: 640px) 300px, 100vw"
                caption="The original menu hub — this establishes the V1 baseline, not a final redesign answer."
              />
            </div>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>Original 2025 artefact</Tag>
              </div>
              <MediaContainer
                src="/assets/intellishop/intellishop-v1-shopping-list.png"
                alt="2025 IntelliShop shopping list screen with a greeting message and a plain numbered list of items above a grey Search button."
                width={336}
                height={732}
                sizes="(min-width: 640px) 300px, 100vw"
                caption="The original shopping list screen — the V1 baseline for this core surface."
              />
            </div>
          </div>

          <h3 className={styles.subsectionHeading}>Early process evidence</h3>
          <EditorialText>
            <p>
              Paper-first exploration preceded the digital prototype. The 2026 redesign therefore
              does not invent a design process retroactively — it reassesses an earlier process
              that already existed.
            </p>
          </EditorialText>
          <div className={styles.evidenceTagRow}>
            <Tag>Original 2025 artefact</Tag>
          </div>
          <div className={styles.evidenceWide}>
            <MediaContainer
              src="/assets/intellishop/intellishop-v1-paper-wireframes.png"
              alt="Sheet of hand-drawn paper wireframes covering login, register, shopping list, stock, and AI list-suggestion screens."
              width={1240}
              height={886}
              sizes="(min-width: 1024px) 960px, 100vw"
              caption="Paper wireframes for login, stock and AI list-suggestion flows — the earliest exploration stage."
            />
          </div>

          <h3 className={styles.subsectionHeading}>Research evidence</h3>
          <EditorialText>
            <p>
              Two personas grounded the original research: John Pereira, framed around
              automation, budget and data; and Maria Silva, framed around waste reduction and
              family organisation.
            </p>
          </EditorialText>
          <div className={styles.evidencePairGrid}>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>Original 2025 artefact</Tag>
              </div>
              <MediaContainer
                src="/assets/intellishop/intellishop-v1-persona-john.png"
                alt="Persona card for John Pereira, 'The Technology Optimizer,' with a bio and personality sliders."
                width={814}
                height={460}
                sizes="(min-width: 640px) 400px, 100vw"
                caption="John Pereira — automation, budget and data."
              />
            </div>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>Original 2025 artefact</Tag>
              </div>
              <MediaContainer
                src="/assets/intellishop/intellishop-v1-persona-maria.png"
                alt="Persona card for Maria Silva, 'The Practical Organizer,' with a bio and personality sliders."
                width={814}
                height={460}
                sizes="(min-width: 640px) 400px, 100vw"
                caption="Maria Silva — waste reduction and family organisation."
              />
            </div>
          </div>
          <div className={styles.evidenceTagRow}>
            <Tag>Original 2025 artefact</Tag>
          </div>
          <div className={styles.evidenceWide}>
            <MediaContainer
              src="/assets/intellishop/intellishop-v1-journey-maria.png"
              alt="Maria Silva's journey map across five stages — Discovery and Onboarding, Initial Inventory Setup, Creating the First AI-Generated List, Using App While Shopping, and Inventory Update After Shopping — with actions, goals, feelings, pain points and opportunities noted for each."
              width={816}
              height={348}
              sizes="(min-width: 1024px) 960px, 100vw"
              caption="Maria Silva's journey map, spanning onboarding through post-shopping inventory update."
            />
          </div>

          <h3 className={styles.subsectionHeading}>Prototype testing — historical evidence</h3>
          <EditorialText>
            <p>
              The canonical source records a quantitative and qualitative questionnaire completed
              by 15 volunteer participants. This is 2025 prototype-evaluation evidence — not
              statistically significant research, market validation, product-market fit,
              production analytics or a commercial outcome.
            </p>
          </EditorialText>
          <ul className={styles.measuresList}>
            <li className={styles.measureItem}>Ease of use</li>
            <li className={styles.measureItem}>Visual clarity</li>
            <li className={styles.measureItem}>List efficiency</li>
            <li className={styles.measureItem}>Recipe relevance</li>
            <li className={styles.measureItem}>Perceived savings</li>
          </ul>
        </Container>
      </Section>

      {/* 04 — V1 Audit & Learning */}
      <Section id="v1-audit" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="04 — V1 Audit & Learning"
            title="The redesign started by separating what existed from what still worked."
          />
          <div className={styles.transitionRow}>
            <Tag>2025 evidence</Tag>
            <span aria-hidden="true">→</span>
            <Tag>2026 critical reassessment</Tag>
          </div>

          <h3 className={styles.subsectionHeading}>What the V1 already did well</h3>
          <EditorialText>
            <p>The original project was not a caricature to correct — it was a real attempt:</p>
          </EditorialText>
          <ul className={styles.plainList}>
            <li>Attempted an end-to-end shopping ecosystem</li>
            <li>Connected shopping lists, budget, inventory, price comparison and recipes</li>
            <li>Explored AI-assisted suggestions</li>
            <li>Included user research artefacts</li>
            <li>Progressed from sketches to prototype and implementation</li>
            <li>Provided enough real evidence to audit rather than reconstruct from memory</li>
          </ul>

          <h3 className={styles.subsectionHeading}>What the V1 audit exposed</h3>
          <div className={styles.auditGrid}>
            <div className={styles.auditCard}>
              <span className={styles.auditNumber}>1</span>
              <h4 className={styles.auditTitle}>Large brand presence in operational space</h4>
              <p className={styles.auditBody}>
                The logo occupied substantial functional screen area.
              </p>
            </div>
            <div className={styles.auditCard}>
              <span className={styles.auditNumber}>2</span>
              <h4 className={styles.auditTitle}>Weak action semantics</h4>
              <p className={styles.auditBody}>
                Grey CTAs dominated despite the documented Indigo direction.
              </p>
            </div>
            <div className={styles.auditCard}>
              <span className={styles.auditNumber}>3</span>
              <h4 className={styles.auditTitle}>Inconsistent visual hierarchy</h4>
              <p className={styles.auditBody}>
                Hierarchy varied between screens rather than behaving as one system.
              </p>
            </div>
            <div className={styles.auditCard}>
              <span className={styles.auditNumber}>4</span>
              <h4 className={styles.auditTitle}>Feature-led navigation</h4>
              <p className={styles.auditBody}>
                Major capabilities were presented as equal-weight feature buttons.
              </p>
            </div>
            <div className={styles.auditCard}>
              <span className={styles.auditNumber}>5</span>
              <h4 className={styles.auditTitle}>Inconsistent colour semantics</h4>
              <p className={styles.auditBody}>
                Price comparison mixed retailer colours with local red / green / black controls.
              </p>
            </div>
            <div className={styles.auditCard}>
              <span className={styles.auditNumber}>6</span>
              <h4 className={styles.auditTitle}>Inconsistent typography and control semantics</h4>
              <p className={styles.auditBody}>
                Typography and control behaviour were not yet governed by a coherent product
                system.
              </p>
            </div>
          </div>

          <Quote>
            The main redesign opportunity was not visual polish. It was moving from a collection
            of features toward a coherent shopping journey.
          </Quote>
        </Container>
      </Section>

      {/* 05 — Product Reframing */}
      <Section id="product-reframing" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="05 — Product Reframing"
            title="The redesign changed the question before it changed the interface."
          />
          <EditorialText>
            <p>
              The V1 audit showed that IntelliShop already had substantial capability breadth.
              The problem was not a shortage of features. The 2026 redesign therefore began by
              asking what the product should optimise for — before changing navigation, flows or
              visual UI.
            </p>
          </EditorialText>

          <div className={styles.evidenceTagRow}>
            <Tag>2026 reframing hypothesis</Tag>
          </div>
          <Quote>
            How might IntelliShop help people plan and complete grocery shopping with less waste,
            less overspending and less mental effort — without requiring them to manage a complex
            &ldquo;smart home&rdquo; system?
          </Quote>
          <EditorialText>
            <p>
              This question is derived from the original scope, not a 2025 research finding.
            </p>
          </EditorialText>
        </Container>

        <Container>
          <div className={styles.evidenceWide}>
            <div className={styles.evidenceTagRow}>
              <Tag>2026 decision</Tag>
            </div>
            <MediaContainer
              src="/assets/intellishop/intellishop-v2-product-thesis.png"
              alt="V2 product thesis card: IntelliShop should connect planning, household stock, price intelligence and food use around one practical outcome — helping a household decide what to buy, where to buy it, and what it can avoid buying. AI supports these decisions contextually rather than becoming a separate destination."
              width={2592}
              height={460}
              sizes="(min-width: 1024px) 960px, 100vw"
              caption="The V2 product thesis. The important evolution is that AI stops being the destination — it isn't paraphrased here as &ldquo;an AI shopping app.&rdquo;"
            />
          </div>
        </Container>

        <Container narrow>
          <div className={styles.calloutBlock}>
            <h3 className={styles.calloutTitle}>AI is infrastructure, not IA.</h3>
            <EditorialText>
              <p>
                In V1, AI partly existed as a named feature/module. In V2, the user should not
                need to &ldquo;go to AI&rdquo; to benefit from intelligent assistance — AI becomes
                contextual support inside real shopping tasks: optimising a list, building or
                refining within a budget, suggesting missing items, explaining lower-cost
                alternatives, and supporting basket/store decisions. The canonical non-goal
                explicitly rules out chatbot-first interaction.
              </p>
            </EditorialText>
          </div>

          <h3 className={styles.subsectionHeading}>Jobs before features</h3>
          <div className={styles.calloutBlock}>
            <p className={styles.stackLabel}>Primary job</p>
            <EditorialText>
              <p>
                When I am preparing to shop for groceries, help me work out what I actually need
                and make a confident purchase plan within my budget.
              </p>
            </EditorialText>
          </div>
          <div className={styles.stackList}>
            <div>
              <p className={styles.stackLabel}>Know what I have</p>
              <p className={styles.stackBody}>Avoid duplicates and notice what is running low.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Build the right list</p>
              <p className={styles.stackBody}>Create or refine the right quantities and priorities.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Spend intelligently</p>
              <p className={styles.stackBody}>
                Understand the best basket/store trade-off without manually aggregating prices.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Use food already at home</p>
              <p className={styles.stackBody}>Turn existing stock into meals and reduce waste.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Keep the household current</p>
              <p className={styles.stackBody}>
                Update stock after shopping or consumption with as little manual effort as
                possible.
              </p>
            </div>
          </div>
          <EditorialText>
            <p>These are 2026 product-framing decisions, not validated JTBD research.</p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Capability repositioning</h3>
          <div className={styles.repositionRow}>
            <span className={styles.repositionName}>Shopping Lists</span>
            <Tag>Retain</Tag>
            <span className={styles.repositionBody}>Becomes the centre of planning.</span>
          </div>
          <div className={styles.repositionRow}>
            <span className={styles.repositionName}>Budget-aware AI list</span>
            <Tag>Reposition</Tag>
            <span className={styles.repositionBody}>Contextual optimisation inside planning.</span>
          </div>
          <div className={styles.repositionRow}>
            <span className={styles.repositionName}>Inventory / Stock</span>
            <Tag>Refine</Tag>
            <span className={styles.repositionBody}>
              Supporting household context; usefulness must not depend on perfect manual
              inventory.
            </span>
          </div>
          <div className={styles.repositionRow}>
            <span className={styles.repositionName}>Price Comparison</span>
            <Tag>Reposition</Tag>
            <span className={styles.repositionBody}>
              Decision support around basket recommendation, savings and trade-offs.
            </span>
          </div>
          <div className={styles.repositionRow}>
            <span className={styles.repositionName}>Recipes</span>
            <Tag>Reposition</Tag>
            <span className={styles.repositionBody}>
              Contextual outcome from Pantry / food-use moments.
            </span>
          </div>
          <div className={styles.repositionRow}>
            <span className={styles.repositionName}>Profile</span>
            <Tag>Refine</Tag>
            <span className={styles.repositionBody}>
              Account / household / preferences rather than product navigation.
            </span>
          </div>
          <div className={styles.repositionRow}>
            <span className={styles.repositionName}>Authentication</span>
            <Tag>Refine</Tag>
            <span className={styles.repositionBody}>
              Collect essential information first; defer additional data until it creates value.
            </span>
          </div>
          <div className={styles.repositionRow}>
            <span className={styles.repositionName}>Purchased → Inventory</span>
            <Tag>Retain</Tag>
            <span className={styles.repositionBody}>
              Preserves the connected loop between shopping and household state.
            </span>
          </div>
          <EditorialText>
            <p>These are redesign decisions — not a claim that all of them shipped.</p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Feature model → outcome model</h3>
        </Container>

        <Container>
          <div className={styles.evidencePairGrid}>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>V1 — feature-led model</Tag>
              </div>
              <MediaContainer
                src="/assets/intellishop/intellishop-v1-feature-model.png"
                alt="V1 feature-led model listing six near-peer modules: Shopping List, Inventory, AI List, Price Comparison, Recipes, Profile."
                width={1040}
                height={1000}
                sizes="(min-width: 640px) 400px, 100vw"
                caption="V1 — a feature-led model of near-peer modules."
              />
            </div>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>V2 — outcome-led model</Tag>
              </div>
              <MediaContainer
                src="/assets/intellishop/intellishop-v2-outcome-model.png"
                alt="V2 outcome-led domains: Plan (what do I need?), Shop (where/what should I buy?), At Home (what do I already have?), Use (what can I do with it?)."
                width={1216}
                height={1000}
                sizes="(min-width: 640px) 400px, 100vw"
                caption="V2 — outcome-led domains (Plan, Shop, At Home, Use). These were product domains at this stage, not yet the final navigation — navigation was deliberately deferred to the IA phase."
              />
            </div>
          </div>
        </Container>

        <Container narrow>
          <h3 className={styles.subsectionHeading}>What the redesign deliberately would not become</h3>
          <ul className={styles.plainList}>
            <li>Do not require perfect inventory</li>
            <li>Do not become chatbot-first</li>
            <li>Do not force personal data upfront</li>
            <li>Do not make AI the value proposition</li>
            <li>Do not optimise for feature count</li>
            <li>Do not hide uncertainty</li>
          </ul>
        </Container>
      </Section>

      {/* 06 — Information Architecture Transformation */}
      <Section id="information-architecture" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="06 — Information Architecture Transformation"
            title="Navigation stopped mirroring the feature catalogue."
          />
          <EditorialText>
            <p>
              Once the product model was reframed, the next problem was findability. V1 exposed
              major capabilities as near-peer modules. V2 reorganised them around recurring user
              jobs, object relationships and moments of use. The IA was designed before new
              high-fidelity UI.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>IA principles</h3>
          <div className={styles.stackList}>
            <div>
              <p className={styles.stackLabel}>Tasks before modules</p>
              <p className={styles.stackBody}>
                Primary destinations map to recurring user jobs, not the technical feature
                catalogue.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Context before duplication</p>
              <p className={styles.stackBody}>
                AI, price intelligence and recipes appear where they are relevant instead of
                becoming parallel navigation silos.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Progressive disclosure</p>
              <p className={styles.stackBody}>
                Everyday use remains direct; deeper comparison/detail appears when requested.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Continuity across the shop</p>
              <p className={styles.stackBody}>
                Planning → shopping → purchased items → Pantry behaves like one lifecycle rather
                than separate products.
              </p>
            </div>
          </div>
        </Container>

        <Container>
          <div className={styles.evidenceWide}>
            <div className={styles.evidenceTagRow}>
              <Tag>2026 decision</Tag>
            </div>
            <MediaContainer
              src="/assets/intellishop/intellishop-v2-product-hierarchy.png"
              alt="Approved product hierarchy: Core Experience — Shopping List; Supporting Core — Pantry / Inventory; Contextual Intelligence — AI, Prices, Recipes."
              width={2592}
              height={740}
              sizes="(min-width: 1024px) 960px, 100vw"
              caption="The approved hierarchy: Shopping List as core experience, Pantry as supporting core, and AI/Prices/Recipes as contextual intelligence. No dedicated AI tab; no dedicated Recipes tab in primary navigation."
            />
          </div>
        </Container>

        <Container narrow>
          <h3 className={styles.subsectionHeading}>From the IA hypothesis to the approved model</h3>
          <EditorialText>
            <p>The IA initially explored four potential primary destinations:</p>
          </EditorialText>
          <ul className={styles.chipList}>
            <li className={styles.chipItem}>Home</li>
            <li className={styles.chipItem}>Lists</li>
            <li className={styles.chipItem}>Pantry</li>
            <li className={styles.chipItem}>Shop</li>
          </ul>
          <EditorialText>
            <p>
              But this was explicitly a working 2026 hypothesis, not the final IA. The approved
              downstream decision became:
            </p>
          </EditorialText>
          <div className={styles.stackList}>
            <div>
              <p className={styles.stackLabel}>Home</p>
              <p className={styles.stackBody}>Permanent destination.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Lists</p>
              <p className={styles.stackBody}>Permanent destination.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Pantry</p>
              <p className={styles.stackBody}>Permanent destination.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Shopping Mode</p>
              <p className={styles.stackBody}>
                Contextual — launched from an active list, not a permanent fourth tab.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Profile</p>
              <p className={styles.stackBody}>
                Accessed from avatar/settings; not a bottom-navigation destination.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>AI</p>
              <p className={styles.stackBody}>No dedicated tab.</p>
            </div>
          </div>

          <h3 className={styles.subsectionHeading}>Object model</h3>
        </Container>

        <Container>
          <div className={styles.evidenceFocal}>
            <div className={styles.evidenceTagRow}>
              <Tag>2026 decision</Tag>
            </div>
            <MediaContainer
              src="/assets/intellishop/intellishop-v2-ia-insight.png"
              alt="IA insight card: the Shopping List is the central planning object; Pantry supplies context; Shop Session executes; purchased items close the loop."
              width={600}
              height={290}
              sizes="(min-width: 480px) 480px, 100vw"
              caption="The Shopping List is the central planning object; Pantry supplies context; Shop Session executes; purchased items close the loop. Recipes make contextual use of household state and can feed missing ingredients back into planning."
            />
          </div>
        </Container>

        <Container narrow>
          <h3 className={styles.subsectionHeading}>The IA transformation</h3>
          <div className={styles.evidencePairGrid}>
            <div className={styles.calloutBlock}>
              <p className={styles.stackLabel}>V1</p>
              <p className={styles.stackBody}>User asks: &ldquo;Which feature do I need?&rdquo;</p>
            </div>
            <div className={styles.calloutBlock}>
              <p className={styles.stackLabel}>V2</p>
              <p className={styles.stackBody}>
                Product asks: &ldquo;What is the user trying to accomplish right now?&rdquo;
              </p>
            </div>
          </div>
          <EditorialText>
            <p>This reframing is 2026 design rationale, not wording from 2025 participants.</p>
          </EditorialText>
        </Container>
      </Section>

      {/* 07 — Core Flow Decisions */}
      <Section id="core-flow-decisions" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="07 — Core Flow Decisions"
            title="The architecture became real when decisions had to survive a journey."
          />
          <EditorialText>
            <p>
              After the product model and IA were approved, the next step was to translate them
              into explicit task sequences, system responsibilities, decision points and recovery
              states before wireframes were drawn.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Flow design principles</h3>
          <div className={styles.stackList}>
            <div>
              <p className={styles.stackLabel}>User control</p>
              <p className={styles.stackBody}>AI suggestions are optional, editable and reversible.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Progressive complexity</p>
              <p className={styles.stackBody}>
                Default flows remain simple; advanced comparison and detail appear on demand.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Continuity</p>
              <p className={styles.stackBody}>
                Planning → shopping → purchased items → Pantry forms one lifecycle.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Transparency</p>
              <p className={styles.stackBody}>
                Price data, AI estimates and automation expose confidence/limitations where
                relevant.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Low maintenance</p>
              <p className={styles.stackBody}>
                Pantry should create value without requiring perfect manual stock accounting.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Recoverability</p>
              <p className={styles.stackBody}>
                Users can undo, correct, skip or continue when system data is incomplete.
              </p>
            </div>
          </div>

          <h3 className={styles.subsectionHeading}>Core flow model</h3>
          <EditorialText>
            <p>
              <strong>F1 — Plan &amp; build a shopping list.</strong> Create/open list → add items
              → optional budget → contextual AI optimisation → review → save / start shopping. AI
              enhances the flow but never blocks manual completion.
            </p>
            <p>
              <strong>F2 — Shopping Mode.</strong> Start from active list → check items → surface
              price intelligence when useful → finish → confirm purchased items. Shopping Mode is
              contextual, not permanent navigation.
            </p>
            <p>
              <strong>F3 — Pantry lifecycle.</strong> Purchased items → Pantry update → quick
              corrections → low-stock / expiry signals → add back to a list when needed.
            </p>
            <p>
              <strong>F4 — Use what I have.</strong> Pantry → contextual recipe → inspect recipe →
              add missing ingredients to a list when needed.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Decision 01 — Store recommendation</h3>
          <EditorialText>
            <p>
              When Shopping Mode begins, IntelliShop recommends the best store based on the
              active basket, total price, item availability and data confidence. The user can
              switch stores or open the full comparison. This is a major evolution from V1&rsquo;s
              raw-data-first price comparison; the recommendation algorithm itself is not claimed
              as production-validated.
            </p>
          </EditorialText>
          <Quote>Decision support first. Supporting evidence remains accessible.</Quote>

          <h3 className={styles.subsectionHeading}>Decision 02 — Optimisation without budget dependency</h3>
          <EditorialText>
            <p>
              &ldquo;Optimise my list&rdquo; remains available even when no budget is set. Without
              a budget, optimisation may use Pantry overlap, duplicate items, quantities, purchase
              history and lower-cost alternatives; when a budget exists, it becomes an explicit
              optimisation constraint. Not all underlying data capabilities are claimed as
              implemented in production — this is approved product/UX behavior.
            </p>
          </EditorialText>
          <Quote>AI supports the task. It does not depend on a separate AI destination.</Quote>

          <h3 className={styles.subsectionHeading}>Remove / swap / add model</h3>
          <ul className={styles.chipList}>
            <li className={styles.chipItem}>Remove — already in Pantry / duplicate</li>
            <li className={styles.chipItem}>Swap — lower-cost alternative / comparable option</li>
            <li className={styles.chipItem}>Add — recurring item / Pantry signal</li>
          </ul>
          <EditorialText>
            <p>
              Recommendations are explicit and reviewable — the user can accept or reject them. AI
              does not silently rewrite the shopping list. This model is a 2026 interaction
              decision, not a finding from the 2025 participant study.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Decision 03 — Purchased → Pantry</h3>
          <EditorialText>
            <p>
              After shopping, purchased items are prepared as a Pantry update by default.
              High-confidence updates can be handled with lightweight confirmation; ambiguous or
              conflicting changes require review.
            </p>
          </EditorialText>
          <Quote>
            Automation should reduce maintenance, not silently create false certainty.
          </Quote>
        </Container>

        <Container>
          <div className={styles.evidenceWide}>
            <div className={styles.evidenceTagRow}>
              <Tag>2026 decision</Tag>
            </div>
            <MediaContainer
              src="/assets/intellishop/intellishop-v2-resolved-flow-decisions.png"
              alt="Resolved flow decisions card: Approved → Specify screens → Wireframe → Interaction review, listing three resolved decisions on store recommendation, budget-independent optimisation, and Pantry updates after purchase."
              width={2592}
              height={660}
              sizes="(min-width: 1024px) 960px, 100vw"
              caption="This artifact records the handoff from approved flow decisions into screen specification and low-fidelity wireframing — it is not final UI."
            />
          </div>
        </Container>

        <Container narrow>
          <div className={styles.calloutBlock}>
            <p className={styles.stackLabel}>Approved IA</p>
            <p className={styles.stackBody}>Home · Lists · Pantry — Shopping Mode contextual.</p>
          </div>
          <EditorialText>
            <p>
              By this point, the redesign had moved from a feature catalogue to a product model,
              from a product model to an IA, and from the IA to explicit user flows. Only then was
              it ready for low-fidelity screen design.
            </p>
          </EditorialText>
        </Container>
      </Section>

      {/* 08 — Low-Fi Validation */}
      <Section id="low-fi-validation" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="08 — Low-Fi Validation"
            title="The first wireframes were not treated as the answer."
          />
          <EditorialText>
            <p>
              Once the product model, IA and core flows were approved, the redesign moved into
              low fidelity. The purpose was deliberately structural — hierarchy, task sequence,
              decision support, contextual intelligence, user control, lifecycle continuity. Final
              colour, typography, imagery and brand styling were deliberately withheld, so the
              product decisions could be challenged before visual polish made weak structures feel
              finished.
            </p>
            <p>
              The first low-fi pass was reviewed against the already-approved Product Reframing,
              Information Architecture, Core User Flows and screen contracts. This was an internal
              design/UX review — not usability testing, user research or participant validation.
              The review concluded: foundation approved, refinement required, no high-fi yet. The
              first pass was useful, but several screens diverged materially from the approved UX
              contract.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>What the review caught</h3>
          <h4 className={styles.findingTitle}>List Detail</h4>
          <EditorialText>
            <p>
              The first version behaved mainly as item management. It was missing the planning
              information and actions required by the approved flow: estimated total, optional
              budget, Pantry signal, Optimise List, Start Shopping.
            </p>
          </EditorialText>
          <h4 className={styles.findingTitle}>Optimisation Review</h4>
          <EditorialText>
            <p>
              The first version had drifted into store allocation — the wrong job. The approved
              product model required explicit Remove / Swap / Add recommendations with rationale
              and individual user control.
            </p>
          </EditorialText>
          <h4 className={styles.findingTitle}>Finish Shopping</h4>
          <EditorialText>
            <p>
              Completion and Pantry update had become conflated. The redesign separated trip
              completion from Pantry update / exception review.
            </p>
          </EditorialText>
          <h4 className={styles.findingTitle}>Pantry</h4>
          <EditorialText>
            <p>
              The first version read too much like an inventory database. The refinement shifted
              priority toward actionable household state: Running Low, Use Soon, Recently Added,
              Use What I Have.
            </p>
          </EditorialText>
          <h4 className={styles.findingTitle}>Compare Stores</h4>
          <EditorialText>
            <p>
              It was initially positioned too strongly in the linear journey. The corrected model
              restored Recommended Store → Shopping Mode as the primary path, with Compare Stores
              remaining secondary evidence / progressive disclosure.
            </p>
          </EditorialText>

          <Quote>
            The low-fi review prevented the redesign from becoming visually polished while still
            carrying the wrong product logic.
          </Quote>

          <h3 className={styles.subsectionHeading}>Refined low-fi evidence</h3>
          <EditorialText>
            <p>Three authentic approved low-fi V2 screens, presented as an editorial sequence:</p>
          </EditorialText>
        </Container>

        <Container>
          <div className={styles.lowfiGrid}>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>Approved low-fidelity V2</Tag>
              </div>
              <MediaContainer
                src="/assets/intellishop/intellishop-lowfi-optimisation-review.png"
                alt="Low-fidelity Review Changes screen listing four suggested changes — Remove Milk, Swap Brand Cereal, Add Dish Soap, Add Paper Towels — each with a rationale and individual accept/reject controls, plus Apply Changes and Keep Original List actions."
                width={390}
                height={812}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                caption="Optimisation Review — explicit, reversible Remove / Swap / Add decisions."
              />
            </div>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>Approved low-fidelity V2</Tag>
              </div>
              <MediaContainer
                src="/assets/intellishop/intellishop-lowfi-recommended-store.png"
                alt="Low-fidelity Recommended Store screen showing FreshMart's estimated total and savings, a 'Why This Store?' explanation, item availability, and a secondary Compare Stores action."
                width={390}
                height={812}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                caption="Recommended Store — recommendation first; comparison remains optional evidence."
              />
            </div>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>Approved low-fidelity V2</Tag>
              </div>
              <MediaContainer
                src="/assets/intellishop/intellishop-lowfi-pantry.png"
                alt="Low-fidelity Pantry screen organised into Running Low, Use Soon and Recently Added sections, with a 'Use What I Have' recipe prompt and a link to all items."
                width={390}
                height={812}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                caption="Pantry — actionable household state before exhaustive inventory."
              />
            </div>
          </div>
        </Container>

        <Container narrow>
          <h3 className={styles.subsectionHeading}>Low-fi approval</h3>
          <ProjectMetadata
            rows={[
              { label: 'Frame width', value: '390px' },
              { label: 'Screens', value: '10' },
              { label: 'Components', value: '23' },
            ]}
          />
          <EditorialText>
            <p>
              These are design-artifact facts, not product-success metrics. The second review
              approved the refined vertical slice: the core planning object was complete, AI
              recommendations were explicit and reversible, Recommended Store led the decision
              with Compare Stores remaining secondary, Shopping Mode stayed contextual, Finish
              Shopping → Pantry Update → Pantry formed a coherent lifecycle, Pantry became
              actionable, and high-fidelity visual styling had not leaked into the structural
              phase.
            </p>
          </EditorialText>
          <div className={styles.evidenceTagRow}>
            <Tag>Low-fi V2 — approved for visual-foundation work</Tag>
          </div>
        </Container>
      </Section>

      {/* 09 — Visual System Evolution */}
      <Section id="visual-system-evolution" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="09 — Visual System Evolution"
            title="Visual design started only after the product structure stopped moving."
          />
          <EditorialText>
            <p>
              Once low fidelity was closed, the redesign deliberately changed focus. The next
              question was not &ldquo;What colours should the new app use?&rdquo; It was &ldquo;How
              should the visual system reinforce the product hierarchy that has already been
              approved?&rdquo;
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>V1 visual learning</h3>
          <EditorialText>
            <p>
              The 2025 project already had documented visual choices — the dissertation documented
              Poppins for selected screens, an H1/H2/H3/Body scale of 48/32/24/16px, Indigo
              (#4B0082) as a primary-button direction, and Silver/Stone/White supporting tones. But
              surviving V1 UI evidence showed implementation drift; the visual system was not
              consistently encoded across screens.
            </p>
          </EditorialText>
          <Quote>
            A visual specification existed, but it had not yet matured into a consistently
            implemented design system.
          </Quote>

          <h3 className={styles.subsectionHeading}>V2 visual direction</h3>
          <div className={styles.calloutBlock}>
            <h4 className={styles.findingTitle} style={{ marginTop: 0 }}>
              IntelliShop V2 — Intelligent Utility
            </h4>
            <ul className={styles.chipList}>
              <li className={styles.chipItem}>Clean</li>
              <li className={styles.chipItem}>Intelligent</li>
              <li className={styles.chipItem}>Precise</li>
              <li className={styles.chipItem}>Calm</li>
              <li className={styles.chipItem}>Trustworthy</li>
            </ul>
            <EditorialText>
              <p>
                The product should feel intelligent because it makes complex shopping decisions
                easier — not because the UI looks futuristic.
              </p>
            </EditorialText>
          </div>

          <h3 className={styles.subsectionHeading}>Brand vs. product UI</h3>
          <Quote>Brand creates recognition. The interface creates confidence.</Quote>
          <div className={styles.evidencePairGrid}>
            <div className={styles.calloutBlock}>
              <p className={styles.stackLabel}>Brand layer</p>
              <ul className={styles.plainList}>
                <li>Kept for onboarding, splash and marketing</li>
                <li>Reserved for selected expressive moments</li>
              </ul>
            </div>
            <div className={styles.calloutBlock}>
              <p className={styles.stackLabel}>Product UI</p>
              <ul className={styles.plainList}>
                <li>Calm neutral surfaces, strong hierarchy</li>
                <li>One clear primary action, semantic status, readable data</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.subsectionHeading}>Colour semantics</h3>
          <EditorialText>
            <p>
              Candidate colours are not arbitrary aesthetic preference — the important evolution
              is that colour has a job:
            </p>
          </EditorialText>
          <div className={styles.stackList}>
            <div>
              <p className={styles.stackLabel}>Indigo</p>
              <p className={styles.stackBody}>Primary user action.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Cyan</p>
              <p className={styles.stackBody}>Contextual intelligence / explanation.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Violet</p>
              <p className={styles.stackBody}>Restrained brand expression.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Neutrals</p>
              <p className={styles.stackBody}>
                Operational surfaces, text, borders and data hierarchy.
              </p>
            </div>
          </div>
          <EditorialText>
            <p>
              Not every candidate value shown in the Visual Foundations artifact was already final
              at this point — the source identifies that page as candidate, requiring design
              review, and later records it as approved with targeted refinements for
              tokenisation.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Typography evolution</h3>
          <EditorialText>
            <p>
              In V1, Poppins was documented for selected screens, with system font elsewhere — the
              hierarchy existed as sizes, but implementation was not consistently semantic across
              the product. In V2, Inter became the single Product UI family, and the system moved
              toward explicit semantic roles rather than screen-specific styling. This is not a
              claim that Inter is aesthetically superior to Poppins — the decision is about
              consistency, readability, systemisation and implementation continuity.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Structural system</h3>
          <EditorialText>
            <p>
              The V2 foundations also formalised spacing based on a 4px unit, component roles,
              semantic borders/states, restrained elevation, and mobile-first accessibility
              considerations.
            </p>
          </EditorialText>
        </Container>

        <Container>
          <div className={styles.evidenceTagRow}>
            <Tag>Candidate visual foundations — 2026</Tag>
          </div>
          <div className={styles.evidenceWide}>
            <MediaContainer
              src="/assets/intellishop/intellishop-visual-foundations-v2.png"
              alt="Visual Foundations V2 document covering direction statement, brand vs product UI, candidate colour system, colour semantics, typography scale, accessibility contrast ratios, and structural foundation candidates."
              width={1044}
              height={4096}
              sizes="(min-width: 1024px) 960px, 100vw"
              caption="This was the candidate system reviewed before final tokenisation; it was not yet the final high-fidelity product UI."
            />
          </div>
        </Container>
      </Section>

      {/* 10 — V1 → V2 Comparison */}
      <Section id="v1-v2-comparison" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="10 — V1 → V2 Comparison"
            title="The visible redesign reflects a deeper change in product thinking."
          />
        </Container>

        <Container>
          <div className={styles.evidencePairGrid}>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>V1 · 2025 — original / reconstructed evidence</Tag>
              </div>
              <MediaContainer
                src="/assets/intellishop/intellishop-v1-dashboard-evidence.png"
                alt="V1 dashboard: a dark hero banner with the IntelliShop logo, a greeting, and four equal-weight feature buttons — To Do a Shopping List, Go to Your Stock, Personalise List, Recipe Suggestion — plus LogOff."
                width={390}
                height={844}
                sizes="(min-width: 640px) 340px, 100vw"
                caption="V1 — a faithful reconstruction from the original 2025 prototype evidence, for direct comparison. This is historical evidence, not an invented &ldquo;bad before screen.&rdquo;"
              />
            </div>
            <div>
              <div className={styles.evidenceTagRow}>
                <Tag>V2 · 2026 — candidate product direction</Tag>
              </div>
              <MediaContainer
                src="/assets/intellishop/intellishop-v2-dashboard-concept.png"
                alt="V2 dashboard reading 'Good evening, Alex,' with a Resume Shopping card for an in-progress trip, the active Weekly Groceries list with budget remaining, and Today's Signals for Running Low, Smart Saving and Use What You Have."
                width={390}
                height={844}
                sizes="(min-width: 640px) 340px, 100vw"
                caption="V2 — the bridge between approved low-fi and later high-fidelity work. Not yet the final V2 screen."
              />
            </div>
          </div>
        </Container>

        <Container narrow>
          <h3 className={styles.subsectionHeading}>What changed</h3>
          <div className={styles.evidencePairGrid}>
            <div>
              <p className={styles.stackLabel}>V1 — feature access</p>
              <ul className={styles.plainList}>
                <li>Feature menu</li>
                <li>Brand occupies operational UI</li>
                <li>Equal-weight actions</li>
                <li>Modules exposed upfront</li>
                <li>AI as a feature</li>
                <li>Stock as a destination</li>
                <li>Recipes as a module</li>
                <li>Static navigation</li>
                <li>Screen-level styling</li>
              </ul>
            </div>
            <div>
              <p className={styles.stackLabel}>V2 — decision support</p>
              <ul className={styles.plainList}>
                <li>Contextual dashboard</li>
                <li>Brand supports the UI</li>
                <li>Prioritised next action</li>
                <li>Capabilities appear contextually</li>
                <li>Intelligence embedded in tasks</li>
                <li>Pantry becomes household state</li>
                <li>&ldquo;Use what I have&rdquo; becomes contextual</li>
                <li>Home responds to product state</li>
                <li>System-driven UI</li>
              </ul>
            </div>
          </div>
        </Container>

        <Container>
          <div className={styles.evidenceTagRow}>
            <Tag>V1 → V2 product evolution</Tag>
          </div>
          <div className={styles.evidenceWide}>
            <MediaContainer
              src="/assets/intellishop/intellishop-v1-v2-evolution-matrix.png"
              alt="Evolution matrix comparing V1 feature-access qualities against V2 decision-support qualities, supporting the written before/after comparison."
              width={1296}
              height={650}
              sizes="(min-width: 1024px) 960px, 100vw"
              caption="This artifact supports the written comparison above; it does not replace it."
            />
          </div>
        </Container>

        <Container narrow>
          <h3 className={styles.subsectionHeading}>The key dashboard shift</h3>
          <div className={styles.evidencePairGrid}>
            <div className={styles.calloutBlock}>
              <p className={styles.stackLabel}>V1 asks</p>
              <p className={styles.stackBody}>&ldquo;Which feature do you want?&rdquo;</p>
            </div>
            <div className={styles.calloutBlock}>
              <p className={styles.stackLabel}>V2 asks</p>
              <p className={styles.stackBody}>&ldquo;What should you do next?&rdquo;</p>
            </div>
          </div>
          <EditorialText>
            <p>
              The V2 dashboard does not require the user to understand IntelliShop&rsquo;s
              internal architecture before receiving value — it interprets the current product
              state and surfaces a relevant next action. This is design rationale, not a claim
              validated by new participants.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Visual change is product change</h3>
          <EditorialText>
            <p>
              The smaller brand presence reflects task priority. The stronger primary action
              reflects decision hierarchy. The Home / Lists / Pantry navigation reflects the
              approved IA. The absence of an AI destination reflects contextual intelligence. The
              Pantry signals reflect household-state thinking. The Resume Shopping state reflects
              lifecycle continuity. The visual redesign is not a cosmetic layer applied after the
              fact — it is the visible consequence of the product model established earlier in
              this case study.
            </p>
          </EditorialText>
        </Container>
      </Section>

      {/* 11 — High-Fidelity Experience */}
      <Section id="high-fidelity-experience" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="11 — High-Fidelity Experience"
            title="The final interface carries the product decisions forward."
          />
          <EditorialText>
            <p>
              High fidelity was deliberately introduced only after product reframing, IA, flows,
              low-fi review, low-fi approval, visual foundations, tokenisation and component-system
              work. The final screens are not an isolated visual redesign — they are the visible
              implementation of decisions established earlier in the process.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>System before screens</h3>
          <EditorialText>
            <p>
              The approved foundations were encoded into reusable Figma variables and styles
              before final screens were propagated.
            </p>
          </EditorialText>
          <ProjectMetadata
            rows={[
              { label: 'Variable collections', value: '1' },
              { label: 'Colour tokens', value: '23' },
              { label: 'Numeric tokens', value: '18' },
              { label: 'Typography styles', value: '10' },
              { label: 'Elevation styles', value: '1' },
            ]}
          />
          <EditorialText>
            <p>
              These are design-system artifact facts, not business/product success metrics.
              Colour was no longer selected per screen. Spacing was no longer invented per screen.
              Typography became semantic. Accessibility remained a component-level gate.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>High-fidelity review process</h3>
          <EditorialText>
            <p>
              High fidelity was propagated in controlled slices rather than styling all screens at
              once. Slice A covered the planning &amp; decision flow (Home, List Detail, Add
              Items, Optimisation Review, Recommended Store); Slice B covered the shopping &amp;
              post-shop flow (Compare Stores, Shopping Mode, Finish Shopping, Pantry Update,
              Pantry). Both slices were reviewed before the full system was approved. The website
              curates the strongest evidence from all ten screens rather than reproducing every
              one.
            </p>
          </EditorialText>
        </Container>

        <Container>
          <h3 className={styles.subsectionHeading}>Plan</h3>
          <div className={styles.evidencePairGrid}>
            <div>
              <MediaContainer
                src="/assets/intellishop/intellishop-hifi-home.png"
                alt="High-fidelity Home screen reading 'Good evening, Alex,' with a Resume Shopping card, the active Weekly Groceries list, and Today's Signals for pantry and savings."
                width={780}
                height={1624}
                sizes="(min-width: 640px) 340px, 100vw"
                caption="Home — the former feature hub becomes state-aware; active shopping, current planning and household signals determine what matters next."
              />
            </div>
            <div>
              <MediaContainer
                src="/assets/intellishop/intellishop-hifi-list-detail.png"
                alt="High-fidelity Weekly Groceries list detail with an estimate, budget remaining, Optimise List and Start Shopping actions, and item rows marked Confirmed or Estimated."
                width={780}
                height={1624}
                sizes="(min-width: 640px) 340px, 100vw"
                caption="List Detail — the shopping list becomes the central planning object; estimate, budget, Pantry context, optimisation and Start Shopping live around the same task."
              />
            </div>
          </div>

          <h3 className={styles.subsectionHeading}>Decide</h3>
          <div className={styles.evidencePairGrid}>
            <div>
              <MediaContainer
                src="/assets/intellishop/intellishop-hifi-recommended-store.png"
                alt="High-fidelity Recommended Store screen for FreshMart with price, savings, availability and confidence, a Shop at FreshMart action, and a Why This Store explanation."
                width={780}
                height={1624}
                sizes="(min-width: 640px) 340px, 100vw"
                caption="Recommended Store — a decision first: best overall match, estimated total, availability, confidence. Comparison remains accessible without becoming mandatory work."
              />
            </div>
            <div>
              <MediaContainer
                src="/assets/intellishop/intellishop-hifi-compare-stores.png"
                alt="High-fidelity Compare Stores screen ranking four nearby stores by price and availability, with FreshMart marked Recommended."
                width={780}
                height={1624}
                sizes="(min-width: 640px) 340px, 100vw"
                caption="Compare Stores — the secondary branch exposes basket-level trade-offs; it supports the recommendation rather than replacing it with a raw price table. Decision support first, evidence on demand."
              />
            </div>
          </div>

          <h3 className={styles.subsectionHeading}>Shop</h3>
          <div className={styles.focalLarge}>
            <MediaContainer
              src="/assets/intellishop/intellishop-hifi-shopping-mode.png"
              alt="High-fidelity Shopping Mode for FreshMart showing collected-versus-remaining progress, aisle-organised items, an in-progress exception action, and a Finish Shopping button."
              width={780}
              height={1624}
              sizes="(min-width: 640px) 400px, 100vw"
              caption="Shopping Mode is a contextual task state, not a fourth permanent navigation destination — prioritising collected/remaining progress, exception actions and one-handed task clarity. These are reviewed interface decisions, not claims of physical in-store usability testing."
            />
          </div>

          <h3 className={styles.subsectionHeading}>Close the loop</h3>
          <div className={styles.evidencePairGrid}>
            <div>
              <MediaContainer
                src="/assets/intellishop/intellishop-hifi-pantry-update.png"
                alt="High-fidelity Update Pantry screen with 11 items updated automatically and 2 items flagged Needs Review with individual Review actions, plus a Done button."
                width={780}
                height={1624}
                sizes="(min-width: 640px) 340px, 100vw"
                caption="Pantry Update — high-confidence purchased items move into household state with minimal effort; ambiguous changes remain visible for review."
              />
            </div>
            <div>
              <MediaContainer
                src="/assets/intellishop/intellishop-hifi-pantry.png"
                alt="High-fidelity Pantry screen organised into Running Low, Use Soon and Recently Added, with a Use What I Have prompt and a link to all items."
                width={780}
                height={1624}
                sizes="(min-width: 640px) 340px, 100vw"
                caption="Pantry no longer treats household stock as a database first — it prioritises Running Low, Use Soon, Recently Added and Use What I Have. This closes the lifecycle: Plan → Decide → Shop → Update → Use."
              />
            </div>
          </div>
        </Container>

        <Container narrow>
          <h3 className={styles.subsectionHeading}>Full high-fidelity review</h3>
          <ProjectMetadata
            rows={[
              { label: 'Screens', value: '10' },
              { label: 'Component instances', value: '88' },
              { label: 'Raw colours', value: '0' },
              { label: 'Unlinked text styles', value: '0' },
              { label: 'Out-of-bounds elements', value: '0' },
              { label: 'Untargeted action texts', value: '0' },
            ]}
          />
          <EditorialText>
            <p>
              These are programmatic/design-system QA facts — not usability, user-success,
              engagement or commercial-outcome metrics.
            </p>
          </EditorialText>
          <div className={styles.evidenceTagRow}>
            <Tag>Approved for controlled prototype propagation</Tag>
          </div>

          <h3 className={styles.subsectionHeading}>What the full review confirmed</h3>
          <div className={styles.stackList}>
            <div>
              <p className={styles.stackLabel}>Action hierarchy</p>
              <p className={styles.stackBody}>
                Indigo owns user action. Each screen has zero or one primary CTA.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Navigation integrity</p>
              <p className={styles.stackBody}>
                Permanent bottom navigation remains limited to Home, Lists, Pantry. Task screens
                remain contextual.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Intelligence semantics</p>
              <p className={styles.stackBody}>
                Cyan supports rationale, signals and contextual intelligence — it does not become
                a competing primary-action colour.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Status semantics</p>
              <p className={styles.stackBody}>
                Status colours remain paired with text/labels; colour is never the sole carrier of
                meaning.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Typography &amp; data</p>
              <p className={styles.stackBody}>
                Inter remains the single Product UI family and semantic hierarchy is preserved
                across tasks.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Brand restraint</p>
              <p className={styles.stackBody}>Violet does not become generic operational UI chrome.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 12 — Responsive Validation */}
      <Section id="responsive-validation" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="12 — Responsive Validation"
            title="Validation focused on system integrity, not invented platform coverage."
          />
          <div className={styles.evidenceTagRow}>
            <Tag>Mobile layout &amp; interaction validation</Tag>
          </div>
          <EditorialText>
            <p>
              The canonical IntelliShop product screens are mobile-first 390px designs — no
              tablet or desktop IntelliShop product experience exists in the source evidence, so
              this section does not claim one. The approved low-fi and high-fi vertical slice uses
              a consistent 390px mobile viewport, with a structural system of 44px minimum touch
              targets and 56px shopping-row targets where appropriate.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Touch targets</h3>
          <EditorialText>
            <p>
              The final high-fidelity review closed touch-target issues before approval: header
              back controls, close controls, menu affordances, Done, Add Items, the custom-item
              action and View all were brought to 44px targets, with shopping task rows using
              larger targets appropriate to the active task. Accessibility and interaction
              constraints were treated as system rules rather than end-of-process polish.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Safe-area / inset correction</h3>
          <EditorialText>
            <p>
              The prototype was re-audited after a header horizontal safe-area correction affecting
              List Detail, Add Items, Optimisation Review, Recommended Store, Compare Stores and
              Shopping Mode.
            </p>
          </EditorialText>
          <ProjectMetadata
            rows={[
              { label: 'Navigation reactions intact', value: '27 / 27' },
              { label: 'Regressions recorded', value: '0' },
              { label: 'Prototype screens intact', value: '10 / 10' },
            ]}
          />
          <EditorialText>
            <p>This is technical prototype QA, not user testing.</p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Prototype QA</h3>
          <ProjectMetadata
            rows={[
              { label: 'Prototype screens', value: '10' },
              { label: 'Navigation reactions', value: '27' },
              { label: 'Bottom-nav hit areas', value: '6' },
              { label: 'Invalid destinations', value: '0' },
              { label: 'Source-page reactions', value: '0' },
              { label: 'Prototype-only screens invented', value: '0' },
            ]}
          />
          <EditorialText>
            <p>These are navigation-prototype QA facts, not usability metrics.</p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Connected coverage</h3>
          <div className={styles.stackList}>
            <div>
              <p className={styles.stackLabel}>Planning</p>
              <p className={styles.stackBody}>
                Home → List Detail → Add Items / Optimisation Review / Recommended Store.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Resume</p>
              <p className={styles.stackBody}>Home → Shopping Mode.</p>
            </div>
            <div>
              <p className={styles.stackLabel}>Store decision</p>
              <p className={styles.stackBody}>
                Recommended Store → Compare Stores → Shopping Mode, or Recommended Store → Shopping
                Mode directly.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Post-shop</p>
              <p className={styles.stackBody}>
                Shopping Mode → Finish Shopping → Pantry Update → Pantry.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Permanent navigation</p>
              <p className={styles.stackBody}>Home ↔ Lists ↔ Pantry.</p>
            </div>
          </div>

          <h3 className={styles.subsectionHeading}>Intentionally static controls</h3>
          <EditorialText>
            <p>
              Some visible controls intentionally remained static because corresponding
              states/screens were outside the approved vertical slice — Create new list, Scan,
              individual optimisation accepted/rejected states, exception-detail states, Pantry
              Review detail, Recipe result, and All Items. This is an explicit prototype-scope
              boundary, not broken functionality.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Manual validation limit</h3>
          <EditorialText>
            <p>
              The technical/API audit could verify reaction structure and destinations, but could
              not simulate a human click-through. Technical navigation QA passed, while manual
              Present-mode review remained a separate validation step in the source artifact —
              this is not the same as being fully usability tested.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>Website responsiveness</h3>
          <EditorialText>
            <p>
              Separately from the product-design evidence above, the portfolio implementation
              itself presents these mobile screens responsibly across desktop, tablet and mobile
              viewports. That is website responsive implementation — not evidence that IntelliShop
              itself has desktop or tablet product designs.
            </p>
          </EditorialText>
        </Container>
      </Section>

      {/* 13 — Key Design Decisions */}
      <Section id="key-design-decisions" spacing="lg">
        <Container narrow>
          <SectionHeader
            eyebrow="13 — Key Design Decisions"
            title="The redesign is defined more by what changed structurally than by what changed visually."
          />
          <EditorialText>
            <p>The six strongest decisions already evidenced across this case study:</p>
          </EditorialText>

          <h3 className={styles.findingTitle}>1. From features to outcomes</h3>
          <EditorialText>
            <p>
              V1 exposed product modules. V2 organises the experience around planning,
              decision-making, shopping and household state.
            </p>
            <p>
              <strong>Why it matters:</strong> the user no longer needs to understand
              IntelliShop&rsquo;s feature architecture before receiving value.
            </p>
          </EditorialText>

          <h3 className={styles.findingTitle}>2. AI as infrastructure</h3>
          <EditorialText>
            <p>
              AI moved from a named destination toward contextual support inside real tasks —
              optimisation, missing-item suggestions, lower-cost alternatives, basket/store
              decisions.
            </p>
            <p>
              <strong>Why it matters:</strong> intelligence supports the task rather than becoming
              another task.
            </p>
          </EditorialText>

          <h3 className={styles.findingTitle}>3. Recommendation before comparison</h3>
          <EditorialText>
            <p>
              V1 emphasised raw price comparison. V2 recommends the best basket/store match first
              and exposes comparison as optional evidence.
            </p>
            <p>
              <strong>Why it matters:</strong> the product reduces decision work while preserving
              transparency and user choice.
            </p>
          </EditorialText>

          <h3 className={styles.findingTitle}>4. Shopping Mode stays contextual</h3>
          <EditorialText>
            <p>
              Shopping Mode was deliberately not turned into a fourth permanent tab — it begins
              from an active list and can be resumed from relevant product states.
            </p>
            <p>
              <strong>Why it matters:</strong> navigation reflects persistent product objects;
              temporary task modes remain contextual.
            </p>
          </EditorialText>

          <h3 className={styles.findingTitle}>5. Automation with review</h3>
          <EditorialText>
            <p>
              Purchased items can update Pantry with lightweight handling for high-confidence
              changes; ambiguous exceptions remain reviewable.
            </p>
            <p>
              <strong>Why it matters:</strong> automation reduces maintenance without pretending
              uncertainty does not exist.
            </p>
          </EditorialText>

          <h3 className={styles.findingTitle}>6. Pantry as household state</h3>
          <EditorialText>
            <p>
              V1 Stock behaved mainly as an inventory destination. V2 Pantry prioritises Running
              Low, Use Soon, Recently Added and Use What I Have.
            </p>
            <p>
              <strong>Why it matters:</strong> stored data becomes actionable product context.
            </p>
          </EditorialText>
        </Container>
      </Section>

      {/* 14 — Outcome & Reflection */}
      <Section id="outcome-reflection" spacing="lg" variant="raised">
        <Container narrow>
          <SectionHeader
            eyebrow="14 — Outcome & Reflection"
            title="The strongest outcome was learning to redesign the product model, not just the interface."
          />

          <h3 className={styles.subsectionHeading}>Outcome</h3>
          <EditorialText>
            <p>
              No conversion, retention, download, revenue, market-adoption, reduced-spend,
              reduced-waste, task-completion or usability-success-rate claims are made here — none
              were measured. The redesign produced a genuine product-design outcome instead:
            </p>
          </EditorialText>
          <ul className={styles.plainList}>
            <li>A critically reassessed 2025 product</li>
            <li>A reframed 2026 product model</li>
            <li>A clearer IA</li>
            <li>Explicit core flows</li>
            <li>An internally reviewed and approved low-fi vertical slice</li>
            <li>A semantic visual system</li>
            <li>Reusable final tokens/components</li>
            <li>10 approved high-fidelity screens</li>
            <li>A connected navigation prototype</li>
            <li>Technical prototype QA</li>
          </ul>

          <h3 className={styles.subsectionHeading}>What changed in my practice</h3>
          <EditorialText>
            <p>
              In 2025, I was often designing capabilities. In 2026, I became more focused on the
              relationship between user intent, product state, information architecture, system
              behaviour and interface hierarchy.
            </p>
            <p>
              I learned that adding intelligence does not mean adding an &ldquo;AI feature.&rdquo;
              Often the stronger design is to make intelligence contextual and almost
              infrastructural.
            </p>
            <p>
              I learned to separate evidence, observation, hypothesis, decision and validation,
              rather than allowing later reasoning to masquerade as earlier research.
            </p>
            <p>
              I learned to challenge my own work. The value of this redesign is not that the
              university project was &ldquo;bad.&rdquo; It is that the earlier project gave me
              enough real material to see how my thinking had matured.
            </p>
            <p>
              I learned that visual consistency is not created by documenting colours and font
              sizes. It comes from encoding semantic decisions into reusable systems.
            </p>
          </EditorialText>

          <h3 className={styles.subsectionHeading}>What I would validate next</h3>
          <div className={styles.stackList}>
            <div>
              <p className={styles.stackLabel}>Scanner mechanics</p>
              <p className={styles.stackBody}>
                Camera/barcode permissions, failure recovery and unsupported products.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Price confidence</p>
              <p className={styles.stackBody}>
                Real retailer data freshness, coverage and wording when information is incomplete.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Pantry quantity model</p>
              <p className={styles.stackBody}>
                How automatic quantity inference behaves after partial use, substitutions and
                manual corrections.
              </p>
            </div>
            <div>
              <p className={styles.stackLabel}>Recipe ranking</p>
              <p className={styles.stackBody}>
                How &ldquo;Use What I Have&rdquo; balances ingredient coverage, expiry, preferences
                and missing-item effort.
              </p>
            </div>
          </div>
          <EditorialText>
            <p>
              And above all: real user validation of the redesigned 2026 flows, before treating
              these product decisions as validated user outcomes.
            </p>
          </EditorialText>

          <Quote>
            Revisiting IntelliShop showed me that growth as a Product Designer isn&rsquo;t measured
            by how different a new interface looks. It shows up in the questions I ask before
            drawing it — what the user is trying to accomplish, what the product should decide,
            what the system should explain, and where the user must stay in control.
          </Quote>

          <div className={styles.calloutBlock}>
            <EditorialText>
              <p>
                The interactive prototype is contained within the main IntelliShop Figma project,
                alongside the broader design evidence — unlike LUFI, it isn&rsquo;t maintained as a
                separate prototype file.
              </p>
            </EditorialText>
            <p className={styles.stackBody}>
              <TextLink href="https://www.figma.com/design/VZj2AU8kOJqYvyjp8AvWQa/IntelliShop-%E2%80%94-Product-Redesign-2026">
                View design evidence and prototype in Figma
              </TextLink>
            </p>
          </div>

          <CaseStudyNavigation next={{ label: 'AI Bedtime Story', href: '/work/storyteller' }} />
        </Container>
      </Section>
    </>
  );
}
