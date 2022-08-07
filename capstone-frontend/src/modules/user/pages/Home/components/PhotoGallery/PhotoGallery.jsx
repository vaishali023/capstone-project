import React from "react";
import styles from './PhotoGallery.module.css';

export default function PhotoGallery() {
    return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h1>Photo Gallery</h1>
            <div className="gallary">
            <div className="img-grid-1"><img className="gallary_img" src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1659634998/users/bcvvmtzk29hs9a799cor.jpg" alt=""/></div>
            <div className="img-grid-2"><img className="gallary_img" src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1659738892/users/aboutUs_yqhcwz.jpg" alt=""/></div>
            <div className="img-grid-3"><img className="gallary_img" src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1659728173/blogs/o9ytk6ydznxpbrzsjwza.jpg" alt=""/></div>
            </div>
          </div>
        </div>
    );
}