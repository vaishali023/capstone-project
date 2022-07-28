import React from 'react';

import CityCard from './components/CityCard';
import styles from './PopularPlaces.module.css';

export default function PopularPlaces() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Explore popular places</h1>
        <div className={styles.popularPlacesList}>
          <CityCard
            name='Madrid'
            img='https://img.cdn.zostel.com/blog_photo/Kalatop_Wildlife_Sanctuary.jpg'
          />
          <CityCard
            name='Milan'
            img='https://img.cdn.zostel.com/blog_photo/Lonaaa_1.jpg'
          />
          <CityCard
            name='Paris'
            img='https://img.cdn.zostel.com/zostel/gallery/images/AYGyj3isTgCtwXOe8QPzWA/chamera-20220603112550.jpg?h=400'
          />
          <CityCard
            name='Frankfurt'
            img='https://img.cdn.zostel.com/zostel/gallery/images/0h7EG5blRO60ptcETfeOxw/a-trekking-destination-for-adventure-lovers_bpY4sqa.jpg?h=400'
          />
        </div>
      </div>
    </div>
  );
}
