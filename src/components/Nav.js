import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.svg';
import styles from '../.module.css';

function Nav() {
    return(
        <>
            <nav className={styles.MainNav}>
                <Link to="/home"><img className={styles.NavLogo} src={Logo} alt='Little Lemon Logo' /></Link>
                <ul className={styles.NavLinks}>
                    <Link to='/home'><li>HOME</li></Link>
                    <Link to='/home'><li>ABOUT</li></Link>
                    <Link to='/home'><li>MENU</li></Link>
                    <Link to='/bookingpage'><li>RESERVATIONS</li></Link>
                    <Link to='/home'><li>ORDER ONLINE</li></Link>
                    <Link to='/home'><li>LOGIN</li></Link>
                </ul>
            </nav>
        </>
    );
}

export default Nav;