import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary';

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ children, variant = 'primary', className, ...rest }: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  if ('href' in rest && rest.href) {
    // Narrowed to ButtonAsLink here (href is guaranteed a non-empty string).
    // Destructuring it out keeps that non-optional `string` type intact for
    // both the native <a> and next/link's Link, instead of spreading the
    // whole (possibly-undefined-href) rest object — which is what produced
    // the `Url | undefined` mismatch against Link's required `href: Url`.
    const { href, ...linkRest } = rest;
    const isExternal = href.startsWith('http');

    if (isExternal) {
      return (
        <a className={classes} href={href} target="_blank" rel="noreferrer" {...linkRest}>
          {children}
          <span className="visually-hidden"> (opens in new tab)</span>
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
