import React from 'react';

import Layout from '../../components/Layout/Layout';
import Hero from '../Home/components/Hero/Hero';
import ExploreList from './components/ExploreList/ExploreList';

export default function ExploreView() {
  return (
    <Layout>
      <Hero img="/img/jumbo.jpg" />
      <ExploreList />
    </Layout>
  );
}
