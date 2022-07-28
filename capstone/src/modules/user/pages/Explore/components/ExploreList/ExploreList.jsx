import React from 'react';
import CityCard from '../../../Home/components/PopularPlaces/components/CityCard';

import styles from './ExploreList.module.css';

export default function ExploreList() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Explore</h1>
        <div className={styles.exploreList}>
          <CityCard name='Milan' />
          <CityCard name='Milan' />
          <CityCard name='Milan' />
          <CityCard name='Milan' />
          <CityCard name='Milan' />
          <CityCard name='Milan' />
          <CityCard name='Milan' />
          <CityCard name='Milan' />
        </div>
      </div>
    </div>
  );
}
