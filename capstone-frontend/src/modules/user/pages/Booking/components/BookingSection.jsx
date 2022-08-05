import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
        <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1 className='cardsHeadings'>1- Where to next?</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              obcaecati suscipit distinctio autem? Animi aliquid doloribus iure
              atque et vero obcaecati! Eum explicabo delectus earum atque
              molestiae ipsam, cupiditate quos.</p>
              <Link to="/explore">
          <button>Explore</button>
        </Link>
        </div>
        </div>

        <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1>2- Hotels</h1>
         <p>View our selection of featured hotels anywhere.
           Use the filters to see hotels in a specific area , select a specific theme, brand, or hotel class from basic (1 Star) 
           to luxury hotels (5 Stars).
           Enter your travel dates to view the best deals on hotels in specific area - while they last.</p>
         
              <a href="https://www.booking.com/index.html?aid=1649037" target="_blank" rel="noreferrer">
          <button>Booking</button></a>
        </div>
        </div>

        <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1 >3- Accomodation and Activities</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              obcaecati suscipit distinctio autem? Animi aliquid doloribus iure
              atque et vero obcaecati! Eum explicabo delectus earum atque
              molestiae ipsam, cupiditate quos.</p>
         
              <a href="https://www.airbnb.ca/" target="_blank" rel="noreferrer">
          <button>airbnb</button></a>
        </div>
        </div>
        
        <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1>4- Book your Flights</h1>
         <p>We pledge to help you find cheap flights that won't bust your budget.
           that's why we provide you with a vast selection of affordable plane tickets, including roundtrip and one-way reservations,
           to ensure your travel plans remain within your budget. Take advantage of our lowest rates on airfare and have 
           leftover money to spare on sightseeing.
           We offer a wealth of airlines, airports, and arrival times, making it easy for you to book your trip.</p>
         
              <a href="https://www.google.com/travel/flights" target="_blank" rel="noreferrer">
          <button>Flights</button></a>
        </div>
        </div>

        <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1>5- Car Rentals</h1>
         <p>Vagary makes it easy for you to book your next car rental. We work with the best car rental companies in Canada, bringing you discount car rental rates and a wide variety of car rental classes including economy, compact, midsize, full-size, convertible, van, luxury, full size and SUV rentals. Our partner car rental companies in Canada offer different pick-up and drop-off options. If you are ready to book your car rental, follow the links on this page to view more information and details on your next short or long term car rental.</p>
         
              <a href="https://turo.com/" target="_blank" rel="noreferrer">
          <button>Book your Car</button></a>
        </div>
        </div>

        <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1>6- Activities</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              obcaecati suscipit distinctio autem? Animi aliquid doloribus iure
              atque et vero obcaecati! Eum explicabo delectus earum atque
              molestiae ipsam, cupiditate quos.</p>
         
              <a href="https://www.getyourguide.com/" target="_blank" rel="noreferrer">
          <button>Activities</button></a>
        </div>
        </div>
    </div>
  </div>

  

  );
}