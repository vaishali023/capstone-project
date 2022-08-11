import React from "react";
import styles from './PhotoGallery.module.css';

export default function PhotoGallery() {
    return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h1 className={styles.headingGrid}>Photo Gallery</h1>
            <div className={styles.containerimg}>
            <div className={styles.gallery}>
            <div className={styles.imggrid1 } ><img className={styles.galleryimg} src="img/gridimg1.jpg" alt=""/><p className={styles.gridText}>Wadi Musa, Ma'an Governorate, Jordan</p></div>
            <div className={styles.imggrid2}><img className={styles.galleryimg} src="img/gridimg2.jpg" alt=""/><p className={styles.gridText}>Cliffside Village</p></div>
            <div className={styles.imggrid3}><img className={styles.galleryimg} src="img/gridimg3.jpg" alt=""/><p className={styles.gridText}>Breathtaking seascape with amazing coastal village on cliff</p></div>
            <div className={styles.imggrid4} ><img className={styles.galleryimg} src="img/gridimg4.jpg" alt=""/><p className={styles.gridText}> Buildings and Canal during Night time</p></div>
            <div className={styles.imggrid5}><img className={styles.galleryimg} src="img/gridimg5.jpg" alt=""/><p className={styles.gridText}>Riva del Garda, Trentino-Alto Adige, Italy</p></div>
            <div className={styles.imggrid6}><img className={styles.galleryimg} src="img/gridimg6.jpg" alt=""/><p className={styles.gridText}>Bali, Indonesia</p></div>
            </div>
            </div>
          </div>
          <div className={styles.doodle}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660199519/Logo/Artboard_1_zl44ud.png"></img></div>
        </div>
    );
}