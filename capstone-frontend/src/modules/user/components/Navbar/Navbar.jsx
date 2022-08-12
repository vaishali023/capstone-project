import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineSearch,
} from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

import styles from './Navbar.module.css';

export default function Navbar() {
  const [active, setActive] = React.useState(false);
  const innerHeight = window.innerHeight - 74;

  React.useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);

  function changeNavbarColor() {
    if (window.scrollY >= innerHeight) {
      setActive(true);
    } else {
      setActive(false);
    }
  }
  
  return (
    <div
      className={
        active ? classnames(styles.container, styles.active) : styles.container
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.logo}><Link to='/'><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1659734964/Logo/logowhite_yczmpk.png" /></Link></div>
        <div className={styles.menuContainer}>
          <div className={styles.hamburgermenu}>
          <input id="menutoggle" type="checkbox" />
    <label className={styles.menubtn} htmlFor="menutoggle">
    <div className={styles.topbun}></div>
  <div className={styles.meat}></div>
  <div className={styles.bottombun}></div>
    </label>
          <ul className={styles.menu}>
            <li className={styles.menuitem}>
              <Link to='/explore'>explore</Link>
            </li>
            <li className={styles.menuitem}>
              <Link to='/blog'>blog</Link>
            </li>
            <li className={styles.menuitem}>
              <Link to='/about'>about</Link>
            </li>
            <li className={styles.menuitem}>
              <Link to='/booking'>booking</Link>
            </li>
          </ul>
          </div>
        </div>
        <div className={styles.social}>
        <a href="https://www.instagram.com/"><AiOutlineInstagram /></a>
          <a href="https://twitter.com/home"><AiOutlineTwitter /></a>
          <a href="https://www.facebook.com/"><FaFacebookF /></a>
          <Search />
        </div>
      </div>
    </div>
  );
}