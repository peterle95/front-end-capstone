import React, { useState, useEffect } from "react";
import MainCard from "./MainCard";
import MainData from "./MainData";
import styles from "../.module.css";

function Main() {
  const [allData, setAllData] = useState(MainData);

  const fetchMain = async (url) => {
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      if (jsonData.length > 0) {
        setAllData(jsonData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMain(allData);
  }, []);

  return (
    <>
      <header>
        <section className={styles.MainSection}>
          <h1 className={styles.MainHeading}>This Week's Specials!</h1>
          <button className={styles.MainHeadingButton}>
            <h2 className={styles.MainHeadingButtonText}>Online Menu</h2>
          </button>
        </section>

        <section className={styles.MainCardContainer}>
          <MainCard allData={allData} />
        </section>
      </header>
    </>
  );
}

export default Main;
