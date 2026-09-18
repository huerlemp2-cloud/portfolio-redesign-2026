'use client';

import { useEffect, useId, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import Image from 'next/image';
import styles from './ImageLightbox.module.css';

type ImageLightboxProps = {
  /** Original asset path — used for both the in-viewer image and the
   *  "Open original size" link. Never altered, resized, or reprocessed. */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** The already-rendered thumbnail (MediaContainer's own <Image>) —
   *  ImageLightbox only adds the trigger/affordance around it, it never
   *  re-renders or replaces the thumbnail itself. */
  children: ReactNode;
};

/**
 * Trigger + native <dialog> full-screen viewer for a single piece of
 * case-study evidence. Deliberately its own small client component so the
 * case-study pages that use it (via MediaContainer) stay server
 * components — only this interactive boundary ships JS.
 */
export function ImageLightbox({ src, alt, width, height, children }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  // The dialog's own full-size <Image> is only mounted after first open —
  // with 71 evidence images across the case studies, always rendering a
  // second full-resolution <Image> per thumbnail (even inside a closed,
  // display:none dialog) is an avoidable network/DOM cost this avoids
  // rather than relying on lazy-loading behaving consistently for
  // display:none content across browsers.
  const [hasOpened, setHasOpened] = useState(false);

  // Native <dialog> + showModal() gives correct modal semantics for free:
  // background content becomes inert, Escape closes, focus moves into the
  // dialog automatically. We only add: focus restoration on close, and
  // click-outside-the-content-to-close (the dialog element itself is the
  // full-viewport backdrop).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function handleClose() {
      triggerRef.current?.focus();
      if (styles.bodyLock) {
        document.body.classList.remove(styles.bodyLock);
      }
    }
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, []);

  function openViewer() {
    setHasOpened(true);
    dialogRef.current?.showModal();
    if (styles.bodyLock) {
      document.body.classList.add(styles.bodyLock);
    }
  }

  function closeViewer() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDivElement>) {
    // .dialogInner fills the full viewport, so a click on empty modal
    // space (not the image, Close, or the original-size link) targets
    // .dialogInner itself — that's the actual "backdrop" a user can
    // click, not the <dialog> element, which .dialogInner covers
    // completely.
    if (event.target === event.currentTarget) {
      closeViewer();
    }
  }

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className={styles.trigger}
        onClick={openViewer}
        aria-haspopup="dialog"
      >
        {children}
        <span className={styles.expandBadge} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
            <path
              d="M9 4H4v5M15 4h5v5M4 15v5h5M20 15v5h-5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="visually-hidden">{`View larger — ${alt}`}</span>
      </button>

      <dialog ref={dialogRef} className={styles.dialog} aria-labelledby={titleId}>
        <div className={styles.dialogInner} onClick={handleBackdropClick}>
          <p id={titleId} className="visually-hidden">
            {alt}
          </p>
          <button type="button" className={styles.closeButton} onClick={closeViewer}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
            <span className="visually-hidden">Close</span>
          </button>

          <div className={styles.imageWrap}>
            {hasOpened ? (
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="95vw"
                className={styles.fullImage}
              />
            ) : null}
          </div>

          <a href={src} target="_blank" rel="noreferrer" className={styles.originalLink}>
            View original size
            <span className="visually-hidden"> (opens the original image in a new tab)</span>
          </a>
        </div>
      </dialog>
    </>
  );
}
