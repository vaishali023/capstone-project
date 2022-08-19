import React from 'react';

import styles from './Hero.module.css';

const DEFAULT_IMG = "https://anywhereweroam.com/wp-content/uploads/2022/02/anywhere_we_roam_road.jpg"

export default function Hero({img=DEFAULT_IMG,centerText,subheading,location}) {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.pageHero}>
        <img src={img} alt="hero-img" />
        <div className={styles.centertext}>
        <h1 className={styles.headingtext}>{centerText}</h1>
        <h2 className={styles.subheading}>{subheading} </h2>
        </div>
        <p className={styles.locationtext}>{location}</p>
      </div>
    </div>
  );
}
