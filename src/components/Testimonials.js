import React, { useState, useEffect } from "react";
import TestimonialsCard from "./TestimonialsCard";
import AllTestimonials from "./TestimonialsData";
import styles from "../.module.css";

function Testimonials() {
  const [data, setData] = useState(AllTestimonials);

  const fetchTestimonialsData = async (data) => {
    try {
      const res = await fetch(data);
      const resData = await res.json();
      if (resData.length > 0) {
        console.log(data);
        setData(resData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTestimonialsData(data);
  }, []);

  return (
    <>
      <section className={styles.TestimonialsSection}>
        <h1 className={styles.TestimonialsHeading}>Testimonials</h1>
        <TestimonialsCard content={data} />
      </section>
    </>
  );
}

export default Testimonials;
