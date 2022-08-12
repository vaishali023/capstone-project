import React from 'react';

import Layout from '../../components/Layout/Layout';
import Hero from '../Home/components/Hero/Hero';
import BookingSection from './components/BookingSection';

export default function BookingView() {
  return (
    <Layout>
      <Hero img="/img/hotelbooking.jpg" centerText="Book your next Travel with us" location="Costa Rica, Alajuela"/>
      <BookingSection />
    </Layout>
  );
}
