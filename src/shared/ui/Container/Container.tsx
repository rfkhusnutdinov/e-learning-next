import { combineClasses } from "@/shared/lib";

import styles from "./Container.module.scss";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return <div className={combineClasses(styles.root, className)}>{children}</div>;
}
