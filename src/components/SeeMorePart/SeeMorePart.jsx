import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './SeeMorePart.module.css';

const SeeMorePart = (props) => {
    return (
        <div className={styles.SeeMorePartWrapper} style={props.color ? {color: `${props.color}`} : null}>
            <p className={styles.SeeMoreText}>{props.text}</p>
            <div className={styles.doubleArrow} style={props.color ? {borderColor: `${props.color}`} : null}>
                <div className={styles.arrow1}></div>
                <div className={styles.arrow2}></div>
            </div>
        </div>
    );
}

export default SeeMorePart;