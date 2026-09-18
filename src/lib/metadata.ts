import type { Metadata } from 'next';
import { siteConfig } from './site-config';

/**
 * Per-route metadata builder. Every page passes its own accurate
 * title/description — see each route's buildMetadata() call.
 */
export function buildMetadata(input: {
  title: string;
  description?: string;
  path?: string; // e.g. '/work/lufi'
}): Metadata {
  const description =
    input.description ??
    `${siteConfig.name} — ${siteConfig.positioning}.`;

  const url = input.path ? `${siteConfig.url}${input.path}` : siteConfig.url;

  return {
    title: input.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: input.title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      // No OG image asset exists in the project yet (no shared/profile
      // imagery has been supplied) — omitted rather than fabricated.
      // Add one under public/assets/shared/ when available.
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Product Designer · AI & Intelligent Experiences`,
    template: `%s — ${siteConfig.name}`,
  },
  description: `${siteConfig.name} — ${siteConfig.positioning}.`,
  metadataBase: new URL(siteConfig.url),
};
