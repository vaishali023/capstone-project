import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import styles from './BookingSection.module.css';

export default function BookingSection() {
  return (
    <div className={styles.container}>
     <div className={styles.wrapper}>
    <div className={styles.bookingwrapper}>
    <img src='img/girlatPool.jpg' alt='company' />
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
              {` Book with us `}
              <FaQuoteRight />
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              obcaecati suscipit distinctio autem? Animi aliquid doloribus iure
              atque et vero obcaecati! Eum explicabo delectus earum atque
              molestiae ipsam, cupiditate quos.
            </p>
        </div>
        </div>
        <div className={styles.explorewrapper}>
        <div className={styles.aboutText}>
         <h1>1- Where to next?</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              obcaecati suscipit distinctio autem? Animi aliquid doloribus iure
              atque et vero obcaecati! Eum explicabo delectus earum atque
              molestiae ipsam, cupiditate quos.</p>
              <Link to="/explore">
          <button>Explore</button>
        </Link>
{/*              
              <a href="https://google.com" target="_blank" rel="noreferrer">
          <button>Explore</button></a> */}
        </div>
        </div>

        <div className={styles.staywrapper}>
        <div className={styles.aboutText}>
         <h1>2- Hotels</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              obcaecati suscipit distinctio autem? Animi aliquid doloribus iure
              atque et vero obcaecati! Eum explicabo delectus earum atque
              molestiae ipsam, cupiditate quos.</p>
         
              <a href="https://www.booking.com/index.html?aid=1649037" target="_blank" rel="noreferrer">
          <button>Booking</button></a>
        
        </div>
        </div>

        <div className={styles.staywrapper}>
        <div className={styles.aboutText}>
         <h1>3- Accomodation and Activities</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              obcaecati suscipit distinctio autem? Animi aliquid doloribus iure
              atque et vero obcaecati! Eum explicabo delectus earum atque
              molestiae ipsam, cupiditate quos.</p>
         
              <a href="https://www.airbnb.ca/" target="_blank" rel="noreferrer">
          <button>airbnb</button></a>
        
        </div>
        </div>
    </div>
  </div>

  

  );
}