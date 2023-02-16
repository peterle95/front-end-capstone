import React from "react";
import {Link} from 'react-router-dom';
import styles from '../.module.css';

function Header() {
  return (
    <>
      <header className={styles.HeaderContainer}>
        <section className={styles.HeaderMain}>
        <section className={styles.HeaderLeftSection}>
          <h1 className={styles.HeaderHeading}>Little Lemon</h1>
          <h2 className={styles.HeaderSubtext}>Chicago</h2>
          <h4 className={styles.HeaderText}>We are a family owned Mediterranean restaurant, focused on traditionalrecipes served with a modern twist.</h4>
          <Link to="/bookingpage"><button className={styles.HeaderButton}><h2 className={styles.HeaderButtonText}>Reserve a Table</h2></button></Link>
        </section>

        <section>
        <img className={styles.HeaderImage} src={require('../images/restaurantfood.jpg')}/>
        </section>
        </section>
      </header>
    </>
  );
}

export default Header;
