import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineSearch,
} from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

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
        <div className={styles.logo}>VAGARY</div>
        <div className={styles.menuContainer}>
          <ul className={styles.menu}>
            <li>
              <Link to='/explore'>explore</Link>
            </li>
            <li>
              <Link to='/blog'>blog</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
            <li>
              <Link to='/booking'>booking</Link>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <FaFacebookF />
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
}
