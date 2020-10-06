import React from 'react';
import Navbar from '../Navbar/Navbar';
import SeeMorePart from '../SeeMorePart/SeeMorePart';
import styles from './PageTop.module.css';

const PageTop = (props) => {
    return (
        <div id="home" className={styles.PageTopWrapper}>
            <Navbar /> 
            <div className={styles.SeeMorePartDiv}>
                <SeeMorePart color="white" text="Scroll down to see more" />
            </div>
        </div>
    );
}

export default PageTop;