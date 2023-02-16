import React from "react";
import Stars from "./Stars";
import styles from "../.module.css";

function TestimonialsCard({ content }) {
  return (
    <>
      <section className={styles.TestimonialsCardContainer}>
        {content.map((items) => {
          const { id, image, name, comment, rating } = items;
          return (
            <>
              <section key={id} className={styles.TestimonialsCardSection}>
                <img src={image} className={styles.TestimonialsCardImage} />
                <h2 className={styles.TestimonialsCardName}>{name}</h2>
                <h3 className={styles.TestimonialsCardComment}>{comment}</h3>
                <h3 className={styles.TestimonialsCardRating}>
                  <Stars rating={rating} />
                </h3>
              </section>
            </>
          );
        })}
      </section>
    </>
  );
}

export default TestimonialsCard;
