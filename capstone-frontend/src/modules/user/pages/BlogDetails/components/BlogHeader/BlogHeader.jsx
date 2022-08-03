import React from 'react';

import styles from './BlogHeader.module.css';

export default function BlogHeader() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.pageHero}>
        <img
          src='https://anywhereweroam.com/wp-content/uploads/2022/02/anywhere_we_roam_road.jpg'
          alt='blog-header-bg'
        />
        <div className={styles.blogMetaContainer}>
          <h1>This is a blog title and sometimes its really long</h1>
          <h2>Frankfurt</h2>
        </div>
      </div>
    </div>
  );
}
