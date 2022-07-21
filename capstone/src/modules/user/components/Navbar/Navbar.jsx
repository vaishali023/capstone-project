import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineSearch,
} from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.menuContainer}>
        <ul className={styles.menu}>
          <li>explore</li>
          <li>blog</li>
          <li>about</li>
          <li>book</li>
        </ul>
      </div>
      <div className={styles.social}>
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <FaFacebookF />
        <AiOutlineSearch />
      </div>
    </div>
  );
}
