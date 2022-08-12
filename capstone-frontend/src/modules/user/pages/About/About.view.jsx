import React from 'react';

import Layout from '../../components/Layout/Layout';
import Hero from '../Home/components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';

export default function AboutView() {
  return (
    <Layout>
       <Hero img="/img/maps.jpg" centerText="We are a worker-owned travel company backed by our character, dependability, and dedication to serving our customers." location="About Us Page "/>
      <AboutSection />
    </Layout>
  );
}
