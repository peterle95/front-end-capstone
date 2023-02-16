import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../.module.css';

function Footer() {
    return(
        <>
            <footer className={styles.FooterStyling}>
                <Link to='/home' className={styles.FooterLogo}><img src={require('../images/FooterLogo.png')} /></Link>

                <section className={styles.LinksStyling}>
                        <div>
                        <ul>Drawer Navigation</ul>
                        <Link to="/home"><li>Home</li></Link>
                        <Link to="/home"><li>About</li></Link>
                        <Link to="/home"><li>Menu</li></Link>
                        <Link to="/bookingpage"><li>Reservations</li></Link>
                        <Link to="/home"><li>Order Online</li></Link>
                        <Link to="/home"><li>Login</li></Link>
                        </div>

                        <div>
                        <ul>Contact</ul>
                        <li>12 Special Olympics Drive, </li>
                        <li>Chicago, IL 60605, USA</li>
                        <li>+1-7489-448-654</li>
                        <li>contact@littlelemon.com</li>
                        </div>

                        <div>
                        <ul>Social Media Links</ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Pinterest</li>
                        <li>Yelp</li>
                        </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;