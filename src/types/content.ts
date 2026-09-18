// Shared structural types for case-study content, to be populated with
// real, source-verified content at each project's checkpoint (4 / 5 / 6).
// No placeholder copy is modeled here beyond field shapes.

export type ProjectSlug = 'lufi' | 'intellishop' | 'storyteller';

export type ProjectStatus = 'shipped' | 'prototyped' | 'approved-design' | 'roadmap';

export type ProjectSummary = {
  slug: ProjectSlug;
  title: string;
  role: string;
  year: string;
  status: ProjectStatus;
  coverImageSrc: string;
  coverImageAlt: string;
  tags: string[];
};

export type MetadataRow = {
  label: string;
  value: string;
};

export type PrototypeLink = {
  label: string; // e.g. "View interactive prototype" (brief section 10)
  href: string;
};
