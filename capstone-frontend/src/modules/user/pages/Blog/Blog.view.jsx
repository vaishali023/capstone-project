import React from 'react';

import Layout from '../../components/Layout/Layout';
import Hero from '../Home/components/Hero/Hero';
import BlogList from './components/BlogList/BlogList';

export default function BlogView() {
  return (
    <Layout>
      <Hero img="/img/train.jpg" />
      <BlogList />
    </Layout>
  );
}
