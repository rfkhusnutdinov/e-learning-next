import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";

import { TestimonialCard } from "../TestimonialCard";
import styles from "./TestimonialsSection.module.scss";

const testimonials = [
  {
    text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    authorImage: "/images/user-sarah.png",
    authorName: "Sarah L",
    link: "#",
  },
  {
    text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    authorImage: "/images/user-jason.png",
    authorName: "Jason M",
    link: "#",
  },
  {
    text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    authorImage: "/images/user-emily.png",
    authorName: "Emily R",
    link: "#",
  },
  {
    text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    authorImage: "/images/user-michael.png",
    authorName: "Michael K",
    link: "#",
  },
];

export function TestimonialsSection() {
  return (
    <section className={styles.root} id="testimonials">
      <Container>
        <div className={styles["top"]}>
          <div className={styles["top-content"]}>
            <h2 className={styles["top-title"]}>Our Testimonials</h2>
            <p className={styles["top-text"]}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet
              et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla
              feugiat senectus in.
            </p>
          </div>
          <Button href="#" className={styles["top-button"]} variant="secondary">
            View All
          </Button>
        </div>
        <ul className={styles.list}>
          {testimonials.map((testimonial) => (
            <li className={styles["list-item"]} key={testimonial.authorName}>
              <TestimonialCard
                text={testimonial.text}
                authorImage={testimonial.authorImage}
                authorName={testimonial.authorName}
                link={testimonial.link}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
