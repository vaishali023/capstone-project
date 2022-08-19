import React from 'react';

import Layout from '../../components/Layout/Layout';
import Hero from '../Home/components/Hero/Hero';
import BookingSection from './components/BookingSection';

export default function BookingView() {
  return (
    <Layout>
    <Hero img="/img/hotelbooking.jpg" centerText="Book Your Next Experience With Us" location="Costa Rica, Alajuela"/>
      <BookingSection />
    </Layout>
  );
}
