import React from "react";
import styles from './Imagehover.module.css';
import { useState } from "react";



export default function Imagehover(){
    const Default = 'https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660246196/explore/WildlifeExplore_r1yvu2.jpg';
    const[backgroundImg, setBackgroundImg] = useState(Default);


return(
    <div className={styles.wrap}>
             <img src={backgroundImg} className={styles.backgroundimg} />
             <div className={styles.placestext}>
                 <div 
                 onMouseEnter={() => setBackgroundImg('https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660246196/explore/BeachesExplore_x8guwu.jpg')}
                 onMouseLeave={() => setBackgroundImg(Default)}
                 >Place 1</div>
                  <div 
                 onMouseEnter={() => setBackgroundImg('https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660246196/explore/BeachesExplore_x8guwu.jpg')}
                 onMouseLeave={() => setBackgroundImg(Default)}
                 >Place 2</div>
                  <div 
                 onMouseEnter={() => setBackgroundImg('https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660246196/explore/BeachesExplore_x8guwu.jpg')}
                 onMouseLeave={() => setBackgroundImg(Default)}
                 >Place 3</div>
                  <div 
                 onMouseEnter={() => setBackgroundImg('https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660246196/explore/BeachesExplore_x8guwu.jpg')}
                 onMouseLeave={() => setBackgroundImg(Default)}
                 >Place 4</div>
             </div>
        <div className={styles.place2}></div>
    </div>
    );
}