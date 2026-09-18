import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { SkipLink } from '@/components/SkipLink';
import { rootMetadata } from '@/lib/metadata';
import './globals.css';

// Inter remains the base typeface for functional UI/body/nav across the
// whole portfolio. Fraunces is the editorial serif introduced at
// Checkpoint 8A (Visual Master) — used only by Home's hero headline and
// Selected Work titles for now; other pages keep their existing Inter-only
// treatment until they receive the same visual pass.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
