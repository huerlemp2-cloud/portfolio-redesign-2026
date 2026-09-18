import styles from './SkipLink.module.css';

/**
 * Visually hidden until focused. Must be the first focusable element in
 * <body> so keyboard users can bypass the header nav. Targets the
 * `#main-content` id set on <main> in the root layout.
 */
export function SkipLink() {
  return (
    <a href="#main-content" className={styles.link}>
      Skip to main content
    </a>
  );
}
