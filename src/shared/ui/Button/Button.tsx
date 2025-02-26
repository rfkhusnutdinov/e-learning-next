import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

import { combineClasses } from "@/shared/lib";

import styles from "./Button.module.scss";

interface ButtonProps {
  href?: Url;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

export function Button({ href, className, variant = "primary", children }: ButtonProps) {
  const buttonClasses = combineClasses(
    styles.root,
    {
      [styles["root--primary"]]: variant === "primary",
      [styles["root--secondary"]]: variant === "secondary",
      [styles["root--tertiary"]]: variant === "tertiary",
    },
    className
  );

  return href ? (
    <Link className={buttonClasses} href={href}>
      {children}
    </Link>
  ) : (
    <button className={buttonClasses}>{children}</button>
  );
}
