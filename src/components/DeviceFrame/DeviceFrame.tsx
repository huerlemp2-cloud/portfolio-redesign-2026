import Image from 'next/image';
import styles from './DeviceFrame.module.css';

type DeviceVariant = 'phone-dark' | 'phone-light' | 'laptop';

type DeviceFrameProps = {
  variant: DeviceVariant;
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Generic premium device chrome — a presentation layer only. It never
 * modifies, crops meaningfully, or fabricates the screenshot it wraps;
 * every pixel inside `src` is an authentic, unaltered project asset.
 * No Apple (or other) trademarks — bezels/materials are original CSS.
 */
export function DeviceFrame({
  variant,
  src,
  alt,
  width,
  height,
  sizes,
  priority,
  className,
}: DeviceFrameProps) {
  const classes = [styles.device, styles[variant], className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.bezel}>
        {variant === 'laptop' ? <div className={styles.camera} aria-hidden="true" /> : null}
        <div className={styles.screen}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            priority={priority}
            className={styles.image}
          />
        </div>
      </div>
      {variant === 'laptop' ? <div className={styles.deck} aria-hidden="true" /> : null}
      {variant !== 'laptop' ? <div className={styles.notch} aria-hidden="true" /> : null}
    </div>
  );
}
