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
            Experiences are the essence of life. 
            Traveling is a special experience because it allows you to disconnect from the stresses of everyday life. 
            It enables us to put our domestic issues, irritations, and anxieties behind us.
             We have many life experiences along the road. We delve into new locales, communities, gastronomies, customs, and modes of living. 
             These are experiences we could never have at home. 
            Travel is a special and priceless life experience because of this. So, Explore the World with us. Make beautiful memories, click pictures and enjoy your time to the fullest.
            </p>
            <h1>
              <FaQuoteLeft />
              {` Book with us `}
              <FaQuoteRight />
            </h1>
            <p>
            This page is both a checklist of things you need to book and a resource of our favourite travel providers.
            </p>
        </div>
        </div>
        <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1 className='cardsHeadings'>1- Where to next?</h1>
         <p>One of the most thrilling parts of travelling is figuring out where you're heading next. 
         What kind of novel experiences are you seeking? Something outside and sporty, or something to push your comfort zones? 
         Maybe you're seeking memorable cultural encounters?
        Start with our explore page for some inspiration.
         Here, we compile all of our articles according to the kind of travel experience you might be seeking, such as hiking vacations, traditional road trips, city breaks, or wilderness experiences focused on wildlife. 
       </p>
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
         <h1 >3- Accomodation</h1>
         <p> Airbnb, a service that lets property owners rent out their spaces to travelers looking for a place to stay.Here, you may discover unique homes, beach houses, holiday rentals, and experiences all over the world.</p>
         
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