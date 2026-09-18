import { HTMLAttributes, ReactNode } from 'react';
import styles from './Section.module.css';

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  /** Visual background variant. 'raised' is used sparingly to separate sections
   *  without introducing cards/shadows everywhere. */
  variant?: 'default' | 'raised' | 'inverse';
  /** Vertical rhythm size. */
  spacing?: 'sm' | 'md' | 'lg';
};

export function Section({
  children,
  variant = 'default',
  spacing = 'lg',
  className,
  ...rest
}: SectionProps) {
  const classes = [styles.section, styles[variant], styles[`spacing-${spacing}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  );
}
