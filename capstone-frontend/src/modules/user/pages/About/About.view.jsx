import React from 'react';

import Layout from '../../components/Layout/Layout';
import Hero from '../Home/components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';

export default function AboutView() {
  return (
    <Layout>
       <Hero img="/img/aboutTravel.jpg" centerText="We Are A Worker-owned Travel Company Backed By Our Character, Dependability, And Dedication To Serving Our Customers." location="About Us Page "/>
      <AboutSection />
    </Layout>
  );
}
