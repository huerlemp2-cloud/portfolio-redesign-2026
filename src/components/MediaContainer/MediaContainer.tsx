import Image from 'next/image';
import { ReactNode } from 'react';
import { ImageLightbox } from '@/components/ImageLightbox';
import styles from './MediaContainer.module.css';

type MediaContainerProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional caption rendered via the Caption component below the media. */
  caption?: ReactNode;
  priority?: boolean;
  /** Responsive `sizes` hint for next/image — defaults to full-bleed. Override
   *  when the media sits in a column narrower than the viewport at wider
   *  breakpoints (e.g. a supporting-column screenshot). */
  sizes?: string;
};

// Every case-study evidence image goes through MediaContainer (CP9.1: 71
// call sites across LUFI/IntelliShop/AI Bedtime Story, confirmed by
// search — Home, About, and Prototypes never use this component), so
// wrapping it here makes case-study evidence expandable by default
// without a prop and without touching any of those 71 call sites, and
// without pulling the lightbox into Home/Selected Work by accident.
export function MediaContainer({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  sizes = '100vw',
}: MediaContainerProps) {
  return (
    <figure className={styles.figure}>
      <ImageLightbox src={src} alt={alt} width={width} height={height}>
        <span className={styles.frame}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes={sizes}
            className={styles.image}
          />
        </span>
      </ImageLightbox>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
