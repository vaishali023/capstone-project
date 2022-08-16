import React from "react";
import styles from "./Owners.module.css";

export default function Owners() {
    return (
        <div className={styles.alignImages}>
            <div className={styles.column}><img src="img/Meet.JPG" className={styles.imgsiz}/></div>
            <div className={styles.column}><img src="img/Meet.JPG" className={styles.imgsiz}/></div>
            <div className={styles.column}><img src="img/Meet.JPG" className={styles.imgsiz}/></div>
            <div className={styles.column}><img src="img/Meet.JPG" className={styles.imgsiz}/></div>
            <div className={styles.column}><img src="img/Meet.JPG" className={styles.imgsiz}/></div>
        
        </div>
    )
}