import { HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.css';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Narrow container for editorial reading-width content (case-study prose). */
  narrow?: boolean;
};

export function Container({ children, narrow = false, className, ...rest }: ContainerProps) {
  const classes = [styles.container, narrow ? styles.narrow : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
