import React from 'react';

import Layout from '../../components/Layout/Layout';
import EWV from './components/EWV/EWV';
import Hero from './components/Hero/Hero';
import LatestBlog from './components/LatestBlog/LatestBlog';
import PopularPlaces from './components/PopularPlaces/PopularPlaces';

export default function HomePageView() {
  return (
    <Layout>
      <Hero img="/img/sunset.jpg" />
      <EWV />
      <PopularPlaces />
      <LatestBlog />
    </Layout>
  );
}
