import Image from "next/image";

import { Button } from "@/shared/ui/Button";

import styles from "./TestimonialCard.module.scss";

interface TestimonialCardProps {
  authorName: string;
  authorImage: string;
  text: string;
  link: string;
}

export function TestimonialCard({ authorName, authorImage, text, link }: TestimonialCardProps) {
  return (
    <div className={styles.root}>
      <p className={styles.text}>{text}</p>
      <div className={styles.bottom}>
        <div className={styles.author}>
          <Image
            className={styles["author-avatar"]}
            src={authorImage}
            alt={authorName}
            width={60}
            height={60}
          />
          <span className={styles["author-name"]}>{authorName}</span>
        </div>
        <Button href={link} className={styles["bottom-button"]} variant="tertiary">
          Read Full Story
        </Button>
      </div>
    </div>
  );
}
