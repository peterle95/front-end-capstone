import React, { useEffect } from "react";
import { MdDeliveryDining } from "react-icons/md";
import styles from "../.module.css";

function MainCard({ allData }) {
  return (
    <>
      {allData.map((items) => {
        const { id, image, name, price, description, order } = items;
        return (
          <section key={id} className={styles.MainCardSection}>
            <img src={image} className={styles.MainCardImage} />
            <section className={styles.MainCardNamePrice}>
              <h2 className={styles.MainCardName}>{name}</h2>
              <h2 className={styles.MainCardPrice}>{price}</h2>
            </section>
              <h3 className={styles.MainCardDescription}>{description}</h3>
              <h3 className={styles.MainCardOrder}>
                {order} <MdDeliveryDining className={styles.MainCardDeliveryIcon} />
              </h3>
          </section>
        );
      })}
    </>
  );
}

export default MainCard;
