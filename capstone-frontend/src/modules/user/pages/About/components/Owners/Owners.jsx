import React from "react";
import styles from "./Owners.module.css";

export default function Owners() {
    return (
        <div className={styles.container}>
        <div> <h2 className={styles.adminTravel}>About Us</h2></div>
        <div className={styles.alignImages}>
            <div className={styles.column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660681099/users/meetTravel_irpag2.jpg" className={styles.imgsiz}/></div>
            <div className={styles.column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660681098/users/navjotTravel_x4ugb4.jpg" className={styles.imgsiz}/></div>
            <div className={styles.column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660682976/users/Vaishali-Travel_f26rwt.jpg" className={styles.imgsiz}/></div>
        </div>
        <div className={styles.alignImages2}>
            <div className={styles.column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660682484/users/Brinda-Travel_mluidp.jpg" className={styles.imgsiz}/></div>
            <div className={styles.column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660683418/users/yashwanthTravel_bo0jkt.jpg" className={styles.imgsiz}/></div>
        </div>
        </div>
    )
}