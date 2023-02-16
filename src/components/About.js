import React from 'react';
import styles from '../.module.css';

function About() {
    return(
        <>
        <hr />
        <header className={styles.AboutSection}>

            <section className={styles.AboutLeftSection}>
                <h1 className={styles.AboutHeading}>Little Lemon</h1>
                <h3 className={styles.AboutSubHeading}>Chicago</h3>
                <p className={styles.AboutSubtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Qui in excepteur cupidatat tempor esse proident officia aliqua officia quis pariatur ut ullamco. Sint deserunt labore et fugiat ex do sunt. Esse mollit fugiat exercitation consequat.</p>
                <p className={styles.AboutSubtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>

            <figure>
                <img className={styles.AboutImageA} src={require('../images/MarioAdrianA.jpg')} />
                <img className={styles.AboutImageB} src={require('../images/MarioAdrianB.jpg')} />
            </figure>
        </header>
            <hr />
        </>
    );
}

export default About;