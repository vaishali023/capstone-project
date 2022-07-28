import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.aboutWrapper}>
          <img src='https://via.placeholder.com/400x500.png' alt='company' />
          <div className={styles.aboutText}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              obcaecati suscipit distinctio autem? Animi aliquid doloribus iure
              atque et vero obcaecati! Eum explicabo delectus earum atque
              molestiae ipsam, cupiditate quos. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium sapiente voluptatem a
              quae quidem officia nobis id tempore quaerat ex, nesciunt amet
              consequuntur obcaecati totam. Dolorum officia natus veritatis
              assumenda.
            </p>
            <h1>
              <FaQuoteLeft />
              {` Collect Moments Not Things `}
              <FaQuoteRight />
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              obcaecati suscipit distinctio autem? Animi aliquid doloribus iure
              atque et vero obcaecati! Eum explicabo delectus earum atque
              molestiae ipsam, cupiditate quos. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium sapiente voluptatem a
              quae quidem officia nobis id tempore quaerat ex, nesciunt amet
              consequuntur obcaecati totam. Dolorum officia natus veritatis
              assumenda.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              obcaecati suscipit distinctio autem? Animi aliquid doloribus iure
              atque et vero obcaecati! Eum explicabo delectus earum atque
              molestiae ipsam, cupiditate quos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
