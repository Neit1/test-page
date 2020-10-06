import React from 'react';
import Navbar from '../Navbar/Navbar';
import SeeMorePart from '../SeeMorePart/SeeMorePart';
import styles from './PageBottom.module.css';

const PageBottom = (props) => {
    return (
        <div className={styles.PageBottomWrapper}>
            <div className={styles.navbarDiv}>
                <Navbar color="rgba(248, 248, 248, 1)" />
            </div>
            <div id="about" className={styles.aboutMeWrapper}>
                <div className={styles.aboutMeImage}></div>
                <div className={styles.aboutMeText}>
                    <h1 className={styles.aboutMeTextTitle}>About me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lectus dapibus, molestie felis vel, pretium nulla. Nulla eget ex purus. Phasellus augue velit, rutrum ac elit eget, bibendum lobortis metus. Nam scelerisque tristique diam. Pellentesque commodo felis non elementum ornare. Fusce velit libero, commodo non odio sit amet, commodo pretium nisl. Cras elementum libero nec quam molestie sollicitudin.
                    </p>
                    <p>
                        Aliquam convallis pellentesque porttitor. Donec aliquet in turpis quis eleifend. Nulla facilisi. 
                    </p>
                    <h2 className={styles.aboutMeTextFullName}>Jason Wood</h2>
                </div>
            </div>
            <div className={styles.SeeMorePartDiv}>
                <SeeMorePart color="rgba(248, 248, 248, 1)" text="Keep scrolling, there is still more to come." />
            </div>
        </div>
    );
}

export default PageBottom;