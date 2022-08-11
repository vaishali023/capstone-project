import React from 'react';

import Layout from '../../components/Layout/Layout';
import Hero from '../Home/components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';

export default function AboutView() {
  return (
    <Layout>
       <Hero img="/img/maps.jpg" centerText="Homepage" location="Place"/>
      <AboutSection />
    </Layout>
  );
}
