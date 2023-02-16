import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";
import styles from "../.module.css";

function ConfirmedBooking() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Nav />
      <section className={styles.ConfirmedSection}>
        <img
          src={require("../images/confirmation.jpg")}
          className={styles.ConfirmedImage}
        />
        <section className={styles.ConfirmedSectionInner}>
          <FaThumbsUp className={styles.ConfirmedThumbsUpIcon} />
          <h1 className={styles.ConfirmedText}>
            Thank You {location.state.name} ! Your Booking has been confirmed.
          </h1>
          <h3>
            We have sent you an email at {location.state.email} and an SMS on{" "}
            {location.state.contact}.
          </h3>
          <h2>
            We look forward to your visit on {location.state.date}{" "}
            <IoIosRestaurant className={styles.ConfirmedRestaurantIcon} />
          </h2>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default ConfirmedBooking;
