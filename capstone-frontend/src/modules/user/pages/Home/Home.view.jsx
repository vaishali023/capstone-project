import React from 'react';

import Layout from '../../components/Layout/Layout';
import EWV from './components/EWV/EWV';
import Hero from './components/Hero/Hero';
import LatestBlog from './components/LatestBlog/LatestBlog';
import PopularPlaces from './components/PopularPlaces/PopularPlaces';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';

export default function HomePageView() {
  return (
    <Layout>
      <Hero img="/img/heroImage.jpg" />
      <EWV />
      <PopularPlaces />
      <LatestBlog />
      <PhotoGallery />
    </Layout>
  );
}
