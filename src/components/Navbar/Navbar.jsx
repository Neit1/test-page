import React from 'react';
import styles from './Navbar.module.css';

let menuClick = () => {
    document.getElementById("myDropdown").classList.toggle(styles.show);
}

const Navbar = (props) => {
    return (
        <div>
            <div className={styles.NavbarWrapper} style={props.color ? { color: `${props.color}`, borderBottomColor: `${props.color}` } : null}>
                <a className={styles.navLink} href="#home">Home</a>
                <a className={styles.navLink} href="#about">About me</a>
                <a className={styles.navLink} href="#portfolio">Portfolio</a>
                <a className={styles.navLink} href="#contact">Contact</a>
            </div>
            <div className={styles.dropdown}>
                <button onClick={menuClick} className={styles.dropbtn}>&infin; Menu</button>
                <div id="myDropdown" className={styles.dropdownContent}>
                    <a href="#home">Home</a>
                    <a href="#about">About me</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;