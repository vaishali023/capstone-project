import React from 'react';

import styles from './Hero.module.css';

const DEFAULT_IMG = "https://anywhereweroam.com/wp-content/uploads/2022/02/anywhere_we_roam_road.jpg"

export default function Hero({img=DEFAULT_IMG,centerText,location}) {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.pageHero}>
        <img src={img} alt="hero-img" />
        <p className={styles.centertext}>{centerText}</p>
        <p className={styles.locationtext}>{location}</p>
      </div>
    </div>
  );
}