import React from 'react';

import styles from './ExploreList.module.css';

export default function ExploreList() {
  return (
    <div className={styles.container}>
    <div className={styles.explorelogo}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660194854/Logo/exploreuslogo_wej66x.png" alt="Explore Logo"></img></div>

      <div className={styles.wrapper}>
        {/* <h1>Explore</h1> */}
        
        <div className={styles.exploreList}>
          <div className={styles.flexcontainer}>
            <div className={styles.flexchild}>
             <img src='img/img1.jpg' />
            </div>
            <div className={styles.flexsecondchild}>
              <h3>Heading</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            
          </div>
          <div className={styles.flexcontainer}>
            <div className={styles.flexchild}>
              <h3>Heading</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className={styles.flexsecondchild}>
            <img src='img/img2.jpg' />
            </div>
          </div>
          <div className={styles.flexcontainer}>
            <div className={styles.flexchild}>
            <img src='img/img3.jpg' />
            </div>
            <div className={styles.flexsecondchild}>
              <h3>Heading</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            
          </div>
          <div className={styles.flexcontainer}>
            <div className={styles.flexchild}>
              <h3>Heading</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className={styles.flexsecondchild}>
            <img src='img/img4.jpg' />
            </div>
          </div>
          <div className={styles.flexcontainer}>
            <div className={styles.flexchild}>
            <img src='img/img5.jpg' />
            </div>
            <div className={styles.flexsecondchild}>
              <h3>Heading</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            
          </div>
          <div className={styles.flexcontainer}>
            <div className={styles.flexchild}>
              <h3>Heading</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className={styles.flexsecondchild}>
            <img src='img/img6.jpg' />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}