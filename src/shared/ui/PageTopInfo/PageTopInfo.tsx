import { Container } from "../Container";
import styles from "./PageTopInfo.module.scss";

interface PageTopInfoProps {
  title: string;
  description: string;
}

export function PageTopInfo({ title, description }: PageTopInfoProps) {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </Container>
    </div>
  );
}
