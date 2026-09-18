// Structural site configuration only — labels here are navigation/route
// labels, not page copy. Case-study content is written per-page at its
// own checkpoint (4 / 5 / 6), never improvised here.

export const siteConfig = {
  name: 'Huerlem Peters',
  // Full positioning string as given in the brief — used in <title>
  // templates and metadata.
  positioning: 'Product Designer | AI & Intelligent Experiences | Software Engineering',
  // Shorter footer-specific line, given verbatim in the Checkpoint 2 brief
  // (section 4) — kept separate from `positioning` rather than truncating
  // it programmatically.
  positioningShort: 'Product Designer · AI & Intelligent Experiences',
  url: 'https://huerlempeters.com', // PLACEHOLDER — replace once the redesign is deployed
  email: 'huerlemp2@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/huerlem-peters-b49220207/',
    // Confirmed as an existing real professional link — present in both the
    // legacy site's Contact section and the new CV's header.
    github: 'https://github.com/Huerlem',
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

// Primary nav — desktop and mobile share this list. Deliberately does NOT
// expose every case study as a top-level item (brief section 1).
export const primaryNav: NavItem[] = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
  { label: 'Prototypes', href: '/prototypes' },
  { label: 'Contact', href: '/contact' },
];

// Work / project hierarchy — order encodes flagship-depth-first hierarchy
// (LUFI > IntelliShop > Storyteller). Used for in-page work listings, not
// the primary nav.
export const workNav: NavItem[] = [
  { label: 'LUFI', href: '/work/lufi' },
  { label: 'IntelliShop', href: '/work/intellishop' },
  { label: 'AI Bedtime Story', href: '/work/storyteller' },
];
