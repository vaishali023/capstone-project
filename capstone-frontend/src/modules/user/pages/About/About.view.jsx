import React from 'react';

import Layout from '../../components/Layout/Layout';
import Hero from '../Home/components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';

export default function AboutView() {
  return (
    <Layout>
       <Hero img="/img/aboutTravel.jpg" centerText="Our Passion For Travel Is The Foundation Of Vagary." subheading="Our Travel Guides Take You To Our Favourite Off-the-beaten-path Hidden Gems." location="About Us Page "/>
      <AboutSection />
    </Layout>
  );
}
