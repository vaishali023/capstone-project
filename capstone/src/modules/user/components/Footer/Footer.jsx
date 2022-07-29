import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.brand}>
          <div className={styles.logo}>LOGO</div>
          <div className={styles.brandDescription}>
            The website ends here, but your journey to the remotest destinations
            in India and Nepal begins now. Explore with our social
            hostels, homestays, and luxury stays on your next holiday.
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.socialTitle}>social</div>
          <div className={styles.social}>
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <FaFacebookF />
          </div>
          <div className={styles.copyRights}>
            EWU © 2022.
            <br /> All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
