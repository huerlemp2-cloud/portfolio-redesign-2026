import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { ContactCTA } from '@/components/ContactCTA';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Contact',
  path: '/contact',
  description:
    'Get in touch with Huerlem Peters to discuss Product Design, AI and intelligent product opportunities.',
});

// Real content as of Checkpoint 7. CV asset added at CP9.1
// (public/assets/cv/Huerlem-Peters-Product-Designer-CV.pdf) — ContactCTA's
// existing cvHref prop is now used to render the Download CV action.
export default function ContactPage() {
  return (
    <Section spacing="lg">
      <Container narrow>
        {/* ContactCTA renders its own h2 ("Let's talk") — this page needs
            exactly one h1 for document structure/SEO without changing the
            visual design, so it's visually hidden rather than duplicated
            on screen. */}
        <h1 className="visually-hidden">Contact</h1>
        <ContactCTA
          title="Let's talk"
          description="Open to discussing Product Design, AI and intelligent product opportunities."
          cvHref="/assets/cv/Huerlem-Peters-Product-Designer-CV.pdf"
        />
      </Container>
    </Section>
  );
}
